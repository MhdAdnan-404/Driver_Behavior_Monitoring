import * as net from "net";
import * as fs from "fs";
const {
  ProtocolParser,
  parseIMEI,
  Data,
  GPRS,
} = require("complete-teltonika-parser");

const PORT = 8080;
const HOST = "localhost";

const server = net.createServer((socket) => {
  interface ExtractedDataItem {
    eventId: number;
    longitude: number;
    latitude: number;
    altitude: number;
    angle: number;
    speed: number;
    Ignition?: number;
  }
  type ExtractedDataType = {
    [eventId: string]: any[]; 
  };

  const extractedData: ExtractedDataType = {
    "239": [],
    "250": [],
    "255": [],
    "2531": [],
    "2532": [],
    "0": [],
    "9": [],
  };
  console.log("Client connected");

  socket.on("data", (data) => {
    const message = data.toString().trim();
    if (message === "get-data") {
      fs.readFile("extractedData.json", (err, fileData) => {
        if (err) {
          socket.write(JSON.stringify({ error: "Internal Server Error" }));
        } else {
          const jsonData = JSON.parse(fileData.toString());
          socket.write(JSON.stringify(jsonData));
        }
      });
    } else {
      console.log(data);
      const bufferData: Buffer = data;
      console.log("bufferData", bufferData);

      const hexString: string = bufferData.toString("hex");
      if (hexString.length === 34) {
        socket.write(Buffer.from("01", "hex"));
      } else {
        let parsed = new ProtocolParser(hexString);
        console.log("Parsed", parsed);
        console.log("------------------------------------");
        console.log("Quantity", parsed.Quantity1);
        const numberofData = parsed.Quantity1;
        const buffer = Buffer.alloc(4);
        buffer.writeInt32BE(numberofData);
        socket.write(buffer);
        console.log("------------------------------------");
        console.log("Parsed Content AVL_Data", parsed.Content.AVL_Datas);
        console.log("------------------------------------");
        const avl_data = parsed.Content.AVL_Datas;

        avl_data.map((avl_data: any) => {
          const eventId = avl_data.IOelement.EventID;

          // Check if the EventID is the one you're interested in
          if (eventId === 239) {
            // Extract the relevant data and store it in an object
            const extractedItem = {
              eventId: eventId,
              timestamp: avl_data.Timestamp,
              longitude: avl_data.GPSelement.Longitude,
              latitude: avl_data.GPSelement.Latitude,
              altitude: avl_data.GPSelement.Altitude,
              angle: avl_data.GPSelement.Angle,
              value: avl_data.GPSelement.Speed,
              Ignition: avl_data.IOelement.Elements["239"],
            };

            extractedData[eventId].unshift(extractedItem);
          } else if (eventId === 250) {
            
            const extractedItem = {
              eventId: eventId,
              timestamp: avl_data.Timestamp,
              longitude: avl_data.GPSelement.Longitude,
              latitude: avl_data.GPSelement.Latitude,
              altitude: avl_data.GPSelement.Altitude,
              angle: avl_data.GPSelement.Angle,
              value: avl_data.GPSelement.Speed,
              trip: avl_data.IOelement.Elements["250"],
            };

            
            extractedData[eventId].unshift(extractedItem);
          } else if (eventId === 255) {
            const extractedItem = {
              eventId: eventId,
              timestamp: avl_data.Timestamp,
              longitude: avl_data.GPSelement.Longitude,
              latitude: avl_data.GPSelement.Latitude,
              altitude: avl_data.GPSelement.Altitude,
              angle: avl_data.GPSelement.Angle,
              value: avl_data.GPSelement.Speed,
              OverSpeed: avl_data.IOelement.Elements["255"],
            };

            
            extractedData[eventId].unshift(extractedItem);
          } else if (eventId === 0) {
            const extractedItem = {
              eventId: eventId,
              timestamp: avl_data.Timestamp,
              longitude: avl_data.GPSelement.Longitude,
              latitude: avl_data.GPSelement.Latitude,
              altitude: avl_data.GPSelement.Altitude,
              angle: avl_data.GPSelement.Angle,
              value: avl_data.GPSelement.Speed,
              Movment: avl_data.IOelement.Elements["240"],
            };
            extractedData[eventId].unshift(extractedItem);
          } else if (
            eventId === 253 ||
            avl_data.IOelement.Elements["253"] === 2
          ) {
            const extractedItem = {
              eventId: eventId,
              timestamp: avl_data.Timestamp,
              longitude: avl_data.GPSelement.Longitude,
              latitude: avl_data.GPSelement.Latitude,
              altitude: avl_data.GPSelement.Altitude,
              angle: avl_data.GPSelement.Angle,
              speed: avl_data.GPSelement.Speed,
              Aggresive: avl_data.IOelement.Elements["253"],
              value: avl_data.IOelement.Elements["243"],
            };
            extractedData[2532].unshift(extractedItem);
          } else if (
            eventId === 253 ||
            avl_data.IOelement.Elements["253"] === 1
          ) {
            const extractedItem = {
              eventId: eventId,
              timestamp: avl_data.Timestamp,
              longitude: avl_data.GPSelement.Longitude,
              latitude: avl_data.GPSelement.Latitude,
              altitude: avl_data.GPSelement.Altitude,
              angle: avl_data.GPSelement.Angle,
              speed: avl_data.GPSelement.Speed,
              Aggresive: avl_data.IOelement.Elements["253"],
              value: avl_data.IOelement.Elements["243"],
            };
            extractedData[2531].unshift(extractedItem);
          } else {
            const extractedItem = {
              eventId: eventId,
              timestamp: avl_data.Timestamp,
              longitude: avl_data.GPSelement.Longitude,
              latitude: avl_data.GPSelement.Latitude,
              altitude: avl_data.GPSelement.Altitude,
              angle: avl_data.GPSelement.Angle,
              value: avl_data.GPSelement.Speed,
              Movment: avl_data.IOelement.Elements,
            };
            extractedData["9"].unshift(extractedItem);
          }
          const fileExists = fs.existsSync("extractedData.json");
          if (!fileExists) {
            fs.writeFileSync("extractedData.json", JSON.stringify({}));
          } else {
            fs.readFile("extractedData.json", (err, fileData) => {
              if (err) {
                console.error("Error reading extracted data from file:", err);
              } else {
                // Parse the existing data into a JavaScript object
                const existingData = JSON.parse(fileData.toString());

                // Update the appropriate array with the new data
                existingData[eventId] = extractedData[eventId];

                // Write the updated data back to the file
                fs.writeFile(
                  "extractedData.json",
                  JSON.stringify(existingData),
                  (err) => {
                    if (err) {
                      console.error("Error saving extracted data:", err);
                    } else {
                      console.log("Extracted data saved to file");
                    }
                  }
                );
              }
            });
          }
        });
      }
    }
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Server listening on port ${PORT}  and host ${HOST}`);
});

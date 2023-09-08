## Project
<br />

<div align="center">
  <h2 align="center">Driver Behavior Monitoring System</h2>

  <p align="center">
    A system the monitors the behavior of the driver, the location of the car, the system enables customization for some thresholds, when broken, an alert will be sent out. 
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>
        
## About The Project


<p align="center">
  
  <img src="https://github.com/404dn/Driver_Behavior_Monitoring./blob/main/Photos/2.png" alt="drawing" width="305"/>
  <img src="https://github.com/404dn/Driver_Behavior_Monitoring./assets/109319994/1945bf47-146e-4728-adb1-b531798fdc8c" alt="drawing" width="300"/>
</p>



<h4>
  <p>
    The Backbone of the system is FMC 130 Teltonika device, this device was made to read data from vehicles as well as send specific GPS coordinates of the car, the device can be connected to the car and provide information about the car and some sensors in the car, in addition, the device has GPS and an accelerometer, which enables real time location as well as G-Force measurements, This is utilized in the system for measuring Aggressive acceleration as well as Aggressive braking , The idea for the system is to be put in industries that require fleet management in order to minmize alot of the running costs, The system works by utalizing a server that is running on google cloud service that relays all of the information that is sent from the device to the application.  
  </p>
</h4>


<p align="right">(<a href="#Project">back to top</a>)</p>


## Built With

<p align="center"> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="70" height="70"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="70" height="70"/> </a> </p>

<h2 align="left"> The Software </h2>
<p><Strong>The server side</Strong>, I had the option of using python as I already Knew the language and had built similar tcp servers with it, but because there might be alot of messages that are going to be sent to the server in a short duration, I wanted a fast languge to avoid data loss, so i choose type script, and saw this as a good opportunity to learn the langauge.</p>

<p><Strong>The front end</Strong>, Previously i had used SWFIT which is IOS native langauge, but i wanted to learn something new, so i settled for Reacte Native, the advanatge of using Reacte native is the that its widely supported and there is alot of libraries that make it very easy to develop and application quickly, as well as it uses HTML for the UI elements and CSS for styling the elements which makes it infinitely easier, more over Reacte native when complied gives two files, one is for IOS and the other is for ANDRIOD so it saves alot of time if developing for both platforms.</p>

<h2 align="left"> The Hardware </h2>

<p align="center">
<img src="https://github.com/404dn/Driver_Behavior_Monitoring./blob/main/Photos/Screenshot%202023-07-03%20033036.png" alt="drawing" width="200"/>
</p>

<p>The system relies on TelTonika Device, FMC 130, This device is specifically made for this task, its built for monitoring all kinds of data and input from the vehicle, the device allows the user to preset some thersholds and parameters that determines when dose the device alert and under what conditions, as well as it sends location and speed based on a preset interval, the deivce can be connected to the nemours systems that are in the car and can display all sorts of data, the device comes with its own software for ease of programmability and deployment.</p>



<p align="right">(<a href="#Project">back to top</a>)</p>


## Features
<h3 align="left"> Speed </h3>
  <p align="center">
    <img src="https://github.com/404dn/Driver_Behavior_Monitoring./assets/109319994/f9124275-bd3f-4d3e-965c-29503511e22e" alt="drawing" width="250"/>
    <img src="https://github.com/404dn/Driver_Behavior_Monitoring./assets/109319994/5114996d-bad0-47db-8336-d968d6aa3a82" alt="drawing" width="250"/>
  <p>
 
</div>
  <p>Determined by the intervals that are <Strong>preset</Strong> on the Teltonika device, a Message is sent to the application containing the speed and the locaion of the car at the pre-determined interval</p>

  <p>The graph shows the speed of the car over the time of the trip, as well as when <Strong>hovring</Strong> over any point, it will show the time and the speed at that point in the graph </p>

  <p>Additionally when clicking on the points on the map, it will show the time at which that speed was recorded</p>

-----------

  <h3 align="left"> Speeding</h3>
  <p align="center">
    <img src="https://github.com/404dn/Driver_Behavior_Monitoring./assets/109319994/378c16b3-318d-43aa-b35f-2a3f47d1830e" alt="drawing" width="265"/>
    <img src="https://github.com/404dn/Driver_Behavior_Monitoring./assets/109319994/cc166e5f-1560-4317-a776-d425399ab9b0" alt="drawing" width="250"/>
  <p>

</div>
  <p>Another feature is Detecting Speeding, Determined by the preset Parameters on the Device, if the car exceeds the speed that is set, This will trigger a message to be send to the application through the server, the message will incluce the speed and the location of the car at that time </p>

  <p> The graph shows all of the times the determined speed was broken in the form of a graph, hovering over the graph will show that value of that point as well as the time at which that speed was recored</p>

  <p>Additionally when clicking on the points on the map, it will show the time at which that speed was recorded</p>

-----------

  <h3 align="left"> Aggressive Acceleration</h3>
  <p align="center">
    <img src="https://github.com/404dn/Driver_Behavior_Monitoring./assets/109319994/d29be5f3-7fff-4e2e-8ef5-9da8c4171767" alt="drawing" width="265"/>
    <img src="https://github.com/404dn/Driver_Behavior_Monitoring./assets/109319994/696a0c1d-ddee-4c11-9ef2-b923d69ed34e" alt="drawing" width="265"/>
  <p>



</div>
  <p>One of the main featuers that has a significant impact on the score of the driver is Aggressive Acceleration, The device allows two types of ways to measure Aggressive Acceleration, Either through G-Force, or through the speed Acceleration of the car </p>

  <p> The method that was chosen was the G-Force Acceleration, Like the speeding, The app shows all of the instances that the preset thershold was broken, and it showes it in a graph, and the user can hover over and drag over the graph and this shows the value of the Acceleration as well as the time, Additionally the instance as also shown on the map  </p>

  <p>Additionally when clicking on the points on the map, it will show the time at which that threshold was broken</p>


  <p align="right">(<a href="#Project">back to top</a>)</p>

  -----------


  <h3 align="left"> Aggressive Braking</h3>
  <p align="center">
    <img src="https://github.com/404dn/Driver_Behavior_Monitoring./assets/109319994/ee0ba374-1259-47ae-9ec2-20f7d69506d6" alt="drawing" width="265"/>
    <img src="https://github.com/404dn/Driver_Behavior_Monitoring./assets/109319994/76b3b85c-da2b-466b-a8dc-6a332deb5c0e" alt="drawing" width="265"/>
  <p>

</div>
  <p>Another Measure Featuer of the system is detecting any aggresive braking, A threshold that is preset on device as well as the accelerometer, a trigger will be sent to the server when the threshold is broken, Similarly all of the instances are displayed in graph form as well as on the map</p>

  <p> The graph shows all of the times when a trigger was sent to the server from the device, hovering over the graph shows the specific value as well as the time at which that value was recored  </p>

  <p>Additionally when clicking on the points on the map, it will show the time at which that value was recorded</p>


  <p align="right">(<a href="#Project">back to top</a>)</p>



## License

See `LICENSE.md` for more information.

<p align="right">(<a href="#Project">back to top</a>)</p>





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
  <img src="https://github.com/404dn/Driver_Behavior_Monitoring./assets/109319994/d5d8ccde-25ad-496e-87cf-c41b3becc854" alt="drawing" width="300"/>
  <img src="https://github.com/404dn/Driver_Behavior_Monitoring./assets/109319994/1945bf47-146e-4728-adb1-b531798fdc8c" alt="drawing" width="300"/>
</p>



<h4>
  <p>
    The system
  </p>
</h4>


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Built With

<p align="center"> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="70" height="70"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="70" height="70"/> </a> </p>

<h2 align="left"> The Software </h2>
<p><Strong>The server side</Strong>, I had the option of using python as I already Knew the language and had built similar tcp servers with it, but because there might be alot of messages that are going to be sent to the server in a short duration, I wanted a fast languge to avoid data loss, so i choose type script, and saw this as a good opportunity to learn the langauge.</p>

<p><Strong>The front end</Strong>, Previously i had used SWFIT which is IOS native langauge, but i wanted to learn something new, so i settled for Reacte Native, the advanatge of using Reacte native is the that its widely supported and there is alot of libraries that make it very easy to develop and application quickly, as well as it uses HTML for the UI elements and CSS for styling the elements which makes it infinitely easier, more over Reacte native when complied gives two files, one is for IOS and the other is for ANDRIOD so it saves alot of time if developing for both platforms.</p>

<h2 align="left"> The Hardware </h2>
<p>The system relies on TelTonika Device, FMC 130, This device is specifically made for this task, its built for monitoring all kinds of data and input from the vehicle, the device allows the user to preset some thersholds and parameters that determines when dose the device alert and under what conditions, as well as it sends location and speed based on a preset interval, the deivce can be connected to the nemours systems that are in the car and can display all sorts of data, the device comes with its own software for ease of programmability and deployment.</p>




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
    <img src="https://github.com/404dn/Driver_Behavior_Monitoring./assets/109319994/cc166e5f-1560-4317-a776-d425399ab9b0" alt="drawing" width="250"/>
    <img src="https://github.com/404dn/Driver_Behavior_Monitoring./assets/109319994/378c16b3-318d-43aa-b35f-2a3f47d1830e" alt="drawing" width="340"/>
  <p>
 ![66](https://github.com/404dn/Driver_Behavior_Monitoring./assets/109319994/cc166e5f-1560-4317-a776-d425399ab9b0)

</div>
  <p>Determined by the intervals that are <Strong>preset</Strong> on the Teltonika device, a Message is sent to the application containing the speed and the locaion of the car at the pre-determined interval</p>

  <p>The graph shows the speed of the car over the time of the trip, as well as when <Strong>hovring</Strong> over any point, it will show the time and the speed at that point in the graph </p>

  <p>Additionally when clicking on the points on the map, it will show the time at which that speed was recorded</p>


## License

See `LICENSE.md` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

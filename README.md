# Nashville Kennels

This is your goal for the first three months of your time at Nashville Software School. The code in the project uses the concepts and design patterns that you will be learning, and puts them together to build an application for the employees of Nashville Kennels to use to manage the animals they service.

## Installation

1. Make sure you have [Node.js](https://nodejs.org) installed on your machine.
1. Once Node is installed, you need to install the open source library [json-server](https://www.npmjs.com/package/json-server) installed globally on your machine.
1. Open two terminal windows.
1. In the first terminal window, install the open source library `http-server` with the following command.
    ```
    sudo npm i -g http-server@0.8.5
    ```
1. In the first terminal window, `cd ~/workspace` and then clone this repository.
1. Then run the following commands to start the API server.
    ```
    cd vanilla-component-goal
    cd api
    json-server -w animals.json -p 8000
    ```
1. In the second terminal window, `cd ~/workspace/vanilla-component-goal`.
1. Then run the HTTP server program you installed by typing in `http-server`.

## Viewing the Application

Now open Chrome and put http://localhost:8080 in the address bar and hit enter.


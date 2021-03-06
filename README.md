# DSC FrontEnd 

The frontend is developed in Angular 2(https://angular.io/). 

## Prerequisites

It needs Node 4 or above and Npm 3 or above to work (the latest the version the better it is). 
Node will include npm, but if the version of node is old, it is better to confirm its version with the command `npm --version`.

## Run the Frontend

1. Open a command line.
2. Go to the project where you cloned the frontend.
3. Execute `npm install`. It will install the modules defined in the file `package.json`.
4. Open the file __{project_folder}/app/config.ts__ and make sure the direction in the `getEndpoint()` function is pointing to where your backend is.
4. Execute `npm start`. It will start the frontend, and it will pop up a tab/window in the browser with the recently started frontend.

> **Note:** If inside Docker, you must enable the port in which the frontend will run (3000 for default).

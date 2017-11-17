# AngularTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2.

## Install

`npm install`

## Development server

To serve dev project run this command `$ ng serve --proxy-config proxy.conf.json`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build. 

## JSON Server

To run JSON server run this command in project folder: `$ json-server --watch "src/assets/users.json"`. Endpoints are created automatically by JSON server. For example: 
```PUT    /employees/{id}```

## Run Jasmine tests

To run Jasmine tests use the following command: `npm test`. Tests specification is include in `1st.spec.ts` file in app root folder. 

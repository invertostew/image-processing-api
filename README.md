# Image Processing API

## Description
The purpose of this project was to get some real-world practice using Node.js and the Express framework. Utilising core modules such as the File System module to read and write files, as well as 3rd party libraries such as Sharp to resize images accordingly. It was also important that the project was built using TypeScript, as a way to practice through real-world examples and test using the Jasmine testing framework.

## Features
* Provide the API with a `filename`, `width`, and `height` and the API will resize the image accordingly and provide the image for you to download, or serve statically via a URL.
* If the image already exists, it will be served again rather than regenerating the image over and over again.

## Getting Started
* `git clone https://github.com/invertostew/image-processing-api.git`.
* cd into the repository.
* run `npm install` to install the dependencies.
* run `npm run build` to compile the TypeScript.
* run `npm run start` to run the production server (JS).
* run `npm run start:dev` to run the development server (TS).
* run `npm run test` to run the Jasmine tests.

## Documentation
As of now, there is only one route. You must provide a `filename`, `width`, and `height` as query arguments, e.g:

`http://localhost:3000/api/images?filename=encenadaport&width=200&height=200`

* If there are either no query parameters, or the filename is missing, the server will respond with a list of possible images.
* If the `filename` does not exist, the server will respond with a `400 Bad Request` and an error message.
* If the `filename` is a part of the query parameters, but the `width` or `height` query parameters are missing, the server will respond with a `400 Bad Request`, and an error message.
* If all the necessary query parameters are provided, the server will respond with a `200 OK` and you will see the resized image.
* If the image has already been processed at the same size, then the server will serve the same image rather than re-processing the image unnecessarily.

### List of available images
* encenadaport
* fjord
* icelandwaterfall
* palmtunnel
* santamonica

## Future Plans
* Currently, only JPGs can be processed (as requested), in the future it would be good to add support multiple file formats.
* Batch image resizing could be a good future goal too. Allowing the user to provide a list of images, as oppose to a single image.

# vibrant-loader

### A web pack loader giving access to the vibrant/dominant colors of images.

returns an object with various swatches, the dimensions & height ratio of the
original source file as well as a base64-ed 3x3px version that can be used as
stylistic background or placeholder for optimistic image loading.

## Usage

1. install: `yarn add vibrant-loader`
2. require: `require('vibrant-loader!image.png')`

###

`yarn build-example` generates a simplistic showcase in example/build

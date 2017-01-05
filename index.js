const Vibrant = require('node-vibrant');
const Jimp = require('jimp');

module.exports = function(content) {

  // somehow, Jimp.getExtension is not working to generate hashes
  // https://github.com/oliver-moran/jimp/issues/193
  const config = {
		publicPath: false,
		name: "[hash].[ext]"
	};
  const url = loaderUtils.interpolateName(this, config.name, {
    context: config.context || this.options.context,
    content: content,
    regExp: config.regExp
  });

  this.cacheable && this.cacheable();
  const loaderCallback = this.async();

  Jimp.read(content).then( image => {
    parseImage(image);
  }).catch(function (err) {
    console.error(err);
  });

  const parseImage = (image) => Vibrant.from(image).getPalette( (err, palette) => {
    if (err) throw err;
    const mime = image._originalMime;
    const imageForAnts = image.clone()
      .resize(3,3);
    const source = image.bitmap;
    const doneParsing = (err, buffer) => {
      if (err) throw err;
      palette.imageForAnts = buffer;
      palette.src = url;
      palette.source = {
        width: source.width,
        height: source.height,
        ratio: source.width / source.height
      };
      this.emitFile(url, content);
      loaderCallback(null, 'module.exports = ' + JSON.stringify(palette) + ';');
    }
    imageForAnts.getBase64( Jimp.MIME_PNG, doneParsing );
  });
};

module.exports.raw = true;

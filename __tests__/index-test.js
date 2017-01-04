'use strict';

const desiredOutput = {
	"DarkMuted": {
		"hsl": [ 0.1166666666666666, 0.10416666666666667, 0.18823529411764706],
		"population": 330,
		"rgb": [ 53, 50, 43]
	},
	"DarkVibrant": {
		"hsl": [ 0.1095890410958904, 0.49659863945578225, 0.2882352941176471],
		"population": 159,
		"rgb": [110, 85, 37]
	},
	"LightMuted": {
		"hsl": [ 0.5925925925925926, 0.21600000000000014, 0.7549019607843137],
		"population": 308,
		"rgb": [179, 191, 206]
	},
	"LightVibrant": {
		"hsl": [ 0.12335958005249344, 0.5746606334841629, 0.5666666666666667],
		"population": 233,
		"rgb": [208, 175, 81]
	},
	"Muted": {
		"hsl": [ 0.22357723577235777, 0.1673469387755102, 0.5196078431372548],
		"population": 620,
		"rgb": [139, 153, 112]
	},
	"Vibrant": {
		"hsl": [ 0.9731800766283524, 0.5087719298245615, 0.6647058823529413],
		"population": 134,
		"rgb": [213, 126, 140]
	},
	"imageForAnts":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAAAklEQVR4AewaftIAAAAuSURBVGMsrYv+z/RNkIFZnJWB6edPXgZnGT2G11+YGZgMpVkYBB9dZBBhYmQAAOP6ChR4xxsWAAAAAElFTkSuQmCC",
	"source": {
		"height": 512,
		"ratio": 1,
		"width": 512
	},
	"src": "46d0cde43c537e81d91ef2489b40ab5d.png"
};

test('get object from loader and match to static output', () => {
  const image = require('./../index!./mandrill.png');
  expect(image).toMatchObject(desiredOutput);
});

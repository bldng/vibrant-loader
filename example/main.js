import { h, render, Component } from 'preact';
const fallBackColor = '#CCCCCC';

const samples = [
  require('./../index!./img/lenna.png'),
  require('./../index!./img/mandrill.png')
];

const formatColor = (color) => `rgb(${color.toString()})`;

// As the API returns null for a key with no results
// you have to make sure to check for this case;
const colorSafeGuard = (a, b) => {
  if (!a && !b) {
    return fallBackColor;
  } else {
    return a
      ? formatColor(a.rgb)
      : formatColor(b.rgb);
  };
};

render((
  <div>
    <h2>Monotone Background</h2>
    <div className="collection">
      {
        samples.map( (sample,i) => {
          const {LightVibrant, Vibrant, DarkVibrant, DarkMuted, imageForAnts, src } = sample;
          const lightestColor = colorSafeGuard(LightVibrant, Vibrant);
          const darkestColor = colorSafeGuard(DarkMuted, DarkVibrant);
          return <div className="sample" style={{backgroundColor: lightestColor}}>
            <h3 className="sample__title" style={{color: darkestColor}}>
              Sample image #{i+1}
            </h3>
            <img className="sample__image" src={src}/>
          </div>
        })
      }
    </div>
    <h2>Blurred 3x3px Background</h2>
    <div className="collection">
      {
        samples.map( (sample,i) => {
          const {LightVibrant, Vibrant, imageForAnts, src } = sample;
          const lightestColor = colorSafeGuard(LightVibrant, Vibrant);
          return <div className="sample" style={{backgroundImage: `url(${imageForAnts})`}}>
            <h3 className="sample__title" style={{color: lightestColor}}>
              Sample image #{i+1}
            </h3>
            <img className="sample__image" src={src}/>
          </div>
        })
      }
    </div>
  </div>
), document.body);

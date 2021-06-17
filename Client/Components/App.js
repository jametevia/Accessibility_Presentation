import React from 'react';
import NonAccessibleNav from './nonAccessibleNav.js';
import AccessibleNav from './AccessibleNav.js';
import javascriptImage from '../../Images/javascript.png';
import cssImage from '../../Images/css.png';
import reactImage from '../../Images/react.jpeg';
import expressImage from '../../Images/express.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nonAccessibleImage: javascriptImage, AccessibleImage: javascriptImage};
    this.imageChange = this.imageChange.bind(this);
    this.redirect = this.redirect.bind(this);
   }


  imageChange (e) {
    if (e.target.value === 'css') {
      this.setState({nonAccessibleImage: cssImage})
    }
    if (e.target.value === 'react') {
      this.setState({nonAccessibleImage: reactImage})
    }
    if (e.target.value === 'express') {
      this.setState({nonAccessibleImage: expressImage})
    }
    if (e.target.value === 'javascript') {
      this.setState({nonAccessibleImage: javascriptImage})
    }
   }

   redirect () {
     if (this.state.nonAccessibleImage === cssImage) {
      window.open('https://developer.mozilla.org/en-US/docs/Web/CSS','_blank')
     }
     if (this.state.nonAccessibleImage === javascriptImage) {
       window.open('https://www.javascript.com/', '_blank');
     }
     if (this.state.nonAccessibleImage === reactImage) {
      window.open('https://reactjs.org/', '_blank');
    }
    if (this.state.nonAccessibleImage === expressImage) {
      window.open('http://expressjs.com/', '_blank');
    }

   }

  render() {
    return (
      <div>
        <div className="NonAccessibleComponentHeader">Inaccessible Component</div>
        <div className="learn">What would you like to learn?</div>
        <NonAccessibleNav imageChange={this.imageChange} />
        <img id="nonAccessibleJSImage" src={this.state.nonAccessibleImage} onClick={this.redirect}></img>
        <div className="bottomBar"></div>


        <h1 className="AccessibleComponentHeader">Accessible Component</h1>
        <div className="AccessibleLearn">What would you like to learn?</div>
        <AccessibleNav imageChange={this.imageChange} />
        <img id="nonAccessibleJSImage" src={this.state.nonAccessibleImage} onClick={this.redirect} alt={this.state.AccessibleImage}></img>
      </div>

    );
  }
}

export default App
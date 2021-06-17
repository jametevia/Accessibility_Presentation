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
    this.state = {nonAccessibleImage: javascriptImage, AccessibleImage: javascriptImage, nonAccessibleImageString: 'javascriptImage', accessibleImageString: 'javascript Image'};
    this.imageChange = this.imageChange.bind(this);
    this.redirect = this.redirect.bind(this);
    this.accessibleImageChange = this.accessibleImageChange.bind(this);
    this.accessibleRedirect = this.accessibleRedirect.bind(this);
    this.enter = this.enter.bind(this);
    this.enterTrue = this.enterTrue.bind(this);
   }

  enterTrue(event) {
    var code = event.charCode || event.keyCode;
    if ((code === 32) || (code === 13)) {
      return true;
    }
    else {
      return false;
    }
  }


  enter(e) {
    if (this.enterTrue(e) === true) {
      this.accessibleRedirect();
    }
  }


  imageChange (e) {
    if (e.target.value === 'css') {
      this.setState({nonAccessibleImage: cssImage})
      this.setState({nonAccessibleImageString: 'css Image'})
    }
    if (e.target.value === 'react') {
      this.setState({nonAccessibleImage: reactImage})
      this.setState({nonAccessibleImageString: 'react Image'})
    }
    if (e.target.value === 'express') {
      this.setState({nonAccessibleImage: expressImage})
      this.setState({nonAccessibleImageString: 'express Image'})
    }
    if (e.target.value === 'javascript') {
      this.setState({nonAccessibleImage: javascriptImage})
      this.setState({nonAccessibleImageString: 'javascript Image'})
    }
   }

   accessibleImageChange (e) {
    if (e.target.value === 'css') {
      this.setState({AccessibleImage: cssImage})
      this.setState({AccessibleImageString: 'css Image'})
    }
    if (e.target.value === 'react') {
      this.setState({AccessibleImage: reactImage})
      this.setState({AccessibleImageString: 'react Image'})
    }
    if (e.target.value === 'express') {
      this.setState({AccessibleImage: expressImage})
      this.setState({AccessibleImageString: 'express Image'})
    }
    if (e.target.value === 'javascript') {
      this.setState({AccessibleImage: javascriptImage})
      this.setState({AccessibleImageString: 'javascript Image'})
    }
   }

   redirect () {
     if (this.state.nonAccessibleImage === cssImage) {
      window.open('https://www.w3.org/Style/CSS/Overview.en.html','_blank')
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

   accessibleRedirect () {
    if (this.state.AccessibleImage === cssImage) {
     window.open('https://www.w3.org/Style/CSS/Overview.en.html','_blank')
    }
    if (this.state.AccessibleImage === javascriptImage) {
      window.open('https://www.javascript.com/', '_blank');
    }
    if (this.state.AccessibleImage === reactImage) {
     window.open('https://reactjs.org/', '_blank');
   }
   if (this.state.AccessibleImage === expressImage) {
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

        <main role="main">
          <h1 className="AccessibleComponentHeader">Accessible Component</h1>
          <div className="AccessibleLearn">What would you like to learn?</div>
          <AccessibleNav imageChange={this.accessibleImageChange} />
          <img tabIndex="0" id="AccessibleJSImage" src={this.state.AccessibleImage} onKeyDown={this.enter} onClick={this.accessibleRedirect} alt={this.state.accessibleImageString}></img>
        </main>
      </div>

    );
  }
}

export default App
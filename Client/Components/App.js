import React from 'react';
import NonAccessibleNav from './nonAccessibleNav.js';
import javascriptImage from '../../Images/javascript.jpg';
import cssImage from '../../Images/css.jpeg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nonAccessibleImage: javascriptImage};
   }
  render() {
    return (
      <div>
        <div className="NonAccessibleComponentHeader">Inaccessible Component</div>
        <NonAccessibleNav />
        <img id="nonAccessibleJSImage" src={this.state.nonAccessibleImage}></img>
        <div></div>
      </div>

    );
  }
}

export default App
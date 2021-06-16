import React from 'react';
import NonAccessibleNav from './nonAccessibleNav.js';
import javascriptImage from '../../Images/javascript.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'purple'};
   }
  render() {
    return (
      <div>
        <NonAccessibleNav />
        <img id="nonAccessibleJSImage" src={javascriptImage}></img>
        <div></div>
      </div>

    );
  }
}

export default App
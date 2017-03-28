import React, { Component } from 'react';
import Slideout from "slideout";

class Drawer extends Component {

  componentDidMount() {
    this.slideout = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('menu'),
      'padding': 256,
      'tolerance': 70
    });
  }

  render() {
    return(
      <div>
        <nav id="menu">
          <header>
            <h2>Menu</h2>
          </header>
        </nav>

        <main id="panel">
          <header>
            <h2>Panel</h2>
            <p onClick={() => {this.slideout.open()}}>Open</p>
          </header>
        </main>
      </div>
    );
  }
}

export { Drawer }

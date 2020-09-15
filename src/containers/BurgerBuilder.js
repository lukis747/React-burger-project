import React, { Component } from 'react';

import Auxillary from '../hoc/Auxillary';

export default class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <Auxillary>
          <div>Burger</div>
          <div>Build Controls</div>
        </Auxillary>
      </div>
    );
  }
}

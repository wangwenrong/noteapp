import React from 'react';
import { Todolist } from './containers/todolistindex';
import { InputText } from './containers/inputText';
import { Detail } from './containers/detail';
import { FlexDiv } from './containers/flex';

import {
  HashRouter,
  Route
} from 'react-router-dom'

export class Router extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HashRouter>
        <div style={{ height: '100%', width: '100%' }}>          
          <Route exact path="/" component={Todolist} />
          <Route exact path="/inputText" component={InputText} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/flex" component={FlexDiv} />
        </div>
      </HashRouter>
    )
  }
}
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Todolist } from './containers/todolistindex';
import { InputText } from './containers/inputText';
import { Detail } from './containers/detail';
import { FlexDiv } from './containers/flex';

import {
  HashRouter,
  Route,
  Link,
  withRouter,
  Switch
} from 'react-router-dom'

export class Router extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HashRouter>
        <div style={{ height: '100%', width: '100%' }}>
          <App />
        </div>
      </HashRouter>
    )
  }
}
const App = withRouter(({ location, history }) => {
  const currentKey = location.pathname.split('/')[1] || '/'
  const timeout = { enter: 300, exit: 300 }
  const action = history.action;
  console.log(action);
  let transitionName = '';
  // REPLEASE
  if (action === 'PUSH') {
    transitionName = 'page-push';
  } else if (action === 'POP') {
    transitionName = 'page-pop';
  }
  return (
    <div className={transitionName}>
      <TransitionGroup component="main" className="page-main">
        <CSSTransition key={currentKey} timeout={timeout} classNames='page-switch' appear>
          <section>
            <Switch location={location}>
              <Route exact path="/" component={Todolist} />
              <Route exact path="/inputText" component={InputText} />
              <Route exact path="/detail" component={Detail} />
              <Route exact path="/flex" component={FlexDiv} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
})
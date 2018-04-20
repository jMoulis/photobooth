import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../../containers/login';
import CameraSlide from '../../containers/camera';
import MaskPicker from '../../containers/maskPicker';
import FormSlide from '../../containers/sendForm';
import PreviewSlide from '../../containers/preview';
import Confirmation from '../../containers/sendForm/confirmation';

class App extends React.Component {
  // Check if user is logged through the presence of the token retreive after login
  checkLogged = () => localStorage.getItem('token') && localStorage.getItem('token').length !== 0;
  render() {
    return (
          <div id="app" className="container-fluid">
            <main className="row">
              <Switch>
                <Route exact path="/" render={() => {
                  return (
                    this.checkLogged() ? (
                        <Redirect to="/start" />
                      ) : (
                        <Login />
                      )
                    )
                  }}/>
                {this.checkLogged() ?
                <Switch>
                  <Route exact path="/start" component={MaskPicker} />
                  <Route exact path='/camera' component={CameraSlide} />
                  <Route exact path='/preview' component={PreviewSlide} />
                  <Route exact path='/confirmation' component={Confirmation} />
                  <Route exact path="/form" component={FormSlide} />
                </Switch> :
                <Redirect to="/" />
                }
              </Switch>
            </main>
          </div>
    )
  }
}

export default App;

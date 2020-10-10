import React from 'react';
import ReactDOM from 'react-dom';
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom'

import Top from './Top'
import QrPhoto from './QrPhoto'
import About from './About'
import ImageStage from './ImageStage'
import ImageStageF from './ImageStageF'

const App = () => {
    return (
        <BrowserRouter>
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light bg-light">
              <div className="" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                          Top
                      </Link>
                    </li>
                    <li className="nav-item" className="nav-link">
                      <Link to="/qr-photo">
                          QrPhoto
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link">
                          About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/image-stage" className="nav-link">
                          Image Stage
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/image-stagef" className="nav-link">
                          Image StageF
                      </Link>
                    </li>
                </ul>
              </div>
            </nav>
            <Switch>
                <Route path="/" exact component={Top} />
                <Route path="/qr-photo" exact component={QrPhoto} />
                <Route path="/about" exact component={About} />
                <Route path="/image-stage" exact component={ImageStage} />
                <Route path="/image-stagef" exact component={ImageStageF} />
            </Switch>
        </React.Fragment>
        </BrowserRouter>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

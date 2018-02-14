import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Main from './Main';
import BlogInput from './BlogInput';
import ContactPage from './ContactPage';
import SingleBlog from './SingleBlog';


class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                        <form className="form-inline">
                            <Link to="/Main" className="d-inline"><img src="http://clipart-library.com/images/6ip5kb5bT.jpg" width="45" height="45" alt="" /></Link>
                            <input className="form-control mr-sm-2 d-inline" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    <Switch>
                        <Route exact path="/" component={WelcomePage} />
                        <Route exact path="/Main" component={Main} />
                        <Route exact path="/BlogInput" component={BlogInput} />
                        <Route exact path="/ContactPage" component={ContactPage} />
                        <Route exact path="/SingleBlog/:id" component={SingleBlog} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;
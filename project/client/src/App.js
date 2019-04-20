import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Navbar2 from './Components/Navbar2';
import Footer from './Components/Footer';
import Potraits from './Components/Potraits';
import TravelPhotography from './Components/TravelPhotography';
import Login from './Components/Login';
import Gallery from './Components/Gallery';
import Register from './Components/Register';
import Timeline from './Components/timeline';
import NaturePhotography from './Components/NaturePhotography';
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                 <Switch>
                    <Route exact path='/' component={Home} />
		            <Route exact path='/About' component={About}/>
		            <Route exact path='/TravelPhotography' component={TravelPhotography}/>
					<Route exact path='/Potraits' component={Potraits}/>
                    <Route path='/Login' component={Login} />
					<Route path='/Gallery' component={Gallery} />
                    <Route path='/Navbar2' component={Navbar2} />
                    <Route path='/Register' component={Register} />
                    <Route path='/timeline' component={Timeline} />
  					<Route path='/NaturePhotography' component={NaturePhotography} />
                 </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
  }
}


// main component uses react-router-dom that lets the app to render components as soon as there is a request for new page
// Route is used to specify the path on which a certain component has to be rendered. Thus we can give different paths to different pages.
// 'exact' attribute is used here as without this, path="/" would also match "/about", since / is contained in the route.
export default App;
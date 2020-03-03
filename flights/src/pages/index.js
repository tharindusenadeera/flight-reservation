import React, { Component, Fragment } from 'react';
import NavBar from '../components/NavBar';
import SearchFlight from "../components/SearchComponent";

class SiteIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <NavBar />
                <h1> This is the index page</h1>
                <SearchFlight />
            </Fragment>
         );
    }
}
 
export default SiteIndex;
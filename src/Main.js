import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import {Container, Row} from 'react-bootstrap';


import Header from './components/Header'
import ProdukUnggulan from './screens/ProdukUnggulan'
import ProdukUnggulan_list from './screens/ProdukUnggulan_list'
import ListIklan from './screens/iklan/ListIklan';
import DetailIklan from './screens/iklan/DetailIklan';
import Footer from './components/Footer';
 import Footer1 from './components/Footer1.js';

class Main extends Component {
  render() {
    return (
    <HashRouter>
    <div>
        <div className="header" >
           <Header/>
             
        </div>

        <div className="main-content" id="main_content">
            <Container>
                <Row>
                    <Route exact path="/" component={ProdukUnggulan}/>
                    <Route exact path="/ProdukUnggulan" component={ProdukUnggulan}/>
                    <Route exact path="/ListIklan" component={ProdukUnggulan_list}/>
                    <Route exact path="/ListIklan" component={ListIklan}/>
                     <Route exact path="/DetailIklan" component={DetailIklan}/> 
                </Row>
            </Container>
            
            {/* <Container>
                <Row>
                    <Route exact path="/" component={Property}/>
                    
                </Row>

            </Container> */}
        </div>

        <div className="footer" >
                <Route exact path="/" component={Footer}/>
                <Route exact path="/ListIklan" component={Footer}/>
                 <Route exact path="/DetailIklan" component={Footer1}/>
        </div>
    </div>
</HashRouter>
    );
  }
}
 
export default Main;
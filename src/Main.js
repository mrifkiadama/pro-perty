import React, { Component } from "react";
import { Route, HashRouter,Redirect } from "react-router-dom";
import {Container, Row} from 'react-bootstrap';


import Header from './components/Header'
import ProdukUnggulan from './screens/ProdukUnggulan'
import ListIklan from './screens/iklan/ListIklan';
import DetailIklan from './screens/iklan/DetailIklan';
import Footer from './components/Footer';
 
class Main extends Component {
  render() {
    return (
    <HashRouter>
    <div>
        <div className="header" >
           <Header/>
             
        </div>

        <div className="main-content">
            <Container>
                <Row>
                    <Route exact path="/" component={ProdukUnggulan}/>
                    <Route exact path="/ProdukUnggulan" component={ProdukUnggulan}/>
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
            <Footer/>
        </div>
    </div>
</HashRouter>
    );
  }
}
 
export default Main;
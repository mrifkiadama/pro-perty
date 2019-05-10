import React, { Component } from 'react';
import { Card, Button, Container, Badge } from 'react-bootstrap';
import ProdukUnggulan from '../ProdukUnggulan';
import { Row, Col} from 'react-bootstrap';
import HeaderSearch from '../../components/HeaderSearch'


export default class ListIklan extends Component {
  render () {
   
      return (
            <React.Fragment>
            <HeaderSearch/>
            <ProdukUnggulan/>
              <Container>
                <Row>
                  <Col xs={12} md={12}>
                    <div className="content">
                    
                    <div style={{paddingBottom:30}}>
                
                      <React.Fragment>
                        <center>
                          <Card style={{ width: '16rem',margin:10}}>
                              
                                  <Card.Img  variant="top" src="http://via.placeholder.com/286x180" />
                          
                              <Card.Body>
                                  <Badge variant="secondary"></Badge>
                                  <Card.Title style={{fontWeight:540}}></Card.Title>
                                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                  <Card.Title style={{color: '#3D87F3',marginTop:25, marginBottom:25, fontWeight:500, float: 'left'}}>
                                  Rp 
                                      <h2 style={{fontSize:15, color: '#95a5a6', float: 'right', marginLeft:10}}> </h2>
                                  </Card.Title>
                                    <a href="#/DetailIklan">
                                      <Button  variant="outline-warning" style={{ width: '100%', height: '30%', justifyContent: 'center', alignItems: 'center'}}>
                                      Hubungi Penjual</Button>
                                      </a>
                              </Card.Body>

                          </Card>
                          </center>
                      </React.Fragment>   
                </div>
        </div>   
              </Col>
            </Row>
          </Container>
      </React.Fragment>
           
      );
  }
}
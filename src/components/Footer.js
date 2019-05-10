import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
class Footer extends Component {
  render() {
    return (
        <Container>
            <Row>
                <Col xs={12} md={12}>         
                        <div style={{marginLeft:-20,marginRight:-20,marginBottom:-20,padding:30,background:"#f7f8f9"}} >
                            <span style={{fontSize:16}}><center>2019 Hak Cipta Terpelihara PROperty</center></span>
                        </div>
                  
                </Col>
            </Row>
        </Container>
    );
  }
}
 
export default Footer;
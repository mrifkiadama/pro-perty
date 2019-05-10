import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Badge,Image,Button} from 'react-bootstrap';
import Tanah from '../../../assets/icon_detail_iklan/luas_tanah.png'
import Tidur from '../../../assets/icon_detail_iklan/kamar_tidur.png'
import Pilihan from '../../../assets/icon_content/Group 417.png';

export default class DetailIklan extends Component {
  render () {
   
      return (
            <React.Fragment>
              <Container>
                <Row>
                  <Col xs={12} md={8}>
                    <div className="content">
                        <Row>
                            <Col xs={6} md={6} >
                               <Image src="" fluid />
                                <Row>
                                    <img style={{width:45,height:45, marginRight:10, marginLeft:10}} src={Tanah}  alt="Luas Tanah"/>
                                    <img style={{width:45,height:45, marginRight:10, marginLeft:10}} src={Tanah}  alt="Luas Tanah"/>
                                    <img style={{width:45,height:45, marginRight:10, marginLeft:10}} src={Tanah}  alt="Luas Tanah"/>
                                    <img style={{width:45,height:45, marginRight:10, marginLeft:10}} src={Tanah}  alt="Luas Tanah"/>
                                </Row>
                                <h4>Laporkan Iklan</h4>
                            </Col> 

                            <Col xs={12} md={6} style={{background:'white'}}>
                                <h4>Rumah Jalan Wahid Hasyim Murah</h4>
                                <h6 style={{fontSize:14 }}>Jalan Wahid Hasyim no 34,Yogyakarta.Yogyakarta</h6>
                                <Badge pill variant="success">Tersedia</Badge>
                                <br/><br/>
                                <h5>Spesifikasi Singkat</h5>
                                <Row>
                                    <Col xs={12} md={6} style={{paddingBottom:10,padding:0}}>
                                        <img style={{width:45,height:45, marginRight:10, marginLeft:10}} src={Tanah}  alt="Luas Tanah"/>
                                        <span>Luas Tanah</span>                                   
                                    </Col>
                                    <Col xs={12} md={6} style={{paddingBottom:10,padding:0}}>
                                        <img style={{width:45,height:45, marginRight:10, marginLeft:10}} src={Tidur}  alt="Kamar Tidur"/>                                        
                                        <span>Kamar Tidur</span>   
                                    </Col>
                                    <Col xs={12} md={6} style={{paddingBottom:10,padding:0,paddingTop:10}}>
                                        <img style={{width:45,height:45, marginRight:10, marginLeft:10}} src={Tanah}  alt="Luas Tanah"/>                                        
                                        <span>Luas Bangunan</span>   
                                    </Col>
                                    <Col xs={12} md={6} style={{paddingBottom:10,padding:0,paddingTop:10}}>
                                        <img style={{width:45,height:45, marginRight:10, marginLeft:10}} src={Tanah}  alt="Luas Tanah"/>                                        
                                        <span>Kamar Mandi</span>   
                                    </Col>
                                </Row>
                                <hr/>
                                <h4 style={{padding:0}}>Dilihat :201</h4>
                            </Col> 

                            
                        </Row>
                         
                    </div>   
                  </Col>

                  <Col xs={4} md={4}>
                    <div className="content">
                          <Col xs={12} md={12} style={{background:"blue"}}>
                            <h3>Dijual</h3>
                            <h4>Rp 2,2 Miliyar </h4>  
                          </Col>
                          <Col xs={12} md={12} >
                            <span>Pemasangan Iklan</span>
                                <Row>
                                <Col xs={12} md={12} >
                                    <img style={{width:45,height:45, marginRight:10, marginLeft:10}} src={Tanah}  alt="Luas Tanah"/>
                                    <span>Luas Tanah</span>                                    
                                </Col>
                             
                                </Row>
                                   <hr/>
                          </Col>
                            <Button variant="outline-secondary">Secondary</Button>
                            <Button variant="outline-secondary">Secondary</Button>
                    </div>   
                  </Col>

                  <Col xs={12} md={8}>
                    <div className="content">
                    <Col xs={12} md={12}>
                        <div style={{marginLeft:-20, marginRight:-20}}>
                            <h3><img style={{width:45,height:45, marginRight:10, marginLeft:20}} src={Pilihan}  alt="logo"/> Detail Property</h3>
                        </div>
                    </Col>

                     <Col xs={12} md={12}>
                        <Row>
                            <Col xs={12} md={4}>
                            <span>Spesifikasi</span>
                            </Col>
                            <Col xs={12} md={4}>
                            sdsd
                            </Col>
                            <Col xs={12} md={4}>
                            sdsd
                            </Col>
                        </Row>
                        
                    </Col>
                    <hr/>
                   
                    <Col xs={12} md={12}>
                      <h5>Fasilitas</h5>
                    </Col>

                    <Col xs={12} md={12}>
                      <h5>Deskripsi</h5>
                    </Col>

                    </div>   
                     
                  </Col>
            </Row>
          </Container>
      </React.Fragment>
           
      );
  }
}
import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {Badge, Image, Button,Card} from "react-bootstrap";
import Tanah from "../../assets/icon_detail_iklan/luas_tanah.png";
import Tidur from "../../assets/icon_detail_iklan/kamar_tidur.png";
import Mandi from "../../assets/icon_detail_iklan/kamar_mandi.png";
import  Rumah  from "../../assets/icon_detail_iklan/luas_bangunan.png";
import Flag from '../../assets/icon_detail_iklan/flag.png'


import Pilihan from "../../assets/icon_content/Group 417.png";

export default class DetailIklan extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs={12} md={9}>
              <div className="content">
                <Row>
                  <Col xs={6} md={6} style={{margin:0}}>
                         <Card.Img  variant="top" src="http://via.placeholder.com/286x150" />
                    <Row>
                     <img
                        style={{
                          width: 90,
                          height: 90,
                          marginLeft: 15,
                          marginRight:6,
                          marginTop:10
                        }}
                       src="http://via.placeholder.com/900x90"
                        alt="Luas Tanah"
                      />
                      <img
                        style={{
                          width: 90,
                          height: 90,
                          marginRight: 6,
                          marginTop:10
                        }}
                       src="http://via.placeholder.com/90x90"
                        alt="Luas Tanah"
                      />
                      <img
                        style={{
                          width: 90,
                          height: 90,
                          marginRight: 6,
                          marginTop:10
                        }}
                       src="http://via.placeholder.com/90x90"
                        alt="Luas Tanah"
                      />
                       <img
                        style={{
                          width: 90,
                          height: 90,
                          marginTop:10
                        }}
                       src="http://via.placeholder.com/90x90"
                        alt="Luas Tanah"
                      />
                    </Row>
                    
                    <h4 style={{marginTop:20,fontSize:12}}>
                    
                     <img
                        style={{
                                width: 15,
                                height: 15,
                                marginRight:5,
                              }}
                              src={Flag}
                              alt="Bendera "
                            />
                    
                    <a href="" > Laporkan Iklan</a>
                    
                    </h4>
                  </Col>

                  <Col xs={12} md={6} style={{background: "white",padding:0,marginBottom:8}}>
                    <h4 style={{marginTop:20}}>Rumah Jalan Wahid Hasyim Murah</h4>
                    <h6 style={{fontSize: 14,marginBottom:20}}>
                      Jalan Wahid Hasyim no 34,Yogyakarta.Yogyakarta
                    </h6>
                    <Badge pill variant="success">
                      Tersedia
                    </Badge>
                    <br />
                    <br />
                    <h5>Spesifikasi Singkat</h5>
                    <Row>
                      <Col
                        xs={12}
                        md={6}
                        style={{paddingBottom: 10, padding: 0,marginTop:10}}>
                          <Row>
                            <img
                              style={{
                                width: 45,
                                height: 45,
                                marginRight: 10,
                                marginLeft: 40
                              }}
                              src={Tanah}
                              alt="Luas Tanah"
                            />
                            <Col style={{marginLeft:-10}}>      
                              <h5 style={{fontSize:15,margin:0}}>Luas Tanah</h5>
                              <span>Luas </span>
                            </Col>
                          </Row>  
                      </Col>
                      <Col
                        xs={12}
                        md={6}
                        style={{paddingBottom: 10, padding: 0,marginTop:10}}>
                          <Row>
                            <img
                              style={{
                                width: 45,
                                height: 45,
                                marginRight: 10,
                                marginLeft: 30
                              }}
                              src={Tidur}
                              alt="Luas Tanah"
                            />
                            <Col style={{marginLeft:-10}}>      
                              <h5 style={{fontSize:15,margin:0}}>Kamar Tidur</h5>
                              <span>Luas </span>
                            </Col>
                          </Row>  
                      </Col>
                     <Col
                        xs={12}
                        md={6}
                        style={{paddingBottom: 10, padding: 0,marginTop:10}}>
                          <Row>
                            <img
                              style={{
                                width: 45,
                                height: 45,
                                marginRight: 10,
                                marginLeft: 40
                              }}
                              src={Rumah}
                              alt="Luas Tanah"
                            />
                            <Col style={{marginLeft:-10}}>      
                              <h5 style={{fontSize:15,margin:0}}>Luas Bangunan</h5>
                              <span>Luas </span>
                            </Col>
                          </Row>  
                      </Col>
                     <Col
                        xs={12}
                        md={6}
                        style={{paddingBottom: 10, padding: 0,marginTop:10}}>
                          <Row>
                            <img
                              style={{
                                width: 45,
                                height: 45,
                                marginRight: 10,
                                marginLeft: 30
                              }}
                              src={Mandi}
                              alt="Luas Tanah"
                            />
                            <Col style={{marginLeft:-10}}>      
                              <h5 style={{fontSize:15,margin:0}}>Kamar Mandi</h5>
                              <span>Luas </span>
                            </Col>
                          </Row>  
                      </Col>
                    </Row>
                    <hr />
                    <h4 style={{marginTop:20,fontSize:12}}>Dilihat :<span style={{marginLeft:20}}>201</span> kali</h4>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col xs={3} md={3} >
              <div className="content" style={{paddingRight:10}}>
              <Row>
                <Col xs={12} md={12} style={{background: "#3d87f3",marginTop:-20,marginLeft:-5,}} >
                  <h6 style={{marginTop:10,color:'#ffc107'}}>Dijual</h6>
                  <h4 style={{marginTop:10,color:'white',marginBottom:10,float:'left'}}>Rp 2,2 Miliyar <span style={{fontSize:15, color: '#f7f8f9', marginLeft:10}}> Nego</span></h4>  
                
                </Col>
                </Row>
                <Col xs={12} md={12} style={{marginBottom:20,marginTop:10,marginLeft:-10}}>
                  <h5 style={{marginTop:10,fontSize:15,fontWeight:'bold'}}>Pemasangan Iklan</h5>
                  <Row>
                    <Col xs={12} md={6} style={{width:100,height:100,paddingTop:20}}>
                      <img
                        style={{
                          width: 50,
                          height: 50,
                          marginRight: 10,
                        }}
                        src={Tanah}
                        alt="Profil"
                      />
                    </Col>
                    <Col xs={12} md={6} style={{marginLeft:-40,marginTop:10,padding:10}}>
                        <h5 style={{margin:0}}>Mr.ABUD</h5>
                      <i className="material-icons" style={{float:'left',marginTop:5,marginLeft:-5}}>location_on</i>
                      <h6 style={{float:'left',marginTop:10,marginBottom:0,fontSize:12}}>Luas Tanah</h6>
                    
                    </Col>
                  </Row>
                  <br/>
                  <hr/>
                </Col>
                <a href="#">
                    <Button  style={{ width: '100%', height: '30%', justifyContent: 'center', alignItems: 'center',color:"black",background:'white'}}>
                        Kirim Pesan</Button>
                        </a>
                <a href="#/">
                        <Button  variant="outline-warning" style={{ width: '100%', height: '30%', justifyContent: 'center', alignItems: 'center',marginTop:10}}>
                        Hubungi Penjual</Button>
                        </a>
              </div>
            </Col>

            <Col xs={12} md={9}>
              <div className="content">
                <Col xs={12} md={12}>
                  <div style={{marginLeft: -20, marginRight: -20}}>
                    <h3>
                      <img
                        style={{
                          width: 45,
                          height: 45,
                          marginRight: 10,
                          marginLeft: 20
                        }}
                        src={Pilihan}
                        alt="logo"
                      />{" "}
                      Detail Property
                    </h3>
                  </div>
                </Col>

                <Col xs={12} md={12}>
                  <Row>
                    <Col xs={12} md={2}>
                      <span>Spesifikasi</span>
                    </Col>
                    <Col xs={12} md={5}>
                     <h6>Kategori       : <span>Rumah</span></h6>
                     <h6>Jenis Iklan    : <span>Rumah</span></h6>
                     <h6>Status         : <span>Rumah</span></h6>
                     <h6>Harga          : <span>Rumah</span></h6>
                     <h6>JUmlah Lantai  : <span>Rumah</span></h6>
                      
                    </Col>
                    <Col xs={12} md={5}>
                     <h6>Luas Tanah       : <span>Rumah</span></h6>
                     <h6>Luas Bangunan    : <span>Rumah</span></h6>
                     <h6>Kamar Tidur         : <span>Rumah</span></h6>
                     <h6>Kamar Mandi    : <span>Rumah</span></h6>
                     <h6>Sertifikasi  : <span>Rumah</span></h6>
                      
                    </Col>
                  </Row>
                </Col>
                <br/>
                <hr/>

                <Col xs={12} md={12}>
                  <Row>
                    <Col xs={12} md={2}>
                      <h5>Fasilitas</h5>
                      </Col>

                      <Col xs={12} md={10}>
                      <h6>Kolam Renang</h6>
                      <h6>Dekat Jalan Raya</h6>
                      <h6>Dekat Rumah Sakit</h6>
                      </Col>
                  </Row>
                </Col>
                <br/>
                 <hr/>
                <Col xs={12} md={12}>
                  <Row>
                    <Col xs={12} md={2}>
                      <h5>Fasilitas</h5>
                      </Col>

                      <Col xs={12} md={10}>
                      <h6>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur consectetur nesciunt. Delectus, iure ad beatae, cumque sequi maiores alias ipsam deleniti vitae, quia cum voluptatum ducimus ratione at molestias!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae ab veritatis harum voluptatum. Itaque aut, enim dignissimos quibusdam minus quasi sapiente, quaerat quo qui quae architecto ipsam sint ducimus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora a accusamus itaque quod, minima molestias repudiandae, vero excepturi voluptates pariatur doloribus quidem architecto mollitia earum voluptatum neque sunt, voluptatibus cupiditate?
                      
                      </h6>
                      
                      </Col>
                  </Row>
                </Col>
                <br/>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

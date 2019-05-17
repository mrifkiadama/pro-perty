<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
import AsyncFetch from '../../api/AsyncFetch'
import { Container, Row, Col} from 'react-bootstrap';
import { Image,Button,Badge} from 'react-bootstrap';
import Tanah from '../../assets/icon_content/Group 459.png'
import Sertifikasi from '../../assets/icon_content/Group 458.png'
import Pilihan from '../../assets/icon_content/Group 417.png';
import ImageGallery from 'react-image-gallery';
import Moment from 'react-moment';
import queryString from 'query-string';
import "react-image-gallery/styles/css/image-gallery.css";
import millify from 'millify';
import {Link } from "react-router-dom";


import ScrollToTop from 'react-router-scroll-top'   
export default class DetailIklan extends Component {
    state = {
      data: [],
      foto: [],
      harga:'20000000000',
      url: ""
  }

  setStateAsync(state) {
      return new Promise(resolve => {
          this.setState(state, resolve)
      })
  }

  async componentWillMount() {
     let url_ku = this.props.location.search;
     console.log(url_ku);
     let params = queryString.parse(url_ku);
     console.log(params);
      console.log(params.cari)
      let url_api='http://apiproday.herokuapp.com/api/v1/getadvert_title?'
      let cari='cari='+params.cari
      let id ='&id='+params.id
      this.setState({url:url_api+cari+id})

    
    
  }

    async componentDidMount(){

      console.log("Component A Will Mount")
      const url = this.state.url
      console.log("SetState with AsyncFetch")
      await this.setStateAsync({
          isLoad: true,
          ...await AsyncFetch(url)
      })

    this.setState({harga:this.state.data.harga})
      console.log(this.state.url)
  }
  cek_nego(e){
    if(e==="true"){
      return "Nego"
    }else{
      return "NeT"
    }

  }
  ambilangka(harga) {
      return millify(harga, {
          precision: 2,
          decimalSeparator: ',',
          units: ['', 'Ribu', 'Juta', 'Milyar', 'Triliun'],
          space: true,
      })
  }
  render () {
   const nilai = (this.state.data.harga)

      console.log(nilai)
      let url_ku = this.props.location.search;
      console.log(url_ku);
      let params = queryString.parse(url_ku);
      let cari='cari='+params.cari
      let id ='&id='+params.id
      const images = this.state.data.gambar
      const texts='?text='
      const waLink= 'https://wa.me/'+this.state.data.nomor_hp+texts
      const url="www.kpti.com/#DetailIklan?"
      const contact =waLink+"Saya Tertarik dengan Property :"+url+cari+id
      console.log(contact)
      return (
            <React.Fragment>

    <ScrollToTop/>
              <Container style={{marginTop:'-10%'}}>
                <Row>
                  <Col xs={12} md={9}>
                    <div className="content" >
                        <Row xs={12} md={12} style={{listStyleType: "none",paddingLeft:15, color:'#95a5a6',fontSize:12,marginTop:-15}}>
                          <Col xs={12} md={6} >
                            <Row>
                            <li style={{paddingTop:5}}>
                              <span style={{fontSize:15}}>
                              <Link to={'/'} style={{textDecoration: 'none',color:'grey'}}>  
                              Home
                              </Link>
                              <i className="material-icons" style={{fontSize:11}}>
                                  chevron_right
                              </i> 
                              <Link to={{ pathname: '/ListIklan',
                      search:'?alamat='+this.state.data.kab+'&cari='}}  style={{textDecoration: 'none',color:'grey'}}>  
                              {this.state.data.kab}
                              </Link>
                              </span></li>
                              <li style={{paddingTop:5}}>
                              <span style={{fontSize:15}}>
                              <i className="material-icons" style={{fontSize:11}}>
                                  chevron_right
                              </i> {this.state.data.kategori}</span></li>
                              <li style={{paddingTop:5}}>
                              <span style={{fontSize:15}}><i className="material-icons" style={{fontSize:11}}>
                                  chevron_right
                              </i> {this.state.data.penjual}</span></li>
                              </Row>
                          </Col>
                             
                           <Col xs={12} md={6}>
                            <Row>
                            <li style={{paddingTop:5}}>
                              <span style={{fontSize:15}}>
                              <i className="material-icons" style={{fontSize:11}}>
                                  format_list_bulleted
                              </i> {this.state.data.kategori}</span></li>
                              <li style={{paddingTop:5,marginLeft:15}}>
                              <span style={{fontSize:15}}>
                              <i className="material-icons" style={{fontSize:11}}>
                                  access_time
                              </i> <Moment format="D MMM YYYY" withTitle>
                                {this.state.data.date}
                                  </Moment></span></li>
                              <li style={{paddingTop:5,marginLeft:15}}>
                              <span style={{fontSize:15}}><i className="material-icons" style={{fontSize:11}}>
                                  location_on
                              </i> {this.state.data.provinsi}</span></li>
                    
                              </Row>
                          </Col>

                        </Row>
                              
                              
                            

                        <Row>
                            <Col xs={12} md={6} style={{paddingBottom:0,marginTop:10,paddingTop:20}}>
                               
                               
                                <ImageGallery items={images} lazyLoad={true} useTranslate3D={false} showBullets={false} showNav={false} showPlayButton={false} className="caraousel_image" 
                                 onError={(e) => {
                                 e.target.src = 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png' // some replacement image
                                 }} 
                                 style={{width:'100%'}}/>
                               
                            </Col> 

                            <Col xs={12} md={6} style={{background:'white',paddingTop:30}}>                            
                                <h4 style={{fontSize:18}}>{this.state.data.title}</h4>
                                <h6 style={{fontSize:14,paddingTop:10 , color:'#95a5a6'}}>{this.state.data.alamat}</h6>
                                <hr/>
                                  <Button variant="outline-success">Tersedia</Button>
                                <br/><br/>
                                <h5>Spesifikasi Singkat</h5>
                                <Row>
                                    <Col xs={12} md={6} style={{paddingBottom:10,padding:20}}>

                                        <Row>
                                        <img style={{width:45,height:45, marginRight:10, marginLeft:10}} src={Tanah}  alt="Luas Tanah"/>
                                        
                                        <span style={{color:'#95a5a6',fontSize:14,marginLeft:10}}> Luas Tanah<br/><span style={{color:'#000000'}}>{this.state.data.luas} m<sup>2</sup></span></span>
                                        </Row>
                                    </Col>
                                    <Col xs={12} md={6} style={{paddingBottom:10,padding:20}}>
                                         <Row>
                                        <img style={{width:45,height:45, marginRight:10, marginLeft:10}} src={Sertifikasi}  alt="Luas Tanah"/>
                                        
                                        <span style={{color:'#95a5a6',fontSize:14,marginLeft:10}}>Sertifikasi<br/><span style={{color:'#000000'}}>{this.state.data.sertifikasi}</span></span>
                                        </Row>  
                                    </Col>
                                   
                                </Row>
                                <hr/>
                                <Row>
                                <Col>
                                <i className="material-icons"  style={{float:'left', color:'#dc3545'}}>
                                flag  
                                </i>
                                 <h6 style={{float:'left',color:'#cc0001'}}>Laporkan Iklan </h6>
                                </Col>
                                <Col>
                                <h6 style={{float:'right', color:'#95a5a6'}}>
                                Dilihat :201</h6>
                                
                                <i className="material-icons" style={{float:'right', marginRight:5,color:'#95a5a6'}}>
                                visibility
                                </i>
                                </Col>
                                </Row>
                            </Col> 

                            
                        </Row>
                         
                    </div>   
                  </Col>

                  <Col xs={12} md={3} style={{padding:0}}>
                    <div className="content"style={{padding:0, paddingBottom:20}}>
                          <Col xs={12} md={12} style={{background:"#f09712",paddingLeft:20, paddingTop:20, paddingBottom:20}}>
                            <h3 style={{color:'white',fontSize:18}}>Dijual</h3>
                            <h4 style={{color:'white'}}>Rp {this.ambilangka(this.state.harga)} </h4>  
                          </Col>
                          <Col xs={12} md={12} style={{paddingTop:20}}>
                            <span >Pemasangan Iklan</span>
                                <Row style={{ marginTop:20,paddingLeft:1}}>
                                    <Col md={3}>
                                    <img style={{width:45,height:45, marginRight:10, marginLeft:10}} src={Tanah}  alt="Luas Tanah"/>
                                    </Col>
                                    <Col md={9}>
                                    <span>{this.state.data.penjual}<br/>
                                       <i className="material-icons"  style={{float:'left', color:'#95a5a6', fontSize:16}}>
                                location_on
                                </i>
                                 <span style={{float:'left',color:'#95a5a6'}}>Yogyakarta</span>
                                    </span>             
                                    </Col>                      
                                        </Row> 
                                   <hr/>

                          </Col>
                          <Col>
                            <Badge variant="info" style={{width:'100%', marginBottom:10,height:40, paddingTop:10,}} >{this.state.data.nomor_hp}</Badge>
                            </Col>
                          <Col>
                            <Button variant="danger" style={{width:'100%',color:'white'}}>
                             <a href={contact} > <b style={{color:'white'}}>Hubungi Penjual</b></a>
                            </Button>
                            </Col>
                    </div>   
                  </Col>

                  <Col xs={12} md={9}>
                    <div className="content">
                    <Col xs={12} md={12} style={{marginTop:0}}>
                        <div style={{marginLeft:-20, marginRight:-20, marginBottom:30, marginTop:0}}>
                            <h4><img style={{width:25,height:25, marginTop:0, marginRight:10, marginLeft:0}} src={Pilihan}  alt="logo"/> Detail Properti</h4>
                        </div>
                    </Col>

                     <Col xs={12} md={12} >
                        <Row style={{marginLeft:22}}>
                            <Col xs={12} md={2} style={{marginRight:0, marginLeft:0, paddingLeft:0, paddingRight:0}}>
                            <span><b>Spesifikasi</b></span>
                            </Col>
                            <Col xs={12} md={10} style={{marginRight:0, marginLeft:0, paddingLeft:0, paddingRight:0}}>
                              <Row xs={12} md={6} style={{marginRight:0,paddingLeft:-0}}>
                                <Col xs={3} md={2}>
                                <ul style={{listStyleType: "none", marginLeft:0, paddingLeft:0,fontSize:14,color:'#95a5a6'}}>
                                  <li>Kategori</li>
                                  <li>Jenis Iklan</li>
                                  <li>Status</li>
                                  <li>Harga</li>
                                </ul>
                                </Col>

                                <Col xs={3} md={5}>
                                <ul style={{listStyleType: "none", marginLeft:10, paddingLeft:0,fontSize:14,floar:'right'}}>
                                  <li>: {this.state.data.kategori}</li>
                                  <li>: {this.cek_nego(this.state.data.nego)}</li>
                                  <li>: Tersedia</li>
                                  <li>: Rp. {this.state.data.harga}</li>
                                </ul>
                                </Col>

                                <Col xs={3} md={2}>
                                <ul style={{listStyleType: "none", marginLeft:0, paddingLeft:0,fontSize:14,color:'#95a5a6'}}>
                                  <li>Luas Tanah</li>
                                  <li>Sertifikasi</li>
                                  
                                </ul>
                                </Col>

                                <Col xs={3} md={2}>
                                <ul style={{listStyleType: "none", marginLeft:10, paddingLeft:0,fontSize:14,floar:'right'}}>
                                  <li>: {this.state.data.luas} m<sup>2</sup></li>
                                  <li>: {this.cek_nego(this.state.data.nego)}</li>
                                </ul>
                                </Col>
                                
                                
                                
                                
                              
                              </Row>
>>>>>>> 89051cf6b8c34e6d993d8e63cae520cafea9cd79
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
<<<<<<< HEAD
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
                      
=======
                    <hr/>
                    <Col xs={12} md={12}>
                     <Row style={{marginLeft:22}}>
                      <Col xs={12} md={2} style={{marginRight:0, marginLeft:0, paddingLeft:0, paddingRight:0}}>
                      <span><b>Deskripsi</b></span>
                      </Col>
                      <Col xs={12} md={8} style={{marginRight:0,paddingLeft:-0,float:'left',fontSize:14,color:'#95a5a6'}}>
                             {this.state.data.keterangan}
                            </Col>
                      </Row>
>>>>>>> 89051cf6b8c34e6d993d8e63cae520cafea9cd79
                    </Col>
                  </Row>
                </Col>
                <br/>
                <hr/>

<<<<<<< HEAD
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
=======
                    </div>   
                     
                  </Col>
            </Row>
          </Container>

      </React.Fragment>

           
      );
>>>>>>> 89051cf6b8c34e6d993d8e63cae520cafea9cd79
  }
}

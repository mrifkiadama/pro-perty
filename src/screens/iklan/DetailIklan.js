import React, { Component } from 'react';
import AsyncFetch from '../../api/AsyncFetch'
import { Container, Row, Col} from 'react-bootstrap';
import { Button,Badge} from 'react-bootstrap';
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
                            </Col>
                        </Row>
                        
                    </Col>
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
                    </Col>

                    </div>   
                     
                  </Col>
            </Row>
          </Container>

      </React.Fragment>

           
      );
  }
}

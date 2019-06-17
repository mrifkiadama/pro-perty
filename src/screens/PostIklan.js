import React, { Component } from "react";
import "./PostIklan.css";
import {Container, Col, Row} from 'react-bootstrap';
import { Form,DropdownButton,DropdownItem,InputGroup,FormControl,Button} from "react-bootstrap";



class ProdukUnggulan_list extends Component {
  render() {
    return (
        <Container>
        <Row>
         <Col xs={5} md={5}>
            <div className="content" style={{display:'fixed'}}>
                <div className="box1">
                    <h4>Judul Iklan <span>*</span></h4>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea"  rows="3"  placeholder="Masukkan judul iklan"  className="form"/>
                        </Form.Group>
                    </Form>
                </div>
                <div className="box2">
                    <h4>Lokasi <span>*</span></h4>
                    <DropdownButton variant='full'  size='lg' title="Pilih Lokasi" className="select_option">
                        <DropdownItem href="#/action-1">Action</DropdownItem>
                        <DropdownItem href="#/action-2">Another action</DropdownItem>
                        <DropdownItem href="#/action-3">Something else</DropdownItem>
                    </DropdownButton>
                </div>
                 <div className="box3">
                    <h4>Kategori <span>*</span></h4>
                    <DropdownButton variant='full'  size='lg' title="Pilih Kategori" className="select_option" >
                        <DropdownItem href="#/action-1">Action</DropdownItem>
                        <DropdownItem href="#/action-2">Another action</DropdownItem>
                        <DropdownItem href="#/action-3">Something else</DropdownItem>
                    </DropdownButton>
                </div>
            </div>

             <div className="content" style={{display:'fixed',marginTop:20}}>
                <div style={{marginTop:10}}>
                    <h4>Nomor Telepon 1</h4>
                    <InputGroup size="lg">
                        <FormControl className="input-form" aria-describedby="inputGroup-sizing-sm" placeholder="Default dari profil" style={{background:' #f9f7f7'}}/>
                    </InputGroup>
                </div>
                  <div style={{marginTop:10}}>
                    <h4>Nomor Telepon 2 <small>(opsional)</small></h4>
                    <InputGroup size="lg">
                        <FormControl className="input-form" aria-describedby="inputGroup-sizing-sm" placeholder="Masukkan no telepon 2" style={{background:' #f9f7f7'}}/>
                    </InputGroup>
                </div>
                  <div style={{marginTop:10}}>
                    <h4>Nomor Telepon 3 <small> (opsional)</small> </h4>
                    <InputGroup size="lg">
                        <FormControl className="input-form" aria-describedby="inputGroup-sizing-sm" placeholder="Masukkan no telepon 3" style={{background:' #f9f7f7'}}/>
                    </InputGroup>
                </div>
            </div>
      </Col>

       <Col xs={7} md={7}>
            <div className="content" style={{display:'fixed'}}>
                <div className="box1">
                      <Form>
                      
                        <h4>Alamat Properti <span>*</span></h4>
                        <Form.Group >
                            <Form.Control size="lg" type="text" placeholder="Masukkan Alamat Properti" style={{background:' #f9f7f7'}}/>
                            <Form.Text className="text-muted">
                             Alamat lengkap properti.Nama jalan,desa,RT dll..
                            </Form.Text>
                        </Form.Group>

                        <h4>Harga <span>*</span></h4>
                        <Row>
                           <Col sm={8} md={8} lg={8} xs={8}>
                              <Form.Group style={{width:'100%'}} >
                                <Form.Control size="lg" type="text" placeholder="Masukkan Alamat Properti" style={{background:' #f9f7f7',width:'100%'}}/>
                              </Form.Group>
                           </Col>
                           <Col sm={4} md={4} lg={4} xs={4} style={{marginTop:10,fontSize:12,marginRight:0,color:'grey',paddingLeft:0}}>
                           <span>Contoh: 3.000.000</span>
                           </Col>
                        </Row>
                         <h4>Luas Tanah <span>*</span></h4>
                        <Row>
                            <Col sm={8} md={8} lg={8} xs={8}>
                                <Form.Group style={{width:'100%'}} >
                                   <Form.Control size="lg" type="text" placeholder="Masukkan Luas Tanah"  style={{background:' #f9f7f7',width:'100%'}}/>
                                </Form.Group>
                            </Col>
                            <Col sm={4} md={4} lg={4} xs={4} style={{marginTop:10,fontSize:12,marginRight:0,color:'grey',paddingLeft:0}}>
                                <span>dalam meter persegi</span>
                            </Col>
                        </Row>
                       
                       

                        <h4>Sertifikasi <span>*</span></h4>
                        <DropdownButton variant='full'  size='lg' title="Pilih Sertifikasi" style={{width:'60%',background:' #f9f7f7',border:'solid 1'}}>
                           <DropdownItem href="#/action-1">Action</DropdownItem>
                           <DropdownItem href="#/action-2">Another action</DropdownItem>
                           <DropdownItem href="#/action-3">Something else</DropdownItem>
                        </DropdownButton>
                       
                        <br/>
                        <h4>Deskripsi Iklan <span>*</span></h4>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea"  rows="5"  placeholder="Masukkan deskripsi iklan"  className="form"/>
                        </Form.Group>

                        <h4>Upload Foto <span>*</span></h4>
                        <Row style={{paddingLeft:10}}>
                           <div className="kotak"></div>
                           <div className="kotak"></div>
                           <div className="kotak"></div>
                           <div className="kotak"></div>
                        </Row>
                        <Row style={{paddingLeft:10}}>
                           <div className="kotak"></div>
                           <div className="kotak"></div>
                           <div className="kotak"></div>
                           <div className="kotak"></div>
                        </Row>
                        <small>Gambar maksimal ukurannya 5mb</small><br/>

                        <Button variant="warning" size="lg" type="submit" style={{marginTop:20,width:'100%'}}>
                            Post Iklan
                        </Button>
                   
                    </Form>
                </div>
            </div>
      </Col>
      </Row>
    </Container>
    );
  }
}
 
export default ProdukUnggulan_list;
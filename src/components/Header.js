import React, { Component } from 'react'
import {Link } from "react-router-dom";
import {Navbar, Form, FormControl, 
  Container,
  ListGroup,
  Popover, OverlayTrigger,
  InputGroup,Button} from 'react-bootstrap';
import queryString from 'query-string';


export default class Header extends Component {


constructor(props) {
    super(props);

    
  this.state = {
      jenis: 'semua',
      alamat: 'semua',
      title: '',
      url:'#/ListIklan'
  }
}

   _handleFind = (e) => {
    if (e.key === 'Enter') {
      //Print Console Log Key Pencarian
      console.log('Proses Mencari');
      console.log(this.state.alamat);
      console.log(this.state.title);
              
    }
    }


  _handleFind_button = (e) => {
      //Print Console Log Key Pencarian
      console.log('Proses Mencari');
      console.log(this.state.alamat);
      console.log(this.state.jenis);
      console.log(this.state.title);
      let url='#ListIklan'
      let alamat='?alamat='+this.state.alamat
      let katakunci='&cari='+this.state.title
      this.setState({url:url+alamat+katakunci});


     let url_ku = this.props.location.search;
     let params = queryString.parse(url_ku);
     console.log(params);
     console.log(params.alamat)
     this.setState({alamat:params.alamat})
  }
  handleChange(event) {
  this.setState({title: event.target.value})
}


   render() {
    const Pop_alamat = (
  <Popover  title="Pilih Lokasi">
            <ListGroup variant="flush" id="alamat">
              <ListGroup.Item onClick={() => this.setState({alamat:'semua'})}>Semua Lokasi</ListGroup.Item>
              <ListGroup.Item onClick={() => this.setState({alamat:'yogyakarta'})}>Yogyakarta</ListGroup.Item>
              <ListGroup.Item onClick={() => this.setState({alamat:'KulonProgo'})}>KulonProgo</ListGroup.Item>
              <ListGroup.Item onClick={() => this.setState({alamat:'Bantul'})}>Bantul</ListGroup.Item>
            </ListGroup>
  </Popover>
    );
    return (
   <Container style={{marginBottom:-20}} >
             <center>
             <a href="/" style={{textDecoration: 'none'}}>
             <h1 style={{color: 'white',fontWeight:'bold',paddingTop:30}}>PROperty.com</h1>
             </a>
             </center>
             <center><span style={{color:'white'}}>Nikmati kemudahan bertransaksi property</span></center>
   
              <Navbar.Brand ></Navbar.Brand>
              <center>
              <Navbar bg="none" style={{marginLeft:0,marginRight:-10}}>
          
                  <Form inline style={{width:'100%',marginRight:-15}}>
                      <InputGroup  size="lg" className="mb-3" style={{marginRight:10, width:420}}>
                          <InputGroup.Prepend>
                              <InputGroup.Text id="icon_search" style={{backgroundColor: 'white'}}>
                              <i className="material-icons">location_on</i>
                              </InputGroup.Text>
                          </InputGroup.Prepend>
                          <OverlayTrigger trigger="focus" placement="bottom" overlay={Pop_alamat}>
                          <FormControl id="icon_search" placeholder={"Pilih Lokasi "+this.state.alamat} aria-label="Username"/>
                          </OverlayTrigger>

                          
                      </InputGroup>                 

                      <InputGroup size="lg" className="mb-3" style={{width:650}}>
                          <InputGroup.Prepend>
                              <InputGroup.Text id="icon_search" style={{backgroundColor: 'white'}}>
                              <i className="material-icons">
                              search
                              </i>
                              </InputGroup.Text>
                          </InputGroup.Prepend>
                          <FormControl placeholder="Cari Kata Kunci.." aria-label="Username" onKeyDown={this._handleFind} 
                          onChange={this.handleChange.bind(this)}
                           id="icon_search" /> 
                      <Link to={{ pathname: '/ListIklan',
                      search:'?alamat='+this.state.alamat+'&cari='+this.state.title,
                      state: 'flushDeal' }}  style={{textDecoration: 'none'}}>   
                      <InputGroup.Append>
                          <Button style={{color:'white', height:49, width:80}} variant='warning'
                          onChange={this.handleChange.bind(this)}
                          >Cari</Button>
                        </InputGroup.Append>
                      </Link>
                      
                      </InputGroup>
                  </Form>
              </Navbar>
              </center>          
            </Container>
            )
  }
}
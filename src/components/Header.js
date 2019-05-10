   import React, { Component } from 'react'

import {Navbar, Form, FormControl, 
  Dropdown,
  Container,
  DropdownButton, ListGroup,
  Popover, OverlayTrigger,
  InputGroup,Button} from 'react-bootstrap';


export default class Header extends Component {


constructor(props) {
    super(props);

    
  this.state = {
      jenis: 'Semua',
      alamat: 'Semua',
      'title': 'Semua',
  }
}

   _handleFind = (e) => {
    if (e.key === 'Enter') {
      //Print Console Log Key Pencarian
      console.log('Proses Mencari');
      console.log(this.state.alamat);
      console.log(this.state.jenis);
      console.log(this.state.title);
              
    }
  }
  handleChange(event) {
  this.setState({title: event.target.value})
}


   render() {
    const Pop_alamat = (
  <Popover  title="Pilih Lokasi">
            <ListGroup variant="flush" id="alamat">
              <ListGroup.Item onClick={() => this.setState({alamat:'Semua'})}>Semua Lokasi</ListGroup.Item>
              <ListGroup.Item onClick={() => this.setState({alamat:'Yogyakarta'})}>Yogyakarta</ListGroup.Item>
              <ListGroup.Item onClick={() => this.setState({alamat:'KulonProgo'})}>KulonProgo</ListGroup.Item>
              <ListGroup.Item onClick={() => this.setState({alamat:'Bantul'})}>Bantul</ListGroup.Item>
            </ListGroup>
  </Popover>
    );
    return (
   <Container style={{marginBottom:-20}} >
             <center><h1 style={{color: 'white',fontWeight:'bold',paddingTop:30}}>PROperty</h1></center>
             <center><span style={{color:'white'}}>Nikmati kemudahan bertransaksi property</span></center>
   
              <Navbar.Brand ></Navbar.Brand>
              <Navbar bg="none" style={{marginLeft:-15,marginRight:-15}}>
        
                  <Form inline style={{width:'100%',marginRight:-15}}>
                      <InputGroup className="mb-3" style={{marginRight:10}}>
                          <InputGroup.Prepend>
                              <InputGroup.Text id="icon_search" style={{backgroundColor: 'white'}}>
                              <i className="material-icons">location_on</i>
                              </InputGroup.Text>
                          </InputGroup.Prepend>
                          <OverlayTrigger trigger="focus" placement="bottom" overlay={Pop_alamat}>
                          <FormControl id="icon_search" placeholder={"Pilih Lokasi "+this.state.alamat} aria-label="Username"/>
                          </OverlayTrigger>

                          <DropdownButton as={InputGroup.Append} title="" variant="light" id="input-group-dropdown-2">
                              <Dropdown.Item eventKey='jual' onClick={() => this.setState({jenis:'Semua Jenis'})}>Semua Jenis</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item eventKey='jual' onClick={() => this.setState({jenis:'Dijual'})}>Jual</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item eventKey='sewa' onClick={() => this.setState({jenis:'Sewa'})}>Sewa</Dropdown.Item>
                        </DropdownButton>
                      </InputGroup>                 

                      <InputGroup className="mb-3" style={{width:'50.7%'}}>
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

                      <InputGroup.Append>
                          <Button style={{color:'white'}} variant='warning'>Cari</Button>
                        </InputGroup.Append>
                      </InputGroup>
                  </Form>
              </Navbar>          
            </Container>
            )
  }
}
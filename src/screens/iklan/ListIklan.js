import React, { Component } from 'react';
import millify from 'millify';
import { Card, Button, Container, Badge } from 'react-bootstrap';
import ProdukUnggulan from '../ProdukUnggulan';
import { Row, Col} from 'react-bootstrap';
import HeaderSearch from '../../components/HeaderSearch'
import AsyncFetch from '../../api/AsyncFetch'
import queryString from 'query-string';

import ScrollToTop from 'react-router-scroll-top'   

export default class ListIklan extends Component {

  state = {
      data: [],
      url: "",
      url_data: "",
      isFlushed: false
  }

  setStateAsync(state) {
      return new Promise(resolve => {
          this.setState(state, resolve)
      })
  }

  async componentDidMount(){
      console.log("Component A Will Mount")
      const url = this.state.url
      console.log(url)        
      console.log("SetState with AsyncFetch")
      await this.setStateAsync({
          isLoad: true,
          ...await AsyncFetch(url)
      })
  }

// set default state of isFlushed = false, which means it's ready for data flushing

componentWillReceiveProps(nextProps) {
  // check current props and nextPros of dealLoaded flag. If dealLoaded was false, and is true, which means the data is fetched, then we should reset isFlushed
  if (!this.props.dealLoaded && nextProps.dealLoaded) {
    this.setState({
      isFlushed: false
    });
  }
  // since we assigned the location.state in <Link>, if we see this prop, and the data is not flushed yet, then flush data, in this case we call loadDeals(), which is a redux action
  if (!this.state.isFlushed && nextProps.location.state === 'flushDeal') {
     window.location.reload();
    this.setState({
      isFlushed: true,
    }, () => this.componentWillMount(), this.componentDidMount(), this.setStateAsync())
  }
}


  async componentWillMount() {

     let url_ku = this.props.location.search;
     let params = queryString.parse(url_ku);
     console.log(params);
      console.log(params.alamat)
      let url_api='http://apiproday.herokuapp.com/api/v1/search?kategori=semua&kab=semua&'
      let provinsi='provinsi='+params.alamat
      let cari ='&cari='+params.cari
      this.setState({url:url_api+provinsi+cari})
      console.log(this.state.url_data)
  }
  ambilangka(value) {
      return millify(value, {
          precision: 2,
          decimalSeparator: ',',
          units: ['', 'Ribu', 'Juta', 'Milyar', 'Triliun'],
          space: true,
      })
  }
  nego(value) {
      if (value === 'true') {
          return "Nego"
      } else {
          return ""
      }
  }

  render () {
     let children = []
           if (this.state.isLoad) {
               children = this.state.data
               console.log(children)
           }else {

           }
    if (this.state.data && this.state.data.length) {
       return (
            <React.Fragment>
         

    <ScrollToTop/>
            <ProdukUnggulan/>
                <Container  style={{display: 'flex', paddingLeft:10,paddingRight:10}} >
                  
                <div className="content">
                <Row>
        { ! this.state.isLoad && <label>Loading ... </label> }
       
            { this.state.isLoad && children.map((value, index) => 

            <React.Fragment key={value.id}>
              <center>
             <Card style={{ width: '16rem',margin:10}} id={'ListIklan'}>
                    
                        <Card.Img  variant="top" src={value.foto} onError={(e) => {
                        e.target.src = 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png' // some replacement image
                         }} />
                 
                    <Card.Body>

                        <Badge variant="secondary" style={{float:'left'}}>{value.kategori}</Badge><br/>
                        <Card.Title style={{fontWeight:540,float:'left'}}>{(value.title.substring(0,60))}</Card.Title>
                        <br/>
                        <br/>
                        <Card.Subtitle className="mb-2 text-muted" style={{float:'left'}}>{value.alamat}</Card.Subtitle>
                        <Card.Title style={{color: '#3D87F3',marginTop:25, marginBottom:25, fontWeight:500, float: 'left'}}>
                        Rp {this.ambilangka(value.harga)}
                            <h2 style={{fontSize:15, color: '#95a5a6', float: 'right', marginLeft:10}}> {this.nego(value.nego)}</h2>
                        </Card.Title>
                       <a href="#/DetailIklan">
                        <Button  variant="outline-warning" style={{ width: '100%', height: '30%', justifyContent: 'center', alignItems: 'center'}}>
                        Hubungi Penjual</Button>
                        </a>
                        
                    </Card.Body>

                </Card>
                </center>
            </React.Fragment>

            )  }
            </Row>
            </div>
          </Container>
      </React.Fragment>
           
      );
    }else {
       return (
           <React.Fragment>
            <HeaderSearch/>

    <ScrollToTop/>
                <Container style={{display: 'flex', paddingLeft:10}} >
                  
                <div style={{marginLeft:15}}>
                <Row>
              <center>
             ini
                </center>
            </Row>
            </div>
          </Container>
      </React.Fragment>
        );

    }

     
   
   
  }
}
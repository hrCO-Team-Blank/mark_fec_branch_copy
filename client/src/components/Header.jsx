import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
// CC - added Link
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: 5
    };
    // CC - Added bindings for methods
    this.setSearchInput = this.setSearchInput.bind(this);
  }
  // CC - added lifecycle method to dynamically update page upon searching for a new productId
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      this.props.getProductData(this.state.searchInput);
      window.location.reload();
    }
  }

  setSearchInput(e) {
    e.preventDefault();
    console.log(e);
    this.setState({searchInput: e.target.value})
  }
  // CC - commented out
  /* changeProductID(e) {
    e.preventDefault();
    this.props.handleProductChange(this.state.searchInput);
    this.setState({ searchId: this.state.searchInput });
  }*/

  render() {
    if (this.props.handleProductChange === undefined) {
      return <div>Loading...</div>
    } else {
    return (
      <div>
        <Container>
          <Row className='mb-2' style={{backgroundColor: '#454647'}}>
            <Col className='font-weight-bold' style={{fontSize: "28px", textAlign: 'left', fontStyle: 'italic', textDecorationLine: 'underline', color: 'white'}}>nKings</Col>
            <Col className='mt-2 mb-2' style={{textAlign: 'right'}}>
              {// CC - added refactored form with Link component from react router
              }
              <form
                style={{ display: 'flex', flexDirection: 'row' }}>
                <label>
                  <input
                    type='text'
                    name='searchId'
                    placeholder='Search'
                    value={this.state.searchInput}
                    onChange={this.setSearchInput}
                  />
                  <Link
                    style={{ textDecoration: 'none' }}
                    to={`/${this.state.searchInput}`}
                  >
                    <button
                      className='glyphicon glyphicon-search ml-2'
                      style={{
                        position: 'relative', top: '5px', zIndex: '2', color: 'white', fontSize: '20px'}}
                    />
                  </Link>
                  {/*<div
                    className='glyphicon glyphicon-search ml-2'
                    style={{
                      position: 'relative', top: '5px', zIndex: '2', color: 'white', fontSize: '20px'}}
                    onClick={this.changeProductID}
                    />*/}
                </label>
              </form>
              {/* CC - commented out old form
              <form>
                <input type='number' name='searchID' placeholder='Search' onChange={(e)=>{this.setSearchInput(e)}}/>
                <div className='glyphicon glyphicon-search ml-2' style={{position: 'relative', top: '5px', zIndex: '2', color: 'white', fontSize: '20px'}} onClick={(e)=>{this.changeProductID(e)}}></div>
              </form>*/}
            </Col>
          </Row >
          <Row style={{textAlign: 'center'}}>
            <div className='' style={{fontSize: "14px", textAlign: 'center'}}>Deals! Deals! Deals! We Have the Best Deals! Very Special Price for You! -- Click <a href="javascript:alert('Just Kidding!');" className='font-weight-bold'>HERE</a> for 1% Off Discount Code!
            </div>
          </Row>
        </Container>
      </div>
    );
  }}
}
{/* <div className='glyphicon glyphicon-search' style={{display: 'inline-block', position: 'absolute', top: '20px', right: '20px', zIndex: '2', color: 'white', fontSize: '40px', textShadow: '-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black'}}></div> */}
export default Header;
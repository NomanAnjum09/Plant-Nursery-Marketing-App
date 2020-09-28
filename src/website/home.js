import Navbar from './navabar.js'
import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import PF from '../images/Profile.jpeg'
import {Link} from 'react-router-dom'
import {
  Container,
  Grid,
  Header,
  Image,  
  Segment,
} from 'semantic-ui-react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import WR from '../images/WRose.jpeg'
import VR from '../images/VRose.jpeg'
import PWR from '../images/PWRose.jpeg'
import PR from '../images/PRose.jpeg'


class Home extends Component {
  render(){
    return(
<div>
  <Navbar />
  <Segment style={{backgroundColor:"black",marginTop:"-10px"}}>
  <Carousel >
                <div>
                    <img alt="" src={WR} />
                    <p style={{ color:"#F7E1BA",fontSize:"18px",fontWeight:"bold"}} className="legend">Home You Dream Of Every Day. We Make Your Dream Go Real</p>
                </div>
                <div>
                    <img alt="" src={PR} />
                    <p style={{ color:"#EFA0D9",fontSize:"18px",fontWeight:"bold"}} className="legend">Peace You Desire In This Noisy World. We Bring Peace To Your Soul</p>
                </div>
                <div>
                    <img  alt="" src={PWR} />
                    <p style={{ color:"#F15151",fontSize:"18px",fontWeight:"bold"}} className="legend">Beauty You Seek. We Make Your Life Beautiful</p>
                </div>
                <div>
                    <img alt="" src={VR} />
                    <p style={{ color:"#E551F1",fontSize:"18px",fontWeight:"bold"}} className="legend">Life You Ever Wished. We fulfill Your Wishes In Best Possible Way.</p>
                </div>
                
            </Carousel>

  </Segment>
    <Segment style={{ padding: '8em 0em',background:"#22DEF7", marginTop:"-15px" }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Know What You Want
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              We can give your soul superpowers to do things that it never thought possible.
              Let us delight you and empower your needs... through things you love and seek
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Provide Bananas That Can Dance
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes that's right, you thought it was the stuff of dreams, but even bananas can be
              bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered circular size='large' src={PF} />
          </Grid.Column>
        </Grid.Row>
      
      </Grid>
    </Segment>

   

    

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
            <Link className="link" to='/services'><Header inverted as='a' content='Services' /></Link>
             

            </Grid.Column>
            <Grid.Column width={3}>
            <Link className="link" to='/gallery'><Header inverted as='a' content='Gallery' /></Link>
              
            </Grid.Column>
            <Grid.Column width={3}>
            <Link className="link" to='/contact'><Header inverted as='a' content='Contact Us' /></Link>
              
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                The Al Khaliq Nursery
              </Header>
              <p>
                All Rights Reserved &reg;. The Al Khaliq Nursery &copy;
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

</div>
    )
  }
}
export default Home;
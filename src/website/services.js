import React, { Component } from 'react'
import Navbar from '../website/navabar.js'
import image1 from '../images/service1.jpg'
import image2 from '../images/service2.jpg'
import image3 from '../images/service3.png'
import './style.css'
import {Row} from 'react-bootstrap'
import {
    Card,
    Container,
    Grid,
    Header,
    Segment,
  } from 'semantic-ui-react'
  import {Link} from 'react-router-dom'
class Services extends Component {


    render(){return(
        <div >
           
            <Navbar />

            <br /><br /><br />
            <Container>

                <Row>
      
             <Card style={{width: '70%'}}
    image={image1}
    header='Complete Home Plantation Service'
    meta="We Turn Your House Green. From Top To Bottom"
    description="Call Us And Leave Rest To Us. You'll be startled with the new Natural Look Of Your Home Within Days"
    
  />
  
  </Row>
  <Row style={{marginTop:"2%"}}>
              <Card style={{width: '50%',marginLeft:"40%"}}
    image={image2}
    header='Instant Home Delivery'
    meta='Get Plants On A PHone Call'
    description='Reluctant To Go Out And Buy Some Plants. Call Us Now. We Will deliver your Desired Plants in a considerable Time'
    
  />
  </Row>
  <Row style={{marginTop:"2%"}}> 
             <Card style={{width: '50%'}}
    image={image3}
    header='Other Home Service'
    meta='Your House Need Some Repair??'
    description="We're in contact with tens of reliable Plumbers,Eelctricians, Motor Mechanics and Carpenters. You Need One? Contact us and leave the problem for us to solve."
    
  />
  </Row>
  </Container>
  <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
            <Link className="link" to='/'><Header inverted as='a' content='Home' /></Link>
             

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
    )}
}

export default Services;
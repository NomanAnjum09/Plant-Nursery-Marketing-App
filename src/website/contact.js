import React, { Component } from 'react'
import { Container,Row } from 'react-bootstrap'
import Navbar from '../website/navabar.js'
import back from '../images/back2.jpg'
import { Header,Icon,Grid,Segment } from 'semantic-ui-react'
import 'react-chat-widget/lib/styles.css';
import ChatBot from './chat.js'
import {Link} from 'react-router-dom'
class contacts extends Component {

    
    handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        // Now send the message throught the backend API
      }
    render() {
        return (
<div>            <Navbar />
            <div style={{ backgroundImage: `url(${back})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
<Container>
  <ChatBot />
<Row>
                         {/* <Container style={{ marginTop: "10%", width: "500px", height: "505px", backgroundImage: "linear-gradient(to right, rgb(2, 255, 200) 0%, rgba(21, 210, 235, 0.22) 0%,rgba(16, 227, 255, 0.22) 30%)" }}>
                                <br /><br /><br /><br />
                                <Form >
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label style={{ fontSize: "25px", fontWeight: "bold", color: "#9FF1FC" }}>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email" />
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label style={{ fontSize: "25px", fontWeight: "bold", color: "#9FF1FC" }}>We Like To Hear From You</Form.Label>
                                        <Form.Control as="textarea" rows="10" placeholder="Breif Us About Your Order" />

                                    </Form.Group>
                                        <Button>Submit</Button>
                                </Form>
                            </ Container> 
           */}
                            <Container style={{marginTop:"10%", width: "500px", height: "500px", backgroundImage: "linear-gradient(to right, rgb(2, 255, 200) 0%, rgba(21, 210, 235, 0.22) 0%,rgba(16, 227, 255, 0.22) 30%)" ,color:"#01FFF9", fontSize:"18px",fontWeight:"bold"}}>
                           <Header as="h1" style={{color:"#01FF94",fontWeight:"bold",fontSize:"35px"}} >Contact Us</Header>
                           <br /><br />
                           <Row>
                           <Icon name="envelope outline" size="huge"></Icon>
                               Gmail: hamzaali29@gmail.com
                               
                           </Row>
                           <br />
                           <Row>
                               <Icon name="facebook official" size="huge"></Icon>
                               Facebook:hamzaali29
                           </Row>
                           <br />
                           <Row>
                               <Icon name="instagram" size="huge"></Icon>
                               Instagram:hamzaali29
                           </Row>
                           <br />
                           <Row>
                               <Icon name="phone" size="huge"></Icon>
                               Mobile:03001234567
                           </Row>
                            </Container>
                        
                            </Row>
                            </Container>
                {/* <Widget
                title="How I may Help You"
                subtitle="Live Help Desk"
          handleNewUserMessage={this.handleNewUserMessage}
        /> */}            <br /><br />

            </div>
            <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
          <Grid.Column width={3}>
          <Link className="link" to='/'><Header inverted as='a' content='Home' /></Link>
              
            </Grid.Column>
            <Grid.Column width={3}>
            <Link className="link" to='/services'><Header inverted as='a' content='Services' /></Link>
             

            </Grid.Column>
            <Grid.Column width={3}>
            <Link className="link" to='/gallery'><Header inverted as='a' content='Gallery' /></Link>
              
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


export default contacts;
import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import Back from '../images/back.jpg'
import Navbar from '../website/navabar.js'
import { Container } from 'react-bootstrap'
import firebase from "firebase/app";
import "firebase/auth";
import { Redirect,Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react'
class Sigin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      admin: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.login = this.login.bind(this)
    // const provider = new firebase.auth.GoogleAuthProvider();

  }
  handleChange(e) {

    this.setState({
      [e.target.name]: e.target.value
    })
  }
  login() {
    if (this.state.email !== "" && this.state.password !== "") {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((data) => {
          alert("Valid Email")
          this.props.setCredentials(data)
          this.setState({
            admin: true
          })
        }).catch(function (error) {
          // Handle Errors here.
          //var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
          // ...
        });
      }
      else {
        alert("Please Enter Valid Email.")
      }
    }
    else {
      alert("Please Provide Credentials")
    }

  }
  render() {
    if (this.state.admin === true)
      return <Redirect to='/admin' />
    else
      return (
        <div>
        <div style={{ backgroundImage: `url(${Back})`, backgroundRepeat: "no-repeat", backgroundSize: 'cover', backgroundAttachment: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }}>
          <Navbar />
          <Container style={{ marginTop: "90px", width: "90%", height: "500px", backgroundImage: "linear-gradient(to right, rgb(2, 255, 200) 0%, rgba(21, 210, 235, 0.22) 0%,rgba(16, 227, 255, 0.22) 30%)" }}>

            <br /><br /><br /><br /><br /><br />
            <Form >
              <Form.Field>
                <label style={{ fontSize: "25px", color: "orange", textAlign: "center", backgroundImage: "linear-gradient(to right, rgb(148, 226, 178) 0%, rgb(2, 255, 200) 0%, rgba(21, 210, 235, 0.22) 0%,rgba(16, 227, 255, 0.22) 100%)" }}>Enter Email</label>
                <input placeholder='Email' name="email" onChange={(e) => this.handleChange(e)} />
              </Form.Field>
              <Form.Field>
                <label style={{ fontSize: "25px", color: "orange", textAlign: "center", backgroundImage: "linear-gradient(to right, rgb(148, 226, 178) 0%, rgb(2, 255, 200) 0%, rgba(21, 210, 235, 0.22) 0%,rgba(16, 227, 255, 0.22) 100%)" }}>Password</label>
                <input placeholder='Password' type="password" name="password" onChange={(e) => this.handleChange(e)} />
              </Form.Field>

              <Button variant="primary" onClick={this.login} >Login</Button>
            </Form>
          </Container>
          <br /><br /><br /><br />
          <Segment inverted vertical style={{ padding: '5em 0em',marginTop:"0" }}>
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
     
        </div>
      )
  }

}
const mapStateToProps=(state)=>{

  return{
  

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setCredentials: (data) => {
      dispatch({ type: 'setCredentials', payload: { data } })
    },


  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Sigin);
import React, { Component } from 'react';
import FileBase64 from 'react-file-base64';
import '../App.css';
import 'semantic-ui-css/semantic.min.css';
import firebase from '../firebase.js'
import { Button, Header, Modal, Icon, Card, Grid, Loader,Segment } from 'semantic-ui-react'
import Navbar from '../website/navabar.js'
import { Container } from 'react-bootstrap'
import { Redirect,Link } from 'react-router-dom'
import { connect } from 'react-redux'



class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pictures: [],
      location: null,
      loadedPics: [],
      load: true,
      credData:this.props.credData
    
    };
    
    this.onDrop = this.onDrop.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Delete = this.Delete.bind(this);
   
  }
  componentDidMount() {

    const itemsRef = firebase.database().ref('Pictures');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];

      if (items !== null) {
        Object.keys(items).forEach(key => {
          // console.log(key);
          //console.log(items[key].picture[0][0].base64);
          newState.push({
            location: items[key].location,
            pic: items[key].picture,
            id: key

          });
        });
      }



      console.log(newState);

      this.setState({
        loadedPics: newState,
        load: false,
      });
    }
    );

  }

  Delete(id) {
    const itemsRef = firebase.database().ref('Pictures');
    itemsRef.child(id).remove()
  }


  handleSubmit(e) {

    console.log("Sending To Firebase")
    e.preventDefault();
    const itemsRef = firebase.database().ref('Pictures');
    const item = {
      location: this.state.location,
      picture: this.state.pictures
    }
    itemsRef.push(item);
    this.setState({
      location: null,
      pictures: []
    });

  }
  handleChange(e) {
    this.setState({
      location: e.target.value
    })
  }
  onDrop(picture) {

    this.setState({
      pictures: [...this.state.pictures,picture],
    });
  }


  render() {
    if(this.props.credData===undefined || this.props.credData===null || this.state.credData===null)
      return(
        <Redirect to='/'></Redirect>
      )
      else
    return (
      <div >
        <Navbar />
        <Modal style={{ overflow: 'hidden', marginTop:"120px", width:"60%", height:"60%",marginLeft:"20%"}} trigger={<Button color="teal" style={{ marginTop: "3%" }}>Upload New Pictures</Button>}>

<Container>
{this.state.load===true ? <Loader style={{color:"white"}} active size='large' inline='centered'/>:<div></div>}

  <br />
          <Modal.Header style={{ fontSize:"18px",fontWeight:"bold",color:"#2C194D"}}>Select a Photo</Modal.Header>
          <br />
          <Modal.Content style={{ marginLeft: "-5px" }}>
            <Container>
            <Modal.Description >
              <div style={{ width:"120%" }}>
                <FileBase64
                  multiple={true}
                  onDone={this.onDrop}
                /></div>
              <br />
              <input type='text' onChange={this.handleChange} style={{ width: "50%", padding: "12px 20px", margin: "8px 0", boxSizing: "border-box", border: "none", borderBottom: "2px solid red" }}></input>

              <Header style={{ marginLeft: "15%" }} >Enter Site Location</Header>
              <br></br>
              <br />
              <Button style={{ marginLeft: "15%" }} color='green' inverted onClick={this.handleSubmit}>
                <Icon name='checkmark' /> Upload Picture
      </Button>

            </Modal.Description>
            </Container>
          </Modal.Content>
          </Container>
        </Modal>
        <br /><br />

        <Container style={{ width: "130%" }}>

          <Card.Group style={{ marginLeft: "5%" }}>

            {this.state.loadedPics.length < 1 && !this.state.loader ? <div style={{ color: "white", fontSize: "20px" }}>Gallery is Empty</div> :
              this.state.loadedPics.map((obj) => {
                return (
                  // <Grid.Column style={{width:"25%",marginTop:"1%"}}>
                  <Card style={{ marginLeft: "3%" }}>
                    <Card.Content header={'Site : ' + obj.location} />
                    <Card.Content >
                      <img alt="Card image cap" class="card-img-top img-fluid" src={obj.pic[0][0].base64} style={{ width: "100%", height: "15vw", "object-fit": "cover" }} />
                    </Card.Content>
                    <Card.Content>
                      <Button color="red" onClick={(e)=>{this.Delete(obj.id)}} >Delete</Button>
                    </Card.Content>
                  </Card>
                  // </Grid.Column>
                )
              })}
          </Card.Group>
        </Container>
<br /><br />
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
    )
  }
}
const mapStateToProps=(state)=>{
  
  return{
  credData:state.credData

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Upload);
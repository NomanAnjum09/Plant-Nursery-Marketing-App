import React,{Component} from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css';
import firebase from '../firebase.js'
import {
  Card,
  Container,
  Loader,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react'
import Navbar from './navabar.js'
import {Link,Redirect} from 'react-router-dom'
class Gallery extends Component{
    constructor(props){
        super(props);
        
        this.state = { pictures: null,
        location: null,
        loadedPics:[],
        loader:true,
        propImage:[],
        jump:false,
    };
      this.setProps = this.setProps.bind(this)
    }

    setProps(images,val){
      console.log(images)
      this.setState({
        propImage:images,
        jump:val
      })
    }

    componentDidMount(){
        const itemsRef = firebase.database().ref('Pictures');
  itemsRef.on('value', (snapshot) => {
    let items = snapshot.val();
    let newState = [];
    for (let item in items) {
      newState.push({
        location:items[item].location,
        pic: items[item].picture,
       
      });
    }
    console.log(newState);
    this.setState({
      loadedPics: newState,
      loader:false,

    })
  });

    }




    render(){
      if(this.state.jump===true)
      return(<Redirect push to={{
        pathname: '/images',
        state: { images:this.state.propImage}
    }}
/>)
      else  return(
<div > 
<Navbar />
  {this.state.loader ? <Loader indeterminate size="massive" active inline><span style={{color:"white"}}>Fetching Data</span></Loader>:<div></div>}

<br />
  <Card.Group style={{marginLeft:"5%"}}>
    
{this.state.loadedPics.length<1 && !this.state.loader ? <div style={{color:"white",fontSize:"20px"}}>Gallery is Empty</div>:
this.state.loadedPics.map((obj)=>{
    return(
      // <Grid.Column style={{width:"25%",marginTop:"1%"}}>
        <Card style={{marginLeft:"3%"}}>
                <Card.Content header={'Site : '+ obj.location} />
    <div onClick={()=>{this.setProps(obj.pic,true)}} >
    <Card.Content >
    <img alt="Card image cap" class="card-img-top img-fluid" src={obj.pic[0][0].base64} style={{ width: "100%",height: "25vw","object-fit": "cover"}} />
    </Card.Content>
    </div>
  </Card>
  // </Grid.Column>
    )
})}
 {/* </Grid.Row> */}
 {/* </Grid> */}
</Card.Group>
<br />
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


export default Gallery;
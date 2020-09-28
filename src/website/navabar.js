import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './style.css'
import { connect } from 'react-redux'
import {Button} from 'semantic-ui-react'
import firebase from "firebase/app";
import "firebase/auth";

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.SignOut = this.SignOut.bind(this)
    this.state={
      credData:this.props.credData
    }
  }

  SignOut(){
    firebase.auth().signOut().then((res)=> {
    let data=""
      this.props.logout(data)
      this.setState({
        credData:null
      })
    
    
    }).catch(function(error) {
     
      console.log(error)
  
  
    });
  }
  
  
  render(){
    return(
    <div>
<Navbar fixed="top"  bg="dark" expand="lg" variant="dark" >
  <Navbar.Brand href="#home" style={{marginLeft:"0%", fontSize:"25px",fontWeight:"bold"}}><span style={{color:"black",backgroundColor:"#22C5F7",padding:"6%"}}>Al</span><span style={{color:"#22C5F7",backgroundColor:"black",padding:"6%"}}>Khaliq</span><span style={{color:"black",backgroundColor:"#22C5F7",padding:"6%",marginRight:"90px"}}>Nursery</span></Navbar.Brand>
  <Navbar.Toggle style={{marginTop:"15px"}} aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:"20px"}}>
    <Nav className="mr-auto" style={{color:"#03C4FF"}}>
      <Link className="link" to='/'><div className="block">Home</div></Link>
      <Link className="link" to="/services"><div className="block">Services</div></Link>
      <Link className="link" to="/gallery"><div className="block">Gallery</div></Link>
      <Link className="link" to="/contact"><div className="block">Contact</div></Link>
      {this.state.credData!==null ? <Link className="link" to="/admin"><div className="block">Admin</div></Link>
:<div></div> }

    </Nav>
      {
            this.state.credData===null || this.state.credData===undefined ? 
            <Link className="link" to="/signin"><Button color="blue" style={{width:"120px",height:"50px",fontSize:"15px",fontWeight:"bold"}}>Sigin</Button></Link>:
            <Button color="red" onClick={(e)=>{this.SignOut(e)}}>SignOut</Button>

      }
  </Navbar.Collapse>
</Navbar>
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
    logout: (data) => {
      dispatch({ type: 'logout', payload: { data } })
    },


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
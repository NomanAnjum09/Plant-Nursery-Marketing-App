import React from 'react';
import NavBar from './navabar.js'
import { Carousel } from 'react-responsive-carousel';
import {
    Segment,
  } from 'semantic-ui-react'

export default function BigImage(props){
    console.log(props.location.state)
    return(
        <div style={{height:"100%",backgroundColor:"black"}}>
        <NavBar />
        <br /><br /><br /><br />
        <Segment style={{backgroundColor:"black",marginTop:"-10px"}}>
        <Carousel >


            {
                props.location.state.images.map((image)=>{
                   return( <div>
                    <img src={image[0].base64} />
                </div>
                )
            })
                
                }       
                      
                  </Carousel>
      
        </Segment>
        <br /><br /><br /><br /><br /><br />
        </div>
    )

} 
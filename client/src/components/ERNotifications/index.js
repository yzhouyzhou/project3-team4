import React from 'react';
import styled from 'styled-components';
import ee from 'event-emitter';
 
// const container =styled.div{ 
    
// background-color: #5555;
// color: red;
// padding: 17px;
// Position: absolute;
// top: ${props => props.top}px;
// right: 17px;
// z-index: 888;
// transition: top 0.6s ease;
//  }



const emitter = new ee ();

export const notify = (msg)=> {
    emitter.emit('notification', msg,);

}
export default class Notifications extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            top: -100,
            msg: '',
        };
    
    this.setimeout = null;


    emitter.on ('notification', (msg) => {
        this. onshow(msg);

    });
    }


// onshow = (msg) => {
//    if(this.setimeout){
//        setimeout( () =>{
//            this. timeout = setTimeout(() => {
//                this.showNotification(msg);
//            }, 600);
//        });
//  }else {
//        this. showNotification(msg);
//    }
// }

showNotification = (msg) => {
    this.setState({
        top: 17,
        msg
    }, () => {
 this.setimeout = setTimeout(() => {
     this.setState({
         top:-100,
     })
 }, 2000);
    });
}

    render(){
        return(
            <React.Fragment>
                <button onClick={this.onshow}>Send ER Notifications</button>
            <container top={this.state.top}> ER Notifications<i className="fa fa - bell"></i> </container>
            // </React.Fragment>
        );
    }
}




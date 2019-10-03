







import React from 'react';
import styled from 'styled-components';
import Notifications, {notify} from '../Notification';


const AppWrapper = styled.div
display: flex;
justify-content:center;
margin-top:100px;
;

const container = styled.dev
;

export default class App extends React.Component {
    
    constructor(props){
        super(props);
       
        this.state ={
            checked: false,
        }

  }
render(){
    return(
        <AppWrapper>
            <Container>
                <button onClic={() => notify('This is the ER notification')} k> on click </button>
                <Notifications/>
            </Container>
        </AppWrapper>
    );
}
}




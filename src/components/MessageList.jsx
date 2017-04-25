import React from 'react';
import Message from './Message.jsx';

import Card from 'material-ui/Card';
import List from 'material-ui/List';
import * as firebase from "firebase";
import _ from 'lodash';

class MessageList extends React.Component{
    constructor(props){
        super(props);
       this.state = {
            messages : []
        };
        this.config = {
  apiKey: "AIzaSyCALWPcHLe22BPHFSYZwjTaFoyW",
  authDomain: "react-stack-dddfc.firebaseapp.com",
  databaseURL: "https://react-stack-dddfc.firebaseio.com"
};


       this.firebaseRef =  firebase.initializeApp(this.config);
       debugger;
        this.messagesRef = this.firebaseRef.database().ref('messages');
        this.messagesRef.once("value",(dataSnapShot=>{
            var messages = dataSnapShot.val();
            this.setState({
                messages:messages
            })
        }));
    }
    render(){
   var messageNodes = this.state.messages.map((m)=>{
            return (
                <Message message={m.message}/>
            );
        });
        return (
            <Card style={{
                flexGrow:2,
                marginLeft:30
            }}>
            <List>
            {messageNodes}
            </List>
            </Card>
        );
    }
}

export default MessageList;
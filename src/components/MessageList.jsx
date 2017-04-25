import React from 'react';
import Message from './Message.jsx';

import Card from 'material-ui/Card';
import List from 'material-ui/List';
class MessageList extends React.Component{
    constructor(props){
        super(props);
       this.state = {
            messages : [
               {id:'1', message:'Hi mmm there h2222ow are you'},
                {id:'2',message:'i am fine and you?'}
            ]
        };
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
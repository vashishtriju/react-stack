import React from 'react';
import Channel from './Channel.jsx';

import Card from 'material-ui/Card';
import List from 'material-ui/List';
class ChannelList extends React.Component{
    constructor(props){
        super(props);
       this.state = {
            channels : [
               {id:'1', channel:'Java'},
                {id:'2',channel:'C#'}
            ]
        };
    }
    render(){
   var channelNodes = this.state.channels.map((c)=>{
            return (
                <Channel channel={c.channel}/>
            );
        });
        return (
            <Card style={{
                flexGrow:1
            }}>
            <List>
            {channelNodes}
            </List>
            </Card>
        );
    }
}

export default ChannelList;
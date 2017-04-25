import React from 'react';
import MessageList from './MessageList.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ChannelList from './ChannelList.jsx'
import MessageBox from './MessageBox.jsx';
injectTapEventPlugin();


class App extends React.Component{
    constructor(){
        super();
      
    }
    
    render(){
     return (
         <div>
         <AppBar title="Awesome Chat App"/>
         <div style={{
             display:'flex',
             flexFlow:'row wrap',
             maxWidth:1200,
             widows:'100%',
             margin:'30px auto 30px'
         }}>
         <ChannelList />
         <MessageList />
        
         </div>
          <MessageBox />
         </div>
         );
    }
    
}

export default App;
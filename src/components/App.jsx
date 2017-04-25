import React from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            messages : [
               {id:'1', message:'Hi mmm there h2222ow are you'},
                {id:'2',message:'i am fine and you?'}
            ]
        };
    }
        render(){
            debugger;
        var messageNodes = this.state.messages.map((m)=>{
            return (
                <div style={{color:'green'}}>{m.message}</div>
            );
        });
        return (
           <div>{messageNodes}</div>
        );
    }
    
}

export default App;
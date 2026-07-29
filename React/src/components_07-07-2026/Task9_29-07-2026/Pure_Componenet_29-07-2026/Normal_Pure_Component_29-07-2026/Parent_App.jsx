import React, {Component} from "react";
import Normal_Component from "./Normal_Component";
import Pure_Component from "./Pure_Component";


class Parent_App extends Component {
    state ={
        count:0,
        text: "",
    };
    render(){
        return(
            <div className="p-6 space-y-4">

                <input className="border p-2 rounded" 
                placeholder="Type Something"
                onChange={(e)=> this.setState({ text:e.target.value})}/>

                <button 
                className="bg-blue-600 text-lavender px-4 py-2 rounded"
                onClick={()=> this.setState({ count: this.state.count + 1})}> Increment</button>
                <h2 className="font-bold">Normal Component</h2>
                <br/>
                <Normal_Component count={this.state.count}/>
                <br/>
                <h2 className="font-bold">Pure Componenet</h2>
                <br/>
                <Pure_Component count={this.state.count}/>
            </div>
        )
    }
}


export default Parent_App
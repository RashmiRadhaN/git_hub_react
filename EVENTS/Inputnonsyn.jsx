import React, {Component} from 'react';

export default class Input extends Component{

constructor(){
    super()
    this.state={
        Data: " "
    }
}

componentDidMount(){
let inp=document.querySelector("input")
inp.addEventListener("keypress",(e)=>{
    this.setState({Data:e.target.value})
})
}

  render() {
    return(
      <div>
        <h1>Data={this.state.Data}</h1>
        <input type="text" />
      </div>
    )
  }
}



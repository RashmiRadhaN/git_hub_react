import React,{Component} from 'react'


export default class Synthentic extends Component {

constructor(){
    super()
    this.state={
        Data: ""
    }
}

// componentDidMount(){
//     let inp=document.querySelector("input")
//     inp.addEventListener("keypress",(e)=>{
//         this.setState({Data=e.target.value})
//     })




  render() {
    return (
      <div>
        Data={this.state.Data}<br />
        <input type="text"  onChange={(e)=>
        this.setState({Data:e.target.value})}/>
      </div>
    )
  }
}

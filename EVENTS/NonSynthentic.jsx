import React,{Component} from "react";



export default class NonSynthentic extends Component {

constructor(){
    super()
    this.state={
        username:"UPendra"
    }
}


componentDidMount(){
    let btn=document.querySelector("button")
    btn.addEventListener('click',()=>{
        this.setState({username:this.state.username="UPPIIIIIIIIIIII"})
    })
}


  render() {
    return (
      <div>
        {this.state.username}<br />
        <button>Change Name</button>
      </div>
    )
  }
}

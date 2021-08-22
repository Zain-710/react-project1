import React from "react";
export default class Card extends React.Component{
    render(){
        return (
            <div className="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={this.props.src} alt="Card image cap"/>
  <div className=" w-50 names p-2 d-flex justify-content-center" >{this.props.h1}</div>
 
</div>
        )
    }
}
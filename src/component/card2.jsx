import React from "react";
export default class Card2 extends React.Component{
    render(){
        return (
            <div class="card" style={{width: "18rem"}}>
            <img class="card-img-top" src={this.props.src} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-light w-100">Contact</a>
            </div>
          </div>
        )
    }
}
import React,{Component} from  "react"
import Card from "./card"
import Card2 from "./card2"
import img from "../aassets/imgs/architect.jpg"
import img2 from "../aassets/imgs/house2.jpg"
import img3 from "../aassets/imgs/house3.jpg"
import img4 from "../aassets/imgs/house4.jpg"
import img5 from "../aassets/imgs/house5.jpg"
import img6 from "../aassets/imgs/team1.jpg"
import img7 from "../aassets/imgs/team2.jpg"
import img8 from "../aassets/imgs/team3.jpg"
import img9 from "../aassets/imgs/team4.jpg"
import img10 from "../aassets/imgs/map.jpg"


import "./style.css"
export default class Head extends Component{
    state={
        list:[{li1:"Projects",li2:"About",li3:"Contact",logo:"B R  Architetchs",
        Img:img,sec2h1:"Projects", sec3h1:"About",para1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      sec4h1:"Contact",para2:"Lets get in touch and talk about your next project.",
     Img10:img10,foot:"Powered by Zain_abbas"}]
    }
    render(){
      
        let response=this.state.list.map(e=>{
          return <div> <div className="container-fluid  p-0 m-0">
            <div className="row  p-0 m-0">
              <div className="col-12 p-0 m-0">
              
                 <img className="img-fluid" src={e.Img}/>
                 
              <nav class="navbar fixed-top nav1 navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand pl-5" href="#">{e.logo}</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto w-100  justify-content-end pr-5">
      <li class="nav-item">
        <a class="nav-link pl-3 pr-3" href="#">{e.li1} <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link pl-3 pr-3" href="#">{e.li2}</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle pl-3 pr-3" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {e.li3}
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      
    </ul>
    
  </div>
</nav>

               </div>
               
            </div>
            
          </div>
          <div className="container-fluid">
            <div className="row d-flex flex-column">
              <h5 className="pt-5 pl-5">{e.sec2h1}</h5>
              <hr className="hr" />
              

            </div>
           
          </div>
          <div className="container-fluid mb-2 p-0 m-0">
            <div className="row justify-content-center d-flex p-0 m-0">
              <div className="col-lg-3 col-md-6 col-sm-12  justify-content-center d-flex mb-3">   <Card h1="Summer House" src={img2} /></div>
              <div className="col-lg-3 col-md-6 col-sm-12  justify-content-center d-flex mb-3">   <Card h1="Brick House" src={img3} /></div>
              <div className="col-lg-3 col-md-6 col-sm-12  justify-content-center d-flex mb-3">  <Card h1="Renovate" src={img4}/></div>
              <div className="col-lg-3 col-md-6 col-sm-12  justify-content-center d-flex mb-3"> <Card h1="Barn House" src={img5}/></div>
            
           
            
            </div>
              
            </div>

            <div className="container-fluid mb-5 p-0 m-0">
            <div className="row justify-content-center d-flex p-0 m-0">
              <div className="col-lg-3 col-md-6 col-sm-12  justify-content-center d-flex mb-3">   <Card h1="Summer House"  src={img5} /></div>
              <div className="col-lg-3 col-md-6 col-sm-12  justify-content-center d-flex mb-3">   <Card h1="Brick House" src={img4} /></div>
              <div className="col-lg-3 col-md-6 col-sm-12  justify-content-center d-flex mb-3">  <Card h1="Renovate" src={img3}/></div>
              <div className="col-lg-3 col-md-6 col-sm-12  justify-content-center d-flex mb-3"> <Card h1="Barn House" src={img2}/></div>
            
           
            
            </div>
              
            </div>
            <div className="container-fluid mb-4 ">
            <div className="row d-flex flex-column">
              <h5 className="pt-5 pl-5">{e.sec3h1}</h5>
              <hr className="hr" />
              <div className="col-12 pl-5 pr-5">
              <p>{e.para1}</p>

              </div>

            </div>
           
          </div>
          <div className="container-fluid mb-2 p-0 m-0">
            <div className="row justify-content-center d-flex p-0 m-0">
              <div className="col-lg-3 col-md-6 col-sm-12  justify-content-center d-flex mb-3">   <Card2 src={img6} /></div>
              <div className="col-lg-3 col-md-6 col-sm-12  justify-content-center d-flex mb-3">   <Card2  src={img7} /></div>
              <div className="col-lg-3 col-md-6 col-sm-12  justify-content-center d-flex mb-3">  <Card2 src={img8}/></div>
              <div className="col-lg-3 col-md-6 col-sm-12  justify-content-center d-flex mb-3"> <Card2 src={img9}/></div>
            
           
            
            </div>
              
            </div>

            <div className="container-fluid mb-4 ">
            <div className="row d-flex flex-column">
              <h5 className="pt-5 pl-5">{e.sec4h1}</h5>
              <hr className="hr" />
              <div className="col-12 pl-5 pr-5">
              <p>{e.para2}</p>

              </div>

            </div>
           
          </div>
          <div className="container-fluid mb-2 p-0 m-0">
            <div className="row justify-content-center d-flex p-0 m-0">
         <div className="col-12 pl-5 pr-5 mb-3 p-0"><input className="w-100 p-2" placeholder="Name" type="text" name="" id="" /></div>
         <div className="col-12 pl-5 pr-5 mb-3 p-0"><input className="w-100 p-2" placeholder="Email" type="text" name="" id="" /></div>
         <div className="col-12 pl-5 pr-5 mb-3 p-0"><input className="w-100 p-2" placeholder="Subject" type="text" name="" id="" /></div>
         <div className="col-12 pl-5 pr-5 mb-3 p-0"><input className="w-100 p-2" placeholder="Comment" type="text" name="" id="" /></div>


          </div>
          <div className="row justify-content-start d-flex p-0 m-0">

         <div className="col-2 pl-5 mb-3 p-0"><button className="btn bg-dark text-white">SEND MESSAGE</button></div>
         </div>
            </div>
            <div className="container-fluid mb-2 ">
             <div className="row border border-success">
               <div className="col pl-5 pr-5"><img className="img-fluid" src={e.Img10} alt="" /></div>
             </div>
            </div>
            <div className="container-fluid p-3 foot">
              <div className="row  pt-2 d-flex justify-content-center">
              <h6 className="text-white">{e.foot}</h6>

              </div>
            </div>
          </div>
         
        })
        return(
            <div>
              {response}
            </div>
        )
    }
}
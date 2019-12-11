import logo from './logo.svg';
import React ,{Component}from 'react';
class Header extends React.Component {
    render() {
      return <div className="App">
      <header className="App-header" style={{position:"fixed",zIndex: 1, width:"100%"}}>
      <div class="title_holder_center title_holder">
               <img src="images/25-years.png" alt="Celebrating 25 Years success" title="Celebrating 25 Years success" class="text-center"></img>
                <h1> <span class="firm">VIJAY POLYPLAST PRIVATE LIMITED</span></h1>
                <span></span>
            </div>
            </header>
    </div>;
    }
  }export default Header;
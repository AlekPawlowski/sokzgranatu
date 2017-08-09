import React from "react";
import ReactDOM from 'react-dom';
import SliderMenu from 'react-slider-menu';


export class Header extends React.Component {
     render() {
          return (
          <div id="menu">
               <div className="menu_position clearfix">
                    <ul className="menucontainer">
                         <a href="#home">GŁÓWNA</a>
                         <a href="#aboutus">O NAS</a>
                         <a href="#products">PRODUKTY</a>
                         <a href="#partners">PARTNERZY</a>
                         <a href="#info">CIEKAWOSTKI</a>
                         <a href="#contact">KONTAKT</a>
                    </ul>
               </div>
          </div>
     )
     }
}

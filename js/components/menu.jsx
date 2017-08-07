import React from "react";
import ReactDOM from 'react-dom';


export class Header extends React.Component {
     render() {
          return (
          <div id="menu">
               <div className="menu_position clearfix">
                    <ul className="menucontainer">
                         <a href="">GŁÓWNA</a>
                         <a href="">O NAS</a>
                         <a href="">PRODUKTY</a>
                         <a href="">PARTNERZY</a>
                         <a href="">CIEKAWOSTKI</a>
                         <a href="">KONTAKT</a>
                    </ul>
               </div>
          </div>
     )
     }
}

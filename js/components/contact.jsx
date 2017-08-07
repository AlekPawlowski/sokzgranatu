import React from "react";
import ReactDOM from 'react-dom';


export class Section8 extends React.Component {
     render() {
          return (
          <div id="contact">
               <div className="contact_container">
                    <h1>Kontakt</h1>
                    <div className="border_img" />
                    <div className="contact_info">
                         <h3>Dane oraz adres firmy:</h3>
                         <br />
                         <p>Ul. Kościuszki 26A</p>
                         <p>05-400 Otwock</p>
                         <p>NIP: 5322041421</p>
                         <p>Regon: 145488532</p>
                         <p>Tel. 22 719 92 92; 508 434 599</p>
                         <p>Fax. +48 22 468 87 06</p>
                         <p>Adresy e-mail: azeurobiznes@wp.pl; biuro@sokgranatu.pl</p>
                         <a href="https://www.facebook.com/sokgranatu/" target="blank">Link do Facebooka</a>
                    </div>
                    <br />
                    <div className="map_box">
                         <h3>Mapa dojazdu:</h3>
                         <div id="map">
                              <div id="map_div">
                              </div>
                              <div id="content">
                              </div>
                         </div>
                    </div>
               </div>
          </div>

     )
     }
}

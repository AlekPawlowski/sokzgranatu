import React from "react";
import ReactDOM from 'react-dom';
import SliderMenu from 'react-slider-menu';

export class Section7 extends React.Component {
     render() {
          return (
          <div id="info">
               <div className="info_box">
                    <h1>
                         Czy wiesz że...
                    </h1>
                    <div className="border_img" />
                         <div className="row">
                              <p className="col-1">
                                   Owoc granatu jest bogaty w witaminy: A (beta-karoten), C (kwas askorbinowy), E (alfa-tokferol), B1 (tiamina), B3 (niacyna), B6 (pirydoksyna) oraz wapń, potas, żelazo, cynk, miedź i selen. Zawiera również błonnik, białko, taninę i kwasy organiczne (głównie cytrynowy).
                              </p>
                              <p className="col-1">
                                   Granat jest owocem rośliny o nazwie Granatowiec właściwy – Punica granatum. Od tysięcy lat uważany jest za symbol zdrowia, płodności oraz miłości. Ten doskonały afrodyzjak ma olbrzymi wpływ na nasze zdrowie fizyczne oraz korzystnie wpływa na samopoczucie i nastrój. Bogactwo witamin i niezwykłe właściwości owoców rekompensują kłopoty ze spożyciem, wywołane twardą skórką i słodkim, lepiącym sokiem z nasion.
                              </p>
                              <p className="col-1">
                                   Jeżeli chodzi o smak, owoc granatu jest ceniony przede wszystkim za niepowtarzalną rześkość oraz wspaniałe połączenie goryczki oraz słodyczy.
                              </p>
                         </div>
               </div>
               <div className="info_box">
                    <h1>
                         Pochodzenie
                    </h1>
                    <div className="border_img" />
                         <div className="row">
                              <p className="col-1" />
                              <p className="col-1">
                                   Krzew w warunkach naturalnych występuje na obszarach dawnej Persji i Mezopotamii. Do Europy owoce dotarły wraz z fenickimi kupcami, później Hiszpanie rozpowszechnili je również w Ameryce. Obecnie roślina uprawiana jest praktycznie na całym świecie, warunkiem jest suchy i gorący klimat.
                              </p>
                              <p className="col-1" />
                         </div>
               </div>
               <div className="info_box">
                    <h1>
                         Ciekawostka
                    </h1>
                    <div className="border_img" />
                         <div className="row">
                              <p className="col-1" />
                              <p className="col-1">
                                   Hiszpańskie miasto Granada zawdzięcza swoją nazwę owocom granatu, sprowadzonym na półwysep iberyjski przez arabów.
                              </p>
                              <p className="col-1" />
                         </div>
               </div>
          </div>

     )
     }
}

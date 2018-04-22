import React from "react";
import ReactDOM from 'react-dom';
import SliderMenu from 'react-slider-menu';

export class Section3 extends React.Component{
     render() {
          return (
          <div id="products">
               <div className="products_box">
                    <h1> Produkty </h1>
                    <div className="rzad">
                         <div className="kol-3">
                              <h3>Naturalny sok z owoców granatu bezpośrednio wyciskany:</h3>
                              <ul className="outer_ul">
                                   <li>Zawartość soku owocowego 100%</li>
                                   <li>Owoc z gatunku Punica granatum</li>
                                   <li>Kraj pochodzenia Azerbejdżan</li>
                                   <li>Dostępny w szklanych butelkach 1l i 0,2l.</li>
                                   <li>Charakterystyczny, orzeźwiający smak słodkości i goryczki</li>
                                   <li>Dla jednego litra soku:
                                        <ul className="inner_ul">
                                             <li>Gęstość: 1,057 kg/l</li>
                                             <li>Kwasowość całkowita: 0,5 – 2,2%</li>
                                             <li>Białko: 0g</li>
                                             <li>Węglowodany: 10,g</li>
                                             <li>Tłuszcz: 0g</li>
                                             <li>Wartość energetyczna: 167kJ/40kcal</li>
                                        </ul>
                                   </li>
                              </ul>
                         </div>
                         <div className="kol-1">
                              <p id="sok_z_granatu">
                         </p>
                         </div>
                    </div>


                    <div className="border_img"/>


                    <div className="rzad">
                         <div className="kol-3">
                              <h3>Nektar z owoców granatu:</h3>
                              <ul className="outer_ul">
                                   <li>Składniki: zagęszczony sok z granatów, woda, cukier, regulator kwasowości (kwas cytrynowy).</li>
                                   <li>Zawartość owoców minimum 50%.</li>
                                   <li>Pasteryzowany</li>
                                   <li>Kraj pochodzenia Azerbejdżan</li>
                                   <li>Dostępny w szklanych butelkach 1l.</li>
                                   <li>Dla 1l nektaru:
                                        <ul className="inner_ul">
                                             <li>Gęstość: 1,053 kg/l</li>
                                             <li>Zawartość cukru: 6,5%</li>
                                             <li>Kwasowość całkowita: 0,3 – 2,0%</li>
                                             <li>WARTOŚĆ ODŻYWCZA DLA 100G PRODUKTU:</li>
                                             <li>Białko: 0g</li>
                                             <li>Węglowodany: 10,5g</li>
                                             <li>Tłuszcz 0g</li>
                                             <li>Wartość energetyczna: 175,8kJ/42kcal</li>
                                        </ul>
                                   </li>
                              </ul>
                         </div>
                         <div className="kol-1">
                              <p id="nektar_granat">
                         </p>
                         </div>
                    </div>

                    <div className="border_img"/>

                    <div className="rzad">
                         <div className="kol-3">
                              <h3>Nektar z owoców pigwy:</h3>
                              <ul className="outer_ul">
                                   <li>Składniki: czysta pigwa, woda, syrop cukrowy, regulator kwasowości (kwasek cytrynowy).</li>
                                   <li>Zawartość owoców minimum 50%.</li>
                                   <li>Pasteryzowany</li>
                                   <li>Homogenizowan</li>
                                   <li>Naturalnie mętny</li>
                                   <li>Kraj pochodzenia Azerbejdżan</li>
                                   <li>Dostępny w szklanych butelkach 1l.</li>
                                   <li>Dla 1l nektaru:
                                        <ul className="inner_ul">
                                             <li>Gęstość: 1,049 kg/l</li>
                                             <li>Zawartość cukru: 6,17%</li>
                                             <li>Kwasowość całkowita: 0,3 – 2,0%</li>
                                             <li>WARTOŚĆ ODŻYWCZA DLA 100G PRODUKTU:</li>
                                             <li>Białko: 0g</li>
                                             <li>Węglowodany: 9,5g</li>
                                             <li>Tłuszcz 0g</li>
                                             <li>Wartość energetyczna: 162kJ/38kcal</li>
                                        </ul>
                                   </li>
                              </ul>
                         </div>
                         <div className="kol-1">
                              <p id="nektar_pigwa">
                         </p>
                         </div>
                    </div>


               </div>
          </div>
     )
     }
}

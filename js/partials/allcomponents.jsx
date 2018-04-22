import React from "react";
import ReactDOM from 'react-dom';
import SliderMenu from 'react-slider-menu';
import {Header} from './menu.jsx';
import {Section1} from './home.jsx';
import {Section2} from './aboutus.jsx';
import {Section3} from './produtcts.jsx';
import {Section4} from './section4.jsx';
import {Section5} from './partners.jsx';
import {Section6} from './paralax.jsx';
import {Section7} from './info.jsx';
import {Section8} from './contact.jsx';
import {Footer} from './footer.jsx';

export class Allcomponents extends React.Component {
     render() {
          // $("a").mouseenter(function(){$(this).css("color","grey")});
          return (
               <div>
                    <Header />
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                    <Section6 />
                    <Section7 />
                    <Section8 />
                    <Footer />
               </div>
          )
     }

}

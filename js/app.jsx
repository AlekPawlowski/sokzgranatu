import React from "react";
import ReactDOM from 'react-dom';
import '../scss/main.scss';
import {Allcomponents} from './partials/allcomponents.jsx';
import SliderMenu from 'react-slider-menu';


class App extends React.Component {
     render() {
          return (
               <Allcomponents />
          )
     }
}

document.addEventListener("DOMContentLoaded", function() {

  ReactDOM.render(
    <App />,
    document.getElementById("app")
  )


});

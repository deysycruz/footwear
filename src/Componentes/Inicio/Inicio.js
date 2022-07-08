import React, { useEffect } from "react";

import { Link } from 'react-router-dom';

import M from 'materialize-css';
import 'material-icons'

function Menu() {

  const colapsado = () => {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }


  useEffect(() => {
    colapsado();
  }, [])

  return (
    <div>
      <nav>
        <div className="nav-wrapper-center">
          <a to="wrapper-blue" class="brand-logo">
            FOOTWEAR
            <img width="30px" src="./logo.png"></img>
          </a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">apps</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Modelos">Modelos</Link>
            </li>
            <li>
              <Link to="/Categoria">categorias</Link>
            </li>
            <li>
              <Link to="/Usuario">Usuario</Link>
            </li>

          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <Link to="/Formulario">Formularios</Link>
        </li>
        <li>
          <Link to="/Modelos">Modelos</Link>
        </li>
        <li>
          <Link to="/Categoria">categorias</Link>
        </li>
        <li>
          <Link to="/Usuario">Usuario</Link>
        </li>

      </ul>
    </div>
  );
}

export default Menu;
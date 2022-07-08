import React, { useState, useEffect } from "react";

function Formulario() {
  const variablesInicio = {
    correo: "",
    contraseña: "",
    confrimar: "",
   
  };

  const [values, setValues] = useState(variablesInicio);

  const CambioEstado = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const Enviar = (e) => {
    e.preventDefault();
    console.log(values);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div class="row">
        <div class="col s12 m4">
          <div class="card purple lighten-2">
            <div class="card-content black-text">
              <span class="card-title">Iniciar sesion </span>
              <div class="row">
                <form class="col s12">
                  <div class="row">

                    <div class="input-field col s12">
                      <input id="first_name" type="text" class="validate"/>
                      <label for="first_name">Introduce correo</label>
                    </div>
                    

                    <div class="input-field col s12">
                      <input id="last_email" type="text" class="validate" />
                      <label for="last_email">password</label>
                    </div>

                  </div>

                  <div class="row">
                    <div class="input-field col s12">
                      <input id="password" type="password" class="validate" />
                      <label for="password">confirmar Password</label>
                    </div>
                  </div>
                </form>
              </div>
              <button class="btn waves-effect waves-light" type="submit">Enviar</button>
            </div>
            <div class="card-action">
              <a class="waves-effect waves-light btn">
                <i class="material-icons left"></i>crear cuenta</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
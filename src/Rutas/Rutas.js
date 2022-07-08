import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Formulario from '../Paginas/Formulario';
import Layout from '../Componentes/Layouts/Layout';
import Categoria from '../Paginas/Categoria';
import Usuario from"../Paginas/Usuario";
import Modelos from '../Paginas/Modelos';


function Rutas() {
  return (
      <div>
         <Router>
             <Layout>
                 <Routes>
                     <Route exact path="/Formulario" element = {<Formulario/>}/>
                     <Route exact path='/Categoria'element={<Categoria/>}/>
                     <Route exact path="/Usuario" element={<Usuario/>}/>
                     <Route exact path="/Modelos" element={<Modelos/>}/>
                 </Routes>
             </Layout>
         </Router>
      </div>
  )
}
 
export default Rutas
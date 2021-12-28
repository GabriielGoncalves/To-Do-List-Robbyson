import React from 'react';
import { Link } from 'react-router-dom';
import './css/Pagina404.css'

function Pagina404(){
    return(
        <h1>
            Recurso não encontrado.
            <Link to='/'>Clique aqui para voltar a página inicial</Link>
        </h1>
    )
}

export default Pagina404;
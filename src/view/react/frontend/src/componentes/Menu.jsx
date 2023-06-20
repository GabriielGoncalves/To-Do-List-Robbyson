import React from "react";
import '../css/Menu.css'
import { Link } from 'react-router-dom'


function Menu (){
        return(
            <header className='menu'>
                <img src="https://www.robbyson.com/wp-content/themes/robbyson/src/images/logo-azul.png" 
                alt="logo-robbyson'" className='logo-robbyson'/>
                    <ul>
                        <li className='menu-botoes'>
                                <Link to='/' className='botao-menu'> Inicio </Link> 
                        </li>

                        <li className='menu-botoes'>
                                <Link to='/tarefas' className='botao-menu'> Minhas Tarefas </Link>
                        </li>

                        <li className='menu-botoes'> 
                            <Link to='/tarefas-arquivadas' className='botao-menu'> Minhas tarefas arquivadas 
                            </Link>
                        </li>
                    </ul>
            </header>
        )
    }
    
export default Menu;

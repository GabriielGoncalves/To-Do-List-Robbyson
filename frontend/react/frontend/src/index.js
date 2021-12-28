import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './style.css'
import FormularioTarefa from './paginas/FormularioTarefa'
import Menu from './componentes/Menu'
import ListaTarefas from './paginas/ListaTarefas'
import Pagina404 from './Pagina404'
import EditarCardTarefa from './paginas/EditarCardTarefa';
import CardsTarefasArquivadas from './paginas/CardsTarefasArquivadas'

ReactDOM.render(
  <Router>
    
    <Menu />
      
      <Switch>
        
        <Route path='/' exact>
            <FormularioTarefa />
        </Route>

        

        <Route path='/tarefas' exact >
            <ListaTarefas  />
        </Route>

        <Route path='/tarefas/:id/editar' >
            <EditarCardTarefa />
        </Route>

        <Route path='/tarefas-arquivadas' >
            <CardsTarefasArquivadas  />
        </Route>


        <Route>
          <Pagina404 />
        </Route>

      </Switch>

  </Router>

  ,document.getElementById('root')
);
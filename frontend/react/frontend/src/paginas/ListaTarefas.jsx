import React, { useState, useEffect, useCallback } from 'react';
import api from '../services/api'
import CardsTarefas from '../componentes/CardsTarefas'
import '../css/ListaTarefas.css'
import { debounce } from 'lodash'

function ListaTarefas(){
    const [tarefas, setTarefas] = useState();

    useEffect( () => {
        if(!tarefas) buscarTarefas()
    }, [tarefas])

    function buscarTarefas(){
        api.get('tarefas')
            .then( (response) => {
                setTarefas(response.data.message)
            })
    }

    function procurarTarefa(descricao){
        api.get(`tarefas/pesquisar/${descricao}`)
        .then( response => {
            setTarefas(response.data.message)
        })
        .catch(e => console.log(e))
    }

    function handleProcurarTarefa(e){
        if(e.target.value.length < 1) buscarTarefas()
        else debounceFn(e.target.value)
    }

    const debounceFn = useCallback(debounce(procurarTarefa, 1000), [])


    // let ret =  
    
    // if(tarefas){

    //     ret = 
            
    // }
    return(
        <div>
            {
                tarefas ? 
                    <div>
                        <form className='pesquisa'>
                                            <input 
                                            type="search" 
                                            name="pesquisar" 
                                            id="pesquisar" 
                                            onChange={
                                                handleProcurarTarefa
                                            }/>
                        </form>
                        <CardsTarefas tarefas={tarefas} buscarTarefas={buscarTarefas}/>
                    </div> 

                    :

                    <h1>
                        Você não tem nenhuma tarefa cadastrada. Volte a página inicial para cadastrar
                    </h1>


            }
        </div>   
    )
}


export default ListaTarefas;
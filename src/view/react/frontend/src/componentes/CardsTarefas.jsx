import React from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';
import '../css/CardTarefa.css'

function CardsTarefas({ tarefas, buscarTarefas }) {

    function excluirTarefa(tarefa){
        api.delete(`tarefas/deletar/${tarefa._id}`)
        .then((response) => {
            if(response.status === 200){
                alert(`Tarefa "${tarefa.titulo}" excluída com sucesso!`)
                buscarTarefas()
            }
        })
        .catch((e) => console.log(e))
    }

    function concluirTarefa(tarefa){
        api.patch(`tarefas/concluir/${tarefa._id}`)
        .then( (response) => {
            if(response.status === 200){
                alert(`Tarefa "${tarefa.titulo}" foi concluída.`)
                buscarTarefas()
            }
        })
        .catch(e => console.log(e))
    }

    function arquivarTarefa(tarefa){
        api.patch(`/tarefas/arquivar/${tarefa._id}`)
        .then( (response) => {
            if(response.status === 200){
                alert(`Tarefa "${tarefa.titulo}" arquivada.`)
                buscarTarefas()
            }
        })
        .catch(e => {
            console.log(e)
        })
    }


    return (
        <div className='card-nota'> 
                        {tarefas.map((tarefa) => {
                            return (
                                <>
                                
                                
                                    <section key={tarefa._id} className={`${tarefa.concluido}`}>
                                        <h3 className='titulo-card_nota'>{tarefa.titulo}
                                            <div className='botoes'>
                                            
                                                {
                                                tarefa.concluido === false ?  
                                                    <button 
                                                    className='botao-v' 
                                                    style={{ backgroundColor: "#a5a1a1" }}
                                                    onClick={() => {
                                                        concluirTarefa(tarefa)
                                                    }}>
                                                        <i className="bi bi-check-square" >
                                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                                                width="16" 
                                                                height="16" 
                                                                fill="currentColor" 
                                                                className="bi bi-check-square" 
                                                                viewBox="0 0 16 16" 
                                                                style={{ backgroundColor: "green", borderRadius: "2px" }}>
                                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                                                            </svg>
                                                        </i>
                                                    </button> 
                                                
                                                : 

                                                    <button 
                                                    className='botao-v' 
                                                    style={{ backgroundColor: "#a5a1a1" }}
                                                    onClick={() => {
                                                        arquivarTarefa(tarefa)
                                                    }}>
                                                        
                                                        <i className="bi bi-archive-fill">
                                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                                            width="16" 
                                                            height="16" 
                                                            fill="currentColor" 
                                                            className="bi bi-archive-fill" 
                                                            viewBox="0 0 16 16">
                                                                <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                                                            </svg>
                                                        </i>
                                                    </button>
                                                }

                                                <button 
                                                className='botao-apagar' 
                                                style={{ backgroundColor: "#a5a1a1" }}
                                                onClick={() => {
                                                    if( window.confirm('Você tem certeza que deseja excluir esta tarefa?') ){
                                                        excluirTarefa(tarefa)}}
                                                    }
                                                >
                                                    <i className="bi bi-trash-fill" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" 
                                                            width="16" 
                                                            height="16" 
                                                            fill="currentColor" 
                                                            className="bi bi-trash-fill" 
                                                            viewBox="0 0 16 16" 
                                                            style={{ borderRadius: "2px" }}>
                                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                        </svg>
                                                    </i>
                                                </button>


                                                <button className='botao-editar' style={{ backgroundColor: "#a5a1a1" }}>
                                                    <Link to={`/tarefas/${tarefa._id}/editar`}>    
                                                        <i className="bi bi-pencil-fill">
                                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                                                width="16" 
                                                                height="16"
                                                                fill="currentColor" 
                                                                className="bi bi-pencil-fill" 
                                                                viewBox="0 0 16 16" 
                                                                style={{ color: "white", borderRadius: "2px" }}>
                                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                                            </svg>
                                                        </i>
                                                    </Link>
                                                </button>
                                            </div>
                                        </h3>
                                        <p className='descricao-card_nota'> Descrição: {tarefa.descricao} </p>
                                        <p className='descricao-card_nota'> Data de conclusao: {tarefa.data} </p>
                                        <p className='descricao-card_nota'> Arquivado: {tarefa.arquivado === false ? "Não" : "Sim"} </p>
                                        <p className='descricao-card_nota'> Concluido: {tarefa.concluido === false ? "Não" : "Sim"} </p>
                                    </section>
                                </>
                            )
                        })
                    }
                    
            </div>
    )
}

export default CardsTarefas;
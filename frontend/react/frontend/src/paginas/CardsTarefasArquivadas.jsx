import React, { useEffect, useState } from 'react';
import '../css/CardTarefa.css'
import api from '../services/api';

function CardsTarefasArquivadas() {
    const [ tarefasArquivadas, setTarefasArquivadas ] = useState([])

    function deletarCard(tarefa){
        api.delete(`tarefas/deletar/${tarefa._id}`)
        .then((response) => {
            if(response.status === 200){
                alert(`Tarefa "${tarefa.titulo}" excluída com sucesso!`)
            }
        })
        .catch((e) => console.log(e))
    }

    useEffect( () => {
        api.get('tarefas/arquivadas')
            .then( response => {
                setTarefasArquivadas(response.data.message)
            })
            .catch(e => {
                console.log(e)
        }) 
    }, [])

    return (
        <div className='card-nota'>
            {tarefasArquivadas.length < 1 ?
            
            <h1>
                Você não tem nenhuma tarefa arquivada!
            </h1> 
            
            : 
            
            <>
            {
                    tarefasArquivadas.map((tarefa) => {
                        return (
                            <section key={tarefa._id} className={`${tarefa.concluido} `}>
                                <h3 className='titulo-card_nota'>{tarefa.titulo}
                                    <div className='botoes'>
                                        <button 
                                        className='botao-apagar' 
                                        style={{ backgroundColor: "#a5a1a1" }}
                                        onClick={() => {
                                            if( window.confirm('Você tem certeza que deseja excluir esta tarefa?') ){
                                                {deletarCard(tarefa)}}}
                                            }
                                        >
                                            <i class="bi bi-trash-fill" >
                                                <svg xmlns="http://www.w3.org/2000/svg" 
                                                    width="16" 
                                                    height="16" 
                                                    fill="currentColor" 
                                                    class="bi bi-trash-fill" 
                                                    viewBox="0 0 16 16" 
                                                    style={{ borderRadius: "2px" }}>
                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                </svg>
                                            </i>
                                        </button>
                                    </div>
                                </h3>
                                <hr />
                                <p className='descricao-card_nota'> Descrição: {tarefa.descricao} </p>
                                <p className='descricao-card_nota'> Data de conclusao: {tarefa.data} </p>
                                <p className='descricao-card_nota'> Arquivado: {tarefa.arquivado === false ? "Não" : "Sim"} </p>
                                <p className='descricao-card_nota'> Concluido: {tarefa.concluido === false ? "Não" : "Sim"} </p>                                
                            </section>

                        )
                    })
                }
            </>
            }
                
            </div>
    )
}

export default CardsTarefasArquivadas;
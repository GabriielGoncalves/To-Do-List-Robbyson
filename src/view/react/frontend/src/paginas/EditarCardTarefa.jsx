import React, { useEffect, useState } from 'react';
import { useParams, useHistory  } from 'react-router-dom';
import api from '../services/api';
import '../css/Tarefa.css'
import '../css/Titulo.css'
import { Link } from 'react-router-dom'

function EditarCardTarefa(){

    let history = useHistory()
    const { id } = useParams()
    const [tarefa, setTarefa] = useState({})
    const [data, setData] = useState('')

    useEffect( () => {
        api.get(`tarefas/pesquisar/id/${id}`)
        .then( response => {
            setTarefa(response.data.message)
        })
        .catch( () => {
            history.push('/404')
        })
    }, [])

    const [descricao, setDescricao] = useState(tarefa.descricao)

    function atualizarTarefa(descricao, data){
        const [ano, mes, dia] = data.split('-')
        api.put(`/tarefas/atualizar/${tarefa._id}`, {
            titulo: tarefa.titulo, descricao, data: `${dia}/${mes}/${ano}`, arquivado: tarefa.arquivado, concluido: tarefa.concluido
        })
        .then( (response) => {
            if(response.status === 200) {
                alert('Tarefa atualizada com sucesso.')
            }
        })
        .catch(e => console.log(e))
    }


    return(
        <div className='div-formulario'>
            <h1 className='titulo'>Atualize sua tarefa</h1>
            <form className='formulario'>
                    <label htmlFor="" className='tarefa'>Tarefa</label>
                    <input
                    type="text"
                    name="titulo"
                    id="titulo"
                    value={tarefa.titulo}
                    required />

                    <br />

                    <label htmlFor="descricao" className='descricao'>Descrição</label>
                    <input
                    type="text"
                    name="descricao"
                    id="descricao"
                    label='Descrição'
                    placeholder='Descrição da tarefa'
                    value={descricao}
                    onChange={e => {
                        setDescricao(e.target.value)
                    }}
                    required />

                    <label htmlFor="data" className="data">Informe a data de conclusao</label>
                    <input
                    type="date"
                    name="data"
                    id="data"
                    label='Data'
                    value={data}
                    required
                    onChange={e => {
                        setData(e.target.value)
                    }}
                    />

                    <button
                    type="button"
                    className='botao-tarefa-salvar' onClick={ () => {
                        atualizarTarefa(descricao, data)
                        setDescricao('')
                        setData('')}
                        } > <Link to={'/tarefas'}>Salvar</Link></button>

                    <button
                    type="button"
                    className='botao-tarefa-cancelar' onClick={() => {

                    }} > <Link to={'/tarefas'}>Cancelar</Link></button>
            </form>
        </div>
    )
}

export default EditarCardTarefa;
import React, {  useState } from "react";
import '../css/Tarefa.css'
import api from '../services/api'
import Titulo from '../componentes/Titulo'

const FormularioTarefa = () => {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [data, setData] = useState('')

    function inserirTarefa(titulo, descricao, data){
        const [ano, mes, dia] = data.split('-')
        api.post('tarefas/inserir-tarefa', {
            titulo, descricao, data: `${dia}/${mes}/${ano}` ,arquivado: false, concluido: false
        })
        .then((response) => {
            if (response.status === 201){
                alert('Tarefa incluida com sucesso')
            }
        })
        .catch(e => console.log(e))
    }

    return (
        <div className='div-formulario' >
            <Titulo />
            <form className='formulario' >
                <label htmlFor="" className='tarefa'>Tarefa</label>
                <input 
                type="text" 
                name="titulo" 
                id="titulo" 
                placeholder='Título da tarefa' 
                value={titulo}
                onChange={e => {
                    setTitulo(e.target.value)
                }}
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
                className='botao-tarefa' onClick={ () => {
                    inserirTarefa(titulo, descricao, data)
                    setTitulo('')
                    setDescricao('')
                    setData('')}
                    } >Cadastrar tarefa</button>
            </form>
        </div>
    )
}
export default FormularioTarefa;
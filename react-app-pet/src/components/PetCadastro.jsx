import React, { useState } from 'react'
import { DivInput } from '../style/styled'

export default function PetCadastro() {

    const [pet, setPet] = useState({'nome':'', 'idade':'', 'raca':'', 'tamanho':'', 'nomeDoDono':'', 'telefoneDoDono':'', 'imagem':'', 'observacao':''})
    const [listaPet, setListaPet] = useState([])

    function inserirPet(e){
        e.preventDefalut()

        setListaPet([...listaPet, pet])
        console.log(listaPet);
    }

    function cadPet(e){
        setPet({...pet, [e.target.name]:e.target.value})
    }

    return(
        <DivInput>
            <form onSubmit={inserirPet}>
                <div>
                    <label><b>Nome</b></label>
                    <br />
                    <input type="text" name='nome' placeholder="Nome" onChange={cadPet} value={pet.nome}/>
                </div>
                <div>
                    <label><b>Idade</b></label>
                    <br />
                    <input type="number" name='idade' placeholder="Idade" onChange={cadPet} value={pet.idade}/>
                </div>
                <div>
                    <label><b>Raça</b></label>
                    <br />
                    <input type="text" name='raca' placeholder="Raça" onChange={cadPet} value={pet.raca}/>
                </div>
                <div>
                    <label><b>Tamanho em cm</b></label>
                    <br />
                    <input type="number" name='tamanho' placeholder="Tamanho" onChange={cadPet} value={pet.tamanho}/>
                </div>
                <div>
                    <label><b>Nome do dono</b></label>
                    <br />
                    <input type="text" name='nomeDoDono' placeholder="Nome Do Dono" onChange={cadPet} value={pet.nomeDoDono}/>
                </div>
                <div>
                    <label><b>Telefone do dono</b></label>
                    <br />
                    <input type="text" name='telefoneDoDono' placeholder="Telefone Do Dono" onChange={cadPet} value={pet.telefoneDoDono}/>
                </div>
                <div>
                    <label><b>Imagem do pet</b></label>
                    <br />
                    <input type="file" accept="image/*" name='imagem' placeholder="Imagem" onChange={cadPet} value={pet.imagem}/>
                </div>
                <div>
                    <label><b>Observações</b></label>
                    <br />
                    <textarea cols="30" rows="10" name='observacao' placeholder="Observação" onChange={cadPet} value={pet.observacao}></textarea>
                </div>
                <div>
                    <button type="submit">Adicionar</button>
                </div>
            </form>
            <div className='painel'>
                {listaPet.map((pt, i)=>(
                    <div className='etiqueta' key={i}>
                        <p>Nome: {pt.nome}</p>
                        <p>Idade: {pt.idade}</p>
                        <p>Raça: {pt.raca}</p>
                        <p>Tamanho: {pt.tamanho}</p>
                        <p>Nome do Dono: {pt.nomeDoDono}</p>
                        <p>Telefone do Dono: {pt.telefoneDoDono}</p>
                        <p>Imagem do Pet: {pt.imagem}</p>
                        <p>Observações: {pt.observacao}</p>
                    </div>
                ))}
            </div>
        </DivInput>
    )
}


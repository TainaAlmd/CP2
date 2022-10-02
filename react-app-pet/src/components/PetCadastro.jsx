import React from 'react'
import { DivInput } from '../style/styled'

export default function PetCadastro() {

    const [pet, setPet] = useState({'nome':'', 'idade':'', 'raca':'', 'tamanho':'', 'nomeDoDono':'', 'telefoneDoDono':'', 'imagem':'', 'observacao':''})

    return(
        <DivInput>
            <form method="post" >
            <div>
                <label><b>Nome</b></label>
                <br />
                <input type="text" name='nome' placeholder="Nome" onChange={} value={pet.nome}/>
            </div>
            <div>
                <label><b>Idade</b></label>
                <br />
                <input type="number" name='idade' placeholder="Idade" onChange={} value={pet.idade}/>
            </div>
            <div>
                <label><b>Raça</b></label>
                <br />
                <input type="text" name='raca' placeholder="Raça" onChange={} value={pet.raca}/>
            </div>
            <div>
                <label><b>Tamanho em cm</b></label>
                <br />
                <input type="number" name='tamanho' placeholder="Tamanho" onChange={} value={pet.tamanho}/>
            </div>
            <div>
                <label><b>Nome do dono</b></label>
                <br />
                <input type="text" name='nomeDoDono' placeholder="Nome Do Dono" onChange={} value={pet.nomeDoDono}/>
            </div>
            <div>
                <label><b>Telefone do dono</b></label>
                <br />
                <input type="text" name='telefoneDoDono' placeholder="Telefone Do Dono" onChange={} value={pet.telefoneDoDono}/>
            </div>
            <div>
                <label><b>Imagem do pet</b></label>
                <br />
                <input type="file" accept="image/*" name='imagem' placeholder="Imagem" onChange={} value={pet.imagem}/>
            </div>
            <div>
                <label><b>Observações</b></label>
                <br />
                <textarea cols="30" rows="10" name='observacao' placeholder="Observação" onChange={} value={pet.observacao}></textarea>
            </div>
            <div>
                <button type="submit">Adicionar</button>
            </div>
            </form>
        </DivInput>
    )
}


//Ajustar onSubmit, value e onChange
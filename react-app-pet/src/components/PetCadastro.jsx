import React from 'react'

export default function PetCadastro(props) {
    return(
        <div>
            <form method="post" onSubmit={props.funcaoAddTarefa}>
            <div>
                <label>Nome</label>
                <input type="text" name="nome" placeholder="Nome" value={props.captura.titulo} onChange={props.oQueFoiDigitado}/>
            </div>
            <div>
                <label>Idade</label>
                <input type="number" name="idade" placeholder="Idade" value={props.novaTarefa.setor} onChange={props.oQueFoiDigitado}/>
            </div>
            <div>
                <label>Raça</label>
                <input type="text" name="raca" placeholder="Raça" value={props.novaTarefa.titulo} onChange={props.oQueFoiDigitado}/>
            </div>
            <div>
                <label>Tamanho em cm</label>
                <input type="number" name="tamanho" placeholder="Tamanho" value={props.novaTarefa.setor} onChange={props.oQueFoiDigitado}/>
            </div>
            <div>
                <label>Nome do dono</label>
                <input type="text" name="nomeDoDono" placeholder="NomeDoDono" value={props.novaTarefa.titulo} onChange={props.oQueFoiDigitado}/>
            </div>
            <div>
                <label>Telefone do dono</label>
                <input type="number" name="telefoneDoDono" placeholder="TelefoneDoDono" value={props.novaTarefa.setor} onChange={props.oQueFoiDigitado}/>
            </div>
            <div>
                <label>Imagem do pet</label>
                <input type="file" accept="image/*" name="imagem" placeholder="Imagem" value={props.novaTarefa.setor} onChange={props.oQueFoiDigitado}/>
            </div>
            <div>
                <label>Observações</label>
                <textarea cols="30" rows="10" name="observacao" placeholder="Observação" value={props.novaTarefa.descricao} onChange={props.oQueFoiDigitado}></textarea>
            </div>
            <div>
                <button type="submit">Adicionar</button>
            </div>
            </form>
        </div>
    )
}


//Ajustar onSubmit, value e onChange
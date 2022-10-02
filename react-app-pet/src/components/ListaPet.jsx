//Criamos esse componente para criar o useState e incluir os dados do formulario no App.jsx
import React, { useState } from 'react'
import { DivLista } from '../style/styled'
import Pet from './Pet'
import PetCadastro from './PetCadastro'

export default function ListaPet() {
    const [nPet, setNPet] = useState({nome:"",idade:"",raca:"",tamanho:"",nomeDoDono:"",telefoneDoDono:"",imagem:"",observacao:""})

    //Função de captura dos dados form
    const captura = (e)=>{
        const{value,name} = e.target

        if(name === "nome"){
            setNPet({nome: value, idade: nPet.idade, raca: nPet.raca, tamanho: nPet.tamanho, nomeDoDono: nPet.nomeDoDono, telefoneDoDono: nPet.telefoneDoDono, imagem: nPet.imagem, observacao: nPet.observacao})
        }else if(name === "idade"){
            setNPet({nome: nPet.nome, idade: value, raca: nPet.raca, tamanho: nPet.tamanho, nomeDoDono: nPet.nomeDoDono, telefoneDoDono: nPet.telefoneDoDono, imagem: nPet.imagem, observacao: nPet.observacao})
        }else if(name === "raca"){
            setNPet({nome: nPet.nome, idade: nPet.idade, raca: value, tamanho: nPet.tamanho, nomeDoDono: nPet.nomeDoDono, telefoneDoDono: nPet.telefoneDoDono, imagem: nPet.imagem, observacao: nPet.observacao})
        }else if(name === "tamanho"){
            setNPet({nome: nPet.nome, idade: nPet.idade, raca: nPet.raca, tamanho: value, nomeDoDono: nPet.nomeDoDono, telefoneDoDono: nPet.telefoneDoDono, imagem: nPet.imagem, observacao: nPet.observacao})
        }else if(name === "nomeDoDono"){
            setNPet({nome: nPet.nome, idade: nPet.idade, raca: nPet.raca, tamanho: nPet.tamanho, nomeDoDono: value, telefoneDoDono: nPet.telefoneDoDono, imagem: nPet.imagem, observacao: nPet.observacao})
        }else if(name === "telefoneDoDono"){
            setNPet({nome: nPet.nome, idade: nPet.idade, raca: nPet.raca, tamanho: nPet.tamanho, nomeDoDono: nPet.nomeDoDono, telefoneDoDono: value, imagem: nPet.imagem, observacao: nPet.observacao})
        }else if(name === "imagem"){
            setNPet({nome: nPet.nome, idade: nPet.idade, raca: nPet.raca, tamanho: nPet.tamanho, nomeDoDono: nPet.nomeDoDono, telefoneDoDono: nPet.telefoneDoDono, imagem: value, observacao: nPet.observacao})
        }else if(name === "observacao"){
            setNPet({nome: nPet.nome, idade: nPet.idade, raca: nPet.raca, tamanho: nPet.tamanho, nomeDoDono: nPet.nomeDoDono, telefoneDoDono: nPet.telefoneDoDono, imagem: nPet.imagem, observacao: value})
        }
    }

    return (
    <DivLista>
        <PetCadastro
            novoPet={nPet}
            oQueFoiDigitado={captura}
        />
        {nPet.map((pet, i)=>(
            <Pet
                key={i}
                titulo={pet.nome}
                setor={pet.idade}
                descricao={pet.imagem}
            />
        ))}        
    </DivLista>
    )
}

import React from 'react'
import { DivTarefa } from '../style/styled'

export default function Pet(props) {
  return (
    <DivTarefa>
        <h2>Relatório de Vendas</h2>
        <p>Para: {props.titulo}
        </p>
        <p></p>
    </DivTarefa>
  )
}

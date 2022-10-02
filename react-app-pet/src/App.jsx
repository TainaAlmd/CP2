import React, { useState } from 'react'
import Pet from './components/Pet'
import PetCadastro from './components/PetCadastro'

export default function App() {		
    return(
        <div>
            <PetCadastro/>
            <Pet/>
        </div>
    )
}
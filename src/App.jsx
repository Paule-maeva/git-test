import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 

const titre= "REACT"
const style={color:'red',backgroundcolor:'black'}

const liste=[
'presenter react',
'presenter le jxs',
'creer des composants'
]


function App() {
//fonction qui permet de creer un pop-up en un clic
   const handleclick  =() =>{

    alert("j'ai reussi")
}

   return <Fragment>
      <tableau/>
      <h1  onClick={handleclick} id='bg' style={style}> {titre}</h1>
      <div classname='design'>
         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Impedit adipisci necessitatibus earum eligendi ab nulla suscipit, 
            ad odit. Aut dicta nulla blanditiis ab! Molestiae id delectus,
             ipsum aperiam maxime vel.je vais, mange la banane tout les jour. </p>
 
         <ul>
         {liste.map(liste =>(<li key={liste}>liste</li>) )}
         </ul>

         <ul>
            <li>victoire</li>
            <li>zenab</li>
            <li>brenda</li>
            <li>amanda</li>
         </ul>

      </div>


   </Fragment>
   function Tableau(){
     return <h1>la structure de tout mes tableau</h1>
      
   }

   }
export default App

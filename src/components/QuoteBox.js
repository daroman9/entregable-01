import React from 'react'
import {useState} from 'react';
import quotes from '../quotes.json';

function QuoteBox() {

  //Variable que sirve para hacer una operacion random
  const random = max => Math.floor(Math.random()*max);
  //Arreglo con el listado de colores que van cambiando 
  const colorsCollection =[
    "#7BF27C",
    "#E1F05F",
    "#5FE8F0",
    "#B35FF0",
    "#F05F82",
    "#4FA66A",
    "#79E6EE",
    "#ED9A1C",
    "#860F7C",
    "#15860F",
    "#0F5386"
  ]

  //Hook de estado  para cambiar las frases
  const [phrase, setPhrase] = useState(quotes[random(quotes.length)]);

  //Hook de estado para cambiar el color
  const [color, setColor] = useState(colorsCollection[random(colorsCollection.length)]);

  //Inicializar el renderizado con un color
  document.body.style.background = color;

  //Funcion para usar los hooks
  const changeQuote = () => {
        setPhrase(quotes[random(quotes.length)]);
        setColor(colorsCollection[random(colorsCollection.length)]);
    }

  return (
   <div className='card' style={{color}}>
            <p className='quotes-icon'><i className="fa-solid fa-quote-left"></i></p>
            <p>{phrase.quote}</p>
            <h3 className='author'>{phrase.author}</h3>
            <button onClick={changeQuote} style={{color: color}}>Click Me</button>
        </div>
  )
}

export default QuoteBox
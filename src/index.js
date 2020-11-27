import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';



class Square extends React.Component
{
render()
{
  return (
    <button className="square" onClick={()=> alert("g")}>
    </button>
    )}


}



class Board extends React.Component
{


render()
{const status="Next player: X ";
return()






}

};


ReactDOM.render(
  <Square />,
  document.getElementById('root')
);

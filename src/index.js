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
renderSquare()
{return <Square/>};

render()
{const status="Next player: X ";
return(
  <div>
{this.renderSquare(0)}
{this.renderSquare(1)}</div>
);







}

};


ReactDOM.render(
  <Board />,
  document.getElementById('root')
);

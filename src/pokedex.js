import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './pokecard';

function padToThree(number) {
    if (number <= 99) { number = ("00" + number).slice(-3); }
    return number;
}

class Pokedex extends Component {
    render() {
        let title;
        if (this.props.isWinner)
            title = <h1 className='Pokedex-winner'>WINNING HAND !</h1>
        else
            title = <h1 className='Pokedex-loser'>LOSING HAND !</h1>
        return (
            <div className='Pokedex'>
                {title}
                <h4>Total Experience: {this.props.exp}</h4>
                <div className='Pokedex-cards'>
                    {this.props.pokemon.map((poke) => (
                        <Pokecard id={padToThree(poke.id)} name={poke.name} type={poke.type} base_experience={poke.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}
export default Pokedex;
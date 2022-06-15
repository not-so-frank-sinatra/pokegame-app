import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    render() {
        const img_url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.props.id}.png`;
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-title'>{this.props.name}</h1>
                <div className='Pokecard-image'>
                    <img src={img_url} alt={this.props.name} />
                </div>
                <div className='Pokecard-data'>Type: {this.props.type}</div>
                <div className='Pokecard-data'>Experience: {this.props.base_experience}</div>

            </div>
        );
    }
}

export default Pokecard;
import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import PokemonRow from './PokemonRow';

const PokemonTable = () => {
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemon);
    const filter = useSelector(state => state.filter);
    return (
        <table width="100%">
            <tbody>
                {pokemon
                    .filter(({ name: { english } }) =>
                        english
                            .toLocaleLowerCase()
                            .includes(filter.toLocaleLowerCase())
                    )
                    .slice(0, 20)
                    .map((pokemon) => (
                        <PokemonRow
                            pokemon={pokemon}
                            onClick={(pokemon) => dispatch({
                                type: "SET_SELECTED_POKEMON",
                                payload: pokemon,
                            })}
                        />
                    ))}
            </tbody>
        </table>
    );
};

export default PokemonTable;
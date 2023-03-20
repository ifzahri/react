import React from 'react'
import useStore from '../store';
import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
`;

const PokemonFilter = () => {
    const filter = useStore((state) => state.filter);
    const setFilter = useStore((state) => state.setFilter);
    return (
        <Input
            type="text"
            value={filter}
            onChange={(evt) => setFilter(evt.target.value)}
        />
    );
};

export default PokemonFilter;
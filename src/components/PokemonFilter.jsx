import React from 'react'
import { observer } from 'mobx-react';
import store from '../store';
import styled from "@emotion/styled";

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: large;
`;

const PokemonFilter = () => {
    return (
        <Input
            type="text"
            value={store.filter}
            onChange={(evt) => store.setFilter(evt.target.value)}
        />
    );
};

export default observer(PokemonFilter);
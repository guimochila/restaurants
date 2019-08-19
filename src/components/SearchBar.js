import React from 'react';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

const ViewContainer = styled.View`
  background-color: #f0eeee;
  height: 50;
  border-radius: 5px;
  margin: 15px 15px 0 15px;
  flex-direction: row;
`;

const SearchIcon = styled(Feather)`
  font-size: 32;
  align-self: center;
  margin: 0 15px;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 20px;
`;

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <ViewContainer>
      <SearchIcon name="search" />
      <SearchInput
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        autoCorrect={false}
        autoCapitalize="none"
        onEndEditing={onTermSubmit}
      />
    </ViewContainer>
  );
};

export default SearchBar;

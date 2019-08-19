import React, { useState } from 'react';
import { View, Text } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      const { data } = await yelp.get('/search', {
        params: {
          term,
          limit: 50,
          location: 'xativa',
        },
      });

      setRestaurants(data.businesses);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {restaurants.length}</Text>
    </View>
  );
};

export default SearchScreen;

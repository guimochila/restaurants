import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import RestaurantsList from '../components/RestaurantsList';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = price => {
    return restaurants.filter(restaurant => restaurant.price === price);
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <RestaurantsList
          title="Cost Effective"
          restaurants={filterRestaurantsByPrice('€')}
        />
        <RestaurantsList
          title="Bit Pricier"
          restaurants={filterRestaurantsByPrice('€€')}
        />
        <RestaurantsList
          title="Big Spender"
          restaurants={filterRestaurantsByPrice('€€€')}
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

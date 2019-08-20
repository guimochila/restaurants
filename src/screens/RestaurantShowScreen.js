import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

import yelp from '../api/yelp';

const Image = styled.Image`
  height: 200;
  width: 300;
  border-radius: 4px;
  margin-left: 10px;
`;

const Title = styled.Text`
  font-size: 21px;
  font-weight: bold;
  font-style: italic;
  margin: 10px 15px;
`;

const Details = styled.View`
  margin: 0 10px;
`;

const Text = styled.Text`
  font-size: 20px;
  margin-bottom: 8px;
`;

const RestaurantShowScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);

  const id = navigation.getParam('id');

  const getRestaurant = async id => {
    const { data } = await yelp.get(`/${id}`);
    setRestaurant(data);
  };

  useEffect(() => {
    getRestaurant(id);
  }, []);

  if (!restaurant) return null;

  const { name, photos, location, phone, rating, price } = restaurant;

  return (
    <View>
      <Title>{name}</Title>
      <FlatList
        style={{ marginBottom: 20 }}
        data={photos}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} />;
        }}
      />

      <Details>
        <Text>Phone: {phone}</Text>
        <Text>Address: {location.address1}</Text>
        <Text>Rating: {rating}</Text>
        <Text>Price: {price}</Text>
      </Details>
    </View>
  );
};

export default RestaurantShowScreen;

import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styled from 'styled-components/native';

import RestaurantDetail from './RestaurantDetail';

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  margin-left: 15px;
  margin-bottom: 7px;
  letter-spacing: 1.5px;
`;

const Container = styled.View`
  margin-bottom: 12px;
`;

const RestaurantsList = ({ title, restaurants, navigation }) => {
  if (!restaurants.length) return null;

  return (
    <Container>
      <Title>{title}</Title>
      <FlatList
        style={{ backgroundColor: '#eeee', paddingVertical: 10 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialNumToRender={10}
        data={restaurants}
        keyExtractor={restaurant => restaurant.id}
        removeClippedSubviews
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantShow', { id: item.id })
              }
            >
              <RestaurantDetail restaurant={item} />
            </TouchableOpacity>
          );
        }}
      />
    </Container>
  );
};

export default withNavigation(RestaurantsList);

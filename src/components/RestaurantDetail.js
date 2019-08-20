import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const DetailContainer = styled.View`
  margin-left: 15px;
`;

const Image = styled.Image`
  width: 250px;
  height: 120px;
  border-radius: 4px;
  margin-bottom: 5px;
`;

const Name = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;

const RestaurantDetail = ({ restaurant }) => {
  const { image_url, name, rating, review_count } = restaurant;

  return (
    <DetailContainer>
      <Image
        source={
          image_url
            ? { uri: image_url }
            : require('../../assets/image_placeholder.png')
        }
      />
      <Name>{name}</Name>
      <Text>
        {rating} Stars, {review_count} Reviews
      </Text>
    </DetailContainer>
  );
};

export default React.memo(RestaurantDetail);

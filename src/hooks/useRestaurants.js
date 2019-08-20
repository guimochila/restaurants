import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    searchApi('pasta');
  }, []);

  const searchApi = async searchTerm => {
    try {
      const { data } = await yelp.get('/search', {
        params: {
          term: searchTerm,
          limit: 50,
          location: 'valencia',
        },
      });

      setRestaurants(data.businesses);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };

  return [searchApi, restaurants, errorMessage];
};

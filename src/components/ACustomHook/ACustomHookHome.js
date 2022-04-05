import React, { useEffect, useState } from 'react';

const CustomHookHome = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('HomeProducts.json')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return [reviews, setReviews];
};

export default CustomHookHome;

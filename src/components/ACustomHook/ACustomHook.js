import React, { useEffect, useState } from 'react';

const CustomHook = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return [reviews, setReviews];
};

export default CustomHook;

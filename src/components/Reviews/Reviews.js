import React, { useEffect, useState } from 'react';
import CustomHook from '../ACustomHook/ACustomHook';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = CustomHook();

  return (
    <div className="reviews-container">
      {reviews.map((review) => (
        <Review key={review.id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;

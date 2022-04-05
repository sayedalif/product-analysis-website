import React, { useEffect, useState } from 'react';
import CustomHookHome from '../ACustomHook/ACustomHookHome';
import HomeReview from '../Review/HomeReview';
import './Reviews.css';

const HomeReviews = () => {
  const [homeReviews, setReviews] = CustomHookHome();
  return (
    <div className="reviews-container">
      {homeReviews.map((homeReview) => (
        <HomeReview key={homeReview.id} homeReview={homeReview}></HomeReview>
      ))}
    </div>
  );
};

export default HomeReviews;

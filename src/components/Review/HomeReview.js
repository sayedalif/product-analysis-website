import React from 'react';
import './Review.css';

const HomeReview = ({ homeReview }) => {
  const { name, reviewer, img, comment, ratings, ratingsCount } = homeReview;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h4>Name: {reviewer}</h4>
      <h5>Rate: {ratings}⭐</h5>
      <span>
        <small>Total Ratings: {ratingsCount}</small>
      </span>
      <p>Review: {comment}</p>
    </div>
  );
};

export default HomeReview;

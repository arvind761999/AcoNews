import React from 'react';

const NewsCard = ({ title, description, image }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default NewsCard;

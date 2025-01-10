import React from 'react';
import * as Icons from 'react-feather';

function TopicCard({ topic }) {
  const Icon = Icons[topic.icon];

  return (
    <div className="bg-gray-800 rounded-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer w-64 flex-shrink-0">
      <div className="aspect-w-16 aspect-h-9 bg-gray-700 flex items-center justify-center">
        {topic.image ? (
          <img src={topic.image} alt={topic.title} className="object-cover w-full h-full" />
        ) : (
          Icon && <Icon className="w-12 h-12 text-white" />
        )}
      </div>
      <div className="p-4">
        <h4 className="text-lg font-semibold mb-2">{topic.title}</h4>
        <p className="text-sm text-gray-300">{topic.description}</p>
      </div>
    </div>
  );
}

export default TopicCard;


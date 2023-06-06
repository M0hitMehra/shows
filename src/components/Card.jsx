import React from "react";

import { motion } from "framer-motion";

const Card = ({ item }) => {
  return (
    <motion.div
    className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
  >
    <img className="w-full h-48 object-cover" src={item.show.image.medium} alt={item.show.name} />
    <div className="px-6 py-4 h-48">
      <div className="font-bold text-xl mb-2">{item.show.name}</div>
      <motion.div
        className="text-gray-900 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        dangerouslySetInnerHTML={{ __html: item.show.summary.slice(0, 200) }}
      />
    </div>
    <div className="px-6 pt-4 pb-2">
      <p className="text-gray-600 my-2 mr-2">
        Rating: {item.show.rating.average ? item.show.rating.average : "Nil"}
      </p>
      <div className="flex flex-wrap">
        {item &&
          item.show.genres.map((genre, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {genre}
            </span>
          ))}
      </div>
    </div>
  </motion.div>
  );
};

export default Card;

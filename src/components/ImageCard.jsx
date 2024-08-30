import React from "react";

const ImageCard = ({ image, key }) => {
  console.log(image);
  console.log(key);
  return (
    <div className="container mx-auto px-4 bg-gray-800">
      <img className="w-full" alt="" src={image.webformatURL} />
      <div className="px-6 py-4 bg-gray-100">
        <div className="font-bold text-purple-500">Photo by someone!</div>
        <ul>
          <li>
            <strong>Views: {image.views}</strong>
          </li>
          <li>
            <strong>Downloads: 300</strong>
          </li>
          <li>
            <strong>Likes: 1000</strong>
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag1
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag2
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #tag3
        </span>
      </div>
    </div>
  );
};

export default ImageCard;

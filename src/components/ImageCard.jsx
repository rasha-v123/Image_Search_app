import React from "react";

const ImageCard = ({ image, key }) => {
  console.log(image);

  const tags = image.tags.split(",");
  console.log(tags);

  return (
    <div className="container mx-auto px-4 bg-gray-800">
      <img className="w-full" alt="" src={image.webformatURL} />
      <div className="px-6 py-4 bg-gray-100">
        <div className="font-bold text-purple-500">Photo by {image.user}!</div>
        <ul>
          <li>
            <strong>Views: {image.views}</strong>
          </li>
          <li>
            <strong>Downloads: {image.downloads}</strong>
          </li>
          <li>
            <strong>Likes: {image.likes}</strong>
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;

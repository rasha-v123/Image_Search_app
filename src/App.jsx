import React, { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState("");

  const API_KEY = "31426374-a01935bdefbc3ed5bf5251148";

  useEffect(() => {
    // Prevent fetch on initial render when term is empty
    setLoading(true);
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits); // Save the images in state
        setLoading(false);
        // console.log(data.hits); // Log the fetched images
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [term]); // Add 'term' as a dependency

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(search) => setTerm(search)} />
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <ImageCard image={image} key={image.id} />
        ))}
      </div>
    </div>
  );
}

export default App;

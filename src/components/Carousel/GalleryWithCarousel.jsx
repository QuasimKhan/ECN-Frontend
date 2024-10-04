import { useEffect, useState } from "react";
import { Carousel } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";

export function GalleryWithCarousel() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState([]);

  useEffect(() => {
    fetch("/json/carouselImg.json")
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        setImageLoading(Array(data.length).fill(true)); // Initialize image loading states
        setLoading(false);
      })
      .catch(() => setLoading(false)); // Handle errors by stopping the loader
  }, []);

  const handleImageLoad = (index) => {
    setImageLoading((prevLoading) => {
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Spinner color="blue" className="w-12 h-12" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-screen-md h-64 flex items-center justify-center mx-auto relative z-10"> {/* Container size */}
      <Carousel loop={true} autoplay={true} className="rounded-xl relative z-10">
        {images.map((image, index) => (
          <div key={index} className="relative h-full w-full">
            {imageLoading[index] && (
              <div
                className="flex items-center justify-center w-full h-full absolute inset-0 bg-white bg-opacity-75 z-20"
                style={{ pointerEvents: 'none' }} // Ensure spinner does not block interactions
              >
                <Spinner color="blue" className="w-12 h-12" />
              </div>
            )}
            <div className="absolute top-0 w-full bg-opacity-50 bg-black text-white text-center p-2 z-30">
              {image.title}
            </div>
            <img
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 ${imageLoading[index] ? "opacity-0" : "opacity-100"}`}
              onLoad={() => handleImageLoad(index)}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

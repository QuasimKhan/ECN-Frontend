import React, { useEffect, useState, useRef } from "react";
import { Carousel } from "@material-tailwind/react";
import FadeIn from "../FadeIn"; // Adjust the path according to your file structure
import { Spinner } from "@material-tailwind/react";

export function YouTubeGallery() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const iframeRefs = useRef([]); // Refs for iframes

  useEffect(() => {
    fetch("/json/youtubeData.json")
      .then((response) => response.json())
      .then((data) => {
        const sortedVideos = data.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
        setVideos(sortedVideos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching YouTube data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Spinner color="blue" className="w-12 h-12" />
      </div>
    );
  }

  const visibleVideos = videos.slice(0, 10);

  return (
    <div className="w-full mt-12 px-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Latest YouTube Videos</h1>
      <FadeIn show={videos.length > 0}>
        {videos.length > 0 && (
          <div className="relative">
            <Carousel
              loop={true} // Enable infinite scrolling
              className="rounded-xl"
              indicators={true} // Enable default indicators
              autoplay={false} // Ensure autoplay is disabled if not required
            >
              {visibleVideos.map((video, index) => (
                <div key={index} className="flex justify-center items-center p-2">
                  <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:w-1/2">
                    <div className="relative pb-[56.25%] h-0"> {/* Aspect ratio 16:9 */}
                      <iframe
                        ref={(el) => (iframeRefs.current[index] = el)}
                        src={`https://www.youtube.com/embed/${video.videoId}?enablejsapi=1`} // Enable JS API
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        )}
        <div className="mt-6 text-center">
          <a
            href="https://www.youtube.com/@ECNaseerpur" // Replace with your YouTube channel URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300"
          >
            Watch More Videos
          </a>
        </div>
      </FadeIn>
    </div>
  );
}

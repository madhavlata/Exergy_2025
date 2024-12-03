import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Install via npm install react-responsive-carousel

const featuredImages = [
  "/public/images/gallery/1.jpg",
  "/public/images/gallery/2.jpg",
  "/public/images/gallery/3.jpg",
];

const galleryImages = [
  "/public/images/gallery/4.jpg",
  "/public/images/gallery/5.jpg",
  "/public/images/gallery/7.jpg",
  "/public/images/gallery/8.jpg",
  "/public/images/gallery/6.jpg",
  "/public/images/gallery/9.jpg",
  "/public/images/gallery/10.jpeg",
  "/public/images/gallery/11.jpeg",
  "/public/images/gallery/12.jpeg",
];

const Gallery = () => {
  return (
    <main className="container mx-auto px-5 py-10 pt-32">
      {/* Carousel */}
      <section className="mb-16 pt-8">
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          showStatus={false}
          className="rounded-lg shadow-lg"
        >
          {featuredImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Featured ${index + 1}`} />
              {/* <p className="legend text-lg">{`Featured Image ${index + 1}`}</p> */}
            </div>
          ))}
        </Carousel>
      </section>

      {/* Grid Gallery */}
      <section>
        <h1 className="text-4xl font-bold text-center mb-10 text-white">
          Our Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden group rounded-lg shadow-lg"
            >
              {/* Image */}
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                {/* <h2 className="text-white text-2xl font-bold">
                  Image {index + 1}
                </h2> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Gallery;

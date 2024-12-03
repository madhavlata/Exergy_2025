import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    position: "Team Lead",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Developer",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Sam Wilson",
    position: "Designer",
    image: "https://via.placeholder.com/150",
  },
];

const Team = () => {
  return (
    <main className="container mx-auto px-5 py-10 pt-32">
      <h1 className="text-3xl font-bold text-center mb-10 pt-5 text-white">
        Meet Our Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map(({ id, name, position, image }) => (
          <div
            key={id}
            className="relative group overflow-hidden bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3"
          >
            {/* Image */}
            <img
              src={image}
              alt={name}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Hover Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="absolute bottom-0 left-0 w-full p-4 text-center text-white transition-transform duration-500 group-hover:translate-y-0 translate-y-full">
              <h2 className="text-xl font-bold">{name}</h2>
              <p className="text-blue-400">{position}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Team;

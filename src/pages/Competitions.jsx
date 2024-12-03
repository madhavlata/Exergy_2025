import { competitions } from "../constants/index.jsx";

const Competitions = () => {
  return (
    <>
      <main className="container mx-auto px-5 py-10 pt-32">
        <h1 className="text-3xl font-bold text-center mb-10 pt-5 text-white">
          Competitions to participate
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {competitions.map(
            ({ id, title, date, description, image, button }) => (
              <div
                key={id}
                className="border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 bg-gray-900"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2 text-white">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-300 mb-4">{date}</p>
                  <p className="text-gray-300 mb-4">{description}</p>
                  <a
                    href={button.link}
                    target="_blank"
                    className="inline-block px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-md hover:from-blue-600 hover:to-blue-700 transition-all shadow-md"
                  >
                    {button.text}
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </main>
    </>
  );
};

export default Competitions;

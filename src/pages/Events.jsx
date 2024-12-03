const Events = () => {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.heading}>Events</h1>
        <p style={styles.message}>To Be Announced Soon...</p>
      </div>
      {/* <main className="container mx-auto px-5 py-10 pt-32">
        <h1 className="text-3xl font-bold text-center mb-10 pt-5 text-white">
          Our Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(({ id, title, date, description, image, button }) => (
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
                  className="inline-block px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-md hover:from-blue-600 hover:to-blue-700 transition-all shadow-md"
                >
                  {button.text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </main> */}
    </>
  );
};

export default Events;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    // backgroundColor: "#f8f9fa",
    color: "#333",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "1rem",
    color: "#007bff",
  },
  message: {
    fontSize: "1.5rem",
    color: "white",
  },
};

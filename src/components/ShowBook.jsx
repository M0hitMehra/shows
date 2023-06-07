import { useState } from "react";
import { motion } from "framer-motion";

const ShowDetails = ({ show }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    tickets: 1,
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your form submission logic here
    console.log(formData);
    // Reset the form data
    setFormData({ name: "", age: "", gender: "", tickets: 1 });
    // Close the modal
    closeModal();
  };

  return (
    <div className="flex flex-col p-5">
      {show && (
        <motion.div
          className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src={show?.show.image?.medium}
              alt={show.name}
            />
            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
              <h2 className="text-lg font-bold">{show.show.name}</h2>
              <p className="text-sm">
                Rating: {show?.show.rating?.average || "Nil"}
              </p>
            </div>
          </div>
          <div className="px-6 py-4">
            <motion.div
              className="text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              dangerouslySetInnerHTML={{
                __html: show?.show.summary?.slice(0, 200),
              }}
            />
          </div>
          <div className="px-6 pt-4 pb-2">
            <div className="flex flex-wrap">
              {show?.show.genres &&
                show.show.genres.map((genre, index) => (
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
      )}
      <button
        className="bg-blue-500 mx-auto hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={openModal}
      >
        Book Your Tickets
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={closeModal}
          ></div>
          <div
            className="  rounded-lg bg-white opacity-70 p-8 z-10 relative"
            style={{
              backdropFilter: "blur(010px)",
              WebkitBackdropFilter: "blur(100px)",
            }}
          >
            <h2 className="text-2xl font-bold mb-4">Enter Details</h2>
            <form onSubmit={handleSubmit} className="w-[30vw] " >
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-bold">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="age" className="block mb-2 font-bold">
                  Age:
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="gender" className="block mb-2 font-bold">
                  Gender:
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="tickets" className="block mb-2 font-bold">
                  Number of Tickets:
                </label>
                <input
                  type="number"
                  id="tickets"
                  name="tickets"
                  value={formData.tickets}
                  onChange={handleChange}
                  min={1}
                  max={10}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowDetails;

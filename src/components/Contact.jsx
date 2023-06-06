import { motion } from 'framer-motion';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-24 "
    >
      <h1 className="text-3xl font-bold mb-5 mx-24">Contact Us</h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-200 rounded p-5 mx-24"
      >
        <form onSubmit={handleSubmit} className="flex flex-col p-5  space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded px-3 py-2 mt-1"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded px-3 py-2 mt-1"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="border border-gray-300 rounded px-3 py-2 mt-1"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;

import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-5"
    >
      <h1 className="text-3xl font-bold mb-5">About</h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-200 rounded p-5 mb-4"
      >
        <h2 className="text-2xl font-bold mb-3">Lorem Ipsum</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit nisl
          vitae mauris tincidunt, eget congue nunc volutpat. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Fusce in semper
          quam, nec rhoncus justo. Cras mattis tellus ac tincidunt vestibulum. Vestibulum
          sit amet neque et tellus pharetra mollis. Mauris congue est vel scelerisque
          gravida. Duis at tempor elit. Sed varius ante non risus laoreet euismod. In hac
          habitasse platea dictumst. Sed consectetur neque eget est gravida ultrices.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gray-200 rounded p-5 mb-4"
      >
        <h2 className="text-2xl font-bold mb-3">Lorem Ipsum</h2>
        <p className="text-lg">
          Suspendisse mattis vestibulum fringilla. Curabitur sollicitudin enim eu magna
          fermentum, vitae pretium erat auctor. Vivamus consectetur tortor id orci
          volutpat consequat. Integer vestibulum vehicula odio, at lobortis arcu auctor
          at. Vivamus tempus pellentesque lectus vitae viverra. Nam in erat arcu.
          Pellentesque cursus feugiat orci at luctus. Sed malesuada tempor hendrerit.
          Aliquam lobortis, sapien in pellentesque efficitur, felis sem fringilla leo, ac
          dignissim mi turpis nec nisi. Duis eget convallis velit, a efficitur lorem.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gray-200 rounded p-5 mb-4"
      >
        <h2 className="text-2xl font-bold mb-3">Lorem Ipsum</h2>
        <p className="text-lg">
          Fusce rhoncus finibus odio, in maximus turpis ultrices nec. Nunc a risus id
          dolor consectetur cursus. Sed ut faucibus mauris. Donec eu pharetra nulla. Nam
          auctor fringilla commodo. Etiam placerat, dui ut scelerisque efficitur, est
          lectus luctus metus, vitae luctus turpis risus vitae nisl. Nulla rutrum vitae
          purus a lobortis. Aenean vitae hendrerit nunc. Etiam pellentesque sodales ex id
          facilisis. Suspendisse potenti. In aliquam efficitur diam nec egestas.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;

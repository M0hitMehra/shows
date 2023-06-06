import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

  

function App() {
  return (
   <Layout >
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/contact" element={<Contact/>} />
      </Routes>
   </Layout>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Card from "./Card";
import ShowDetails from "./ShowBook";

const Home = () => {
  const [show, setShow] = useState(null);
  const [prior, setPrior] = useState(null);
  useEffect(() => {
    async function call() {
      const { data } = await axios.get(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      setPrior(data[0]);
      setShow(data);
    }
    call();
    console.log(prior);
  }, [axios]);

  return (
    <>
      <div className=" grid grid-cols-12 gap-10 h-full bg-gray-300">
        <div className="col-span-9 border-r-2">
          <div className="flex flex-col gap-10">
            {prior && (
              <div className="p-6">
                <div className="p-2">
                  <img
                    src={prior.show.image.medium}
                    className="w-full h-[600px] rounded-xl"
                    alt=""
                  />
                </div>
                <div className="m-2">
                  <h1 className="mx-2 text-xl font-mono font-bold">
                    {prior.show.name}
                  </h1>
                  <div className="flex items-center overscroll-x-auto gap-4">
                    <div className="flex gap-5 my-2 items-center">
                      <span className="px-4 rounded-lg py-1 bg-red-800 text-white">
                        Genres:
                      </span>
                      <div className="flex items-center">
                        {prior.show.genres.map((g, index) => (
                          <motion.p
                            key={index}
                            className="mx-2 text-gray-900"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            // onClick={() => handleGenreClick(g)}
                          >
                            {g},
                          </motion.p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <motion.div
                      className="text-gray-900"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      Rating: {prior.show.rating.average}
                    </motion.div>
                    <motion.div
                      className="text-gray-900"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      Language: {prior.show.language}
                    </motion.div>
                    <motion.div
                      className="text-gray-900"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      dangerouslySetInnerHTML={{ __html: prior.show.summary }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
                {show &&
                  show.map((item, index) => (
                    <div key={index} className="cursor-pointer" onClick={()=>setPrior(item)} >
                      <Card item={item} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
            <ShowDetails show={prior} />
        </div>
      </div>
    </>
  );
};

export default Home;

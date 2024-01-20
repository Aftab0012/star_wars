import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import { handleSearch } from '../utils/search';
import { motion } from 'framer-motion';
import LoadingAnimation from '../Animations/LoadingAnimation';
import search from '../assets/icons/search.svg';
import Dropdown from './Dropdown';

const Homepage = () => {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [searchVal, setSearchVal] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [animation, setAnimation] = useState();
  const [detailsLoadingAnimation, setDetailsLoadingAnimation] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setAnimation(true);
        const response = await axios.get(
          `https://swapi.dev/api/films/?format=json`
        );
        setOriginalData(response.data.results);
        setData(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setAnimation(false);
      }
    };

    fetchData();
  }, []);

  const handleMovieDetails = (item) => {
    setSelectedMovie(item);
    setDetailsLoadingAnimation(true);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  setTimeout(() => {
    setDetailsLoadingAnimation(false);
  }, 200);

  return (
    <>
      <div className="flex items-center justify-center w-full gap-2 p-4 border-b shadow-md max-sm:p-3 max-sm:shadow-sm max-sm:flex-col-reverse font-poppins max-sm:items-start">
        <div className="flex justify-start my-1 max-sm:pr-2 max-sm:mb-0 max-sm:w-full">
          <Dropdown
            setSortBy={setSortBy}
            data={data}
            setData={setData}
            originalData={originalData}
          />
        </div>
        <div className="flex items-center w-full pl-2 bg-white border rounded-lg shadow-md max-sm:mb-2 max-sm:pl-3 max-sm:w-full">
          <img src={search} alt="search-img" />
          <input
            type="text"
            placeholder="Search movie"
            className="flex-grow p-2 text-lg font-normal sm:ml-3 focus:outline-none"
            value={searchVal}
            onChange={(e) =>
              handleSearch(e.target.value, originalData, setSearchVal, setData)
            }
          />
        </div>
      </div>

      <div className="flex flex-col w-full min-h-screen p-4 font-poppins md:flex-row sm:flex-row">
        <div className="flex-1 pr-2 mb-4 md:mb-0 max-sm:border-b-2">
          <MovieList
            data={data}
            animation={animation}
            onSelectMovie={handleMovieDetails}
          />
        </div>

        <div className="flex-1 pl-2">
          {selectedMovie ? (
            detailsLoadingAnimation ? (
              <div>
                <LoadingAnimation />
              </div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="p-4 mb-4"
              >
                <h2 className="mb-4 text-2xl font-semibold">
                  Episode {selectedMovie.episode_id} - {selectedMovie.title}
                </h2>
                <p className="text-justify text-gray-700">
                  {selectedMovie.opening_crawl}
                </p>
              </motion.div>
            )
          ) : (
            <div className="flex items-center justify-center h-full p-2">
              <div className="text-xl font-semibold">No movies selected</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Homepage;

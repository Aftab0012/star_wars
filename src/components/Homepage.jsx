import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import { handleSearch } from '../utils/search';
import { handleSortBy } from '../utils/sortBy';
import { motion } from 'framer-motion';

const Homepage = () => {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [searchVal, setSearchVal] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [animation, setAnimation] = useState();

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
        // Move handleAnimation inside the try block or use a setTimeout to ensure it runs after the animation is complete
        setTimeout(() => {
          setAnimation(false);
        }, 200); // Adjust the duration to match your animation duration
      }
    };

    fetchData();
  }, []);

  const handleMovieDetails = (item) => {
    setSelectedMovie(item);
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

  return (
    <>
      <div className="flex items-center justify-center w-full p-4 border-b shadow-md max-sm:p-3 max-sm:shadow-sm max-sm:flex-col-reverse font-poppins max-sm:items-start">
        <span className="flex justify-end mb-2 max-sm:mb-0 max-sm:w-full">
          <select
            value={sortBy}
            onChange={(e) =>
              handleSortBy(
                e.target.value,
                setSortBy,
                setData,
                originalData,
                data
              )
            }
            className="p-2 rounded-md focus:outline-none"
          >
            <option value="sortby" className="text-gray-500">
              Sort by
            </option>
            <option value="Year" className="text-gray-500">
              Year
            </option>
            <option value="episode" className="text-gray-500">
              Episode
            </option>
          </select>
        </span>
        <div className="flex items-center w-full p-2 bg-white rounded-md max-sm:mb-2 max-sm:border max-sm:pl-3 max-sm:w-full">
          <input
            type="text"
            placeholder="Search movie"
            className="flex-grow text-lg font-normal sm:ml-3 focus:outline-none"
            value={searchVal}
            onChange={(e) =>
              handleSearch(e.target.value, originalData, setSearchVal, setData)
            }
          />
        </div>
      </div>

      <div className="flex flex-col w-full min-h-screen p-4 font-poppins md:flex-row sm:flex-row">
        <div className="flex-1 pr-2 mb-4 md:mb-0">
          <MovieList
            data={data}
            animation={animation}
            onSelectMovie={handleMovieDetails}
          />
        </div>

        <div className="flex-1 pl-2">
          {selectedMovie ? (
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

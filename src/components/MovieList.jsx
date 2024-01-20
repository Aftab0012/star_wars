/* eslint-disable react/prop-types */
import { easeInOut, motion } from 'framer-motion';
import LoadingAnimation from '../Animations/LoadingAnimation';

const MovieList = ({ data, onSelectMovie, animation }) => {
  return (
    <div className="flex-1 pr-2 font-poppins sm:min-h-screen sm:border-r">
      <div>
        {animation ? (
          <div>
            <LoadingAnimation />
          </div>
        ) : (
          data.map((item, i) => (
            <motion.div
              key={item.episode_id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                ease: easeInOut,
                delay: i * 0.2,
              }}
              layout
              onClick={() => onSelectMovie(item)}
              className="flex items-center justify-between p-4 transition-all duration-300 ease-in-out border-b cursor-pointer last:border-b-0 hover:bg-gray-100 hover:shadow-md"
            >
              <div className="flex items-center justify-evenly max-sm:text-sm lg:text-lg">
                <p className="text-lg font-medium text-gray-500 max-sm:text-sm sm:text-sm whitespace-nowrap md:text-[17px] xl:text-[17px]">
                  Episode {item.episode_id}
                </p>
                <p className="pl-8 pr-2 font-medium text-gray-500 xl:text-[17px] md:text-[17px] sm:line-clamp-1 max-sm:text-sm">
                  {item.title}
                </p>
              </div>
              <p className="text-gray-500 xl:text-[17px] max-md:line-clamp-1 sm:text-sm md:text-sm max-sm:text-sm">
                {item.release_date}
              </p>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieList;

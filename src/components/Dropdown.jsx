/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useState } from 'react';
import { handleSortBy } from '../utils/sortBy';

const Dropdown = ({ setSortBy, setData, originalData, data }) => {
  const [selectedOption, setSelectedOption] = useState('sortby');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    handleSortBy(value, setSortBy, setData, originalData, data);
    setIsOpen(false);
  };

  const menuItems = ['sortby', 'episode', 'title'];

  return (
    <div className="flex flex-col justify-center items-center max-w-[250px] w-[110px] h-[38px]">
      <div className="relative w-full dropdown">
        <button
          onClick={toggleDropdown}
          className={
            'border shadow-md w-full text-gray-700 font-semibold py-2.5 px-3 rounded inline-flex items-center'
          }
        >
          <span className="mr-1">Sort by</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className={`fill-current h-4 w-4 ${
              isOpen && 'transform rotate-180'
            }`}
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        <ul
          className={`dropdown-menu mt-2 border rounded-lg absolute ${
            isOpen ? 'block' : 'hidden'
          } text-gray-700 shadow-lg pt-1`}
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(item)}
              className={`${
                index === menuItems.length - 1 ? 'rounded-b ' : ''
              }bg-white capitalize border-b last:border-b-0 w-[180px] hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap ${
                selectedOption === item ? 'font-bold' : ''
              }`}
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;

import React, { useState } from 'react';

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Grapes',
    'Strawberry',
  ];

  // Filter the items based on the search query
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-slate-200 shadow-lg p-8 w-full max-w-md mx-auto rounded-xl border border-gray-100">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Search Filter
      </h2>

      <input
        type="text"
        placeholder="Search..."
        className="w-full p-3 border border-gray-300 rounded-full text-gray-600 focus:outline-none focus:ring-4 focus:ring-slate-500 transition duration-300 shadow-sm placeholder-gray-400"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <ul className="mt-6 space-y-3">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li
              key={index}
              className="py-3 px-5 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-50 hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <span className="text-lg font-medium text-gray-700">{item}</span>
            </li>
          ))
        ) : (
          <li className="py-4 px-5 text-gray-500 text-center bg-gray-50 rounded-lg shadow-inner">
            No items found
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;

import React from 'react'

const AddBook = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        
        <form className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 space-y-6">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 underline">
          Add New Book
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Book Title
          </label>
          <input
            type="text"
            placeholder="Little Earthquakes"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Author Name
          </label>
          <input
            type="text"
            placeholder="Brian Jacques"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Year
          </label>
          <input
            type="date"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Pages
          </label>
          <input
            type="number"
            placeholder='Book should be greater than 50 pages'
            min={50}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>


        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
        >
          A D D &nbsp; &nbsp; B O O K
        </button>

        </form>
    </div>
  )
}

export default AddBook
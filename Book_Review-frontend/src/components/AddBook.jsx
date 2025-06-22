import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';


const AddBook = () => {

  const handleAddBook= async(e)=>{

    e.preventDefault()

    const formArray = [e.target.title.value,e.target.author.value, e.target.publish_date.value, e.target.total_page.value ]

    console.log(formArray)

    try {
      const response = await axios.post("http://localhost:3000/books/addbook",
        {formArray})

        console.log(response.data)
    } catch (error) {
      console.log("add book error : ", error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form onSubmit={handleAddBook}
        className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 space-y-6">
        {/* <div className='flex justify-end'>
          <FontAwesomeIcon icon={faXmark} />
        </div>
         */}
        <h2 className="text-3xl font-bold text-center text-gray-800 underline">
          Add New Book
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Book Title
          </label>
          <input
            type="text"
            name='title'
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
            name='author'
            placeholder="Brian Jacques"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Publish Date
          </label>
          <input
            type="date"
            name='publish_date'
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
            name='total_page'
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
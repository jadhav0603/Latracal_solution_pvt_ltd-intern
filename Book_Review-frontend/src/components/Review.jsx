import React from 'react'

const Review = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 space-y-6" >
                <label className="block text-sm font-medium text-gray-700 mb-1">Write Your Own Review</label>
                <textarea
                    rows={5}
                    placeholder="Write your review here..."
                    className="w-[80%] max-w-1xl border border-gray-300 rounded-lg p-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                ></textarea>

                <label className="block text-sm font-medium text-gray-700 mb-1">Rate the book (/5)</label>
                <select className='border border-gray-300 rounded px-[5px]'>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>

                  <button
         className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
           type="submit"
        >
            SUBMIT REVIEW
        </button>
            </form>

        </div>
    )
}

export default Review
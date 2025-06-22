import React, { useContext, useEffect, useState } from 'react'
import Navbar from './../components/Navbar';
import AddBook from '../components/AddBook';
import Review from '../components/Review';
import { GlobalDataContext } from '../context/ContextApi';
import BookCard from '../components/BookCard';
import Footer from '../components/Footer';

const Home = () => {

  const {userData} = useContext(GlobalDataContext)

  const [formVisible, setFormVisible] = useState(false)

  return (
    <div>
        <div >
            <Navbar />

            {
              (userData.role === 'admin')? <div className="bg-white flex justify-around rounded-2xl w-[100vw] p-8 space-y-6"> 
              <h1 className="text-3xl font-bold text-center text-gray-800 underline">Welcome {userData.role}</h1>
              <button 
              onClick={(()=>setFormVisible(!formVisible))}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-20 py-2 rounded-md transition duration-300"
              >
                ADD BOOKS
                </button>
            </div> : ""

            }
            
            {(formVisible)?  <AddBook /> : <div> </div>}


            {/* <div>
              {
                bookData.map((ele,i)=>{
                  <BookCard ele={ele} i={i} />
                })
              }

            </div> */}

            <Review />
            <Footer />
        </div>
    </div>
  )
}

export default Home
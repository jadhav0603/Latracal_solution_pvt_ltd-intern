import React from 'react'
import Navbar from './../components/Navbar';
import AddBook from '../components/AddBook';
import Review from '../components/Review';

const Home = () => {
  return (
    <div>
        <div>
            <Navbar />
            <AddBook />
            <Review />
        </div>
    </div>
  )
}

export default Home
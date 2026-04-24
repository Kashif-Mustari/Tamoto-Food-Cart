import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Navbar/Header/Header';
import ExploreMenue from '../../components/ExploreMenue/ExploreMenue';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
  const [category, setCategory] = useState("ALL");

  return (
    <div>
      <Header />
      <ExploreMenue category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home

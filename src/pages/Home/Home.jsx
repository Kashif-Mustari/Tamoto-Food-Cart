import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Navbar/Header/Header';
import ExploreMenue from '../../components/ExploreMenue/ExploreMenue';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {
  const [category, setCategory] = useState("ALL");

  return (
    <div>
      <Header />
      <ExploreMenue category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home

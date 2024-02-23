import React from 'react'
import "./style.scss"
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending'
import Papular from './papular/Papular'
import TopRated from "./topRated/TopRated"


export default function Home() {
  return (
    <div>
      <HeroBanner/>
      <Trending/>
      <Papular/>
      <TopRated/>
  
    </div>
  )
}


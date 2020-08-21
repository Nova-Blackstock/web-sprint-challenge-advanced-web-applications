import React, { useState, useEffect } from "react";
import axios from "axios";

import { fetchApi } from './fetchApi'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() =>{
    fetchApi()
      .then((res) => setColorList(res))
      .catch((error) => console.log(error))
  }, [])
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

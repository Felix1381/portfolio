import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
export default function ThisCantBeReached() {
  const [ShowText, setShowText] = React.useState(false);
  let CenterWidth = 0;
  let CenterHeight = 0;
  React.useEffect(() => {
    setTimeout(function () {
      setShowText(true);
    }, 1000);
  }, []);
  if (typeof window !== "undefined") {
    if(window.innerHeight>640){
      CenterHeight = (window.innerHeight)/2-160-20;
    }else{
      CenterHeight = (window.innerHeight)/2-64-20;
    }
    if(window.innerWidth>1280){
      CenterWidth = (window.innerWidth)/2-384-18;
    }else if(window.innerWidth>1024){
      CenterWidth = (window.innerWidth)/2-192-18;
    }else if(window.innerWidth>768){
      CenterWidth = (window.innerWidth)/2-144-18;
    }else if(window.innerWidth>640){
      CenterWidth = (window.innerWidth)/2-96-18;
    }else{
      CenterWidth = (window.innerWidth)/2-16-18;
    }
    
  }
 
  return (
    <div></div>
  );
}
"use client"; 

// import React from 'react'
import { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from 'next/image'
import { ThemeContext } from "@/context/ThemeContext";
const ThemeToggle = () => {

  const {toggle,theme} = useContext(ThemeContext)
  console.log(theme)

  return (
    <div 
    className={styles.container}
    onClick={toggle}
    style={
      theme === "dark"
      ? {backgroundColor:"white"}
      : {backgroundColor:"#0f172a"}
    
    }>
    



      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div 
      className={styles.toggle}
      style={theme === "dark"
       ? {left:1, background:"#0f172a"} 
       : {right: 1, background:"white"}}
       > 
       </div>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  )
}

export default ThemeToggle
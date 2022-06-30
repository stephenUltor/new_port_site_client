import React, { useState, useEffect } from "react"
import { ReactP5Wrapper } from "react-p5-wrapper"

import sketch from "./components/sketch"
import Window from "./components/window"
import Loader from "./components/loader"
import GuestBook from "./components/guestBook/guestbook"

function App() {

  const [loader, setLoader] = useState(true)
  const [guestBook, setGuestBook] = useState(false)

  //Timer for Loading page
  useEffect(() => {
    setTimeout(() => { setLoader(false) }, 5700)
  }, [])

  useEffect(() => {
    document.title = "StephenMorrow.dev"
  }, [])

  //handle Guest book
  function handleGuestBookClick() {
    setLoader(true)
    setGuestBook(!guestBook)
    setTimeout(() => { setLoader(false) }, 5700)
  }

  //Track Window size  
  function useWindowSize() {

    const [size, setSize] = useState(window.innerWidth)

    useEffect(() => {

      const handleResize = () => {
        setSize([window.innerWidth])
      }

      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }

    }, [])
    return size;
  }

  //store window width inside of variable
  let windowWidth = useWindowSize()

  return (

    <>

      {loader && <Loader />}

      <div className="sketch-container">
        <ReactP5Wrapper sketch={sketch} />
      </div>
      
      <div className="window"></div>

      {guestBook ?

        <GuestBook 
          guestBook={handleGuestBookClick}
        />
        :
        <Window
          guestBook={handleGuestBookClick}
          windowWidth={windowWidth}
        />
      }

    </>

  )

}

export default App;


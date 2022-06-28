import React, { useState, useEffect } from "react"
import Axios from "axios"

import Posts from "./posts"
import CreatePost from "./createposts"

function GuestBook(props) {

  const [listOfPosts, setListOfPosts] = useState([])
  const [createPost, setCreatePost] = useState(false)

  useEffect(() => {
    
    getPosts()
    
  }, [])
  
  function getPosts() {
    Axios.get(`http://localhost:3001/posts`).then((response) => {
      setListOfPosts(response.data)
      console.log(response.data)
    })
  }

  function handleCreatePostClick() {
    if(createPost){
      setCreatePost(false)
    }else{
      setCreatePost(true)
    }
    
  }

  return (
    <>

      <div className="container">
        
        {!createPost && <p className="exit-guest-book" onClick={props.guestBook}>X</p>}

        <div className="posts-container">
          <h1 className="posts-title">Guest Book</h1>

          <Posts
            listOfPosts={listOfPosts}
          />
        </div>

        {createPost ?
          <CreatePost
            handleCreatePostClick={handleCreatePostClick}
            getPosts={getPosts}
          />
          :
          <button className="open-create-post" onClick={handleCreatePostClick}>Create Post</button>
        }
      </div>

    </>
  )

}

export default GuestBook;


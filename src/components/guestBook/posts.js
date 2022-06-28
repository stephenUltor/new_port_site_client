import React from 'react'

export default function Posts (props) {
    
    const posts = props.listOfPosts.map((post, key) => {
        return(
            <div className='post'>
                
                <h1>- {post.title}</h1>
                
                <p className='username'>@{post.username}</p>
                
                <p className='message'>{post.postText}</p>
                
            </div>
        )
    }) 
    
    return(
        <>
        
            {posts}
        
        </>
    )
}
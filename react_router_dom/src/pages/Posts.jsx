import React from 'react'
import { Link } from 'react-router-dom'
import Post from '../components/Post'

function Posts() {
  return (
    <div className='posts'>
      <h2>Posts Page</h2>
      <ul>
        <li>
          <Link to='1' element={<Post />}>Post One</Link>
        </li>
        <li>
          <Link to='2' element={<Post />}>Post Two</Link>
        </li>
        <li>
          <Link to='3' element={<Post />}>Post Three</Link>
        </li>
      </ul>
    </div>
  )
}

export default Posts
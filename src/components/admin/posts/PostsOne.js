import React from 'react'
import LayoutOne from '../Layout/LayoutOne'
import './PostOne.css'


function PostsOne() {
  return (
    <div>
        <LayoutOne>
            <div className='NewpostOne'>
                <div className="blogsRowOne ">
                    <h1>Posts</h1>
                    <div className="blogsButton">
                    <button>Add Post</button>
                    <button className='blogsDelete'>Delete</button>
                    </div>
                </div>
                <div className='tablePosts'>
                    <table  >
                        <tr>
                            <th>1</th>
                            <th className='widthHighTh' >Article Title</th>
                            <th>Category</th>
                            <th>Active</th>
                            <th>Published</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                            <td></td>
                            <td></td>
                        </tr>
                        
                    </table>
                </div>
            </div>
        </LayoutOne>
    </div>
  )
}

export default PostsOne
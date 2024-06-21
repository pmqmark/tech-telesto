import React, { useEffect, useState } from 'react'
import LayoutOne from '../Layout/LayoutOne'
import './BlogsOne.css'
import {Link} from 'react-router-dom' 
import caroImage from './Rectangle 82.png'
import { baseURL } from '../../../utils/constant';
import instance from '../../../utils/axiosInstance';

function BlogsOne() {

  const[openBlogsModal,setopenBlogsModal]=useState(false)

  const handleBlogsModal=()=>{
    setopenBlogsModal(true)
  }

  const handleBlogsCloseModal=()=>{
    setopenBlogsModal(false)
  }

  const[blogtitle,setblogtitle]=useState('');
  const[blogSubtitle, setBlogSubtitle] = useState('');
  const[blogcontent, setBlogContent] = useState('');
  const[blogImage,setblogImage]=useState(null);

  const [newBlogsPost, setNewBlogsPost] = useState(null);
  const[blogsData,setblogsData]=useState([]);

  const HandleBlogsTitle=(e)=>{
    setblogtitle(e.target.value);
  };

  const HandleBlogsSubTitle=(e)=>{
    setBlogSubtitle(e.target.value);
  };

  const HandleBlogsContent=(e)=>{
    setBlogContent(e.target.value);
  }

  const HandleBlogsSubmit=async(e)=>{
    e.preventDefault();

    if(
      !blogImage ||
      !blogtitle ||
      !blogcontent
    ){
      console.error("All fiels are required");
      return;
    }

    const BlogData=new FormData();

    BlogData.append('image',blogImage);
    BlogData.append('title',blogtitle);
    BlogData.append('subTitle',blogSubtitle);
    BlogData.append('content',blogcontent);

    try {
      const blogsResponse = await instance.post('admin/blogs',BlogData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Blog post created',blogsResponse.data);

      setNewBlogsPost(blogsResponse.data.blogs);

      blogsFetchdata();

      setopenBlogsModal(false);
    }catch(error){
      console.log('Error Creating BlogsPost', error );
    }

  };

  const blogsFetchdata =()=>{
    instance
    .get('/admin/blogs')
    .then((blogsResponse)=>{
      setblogsData(blogsResponse.data.blogs);
    }).catch((error) => {
      console.error('Error fetching blogs:', error);
    });
  }

  useEffect(()=>{
    blogsFetchdata();
  },[]);

  const HandleBlogsdelete=(_id)=>{
    instance
    .delete(`/admin/blogs/${_id}`)
    .then((delBlogsResponse)=>{
      console.log('deleted successfully',delBlogsResponse.data.deleteBlogs);

      blogsFetchdata();
    })
    .catch((error)=>{
      console.log("Delete Error",error);
    })
  }

  


  return (
    <div>
      <LayoutOne>
          <div className='w-full relative flex flex-col items-start ms-0'>
              <div className="blogsRowOne ">
                <h1 className=''>Blogs</h1>
                <div className="blogsButton my-4">
                  <button onClick={handleBlogsModal} >Add Post</button>
                </div>
              </div>
             
              {openBlogsModal &&(
                <div className='fix top-14 md:left-0'>
                  <form action="" className='blogsModal' onSubmit={HandleBlogsSubmit} >
                    <button onClick={handleBlogsCloseModal} className='closeblogsModal' > ❌</button>
                    <br />
                    <input type="file" className='imageInputBlogs' onChange={(e) => setblogImage(e.target.files[0])}  name="" id="" />
                    <br />
                    <input type="text" value={blogtitle} onChange={HandleBlogsTitle} placeholder='enter the blog Title'/>
                    <br />
                    <input type="text" value={blogSubtitle} onChange={HandleBlogsSubTitle} placeholder='enter the blog SubTitle'/>
                    <br />
                    <textarea className=' text-black ' type="text" value={blogcontent} onChange={HandleBlogsContent} placeholder='enter the blog content'/>
                    <br />
                    <button type="submit" className='postBlogbutton  ' >Post Blog</button>
                  </form>
                </div>
              )}
              <div className="w-full flex flex-wrap gap-3 items-center justify-center">
                {blogsData.map((blogs) => (
                  <div className='sampleBlogCard overflow-hidden p-4 space-y-2' key={blogs._id}>
                    <img src={`${baseURL}/${blogs.image}`} alt="" />
                    <h1 className='text-md font-medium truncate px-2 uppercase'>{blogs.title}</h1>
                    <h2 className='md:text-[17px] truncate capitalize'>{blogs.subTitle}</h2>
                    <p className='text-xs font-thin px-3 truncate'>{blogs.content}</p>
                    <button className='OrdersSpecificbutton  ' onClick={() => HandleBlogsdelete(blogs._id)} >Delete</button>
                  </div>
                ))}
              </div>
          </div>

      </LayoutOne>
    </div>
  )
}

export default BlogsOne



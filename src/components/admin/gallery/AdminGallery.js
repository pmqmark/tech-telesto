import React, { useEffect, useState } from 'react'
import LayoutOne from '../Layout/LayoutOne'
import instance from '../../../utils/axiosInstance';
import { baseURL } from '../../../utils/constant';


function AdminGalleryCo() {

    const[imageupload,setimageupload]=useState(null)
    const[galleryTitle,setgalleryTitle]=useState('');

    const[galleryModal,setgalleryModal]=useState(false)

    const[galleryDatapost,setgalleryDatapost]=useState(null)
    const[galleryDataget,setgalleryDataget]=useState([])

    const handleModalopen =()=>{
        setgalleryModal(true)
    }

    const handleModalclose =()=>{
        setgalleryModal(false)
    }

    const HandleGallerySubmit = async (e)=>{
        e.preventDefault();

        if (!imageupload || !galleryTitle){
            console.error('image and text ae required');
            return;
        }

        const galleryData = new FormData();
        galleryData.append('title',galleryTitle);
        galleryData.append('image',imageupload);

        try {
            console.log(galleryData);
            const galleryResponse = await instance.post('admin/gallery/addimage',galleryData,{
                headers: {
                    "Content-Type": 'multipart/form-data'
                }
            });

            console.log('gallery created',galleryResponse.data.response);

            setgalleryDatapost(galleryResponse.data.response)


            
            setgalleryModal(false)
            
        }catch(err){
            console.error('error creating gallery',err);
        }



    }

    const fetchGalleryData =()=>{
        instance
        .get('/admin/gallery')
        .then((getgalleryres) =>{
            console.log(getgalleryres.data);
            setgalleryDataget(getgalleryres.data)
        })
        .catch((err)=>{
            console.error("fetching data error", err);
        })
    };

    useEffect(() =>{
        fetchGalleryData();
    },[])

    const Handlegallerydelete=(_id)=>{
        instance
        .delete(`/admin/gallery/image/${_id}`)
        .then((delgalleryResponse)=>{
          console.log('deleted successfully',delgalleryResponse.data.deleteGallery);
    
          fetchGalleryData();
        })
        .catch((error)=>{
          console.log("Delete Error",error);
        })
      }



  return (
    <div>
        <LayoutOne>

                <div>
                    <button onClick={handleModalopen} className=' bg-primary p-2 '  >Add Gallery</button>
                </div>
                {galleryModal && (
                    <div>
                        <form action="" className=' w-64 p-5    bg-base  grid justify-center ' onSubmit={HandleGallerySubmit} >
                            <button onClick={handleModalclose} > ❌ </button>
                            <input type="file" className=' w-30 m-3 text-xs   ' name="" id="" onChange={(e) => setimageupload (e.target.files[0])} />
                            <input type="text" className=' m-3 px-2 text-black placeholder:text-black      ' placeholder='Enter title' value={galleryTitle} onChange={(e) => setgalleryTitle(e.target.value) } />
                            <button type="submit" className=' m-3 bg-primary ' >Upload</button>
                        </form>
                    </div>
                )}
            <div className='galleryMain flex fex-col md:flex-row'>
                {galleryDataget.map((gallery) =>(
                    <div className=' h-[350px]  w-96 bg-base m-7 max-[480px]:w-[65vw]  ' key={gallery._id} >
                        <img className=' w-full h-[240px] object-cover '  src={`${baseURL}/${gallery.image}`} alt="" />
                        <h1 className=' text-[20px] m-2  text-center  ' >{gallery.title}</h1>
                        <div className=' flex justify-center  ' >
                            <button className=' bg-red-600 mb-6 m-3 p-2   ' onClick={() => Handlegallerydelete(gallery._id)}   >Delete</button>
                        </div>
                        
                    </div>
                ))}
                

                

                
            </div>
        </LayoutOne>
    </div>
  )
}

export default AdminGalleryCo
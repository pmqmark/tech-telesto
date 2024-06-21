import React, { useEffect, useState } from 'react';
import LayoutOne from '../Layout/LayoutOne';
import './CategoriesOne.css';
import { AiOutlineClose } from 'react-icons/ai';
import { baseURL } from '../../../utils/constant';
import instance from '../../../utils/axiosInstance';

function CategoriesOne() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDroneName, setNewDroneName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); // Store a single selected image
  const [dronesData, setDronesData] = useState([]);
  const [newCategory, setNewCategory] = useState(null); // Store the newly created category

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    instance
      .get('/admin/getcategories')
      .then((response) => {
        setDronesData(response.data.category);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    setNewDroneName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!newDroneName || !selectedImage) {
      console.error('Drone name and image are required.');
      return;
    }

    // Create a FormData object for image upload
    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('name', newDroneName);

    try {
      // Send the new category data and image to the backend
      console.log(formData);
      const response = await instance.post('/admin/categories', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Category created:', response.data);

      // Set the newly created category in state
      setNewCategory(response.data.newCategory);

      // Fetch updated categories after creating a new one
      fetchData();

      // Close the modal
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  const handleUnlist = (_id) => {
    // Find the specific category by its unique ID
    const categoryToUnlist = dronesData.find((category) => category._id === _id);

    if (categoryToUnlist) {
      // Toggle the visibility attribute of the category
      categoryToUnlist.visibility = !categoryToUnlist.visibility;

      instance
        .patch(`/admin/category/${_id}`, { visibility: categoryToUnlist.visibility })
        .then((res) => {
          console.log('Category patched', res.data.CategoryData);
          fetchData();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };


  
  return (
    <div>
      <LayoutOne>
        <div className="CategoriesMain">
          <div className="CategoriesHead">
          <div className="bg-productsbutton">
            <button
              className="productsRightButton ordersNoneButton"
              onClick={openModal}
            >
              Add Categories
            </button>
          </div>
          </div>
          <div className="categoriesCard_bg">
            {dronesData.map((category) => {
              const categoryId = category._id;
              return (
                <div className="CategoriesCard" key={category._id}>
                  <img src={`${baseURL}/${category.image}`} alt={category.image} />
                  <p>{category.name}</p>
                  <div className="categoriesButton-bg">
                    <button
                      style={{
                        color: category.visibility ? 'blue' : 'red',
                      }}
                      className={`categoriesButton ${category.visibility ? 'blue' : 'red'}`}
                      onClick={() => handleUnlist(categoryId)}
                    >
                      {category.visibility ? 'List' : 'Unlist'}
                    </button>
                    <button className="categoriesButton SpecificCate">Edit</button>
                  </div>
                </div>
              );
            })}
          </div>
          

          {isModalOpen && (
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="modalView ">
                  <button onClick={closeModal} className="closeModalButton">
                    <AiOutlineClose />
                  </button>
                  <h2 className="modalhead">Enter Drone Name</h2>
                  <input
                    type="text"
                    className="ModalText"
                    value={newDroneName}
                    onChange={handleInputChange}
                    placeholder="Enter Drone Name"
                    required
                  />
                  {/* Image upload input */}
                  <input
                    type="file"
                    onChange={(e) => setSelectedImage(e.target.files[0])}
                    className="image-catemodal"
                  />
                  <button className="submitButtonModal" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </LayoutOne>
    </div>
  );
}

export default CategoriesOne;

import React, { useEffect, useState } from 'react';
import LayoutOne from '../Layout/LayoutOne';
import './ProductsOne.css';
import { AiOutlineClose } from 'react-icons/ai';
import { useLocation } from 'react-router-dom'; 
import { baseURL } from '../../../utils/constant';
import instance from '../../../utils/axiosInstance';

function ProductsOne() {
  const [ProductModalopen, setProductModalopen] = useState(false);

  const [DroneCategory, setDroneCategory] = useState('');
  // const [MainDroneCategory, setMainDroneCategory] = useState('');
  const [DroneProductImage, setDroneProductImage] = useState(null);
  const [ProductTitle, setProductTitle] = useState('');
  const [ProductRating, setProductRating] = useState('');
  const [ProductTotalRating, setProductTotalRating] = useState('');
  const [ProductFinalPrice, setProductFinalPrice] = useState('');
  const [ProductRealPrice, setProductRealPrice] = useState('');
  const [ProductOffer, setProductOffer] = useState('');

  const [productData, setProductData] = useState([]);
  const [newProduct, setNewProduct] = useState(null);

  const location = useLocation(); 
  const searchParams = new URLSearchParams(location.search);
  const selectedCategory = searchParams.get('category');

  useEffect(() => {
    if (selectedCategory) {
      setDroneCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const HandleCategoryChange = (e) => {
    setDroneCategory(e.target.value);
    setSelectedCategoryID(e.target.value);
    setSelectedProductCategory(e.target.value);
  };

  const openProduct = () => {
    setProductModalopen(true);
  };

  const closeProduct = () => {
    setProductModalopen(false);
  };

  const HandleProductCategory = (e) => {
    setSelectedProductCategory(e.target.value);
    
  };

  const HandleProductTitle = (e) => {
    setProductTitle(e.target.value);
  };

  const HandleProductRating = (e) => {
    setProductRating(e.target.value);
  };

  const HandleProductTotalRating = (e) => {
    setProductTotalRating(e.target.value);
  };

  const HandleProductFinalPrice = (e) => {
    setProductFinalPrice(e.target.value);
  };

  const HandleProductRealPrice = (e) => {
    setProductRealPrice(e.target.value);
  };

  const HandleProductOffer = (e) => {
    setProductOffer(e.target.value);
  };

  const [selectedCategoryID, setSelectedCategoryID] = useState(''); 

  const HandleProductSubmit = async (event) => {
    event.preventDefault();

    if (
      !selectedCategoryID || 
      !DroneProductImage ||
      !ProductTitle ||
      !ProductRating ||
      !ProductTotalRating ||
      !ProductFinalPrice ||
      !ProductRealPrice ||
      !ProductOffer
    ) {
      console.error('All items are required');
      return;
    }

    const ProductData = new FormData();

    ProductData.append('category', selectedCategoryID); 
    ProductData.append('image', DroneProductImage);
    ProductData.append('title', ProductTitle);
    ProductData.append('rating', ProductRating);
    ProductData.append('totalRating', ProductTotalRating);
    ProductData.append('offerPrice', ProductFinalPrice);
    ProductData.append('realPrice', ProductRealPrice);
    ProductData.append('offer', ProductOffer);

    try {
      const productResponse = await instance.post('/admin/products', ProductData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Product created', productResponse.data.Product);

      setNewProduct(productResponse.data.Product);

      fetchProductData();

      setProductModalopen(false);
    } catch (error) {
      console.error('Error Creating New Product', error);
    }
  };

  useEffect(() => {
    fetchProductData(selectedCategory);
  }, [selectedCategory]);

  const fetchProductData = (_id) => {
    const url = _id ? `/admin/getallproducts/${_id}` : '/admin/getallproducts';

    instance.get(url)
      .then((productResponse) => {
        setProductData(productResponse.data.products);
      })
      .catch((error) => {
        console.error('Error fetching Products:', error);
      });
  };

  const deleteProduct = (_id) => {
    const productToUnlist = productData.find((product) => product._id === _id);

    if (productToUnlist) {
      productToUnlist.visibility = !productToUnlist.visibility;

      instance
        .patch(`/admin/product/${_id}`)
        .then((prodDeleteResponse) => {
          console.log('Deleted Product', prodDeleteResponse.data.product);
          fetchProductData();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const [categoryProData, setcategoryProData] = useState([]);
  const [selectedProductCategory, setSelectedProductCategory] = useState(categoryProData.length > 0 ? categoryProData[0]._id : '');

  const fetchCategoryData = () => {
    instance
      .get('admin/getcategories')
      .then((categoryResponse) => {
        console.log(categoryResponse.data.category);
        setcategoryProData(categoryResponse.data.category);
      })
      .catch((err) => {
        console.error("Couldn't get categories", err);
      });
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  useEffect(() => {
    console.log('categoryProData:', categoryProData);
    console.log('selectedProductCategory:', selectedProductCategory);
  }, [categoryProData, selectedProductCategory]);

  return (
    <div>
      <LayoutOne>
        <div className="mainDroneSection">
          
          {/* <div>
            <select name="products" id="productsDrop" value={DroneCategory} onChange={HandleCategoryChange}>
              <option value="">All Products</option>
              {categoryProData.map((product) => (
                <option className="dropdown-menu-products" key={product._id} value={product._id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div> */}
          <div className='bg-Droneshead' >
            <h1 className="Droneshead"> Drone</h1>
            <div className="bg-productsbutton">
              <button className="productsRightButton ordersNoneButton" onClick={openProduct}>Add Products</button>
            </div>
          </div>
          {ProductModalopen && (
              <div>
                <form action="" onSubmit={HandleProductSubmit} className="ProductsModal">
                  <button onClick={closeProduct} className="closeProductButton">
                    <AiOutlineClose />
                  </button>
                  <select name="products" id="productsDropModal" value={DroneCategory} onChange={HandleCategoryChange}>
                    <option value="">select drone category</option>
                    {categoryProData.map((product) => (
                      <option className="dropdown-menu-products-modal" key={product._id} value={product._id}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                  <input type="file" onChange={(e) => setDroneProductImage(e.target.files[0])} className="specificImageInput" placeholder="Upload image" />
                  <input type="text" value={ProductTitle} onChange={HandleProductTitle} placeholder="Enter drone Name" />
                  <input type="text" value={ProductRating} onChange={HandleProductRating} placeholder="Enter Rating" />
                  <input type="text" value={ProductTotalRating} onChange={HandleProductTotalRating} placeholder="Enter No of Rating" />
                  <input type="text" value={ProductFinalPrice} onChange={HandleProductFinalPrice} placeholder="Enter final Price" />
                  <input type="text" value={ProductRealPrice} onChange={HandleProductRealPrice} placeholder="Enter Real price" />
                  <input type="text" value={ProductOffer} onChange={HandleProductOffer} placeholder="Enter offer" />
                  <button type="submit" className="ProductSubmitButton">Submit Details</button>
                </form>
              </div>
            )}
          <div>

            {productData.map((products) => (
              <div className="dronesContainer" key={products._id}>
                <div className="bg-RowOne">
                  <div className="droneRowone">
                    <img src={`${baseURL}/${products.image}`} alt="" />
                  </div>
                  <div className="droneRowtwo">
                    <div>
                      
                      <h2>{products.title}</h2>
                      <h1>({categoryProData.find((category) => category._id === products.category)?.name})</h1>
                      <p>⭐{products.rating}  ({products.totalRating})</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-droneRowthree">
                  <div className="droneRowthree">
                    <div className='flex flex-col'>
                      <h2>₹{products.offerPrice}</h2>
                      <div className=" mt-5 text-[10px] gap-3 flex flex-col md:flex-row "> 
                        <div className="specificcut">M.R.P: {products.realPrice}</div>
                        <div>{products.offer}% off</div>
                      </div>
                    </div>
                  </div>
                  <div className="droneRowFour">
                    <div className="bg-droneRowFour">
                      <button
                        style={{
                          color: products.visibility ? 'blue' : 'red',
                        }}
                        className={`categoriesButton ${products.visibility ? 'blue' : 'red'}`}
                        onClick={() => deleteProduct(products._id)}
                      >
                        {products.visibility ? 'List' : 'Unlist'}
                      </button>
                      <br />
                      {/* <button className="droneSpecificbutton">Edit</button> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            
          </div>
        </div>
      </LayoutOne>
    </div>
  );
}

export default ProductsOne;

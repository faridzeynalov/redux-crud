// import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import "./index.scss";
// import { useEffect } from "react";
// import {
//   deleteCategories,
//   fetchCategoriesAsync,
// } from "../../redux/Slices/categoriesSlice";
import { faCartShopping, faCircleInfo, faHeart, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet, useMatch } from "react-router-dom";
import { useDeleteCategoryMutation, useGetCategoriesQuery } from "../../redux/Slices/categoriesApi";

const Home = () => {
  // const location = useLocation();
  const matchDetail = useMatch("/:categoryId");
  // const dispatch = useDispatch();
  // const categories = useSelector((state) => state.categories.value);
  // const status = useSelector((state) => state.categories.status);
  // const error = useSelector((state) => state.categories.error);

  // useEffect(() => {
  //   dispatch(fetchCategoriesAsync());
  // }, [dispatch]);


  const resp = useGetCategoriesQuery()
  const [deleteCategory] = useDeleteCategoryMutation()
  
  const { data: categories, isLoading, isError } = resp

  return (
    <>
    <Layout>
     {
      matchDetail ? (
        <Outlet />
      ) : (
        <main className="home">
        <div className="container">
          <h1>Categories list</h1>

          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan={"4"}>
                    <span className="loader"></span>
                  </td>
                </tr>
              )}
              {isError && (
                <tr>
                  <td>
                    <h1>Something went wrong</h1>
                  </td>
                </tr>
              )}
              {categories && categories.length > 0 &&
                 categories.map((category,index) => (
                    <tr key={index}>
                      <td>{category.id}</td>
                      <td>{category.name}</td>
                      <td>{category.description}</td>
                      <td>
                        <Link to={`${category.id}`}>
                          <FontAwesomeIcon icon={faCircleInfo} />
                        </Link>
                        <button onClick={()=> deleteCategory(category.id)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <Link to={`/edit/${category.id}`}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                        </Link>
                        <button>
                        <FontAwesomeIcon icon={faCartShopping} />
                        </button>
                        <button>
                        <FontAwesomeIcon icon={faHeart} />
                        </button>
                      </td>
                    </tr>
                  ))
                }
            </tbody>
          </table>
        </div>
      </main>
      )
     }
      
    </Layout>
    </>
  );
};

export default Home;

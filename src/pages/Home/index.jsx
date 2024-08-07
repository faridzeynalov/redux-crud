import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import "./index.scss";
import { useEffect } from "react";
import {
  deleteCategories,
  fetchCategoriesAsync,
} from "../../redux/Slices/categoriesSlice";
import { faCircleInfo, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.value);
  const status = useSelector((state) => state.categories.status);
  const error = useSelector((state) => state.categories.error);

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <Layout>
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
              {status === "loading" ? (
                <tr>
                  <td colSpan={"4"}>
                    <span className="loader"></span>
                  </td>
                </tr>
              ) : null}
              {status === "failed" ? (
                <tr>
                  <td>
                    <h1>{error}</h1>
                  </td>
                </tr>
              ) : null}
              {status === "succeeded"
                ? categories.map((category,index) => (
                    <tr key={index}>
                      <td>{category.id}</td>
                      <td>{category.name}</td>
                      <td>{category.description}</td>
                      <td>
                        <Link to={`/${category.id}`}>
                          <FontAwesomeIcon icon={faCircleInfo} />
                        </Link>
                        <button
                          onClick={() =>
                            dispatch(deleteCategories(category.id))
                          }
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
};

export default Home;

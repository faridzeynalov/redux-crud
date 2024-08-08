import { useLoaderData } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const DetailPage = () => {
  const categoryLoader = useLoaderData();
  console.log(categoryLoader);
  

  return (
      <main className="detailPage">
        <div className="container">
          <h1>Detail Page</h1>
          <p>
            Category name: <span>{categoryLoader?.name}</span>
          </p>
          <p>
            Category description: <span>{categoryLoader?.description}</span>
          </p>
        </div>
      </main>
  );
};

export default DetailPage;

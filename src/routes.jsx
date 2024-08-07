import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import { categoryLoader } from "./pages/DetailPage/loader";
import AddPage from "./pages/AddPage";
import BasketPage from "./pages/BasketPage";

export const ROUTES = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
            // children: [
            //     {
            //         path: ":categoryId",
            //         loader: categoryLoader,
            //         element: <DetailPage />
            //     }
            // ]
        },
        {
            path: ":categoryId",
            loader: categoryLoader,
            element: <DetailPage />
        },
        {
            path: "/add-product",
            element: <AddPage/>
        },
        {
            path: "/basket",
            element: <BasketPage/>
        }
    ]
)
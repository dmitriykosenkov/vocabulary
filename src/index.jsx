import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from "react-router-dom";
import { Root } from "./routes/root";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ListPage from "./pages/ListPage/ListPage";
import Index from "./pages";


const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
         <Route errorElement={<ErrorPage />}>
            <Route index element={<Index />} />
            <Route path="list" element={<ListPage />} />
         </Route>
      </Route>
   )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);

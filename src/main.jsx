import React from "react";
import ReactDOM from "react-dom/client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Auth from "./pages/auth/Auth.jsx";
import Home from "./pages/home/Home.jsx";
import Movie from "./pages/Movie/Movie.jsx";
import TvShow from "./pages/TvShow/TvShow.jsx";
import RatingPage from "./pages/rated/RatingPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/rated" element={<RatingPage />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="/tvshow/:id" element={<TvShow />} />
    </Route>
  )
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
     
    </QueryClientProvider>
  </React.StrictMode>
);

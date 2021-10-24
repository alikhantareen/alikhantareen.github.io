import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Header from "./header";
import Footer from "./footer";
import "font-awesome/css/font-awesome.min.css";
import BlogsData from "../BlogsData";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const date = new Date();
  const blogs = BlogsData;
  return (
    <div className="font-mono dark:bg-black dark:text-white">
      <Header />
      <div className="w-3/5 m-auto flex flex-col gap-5 mt-16 p-3 h-screen">
        <div className="flex justify-between items-center">
          <div className="text-6xl font-mono font-extrabold">Blogs</div>
        </div>
        {blogs.map((blog) => {
          return (
            <Link to="/">
              <div className="flex gap-10 items-center  border-b-2 border-gray-700 p-4 border-dashed">
                <p className="text-gray-700 text-2xl dark:text-white">
                  {date.getFullYear()}
                </p>
                <p className="text-xl text-gray-700 dark:text-white">{blog}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;

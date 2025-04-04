import React from "react";
import { NavLink } from "react-router-dom";

const Blog = () => {
    return(
        <>
        <div className="blog pt-5">
            <div className="container pt-lg-5">
                <div className="row pt-lg-4">
                    <div className="col-lg-12 text-center">
                        <div className="blog-section">
                            <p className="text-uppercase blog-heading text-center">Want to  know more about Veterinary Farming Tips & Techniques ?</p>
                        </div>
                        <div className="py-3">
                            <NavLink to={"/blog"}>
                            <button className="blog-btn">
                                Read Blogs
                            </button>
                            </NavLink>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        </>
    );
};

export default Blog;
import React, { useEffect } from "react";
import BlogContainer from "../../containers/Blog/Blog";
const Blog = () => {
  useEffect(() => {
    document.title = "Blog - RAQYAH - For Metal ";
  }, []);

  return (
    <div>
      <BlogContainer />
    </div>
  );
};

export default Blog;

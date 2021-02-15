import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState();
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      <h2>Hi, I am Eddie Cheng</h2>
      <div className="blogs">
        {isPending && <div>Loading...</div>}
        {blogs && 
          <BlogList
            blogs={blogs}
            title="Some of my past notes"
          />
        }
      </div>
    </div>
  );
};

export default Home;

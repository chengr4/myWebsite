import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data:blogs, isPending} = useFetch("http://localhost:7000/blogs");

  return (
    <div className="home">
      <h2>Hi, I am Eddie Cheng</h2>
      <div className="blogs">
        {isPending && <div>Loading...</div>}
        {blogs && 
          <BlogList
            blogs={blogs}
          />
        }
      </div>
    </div>
  );
};

export default Home;

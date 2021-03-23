import { useParams, useHistory } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
  // hook to grab id from url
  const { id } = useParams();
  const { data: blog, isPending } = useFetch('http://localhost:7000/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:7000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return ( 
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      { blog && (
        <article>
          <h2>{ blog.title}</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
      
    </div>
   );
}
 
export default BlogDetails;
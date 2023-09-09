import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:2000/blogs/' + id);

    return (
        <div className="blog-details">
                {/* Loading message */}
            { isPending && <div>Loading...</div> }
                {/* error message */}
            { error && <div>{ error }</div>}
                {/* Full blog details */}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;
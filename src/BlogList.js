
//We now call the props here

import { Link } from "react-router-dom";

//U can initiate the properties right in the place of props.
const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;

    // console.log(blogs, title);

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;
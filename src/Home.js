
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => { 
    const { data: blogs, isPending, error } = useFetch('http://localhost:2000/blogs');

    return (
        <div className="home">
            {/* An Error message */}
            {error && <div>{ error }</div>}
            {/* A loading message */}
            {isPending && <div>Loading...</div>}
            {/*Using props */}
            {blogs && <BlogList blogs={blogs} title='All Blogs'/>}
        </div>
    );
}
 
export default Home;
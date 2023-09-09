import { useState } from "react";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('brainy');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    //the function handeling submission of the form
    const HandleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);
        //fetching from the form submitted into a JSON form
        useFetch('http://localhost:2000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added.');
            setIsPending(false);
            history.push('/');
        });
    }

    //Form
    return (
        <div className="create">
            <h2>Add a new Blog.</h2>
            <form onSubmit={HandleSubmit}>
                <label>Blog title:</label>
                <input type="text" 
                required 
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}
                />

                <label>Blog body</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog author</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="dani">dani</option>
                    <option value="brainy">brainy</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding...</button>}
            </form>
        </div>
    );
}
 
export default Create;
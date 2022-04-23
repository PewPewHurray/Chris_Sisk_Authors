import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const AuthorsList = props => {
    const {authors, setAuthors} = props;
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                console.log("AuthorList", res)
                setAuthors(res.data);
                setLoaded(true);
            })
    }, [])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    return (
        <div>
            {loaded && (
                <>
                    <h1>Favorite authors</h1>
                    <Link className="link" to="/authors/new" >Add an author</Link>
                    <p className="descriptive">We have quotes by:</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Author</th>
                                <th>Actions available</th>
                            </tr>
                        </thead>
                        <tbody>
                            {authors.map((author, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{author.name}</td>
                                        <td>
                                            <button className="editButton" onClick={() => navigate(`/authors/edit/${author._id}`)}>Edit</button>
                                            <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)} />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    )
}

export default AuthorsList;
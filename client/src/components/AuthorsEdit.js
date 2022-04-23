import AuthorsForm from "./AuthorsForm";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const AuthorsEdit = props => {
    const {id} = useParams();
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])

    const editAuthor = authorParam => {
        axios.put(`http://localhost:8000/api/authors/${id}`, authorParam)
            .then(res => {
                console.log("AuthorsEdit", res);
                navigate("/");
            })
            .catch(err => setErrors(err.response.data.errors))
    }

    return (
        <div>
            {loaded && (
                <>
                    <h1>Favorite authors</h1>
                    <Link className="link" to="/">Home</Link>
                    <p className="descriptive" >Edit this author:</p>
                    <AuthorsForm onSubmitProp={editAuthor} initialName={author.name} errors={errors} />
                </>
            )}
        </div>
    )
}

export default AuthorsEdit;
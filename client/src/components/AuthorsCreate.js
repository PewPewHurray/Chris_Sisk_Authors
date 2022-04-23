import AuthorsForm from "./AuthorsForm";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const AuthorCreate = props => {
    const {authors, setAuthors} = props;
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const createNewAuthor = authorParam => {
        axios.post("http://localhost:8000/api/authors", authorParam)
            .then(res => {
            console.log("AuthorsCreate", res);
            setAuthors(...authors, res.data);
            navigate("/");
        })
            .catch(err => setErrors(err.response.data.errors))
    }
    
    return (
        <div>
            <h1>Favorite authors</h1>
            <Link className="link" to="/">Home</Link>
            <p className="descriptive" >Add a new author:</p>
            <AuthorsForm onSubmitProp={createNewAuthor} initialName="" errors={errors} />
        </div>
    )
}

export default AuthorCreate;
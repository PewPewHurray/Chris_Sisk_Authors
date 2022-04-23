import axios from "axios"
const DeleteButton = props => {
    const {authorId, successCallback} = props;
    
    const deleteAuthor = e => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(() => successCallback())
    }

    return (
        <button className="deleteButton" onClick={deleteAuthor}>Delete</button>
    )
}

export default DeleteButton;
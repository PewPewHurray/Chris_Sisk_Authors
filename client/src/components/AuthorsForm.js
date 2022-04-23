import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AuthorsForm = props => {
    const {onSubmitProp, initialName, errors} = props;
    const [name, setName] = useState(initialName);
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name: name});
        console.log(errors);
    }

    return (
        <div className="formDiv">
            <form onSubmit={onSubmitHandler}>
                <label>Name:
                    <input className="formNameInput" type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </label>
                {errors.name ?
                    <p className="formErrors" >{errors.name.message}</p>
                    :null
                }
                <input className="formButton" type="button" onClick={() => navigate("/")} value="Cancel" />
                <input className="formButton" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AuthorsForm;
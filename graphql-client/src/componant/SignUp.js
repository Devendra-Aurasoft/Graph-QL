import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignUp() {

    const [inputval, setinputval] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })

    // const [userData,setuserData]=useState([])
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value);
        setinputval(values => ({ ...values, [name]: value }))
    }

    const Submit = (e) => {
        try {
            e.preventDefault();
            toast.success('User signup successfully', {
                position: "bottom-right",
                autoClose: 5000,
                });
                setinputval("")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="container-fluid  text-left  ">
                <div className="row">
                    <div className="col-1" ></div>
                    <div className="col-10 section">
                        <form onSubmit={Submit}>
                            <h2 className="py-3"> SignUp</h2>
                            <div className="mb-3">
                                <label htmlFor="firstname" className="form-label text-left">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstname"
                                    value={inputval.firstname}
                                    onChange={handleChange}
                                    id="firstname"
                                    placeholder='enter your firstname'
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastname" className="form-label text-left">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    placeholder='enter your lastname'
                                    className="form-control"
                                    id="lastname"
                                    name='lastname'
                                    value={inputval.lastname}
                                    onChange={handleChange}
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label text-left">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder='enter your email'
                                    name="email"
                                    value={inputval.email}
                                    onChange={handleChange}
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    name="password"
                                    value={inputval.password}
                                    onChange={handleChange}
                                    placeholder='enter your password'
                                />
                            </div>
                            <button type="submit" className="btn button-30">
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="col-1" ></div>
                </div>
            </div>

        </>
    )
}

export default SignUp
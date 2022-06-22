import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CreateQuote() {

    const [inputval, setinputval] = useState("re")

   
    const Submit = (e) => {
        try {
            e.preventDefault();
            toast.success('Your quote add successfully', {
                position: "bottom-right",
                autoClose: 5000,
                });

                console.log(inputval);
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
                            <h2 className="py-3"> Login</h2>
                            <div className="mb-3">
                                <label htmlFor="quote" className="form-label text-left">
                                    Quote
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="quote"
                                    placeholder='write your quotes here'
                                    name="email"
                                    value={inputval}
                                    onChange={(e)=>setinputval(e.target.value)}
                                    aria-describedby="emailHelp"
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

export default CreateQuote
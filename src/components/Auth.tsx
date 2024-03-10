import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signupBody } from "@vardan18/medium-common2"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const Auth = ({type}: {type: "signup" | "signin"}) => {
    const navigate = useNavigate()
    const [postInputs, setPostInputs] = useState<signupBody>({
        name: "",
        username: "",
        password: ""
    })

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs)
            const jwt = response.data;
            localStorage.setItem("token", jwt)
            navigate("/blogs")
        } catch (e) {
            alert("something went wrong here")
        }
    }

    return <div className="flex justify-center flex-col h-screen">
        <div className="flex justify-center">
            <div>
                <div className="px-10">
                    <div className="text-4xl font-extrabold ">
                       {type === "signup" ? "Create an account" : "Login to your account"}
                    </div>
                    <div className="text-slate-400 text-center">
                        {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                        <Link className="underline" to={type === "signin" ? "/signup" : "/signin"}>
                            {type === "signin" ? " Sign up" : " Sign in"}
                        </Link>        
                    </div>
                </div>
                <div>
                { type === "signup" ?<LabelledInput label="Name" placeholder="Vardan Wadhwa" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }} /> : null}
                <LabelledInput label="Username" placeholder="xyz@gmail.com" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        username: e.target.value
                    })
                }} />
                <LabelledInput label="Password" type={"password"} placeholder="Password" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }} />
                <button onClick={sendRequest} type="button" className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none
                 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-6 dark:bg-gray-800
                  dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
                </div>
            </div>
        </div>
    </div>
}


interface LabelledInputTypes {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type}: LabelledInputTypes) {
    return <div>
        <div>
            <label className="block mb-2 mt-5 text-sm font-bold text-black">{label}</label>
            <input onChange={onChange} type={type || "text"} className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    </div>
}
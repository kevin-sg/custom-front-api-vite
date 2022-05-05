import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Form } from "./components";

const CUSTOM_API = import.meta.env.VITE_APP_CUSTOM_API_GHIBLI;

function App() {
    return (
        <div className="w-4/5 mx-auto h-screen flex flex-col justify-start items-center">
            <div className="mt-20 mb-5">
                <h1 className="text-4xl font-bold text-center mb-2 uppercase">Current API</h1>
                <h2 className="text-xl font-bold text-center">
                    {" "}
                    {"👉"} {CUSTOM_API + "people/{ref_people}"}
                </h2>
            </div>

            <Form />

            <ToastContainer />
        </div>
    );
}

export default App;

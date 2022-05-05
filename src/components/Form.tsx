import type { ReactElement } from "react";

import { useForm } from "../hooks";

function Form(): ReactElement {
    const { formValues, handleSubmit, handleInputChange, handleTextAreaChange } = useForm({
        ref_people: "",
        appearance: "",
        history: "",
        img: "",
    });

    return (
        <form className="w-[450px] mx-auto" onSubmit={handleSubmit} noValidate>
            <div className="mb-6">
                <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Your reference ID
                </label>
                <input
                    type="text"
                    id="id"
                    name="ref_people"
                    onChange={handleInputChange}
                    value={formValues.ref_people}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ref_people: 2baf70d1-42bb..."
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="appearance" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Your appearance
                </label>
                <input
                    type="text"
                    id="appearance"
                    name="appearance"
                    onChange={handleInputChange}
                    value={formValues.appearance}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="My appearance..."
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="link__img" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Your link image
                </label>
                <input
                    type="text"
                    id="link__img"
                    name="img"
                    onChange={handleInputChange}
                    value={formValues.img}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="link: https://my_web/my_image.jpg"
                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="history" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    Your history
                </label>
                <textarea
                    id="history"
                    rows={8}
                    name="history"
                    onChange={handleTextAreaChange}
                    value={formValues.history}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Leave a history..."
                ></textarea>
            </div>

            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    );
}

export default Form;

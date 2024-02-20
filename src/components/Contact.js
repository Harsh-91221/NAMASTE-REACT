import { useState } from "react";
import contact from "../images/contact.jpg"
const Contact = () => {
    const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact-container flex flex-row flex-wrap justify-evenly items-center mx-auto mt-60 mb-20 overflow-y-hidden h-3/4">
            <div className="contact-left flex justify-center items-center">
                <img src={contact} className="w-72" />
            </div>
            <div className="contact-right flex flex-col items-center justify-center text-xl">
                <h1 className="text-gray-700">Contact us</h1>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                    <input type="text" placeholder="Name" required className="px-4 py-2 m-2 rounded border border-gray-300 shadow-md focus:outline-none focus:ring focus:border-blue-300 min-w-[40vw]" />
                    <input type="email" placeholder="Email" required className="px-4 py-2 m-2 rounded border border-gray-300 shadow-md focus:outline-none focus:ring focus:border-blue-300 min-w-[40vw]" />
                    <textarea placeholder="Type your Message here..." required className="px-4 py-2 m-2 rounded border border-gray-300 shadow-md focus:outline-none focus:ring focus:border-blue-300 min-w-[40vw]"></textarea>
                    <button type="submit" className="px-4 py-2 m-2 bg-black text-white hover rounded-lg">Submit</button>
                    {message && <span>Thanks for contacting Culinary Delight, We will reply ASAP.</span>}
                </form>
            </div>
        </div>
    );
};
export default Contact
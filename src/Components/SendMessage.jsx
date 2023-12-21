import {useState}  from "react"
import { UserAuth } from "../Context/AuthContext";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

const SendMessage = () => {
    const [value, setValue] = useState(" ");
    const { currentUser } = UserAuth();
    // console.log(value)

    const handleSendMessage = async (e) => { 
        e.preventDefault();

        if(value.trim() === "") {
            alert("Please enter valid message");
        }

        try {
            const {uid, displayName, photoURL} = currentUser;
            await addDoc(collection(db, "messages"), {
                text: value, 
                name: displayName,
                avatar: photoURL,
                createAt: serverTimestamp(),
                uid: uid
            });
        } catch (e) {
            console.log(e);
        }
        console.log(value);
        setValue("");
    }

    return (
        <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
            <form onSubmit={handleSendMessage} className="px-2 containerWrap flex">
                <input value={value} onChange={e => setValue(e.target.value)} className="input w-full focus:outline-none bg-gray-100 rounded-r-none" type="text" placeholder="Type Message Here" />
                <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm">Send</button>
            </form>
        </div>
    )
}

export default SendMessage
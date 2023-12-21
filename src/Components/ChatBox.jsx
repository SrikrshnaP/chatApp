import { useEffect, useState } from "react";
import Message from "./Message";
import { collection, query, limit, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const Chatbox = () => {
    const [messages, setMassages] = useState([]);

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            // orderBy("createAt"),
            // limit(100),
            // Doesnt Work
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id});
            });
            setMassages(messages);
        });

        return () => unsubscribe;
    }, []);

    return (
        <div className="pb-44 pt-20 containerWrap">
            {messages.map((message) =>(
                <Message key={message.id} message={message} />
            ))}
        </div>
    )
}

export default Chatbox
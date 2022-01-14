import { useState } from "react";
const client =new WebSocket("ws://localhost:4000/");

const useChat =() =>
{
    const [messages, setMessages] =useState([]);
    const [status, setStatus] =useState({});

    const initData =() =>
    {
        client.send(JSON.stringify(["init", {}]));
    };//這行有用ㄇ?

    const sendMessage =(newMessage) =>
    {
        if(newMessage.length === 0)
            return;
        else if(newMessage.constructor === Array)
            newMessage.map((msg) => setMessages([...messages, msg]));
        else
            setMessages([...messages, newMessage]);
    }

    const sendData =(data) =>
    {
        if(data[1].body.length === 0)
            setStatus({
                type: "empty-string",
                msg: ""
            });
        else
        {
            //sendMessage(data[1]);
            client.send(JSON.stringify(data));
        }
    };

    const deleteData =() =>
    {
        //setMessages([]);
        client.send(JSON.stringify(["delete", {}]));
    };

    client.onmessage =(byteString) =>
    {
        const {data} =byteString;
        const [task, payload] =JSON.parse(data);

        if(task === "output")
        {
            sendMessage(payload);
            console.log("2222")
        }
            
        else if(task === "status")
            setStatus(payload);
        else if(task === "init")
            setMessages(() => payload);
        else if(task === "delete")
        {
            setMessages([]);
            console.log(1111);
        }
        console.log(task)
    };

    return {messages, status, setStatus, initData, sendData, deleteData};
};

export default useChat;
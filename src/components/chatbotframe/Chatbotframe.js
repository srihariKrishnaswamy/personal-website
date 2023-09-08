import React, { useState, useEffect } from "react";
import { MessageBox, Input, Button } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import classes from "./Chatbotframe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

function Chatbotframe() {
  const [newMessageText, setNewMessageText] = useState("");
  const [fullyUp, setFullyUp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [outText, setOutText] = useState("Hello, I am Jarvis. Just kidding, I'm actually just Srihari's chatbot here to answer any questions about Srihari! I was made using the OpenAI API & was deployed on a free deployment service. Do note that because of that, I might take a second to answer your first question. Fire away!")

  useEffect(() => {
    axios.post('https://personal-chatbot-0zq8.onrender.com/chatbot', {ask: ""}) // warming up the API in case it's been 15 mins since the last server activity
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
  }, [])

  const getAPIRes = async (question) => {
    try {
        const postData = {ask: question}
        const response = await axios.post('https://personal-chatbot-0zq8.onrender.com/chatbot', postData);
        setOutText(response.data.response)
        setIsLoading(false)
        console.log(response.data);
      } catch (error) {
        console.error(error);
        setIsLoading(false)
      }
  }

  const handleSendMessage = () => {
    console.log("new message text,", newMessageText);
    if (isLoading || newMessageText.trim() === "") {
      return;
    }
    if (newMessageText.length > 200) {
      alert("Your question is too long");
      return;
    }
    setIsLoading(true);
    getAPIRes(newMessageText.trim())
    setNewMessageText("");
  };

  const handleViewToggle = () => {
    setFullyUp(!fullyUp);
  };

  return (
    <div>
      {fullyUp ? (
        <div className="chatInterface">
          <div className="chatbotBanner">
            <p className="bannerText">Srihari's Chatbot</p>
            <button className="circularButton" onClick={handleViewToggle}>
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </div>
          <div className="output-container">
            {
                isLoading ? (
                    <ClipLoader color="#FFFFFF" loading={isLoading} size={50} />
                ) : (
                    <p className="resText">{outText}</p>
                )
            }
          </div>
          <div className="input-container"> {/* the input field & button here is what you need to style */}
            <input
              className="input"
              placeholder="Type your message..."
              value={newMessageText}
              onChange={(e) => setNewMessageText(e.target.value)}
            />
            <button className="button" onClick={handleSendMessage}>Ask</button>
          </div>
        </div>
      ) : (
        <div className="chatInterfaceDown">
          <div className="chatbotBanner">
            <p className="bannerText">Srihari's Chatbot</p>
            <button className="circularButton" onClick={handleViewToggle}>
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbotframe;

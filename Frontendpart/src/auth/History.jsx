import React, { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const getMessage = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.API_URL}/api/auth/allMessages`,
          {
            withCredentials: true,
          }
        );

        setMessage(res.data.messages);
      } catch (err) {
        console.log(err.response?.data);
      }
    };

    getMessage();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="
            w-12 h-12 rounded-full
            bg-gradient-to-r from-cyan-400 to-blue-600
            flex items-center justify-center
            text-2xl
          ">
            🤖
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              Assistant History
            </h1>
            <p className="text-gray-400 text-sm">
              Your previous conversations
            </p>
          </div>
        </div>


        {/* Messages */}
        <div className="
          bg-black
          rounded-3xl
          p-6
          border border-zinc-800
          shadow-2xl
        ">

          <div className="space-y-5">

            {message.map((msg) => (

              <div
                key={msg._id}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`
                    max-w-lg
                    px-5 py-4
                    rounded-2xl
                    border
                    ${
                    msg.role === "user"
                    ?
                    "bg-blue-600/20 border-blue-500/40 text-blue-100 rounded-br-sm"
                    :
                    "bg-purple-600/20 border-purple-500/40 text-purple-100 rounded-bl-sm"
                    }
                  `}
                >

                  <div className="flex gap-2 items-center mb-2">

                    <span>
                      {msg.role === "user" ? "👤" : "🤖"}
                    </span>

                    <span className="text-xs text-gray-400">
                      {msg.role === "user"
                        ? "You"
                        : "Assistant"}
                    </span>

                  </div>


                  <p className="text-sm leading-relaxed">
                    {msg.command}
                  </p>


                  <p className="text-xs text-gray-500 mt-3 text-right">
                    {msg.createdAt &&
                      new Date(msg.createdAt)
                      .toLocaleString()
                    }
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default History;
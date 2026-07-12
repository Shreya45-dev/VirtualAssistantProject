import React, { useState } from "react";
import axios from "axios";
import  {useNavigate} from "react-router-dom"

const AssistantName = () => {
  const [assistantName, setAssistantName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate=useNavigate()
  const selectName = async () => {
    if (!assistantName.trim()) {
      setMessage("Please enter an assistant name.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await axios.post(
        `${API_URL}/api/auth/assistantname`,
        { assistantName },
        { withCredentials: true }
      );

      setMessage("Assistant name saved successfully!");
      navigate('/user/login')
      console.log(res.data.user);
    } catch (error) {

      setMessage(
        error.response?.data?.message || "Something went wrong."
      )
       console.log(error.response.data)
    } finally {
      setLoading(false);
    }
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">v
      <div className="w-[400px] bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          Choose Your Assistant
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Give your AI assistant a unique name.
        </p>

        <input
          type="text"
          placeholder="e.g. Nova"
          value={assistantName}
          onChange={(e) => setAssistantName(e.target.value)}
          className="w-full border rounded-lg p-3 outline-none focus:border-blue-500"
        />

        <button
          onClick={selectName}
          disabled={loading}
          className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition disabled:bg-gray-400"
        >
          {loading ? "Saving..." : "Save Name"}
        </button>

        {message && (
          <p className="text-center mt-4 text-sm text-green-600">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default AssistantName;
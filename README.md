# 🤖 AI Virtual Assistant (MERN Stack + Google Gemini AI)

An AI-powered **Virtual Assistant** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** and integrated with the **Google Gemini API**. Users can securely sign up and log in, personalize their assistant with an anime avatar and custom name, chat using text or voice, hear spoken responses, view chat history, and control their device by opening websites or applications using voice commands.

---

# ✨ Features

## 🔐 User Authentication
- User Sign Up
- User Login
- JWT Authentication
- Password Encryption using bcrypt
- Protected Routes

> Authentication is handled using a normal email/password system. AI is used only for generating responses after login.

---

## 🎭 Personalize Your Assistant

During registration, users can:

- Select an **anime  avatar**
- Give their assistant a **custom name**


---

## 🤖 AI Chat (Google Gemini)

- Ask questions by typing
- Get intelligent AI responses
- Coding assistance
- Learning support
- General knowledge
- Content generation

---

## 🎤 Voice Assistant

- Continuous voice listening
- Speech-to-Text
- Text-to-Speech
- Hands-free interaction

The assistant continuously listens for commands and responds using voice.

---

# 🌐 Smart Voice Commands

The assistant can understand voice commands and automatically open supported websites or applications.

### Open Websites

Examples:

- Open YouTube
- Open Facebook
- Open Instagram
- Open Google


### Search 

Examples:


- Search React Tutorial on YouTube
- Search MERN Stack Projects
- Search JavaScript Interview Questions

The assistant automatically opens **YouTube** or the appropriate website and performs the requested search 


---

## 📜 Chat History

- Automatically saves conversations
- View previous chats
- Continue old conversations
- Stored securely in MongoDB

---

## 📱 Responsive UI

- Modern React UI
- Mobile Friendly
- Desktop Friendly

---

# 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS / Tailwind CSS

### Backend
- Node.js
- Express.js
- JWT
- bcrypt.js

### Database
- MongoDB
- Mongoose

### AI
- Google Gemini API

### Voice
- Web Speech API
- Speech Recognition
- Speech Synthesis

---

# 🎙 Example Commands

### AI Questions

```
Explain React Hooks

What is Artificial Intelligence?

Write a Python Program

Tell me a joke
```

### Website Commands

```
Open YouTube

Open Facebook

Open Instagram


```

### Music Commands

```
Play Believer

Play Kesariya

Play Shape of You

Play Arijit Singh songs
```

### Search Commands

```
Search React Tutorial on YouTube

Search MERN Stack Roadmap

Search Weather Today
```


---

# 🤖 Google Gemini Integration

Google Gemini is used for:

- AI conversations
- Coding help
- Question answering
- Content generation
- Summarization
- Learning assistance

---
# 📂 Project Structure

```text
VirtualAssistantProject/
│
├── Frontend/
│   ├── public/
│   │______redux
│   │       ├── authSlice.js
│   │       └── store.js
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── auth/
│   │   │   |
│   │   │   ├── Login.jsx
│   │   │   ├── Signin.jsx
│   │   │   ├── Assistantphoto.jsx
│   │   │   ├── AssistantName.jsx
│   │   │   └── History.jsx
│   │   │
│   │   ├
│   │   │  
│   │   │  
│   │   │
│   │   │── Home.jsx
│   │   │   
│   │   ├── AppRoutes.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── user.controller.js
│   │   │
│   │   ├── middlewares/
│   │   │   └── auth.middleware.js
│   │   │
│   │   ├── db/
│   │   │   └── db.js
│   │   │
│   │   ├── models/
│   │   │   ├── history.model.js
│   │   │   └── user.model.js
│   │   │
│   │   ├── routes/
│   │   │   └── auth.route.js
│   │   │
│   │   └── app.js
│   │
│   ├── gemini.js
│   ├── server.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
├── README.md
└---Screenshots
```

# 🚀 Future Improvements

- Dark Mode
- AI Image Generation
- Multi-language Support
- PDF Chat
- Email Sending
- Calendar Integration
- Reminder System
- Smart Home Controls
- Wake Word ("Hey Assistant")

---

# ⭐ If you like this project, don't forget to give it a ⭐ on GitHub!

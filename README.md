# FaceFinder 👁️

[![React](https://img.shields.io/badge/frontend-React-blue?logo=react)](https://reactjs.org/)
[![Flask](https://img.shields.io/badge/backend-Flask-black?logo=flask)](https://flask.palletsprojects.com/)
[![OpenCV](https://img.shields.io/badge/FaceDetection-OpenCV-green?logo=opencv)](https://opencv.org/)
[![License](https://img.shields.io/badge/license-MIT-lightgrey.svg)](LICENSE)

**FaceFinder** is a real-time face detection web application that combines **React.js (Vite)** for the frontend and **Python Flask** with **OpenCV** for backend processing. It detects faces from your webcam feed and streams the processed video directly in the browser.

---

## 🎥 Demo

![FaceFinder Demo](demo.gif)

> *(Replace `demo.gif` with your recorded GIF or a screenshot of the app in action)*

---

## 🚀 Features

- 🖥️ Real-time face detection using Haar Cascade classifier.
- 🎥 Webcam streaming with processed video in browser.
- 🌐 React frontend for a responsive and smooth user experience.
- 🔥 Flask backend with OpenCV integration for video processing.
- 🔗 CORS enabled for seamless frontend-backend communication.

---

## 🛠 Tech Stack

| Layer          | Technology            |
|----------------|------------------------|
| Frontend       | React.js (Vite)        |
| Backend        | Flask (Python)         |
| Face Detection | OpenCV                 |
| Languages      | Python 3.x, JavaScript (ES6+) |
| Dependencies   | Listed in `requirements.txt` and `package.json` |

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

    git clone https://github.com/DeepanSenthilkumar005/FaceFinder.git
    cd FaceFinder

---

### 2️⃣ Backend Setup (Flask + OpenCV)

#### 📥 Install Python dependencies

Make sure Python 3.x is installed.

    cd backend
    pip install -r requirements.txt

#### ▶️ Run Flask server

    python app.py

This will start the Flask backend at [http://127.0.0.1:8000](http://127.0.0.1:8000)

---

### 3️⃣ Frontend Setup (React + Vite)

#### 📥 Install Node dependencies

Make sure Node.js (v16+) is installed.

    cd frontend
    npm install

#### ▶️ Start React app

    npm run dev

This will start the React frontend at [http://localhost:5173](http://localhost:5173)

---

## 📂 Project Structure
FaceFinder/
│
├── backend/
│ ├── app.py # Flask backend with OpenCV
│ ├── requirements.txt # Python dependencies
│
├── frontend/
│ ├── src/ # React app source code
│ ├── vite.config.js # Vite configuration
│ ├── package.json # Node dependencies
│
└── README.md # Project documentation

---

## 🔗 API Endpoints

| Endpoint | Method | Description                              |
|----------|--------|------------------------------------------|
| `/`      | GET    | Test endpoint to check backend.          |
| `/video` | GET    | Streams webcam feed with face detection. |

---

## ⚠️ Requirements

- Python 3.8+
- Node.js 16+
- Webcam enabled and accessible by browser

---

## 🤝 Contributing

Pull requests are welcome! Feel free to fork the repository and submit your improvements.

---

## 📖 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌟 Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Flask](https://flask.palletsprojects.com/)
- [OpenCV](https://opencv.org/)

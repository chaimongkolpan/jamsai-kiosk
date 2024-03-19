import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Welcome from "./pages/Welcome.jsx";
import SignIn from "./pages/SignIn.jsx";
import Profile from "./pages/Profile.jsx";
import FirstQuestion from "./pages/FirstQuestion.jsx";
import Question from "./pages/Question.jsx";
import QuestionDone from "./pages/QuestionDone.jsx";
import QuestionWelcome from "./pages/QuestionWelcome.jsx";
import PreloadImage from './components/PreloadImage'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIn7Ok9Tm-aaq9zzHz5PrMoJjIGu3U89M",
  authDomain: "jamsai-cca07.firebaseapp.com",
  projectId: "jamsai-cca07",
  storageBucket: "jamsai-cca07.appspot.com",
  messagingSenderId: "199664518215",
  appId: "1:199664518215:web:aef92cad0b1bc8d9e05d62",
  measurementId: "G-PTGX1HYK5K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/firstQuestion",
    element: <FirstQuestion />,
  },
  {
    path: "/question/:id",
    element: <Question />,
  },
  {
    path: "/questionWelcome/:id",
    element: <QuestionWelcome />,
  },
  {
    path: "/QuestionDone",
    element: <QuestionDone />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PreloadImage src="./assets/background/questions_1/11.webp"/>
    <PreloadImage src="./assets/background/questions_1/111.webp"/>
    <PreloadImage src="./assets/background/questions_1/112.webp"/>
    <PreloadImage src="./assets/background/questions_1/12.webp"/>
    <PreloadImage src="./assets/background/questions_1/121.webp"/>
    <PreloadImage src="./assets/background/questions_1/13.webp"/>
    {/* <div style={{ backgroundColor: "red", height: "1280px", width: "720px" }}> */}
      <RouterProvider router={router} />
    {/* </div> */}
  </React.StrictMode>
);

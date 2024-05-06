// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDHl8BHznN6jOIDScX8_DX7e_IGrE_775w",
    authDomain: "pkmnmap4.firebaseapp.com",
    projectId: "pkmnmap4",
    storageBucket: "pkmnmap4.appspot.com",
    messagingSenderId: "160436600695",
    appId: "1:160436600695:web:befdb9632eb3706900ab72",
    measurementId: "G-CEXC9FL049"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
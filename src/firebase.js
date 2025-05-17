// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase (reemplaza con tus datos reales)
const firebaseConfig = {
apiKey: "TU_API_KEY",
authDomain: "TU_PROYECTO.firebaseapp.com",
projectId: "TU_PROYECTO",
storageBucket: "TU_PROYECTO.appspot.com",
messagingSenderId: "TU_SENDER_ID",
appId: "TU_APP_ID"
};

// Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

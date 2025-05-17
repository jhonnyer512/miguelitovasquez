// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase (reemplaza con tus datos reales)
const firebaseConfig = {
apiKey: "AIzaSyB-onT7XQmGzf-j16OszKICE9Xm8XC_Ioo",
  authDomain: "project-a18b2.firebaseapp.com",
  databaseURL: "https://project-a18b2-default-rtdb.firebaseio.com",
  projectId: "project-a18b2",
  storageBucket: "project-a18b2.firebasestorage.app",
  messagingSenderId: "833529947041",
  appId: "1:833529947041:web:1055cdf35c63403e29a1e0",
  measurementId: "G-XSYDRWELLP"
};

// Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

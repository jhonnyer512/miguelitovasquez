// src/services/tasks.js
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

// Agregar una tarea
export const addTask = async (userId, task) => {
const tasksRef = collection(db, "users", userId, "tasks");
await addDoc(tasksRef, task);
};

// Obtener todas las tareas de un usuario
export const getTasks = async (userId) => {
const tasksRef = collection(db, "users", userId, "tasks");
const snapshot = await getDocs(tasksRef);
return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

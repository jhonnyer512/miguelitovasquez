const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "project-a18b2",
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
}

const db = admin.firestore();

exports.handler = async (event) => {
  const { dni, nombre, apellidos, correo } = JSON.parse(event.body);

  try {
    await db.collection("usuarios").doc(dni).set({ nombre, apellidos, correo });
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Usuario guardado correctamente" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

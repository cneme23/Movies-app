import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA6KUfu_47KsgbF-b2-xX4PLU2abIVXFU0",
    authDomain: "disneymoviesappclone.firebaseapp.com",
    projectId: "disneymoviesappclone",
    storageBucket: "disneymoviesappclone.appspot.com",
    messagingSenderId: "543458080839",
    appId: "1:543458080839:web:72fc68c45abeec7f439962",
    measurementId: "G-CH2FK2VVSY"
  };
  // Initialize Firebase
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  //Aca hacemos esto para conectar con  la base de datos
  const db= firebaseApp.firestore();
  //Aca seteamos esto para hacer las autenticaciones
  const auth = firebase.auth();
  //Esto va a permitir hacer el login para poder entrar con la cuenta de google a la app
  const provider= new firebase.auth.GoogleAuthProvider();
  //Aca vamos a guardar todos los videos y fotos
  const storage=firebase.storage()
  
  //Aca exportamos para poder tener acceso desde otros archivos
  export {auth,provider,storage};
  export default db;


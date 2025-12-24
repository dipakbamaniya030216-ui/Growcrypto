<!-- Firebase SDKs (HTML friendly) -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>

<script>
const firebaseConfig = {
  apiKey: "AIzaSyBtuneMehhYbyPp-gB_j-_3GjNk-5uQpQE",
  authDomain: "cryptobnb-c5ed5.firebaseapp.com",
  projectId: "cryptobnb-c5ed5",
  storageBucket: "cryptobnb-c5ed5.appspot.com",
  messagingSenderId: "493257207754",
  appId: "1:493257207754:web:f7bd2658e402680343a933",
  measurementId: "G-2K0BYRGX8K"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db   = firebase.firestore();
</script>
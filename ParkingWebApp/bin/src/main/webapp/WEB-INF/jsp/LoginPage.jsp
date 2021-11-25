<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>   
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" href="layout.css">
    <meta name="viewport" content="width=device,initial-scale=1.0">
    <title>LoginInPage</title>
    <meta name="google-signin-client_id" content="261880181840-jjb40a9h39c4d9im6qa8258v243jucev.apps.googleusercontent.com">
    <script src="https://apis.google.com/js/platform.js" async defer></script>
<title>Insert title here</title>
</head>
<body>
<script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyBL9PY68fBt3QNLHPZ8ASEq5ACIknD17SM",
          authDomain: "parkingspace-331613.firebaseapp.com",
          projectId: "parkingspace-331613",
          storageBucket: "parkingspace-331613.appspot.com",
          messagingSenderId: "261880181840",
          appId: "1:261880181840:web:d251a65c2f6a338bb1cd55",
          measurementId: "G-VD0DTZ8LE0"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
      </script>
  <div class="heading">
    <table class="wrap">
        <fieldset>
            <legend>
                <h1>Login</h1>
            </legend>
            <input type="username" placeholder="username"><br>
            <input type="password" placeholder="password"><br><br>
            <button>Submit</button>
            <div  class="g-signin2" data-onsuccess="onSignIn" ></div>
            <script>
                function onSignIn(googleUser){
                    var profile = googleUser.getBasicProfile();
                    var ID=profile.getId();
                    var FullName=profile.getName();
                    var Image=profile.getImageUrl();
                    var Email=profile.getEmail();
                    location.href="./dashboard.html"
                }
            </script>
            <br><br>
        </fieldset>
    </table>
    <br><br>
        <table class="wrap">
            <fieldset>
                <legend>
                    <h1>Create an account</h1>
                </legend>
            </fieldset>
        </table>
    </div>

</body>
</html>
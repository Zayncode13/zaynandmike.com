```javascript
/* ZAYN & MIKE FIREBASE AUTHENTICATION */

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";


/* Firebase configuration */

const firebaseConfig = {
    apiKey: "AIzaSyAg1mUK15mtqLqUc0QhDQ0m1xinu89-ixY",
    authDomain: "zayn-and-mike.firebaseapp.com",
    projectId: "zayn-and-mike",
    storageBucket: "zayn-and-mike.firebasestorage.app",
    messagingSenderId: "828342529884",
    appId: "1:828342529884:web:edcef0839a640ad8869b99"
};


/* Start Firebase */

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


/* Update the navbar */

function updateNavbar(user) {

    const nav = document.querySelector("header nav");

    if (!nav) return;


    /* Remove old authentication links */

    nav.querySelectorAll(".auth-nav-link").forEach(function(link) {
        link.remove();
    });


    /* If the user is NOT signed in */

    if (!user) {

        const loginLink = document.createElement("a");

        loginLink.href = "xzaynmike.html";
        loginLink.className = "auth-nav-link";
        loginLink.textContent = "SIGN IN";

        nav.appendChild(loginLink);

        return;
    }


    /* PROFILE */

    const profileLink = document.createElement("a");

    profileLink.href = "profile.html";
    profileLink.className = "auth-nav-link";
    profileLink.textContent = "PROFILE";

    nav.appendChild(profileLink);


    /* LOG OUT */

    const logoutLink = document.createElement("a");

    logoutLink.href = "#";
    logoutLink.className = "auth-nav-link";
    logoutLink.textContent = "LOG OUT";

    logoutLink.addEventListener("click", async function(event) {

        event.preventDefault();

        try {

            await signOut(auth);

            localStorage.removeItem("loggedInUser");
            localStorage.removeItem("firebaseUserId");

            window.location.href = "xzaynmike.html";

        } catch (error) {

            console.error("Logout error:", error);

        }

    });

    nav.appendChild(logoutLink);
}


/* Watch Firebase login status */

onAuthStateChanged(auth, function(user) {

    updateNavbar(user);

});
```

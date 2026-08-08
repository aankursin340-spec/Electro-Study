/* =========================================
   ELECTRO STUDY - INTERACTIVE FUNCTIONS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= THEME ================= */
/* ================= THEME ================= */

const themeBtn = document.getElementById("themeBtn");

/* Load saved theme */
const savedTheme = localStorage.getItem("electroTheme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

}


/* Theme button */
if (themeBtn) {

    const icon = themeBtn.querySelector("i");

    /* Set correct icon on page load */
    if (document.body.classList.contains("light-mode")) {

        icon.className = "fa-solid fa-moon";

    } else {

        icon.className = "fa-solid fa-sun";

    }


    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");


        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("electroTheme", "light");

            icon.className = "fa-solid fa-moon";

        } else {

            localStorage.setItem("electroTheme", "dark");

            icon.className = "fa-solid fa-sun";

        }

    });

}

    /* ================= START LEARNING ================= */

    const startLearning = document.querySelector(
        'a[href="#classes"]'
    );

    if (startLearning) {

        startLearning.addEventListener("click", (e) => {

            e.preventDefault();

            document.querySelector("#classes").scrollIntoView({
                behavior: "smooth"
            });

        });

    }


    /* ================= EXPLORE FEATURES ================= */

    const exploreBtn = document.querySelector(
        'a[href="#features"]'
    );

    if (exploreBtn) {

        exploreBtn.addEventListener("click", (e) => {

            e.preventDefault();

            document.querySelector("#features").scrollIntoView({
                behavior: "smooth"
            });

        });

    }


    /* ================= GET STARTED ================= */

    const getStarted = document.querySelector(".get-started");

    if (getStarted) {

        getStarted.addEventListener("click", (e) => {

            e.preventDefault();

            document.querySelector("#classes").scrollIntoView({
                behavior: "smooth"
            });

        });

    }


    /* ================= NAVIGATION ================= */

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });

/* ================= PREMIUM SEARCH ================= */

const searchBtn = document.querySelector(".search-btn");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");
const studySearch = document.getElementById("studySearch");
const searchSubmit = document.getElementById("searchSubmit");
const searchResult = document.getElementById("searchResult");


/* OPEN SEARCH */

if (searchBtn && searchOverlay) {

    searchBtn.addEventListener("click", () => {

        searchOverlay.classList.add("active");

        setTimeout(() => {

            if (studySearch) {
                studySearch.focus();
            }

        }, 100);

    });

}


/* CLOSE SEARCH */

if (closeSearch && searchOverlay) {

    closeSearch.addEventListener("click", () => {

        searchOverlay.classList.remove("active");

    });

}


/* CLICK OUTSIDE */

if (searchOverlay) {

    searchOverlay.addEventListener("click", (e) => {

        if (e.target === searchOverlay) {

            searchOverlay.classList.remove("active");

        }

    });

}


/* SEARCH FUNCTION */

function performSearch() {

    if (!studySearch || !searchResult) return;

    const query = studySearch.value.trim();

    if (!query) {

        searchResult.textContent =
            "Please enter something to search.";

        return;

    }

    searchResult.innerHTML =
        `🔎 Searching for <strong>${query}</strong>...`;

}


/* SEARCH BUTTON */

if (searchSubmit) {

    searchSubmit.addEventListener(
        "click",
        performSearch
    );

}


/* ENTER KEY */

if (studySearch) {

    studySearch.addEventListener(
        "keydown",
        (e) => {

            if (e.key === "Enter") {

                performSearch();

            }

        }
    );

}


/* QUICK SEARCH */

document
    .querySelectorAll(".search-suggestions button")
    .forEach(button => {

        button.addEventListener("click", () => {

            if (!studySearch) return;

            studySearch.value =
                button.textContent.trim();

            performSearch();

        });

    });

    /* ================= MOBILE MENU ================= */

    const mobileMenu = document.querySelector(".mobile-menu");
    const nav = document.querySelector(".nav-links");

    if (mobileMenu && nav) {

        mobileMenu.addEventListener("click", () => {

            nav.classList.toggle("mobile-open");

        });

    }


    /* ================= CLASS CARD ANIMATION ================= */

    const cards = document.querySelectorAll(
        ".class-card, .subject-card, .feature-card, .dash-card"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    cards.forEach(card => {

        observer.observe(card);

    });


    /* ================= ACTIVE SECTION ================= */

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add("active");

            }

        });

    });


    /* ================= CONSOLE ================= */

    console.log("⚡ Electro Study loaded!");
    console.log("Made by Ankur Gurjar.");

});
/* =========================================
   LOGIN / SIGNUP SYSTEM
========================================= */

const loginBtn = document.getElementById("loginBtn");
const loginOverlay = document.getElementById("loginOverlay");
const closeLogin = document.getElementById("closeLogin");

const loginSubmit = document.getElementById("loginSubmit");

const switchMode = document.getElementById("switchMode");
const switchText = document.getElementById("switchText");

const loginTitle = document.getElementById("loginTitle");
const loginSubtitle = document.getElementById("loginSubtitle");

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const signupName = document.getElementById("signupName");

const loginMessage = document.getElementById("loginMessage");

const showPassword = document.getElementById("showPassword");

let signupMode = false;


/* OPEN LOGIN */

if (loginBtn) {

    loginBtn.addEventListener("click", () => {

        loginOverlay.classList.add("active");

        loginMessage.textContent = "";

    });

}


/* CLOSE */

if (closeLogin) {

    closeLogin.addEventListener("click", () => {

        loginOverlay.classList.remove("active");

    });

}


/* CLICK OUTSIDE */

loginOverlay.addEventListener("click", (e) => {

    if (e.target === loginOverlay) {

        loginOverlay.classList.remove("active");

    }

});


/* SWITCH LOGIN / SIGNUP */

switchMode.addEventListener("click", () => {

    signupMode = !signupMode;

    const modal =
        document.querySelector(".login-modal");


    if (signupMode) {

        modal.classList.add("signup-mode");

        loginTitle.textContent =
            "Create Your Account";

        loginSubtitle.textContent =
            "Join Electro Study and start learning.";

        loginSubmit.innerHTML =
            'Create Account <i class="fa-solid fa-arrow-right"></i>';

        switchText.textContent =
            "Already have an account?";

        switchMode.textContent =
            "Login";

    } else {

        modal.classList.remove("signup-mode");

        loginTitle.textContent =
            "Welcome Back!";

        loginSubtitle.textContent =
            "Login to continue your learning journey.";

        loginSubmit.innerHTML =
            'Login <i class="fa-solid fa-arrow-right"></i>';

        switchText.textContent =
            "Don't have an account?";

        switchMode.textContent =
            "Create Account";

    }

    loginMessage.textContent = "";

});


/* SHOW PASSWORD */

showPassword.addEventListener("click", () => {

    if (loginPassword.type === "password") {

        loginPassword.type = "text";

        showPassword.innerHTML =
            '<i class="fa-regular fa-eye-slash"></i>';

    } else {

        loginPassword.type = "password";

        showPassword.innerHTML =
            '<i class="fa-regular fa-eye"></i>';

    }

});


/* LOGIN / SIGNUP */

loginSubmit.addEventListener("click", () => {

    const email =
        loginEmail.value.trim();

    const password =
        loginPassword.value.trim();

    const name =
        signupName.value.trim();


    /* SIGN UP */

    if (signupMode) {

        if (!name || !email || !password) {

            loginMessage.textContent =
                "Please fill all the fields.";

            return;

        }

        if (password.length < 6) {

            loginMessage.textContent =
                "Password must be at least 6 characters.";

            return;

        }


        const user = {

            name: name,

            email: email,

            password: password

        };


        localStorage.setItem(
            "electroStudyUser",
            JSON.stringify(user)
        );


        loginMessage.style.color =
            "#4ade80";

        loginMessage.textContent =
            "Account created successfully!";

        setTimeout(() => {

            signupMode = false;

            document
                .querySelector(".login-modal")
                .classList.remove("signup-mode");

            loginTitle.textContent =
                "Welcome Back!";

            loginSubtitle.textContent =
                "Login to continue your learning journey.";

            loginSubmit.innerHTML =
                'Login <i class="fa-solid fa-arrow-right"></i>';

            switchText.textContent =
                "Don't have an account?";

            switchMode.textContent =
                "Create Account";

            loginMessage.style.color =
                "#4ade80";

            loginMessage.textContent =
                "Now login with your account.";

        }, 1000);

        return;

    }


    /* LOGIN */

    if (!email || !password) {

        loginMessage.style.color =
            "#ff8b8b";

        loginMessage.textContent =
            "Please enter email and password.";

        return;

    }


    const savedUser =
        JSON.parse(
            localStorage.getItem("electroStudyUser")
        );


    if (!savedUser) {

        loginMessage.textContent =
            "Account not found. Please create an account.";

        return;

    }


    if (
        email === savedUser.email &&
        password === savedUser.password
    ) {

        localStorage.setItem(
            "electroStudyLoggedIn",
            "true"
        );


        loginMessage.style.color =
            "#4ade80";

        loginMessage.textContent =
            "Login successful! 🎉";


        setTimeout(() => {

            loginOverlay.classList.remove(
                "active"
            );

            updateLoginButton();

        }, 700);


    } else {

        loginMessage.style.color =
            "#ff8b8b";

        loginMessage.textContent =
            "Incorrect email or password.";

    }

});


/* =========================================
   UPDATE LOGIN BUTTON
========================================= */

function updateLoginButton() {

    const savedUser =
        JSON.parse(
            localStorage.getItem("electroStudyUser")
        );

    const loggedIn =
        localStorage.getItem(
            "electroStudyLoggedIn"
        );


    if (
        loginBtn &&
        savedUser &&
        loggedIn === "true"
    ) {

        loginBtn.innerHTML =
            '<i class="fa-solid fa-user-check"></i> ' +
            savedUser.name.split(" ")[0];

        loginBtn.title =
            "Click to logout";

    }

}


/* LOGOUT */

loginBtn.addEventListener("contextmenu", (e) => {

    e.preventDefault();

    if (
        localStorage.getItem(
            "electroStudyLoggedIn"
        ) === "true"
    ) {

        const logout =
            confirm(
                "Do you want to logout?"
            );

        if (logout) {

            localStorage.removeItem(
                "electroStudyLoggedIn"
            );

            updateLoginButton();

            alert("Logged out successfully.");

        }

    }

});


/* CHECK LOGIN ON PAGE LOAD */

updateLoginButton();
/* =========================================
   DASHBOARD LOGIN LOCK
========================================= */

function updateDashboardLock() {

    const dashboard =
        document.querySelector(".dashboard");

    if (!dashboard) return;

    const loggedIn =
        localStorage.getItem(
            "electroStudyLoggedIn"
        ) === "true";


    /* Already unlocked */

    const oldLock =
        dashboard.querySelector(
            ".dashboard-lock-overlay"
        );


    if (loggedIn) {

        dashboard.classList.remove(
            "dashboard-locked"
        );

        if (oldLock) {
            oldLock.remove();
        }

        return;
    }


    /* Lock dashboard */

    dashboard.classList.add(
        "dashboard-locked"
    );


    if (!oldLock) {

        const lock =
            document.createElement("div");

        lock.className =
            "dashboard-lock-overlay";

        lock.innerHTML = `
            <div class="dashboard-lock-box">

                <div class="dashboard-lock-icon">
                    <i class="fa-solid fa-lock"></i>
                </div>

                <h3>Dashboard Locked</h3>

                <p>
                    Login to access your personal
                    learning dashboard.
                </p>

                <span>
                    Click here to Login →
                </span>

            </div>
        `;


        lock.addEventListener("click", () => {

            const loginOverlay =
                document.getElementById(
                    "loginOverlay"
                );

            if (loginOverlay) {

                loginOverlay.classList.add(
                    "active"
                );

            }

        });


        dashboard.appendChild(lock);

    }

}


/* CHECK DASHBOARD */

updateDashboardLock();


/* CHECK AGAIN AFTER LOGIN */

const dashboardLoginButton =
    document.getElementById("loginSubmit");

if (dashboardLoginButton) {

    dashboardLoginButton.addEventListener(
        "click",
        () => {

            setTimeout(() => {

                updateDashboardLock();

            }, 800);

        }
    );

}
/* =========================================
   0.7 SECOND BRANDED LOADER
========================================= */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("siteLoader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("loader-hidden");

        setTimeout(() => {

            loader.remove();

        }, 400);

    }, 700);

});
/* =========================================
   CLASS 6–12 SUBJECT CARDS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const subjectCards =
        document.querySelectorAll(".subject-card");

    subjectCards.forEach(card => {

        card.addEventListener("click", () => {

            const subject =
                card.querySelector("h3")?.textContent || "Subject";

            const section =
                card.closest(".class-section");

            const className =
                section?.querySelector(".class-heading h2")
                ?.textContent || "Class";

            alert(
                `📚 ${className} - ${subject}\n\n` +
                `Chapter section will be available soon.`
            );

        });

    });

});
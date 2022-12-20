// function init() {
//     if (sessionStorage.currentID) {
//         window.location = '/pages/homeScreen.html';
//     }
// }

/**
 * Verify that the user is logged in
 */
function checkLoggedIn() {
    console.log(sessionStorage.userData)
    if (!sessionStorage.userData) {
        window.location = '/index.html';
    }
}

// async function account() {
//     const response = await fetch(userAPI);
//     let data = await response.json();
//     let accounts = data.data;
//     accounts.forEach(account => {
//         if (account.id == sessionStorage.currentID) {
//             document.getElementById('welcome').innerText = `Welcome ${account.name}`;
//         }
//     })
// }

/**
 * Removes user data from the session storage
 */
function logout() {
    sessionStorage.removeItem("userData");
    window.location = '../index.html'
}
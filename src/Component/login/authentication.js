export function isUserLoggedIn() {
    return "auth_token" in localStorage;

}
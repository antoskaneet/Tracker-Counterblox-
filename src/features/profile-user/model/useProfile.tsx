export function useProfile() {
    function login(username: string) {
        localStorage.setItem("currentUser", username);
    }

    return { login };
}

export function getProfile() {
    const username = localStorage.getItem("currentUser");

    return username;
}
// List of current usernames
let current_users: string[] = ["Fareed", "Imran", "Fayyaz", "Amir", "Ameen"];

// List of new usernames to check
let new_users: string[] = ["Fareed", "Aqib", "Amir", "Ahmed", "Fawad"];

// Function to check if a username is available
function checkUsernameAvailability(username: string): void {
    let isAvailable: boolean = !current_users.some(user => user.toLowerCase() === username.toLowerCase());
    if (isAvailable) {
        console.log(`Username '${username}' is available.`);
    } else {
        console.log(`Username '${username}' is not available. Please enter a new username.`);
    }
}

// Check availability for each new username
for (let username of new_users) {
    checkUsernameAvailability(username);
}
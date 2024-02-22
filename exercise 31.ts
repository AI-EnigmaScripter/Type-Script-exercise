let users: string[] = []; // Assuming users is not present

// Check if the list of users is empty
if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    let age: number = 25; 
    
    // condition used according to requirment
    if (age < 2) {
        console.log("The person is a baby.");
    } else if (age >= 2 && age < 4) {
        console.log("The person is a toddler.");
    } else if (age >= 4 && age < 13) {
        console.log("The person is a kid.");
    } else if (age >= 13 && age < 20) {
        console.log("The person is a teenager.");
    } else if (age >= 20 && age < 65) {
        console.log("The person is an adult.");
    } else {
        console.log("The person is an elder.");
    }
}
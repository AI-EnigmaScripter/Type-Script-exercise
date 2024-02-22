let usernames: string[] = ['fareed', 'ali', 'ahmed', 'rayyan', 'fayyaz'];

for (let username of usernames) {
    if (username === 'fareed') {
        console.log('Hello fareed, would you like to see a status report?');
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
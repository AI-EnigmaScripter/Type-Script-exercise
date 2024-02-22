
function describeCity (city: string, country: string = "unknown"): void {
    console.log(`${city} is in ${country}. `);

}

//Calling describeCity for different cities
describeCity("Karachi", "Pakistan");
describeCity("New York", "USA");
describeCity("Tokyo");
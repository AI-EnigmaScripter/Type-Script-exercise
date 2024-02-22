

function makeSandwich(...ingredients: string[]): void {
    console.log("Making a sandwich with the following ingredients:");
    ingredients.forEach(ingredients => {
        console.log("-" + ingredients);
        
    });
}

//Call the function with different arguments
makeSandwich("ham","cheese","lettuce");
makeSandwich("turkey","bacon","tomato");
makeSandwich("peanut butter","jelly");
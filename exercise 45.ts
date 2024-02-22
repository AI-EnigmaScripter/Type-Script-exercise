interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function createCar(manufacturer: string, model: string, ...extras:[string, any][]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        model: model
    };
    extras.forEach(extras => {
        const [key, value] = extras;
        car[key] = value;
        
    });
    return car;
}

//Call the function with required information
let myCar = createCar("Honda","Civic", ["color", "blue"], ["year", 2022]);
console.log(myCar);

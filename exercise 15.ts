
let Guest_list :string[] = [`Faisal`,`Imran`,`Irfan`];

for(let i=0; i<Guest_list.length; i++){

    console.log(`Dear Mr. `+ Guest_list[i] + `,\n\nIt is our pleasure to invite you on a dinner.\n\nThank You!\n\n`);
    
}

let absent_Guest :string = `Imran`;

let new_Guest :string = `Rafiq`;

Guest_list[1] = new_Guest;

for(let i=0; i<Guest_list.length; i++){

    console.log(`Dear Mr. `+ Guest_list[i] + `,\n\nIt is our pleasure to invite you on a dinner.\n\nThank You!\n\n`);

}

console.log(` Mr. ${absent_Guest} is not coming.`)
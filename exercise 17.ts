
let Guest_list :string[] = [`Faisal`,`Imran`,`Irfan`];



for(let i=0; i<Guest_list.length; i++){

    console.log(`Dear Mr. `+ Guest_list[i] + `,\n\nIt is our pleasure to invite you on a dinner.\n\nThank You!\n\n`);
    
}

let absent_Guest :string = `Imran`;

let new_Guest :string = `Rafiq`;
 
Guest_list[0] = new_Guest;

//for(let i=0; i<Guest_list.length; i++){

 //   console.log(`Dear Mr. `+ Guest_list[i] + `,\n\nIt is our pleasure to invite you on a dinner.\n\nThank You!\n\n`);

// }

console.log(` Mr. ${absent_Guest} is not coming.`);

Guest_list.unshift(`Fayyaz`);
Guest_list.splice(2 , 0 , `Ibaad`);
Guest_list.push(`Obaid`);

for(let i=0; i<Guest_list.length; i++){

    console.log(`Dear Mr. `+ Guest_list[i] + `,\n\nIt is our pleasure to invite you on a dinner.\n\nThank You!\n\n`);

}

console.log(`\nSorry we can not arrange big table, only Two peoples will be invited.`);
 
while(Guest_list.length > 2){
    let remove_Guest = Guest_list.pop();
    console.log(`Sorry Mr. ${remove_Guest}, You are not invited for dinner.`);
}

for(let i=0; i<Guest_list.length; i++){

    console.log(`Dear Mr. `+ Guest_list[i] + `,\n\nYou are still invited on a dinner.\n\nThank You!\n\n`);

}

Guest_list.splice(0 , 2);

console.log(Guest_list);

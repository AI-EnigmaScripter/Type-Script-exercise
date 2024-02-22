function show_magicians(magicians: string[]): void {
    for (const magician of magicians)
    console.log(magician);
}

function make_great(magicians: string[]): void {
    for(let i = 0; i<magicians.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}

const magicianNames: string[] = ["Harry","David","John"];
make_great(magicianNames);
show_magicians(magicianNames);
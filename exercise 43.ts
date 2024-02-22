function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const modifiedMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        modifiedMagicians.push("The Great " + magicians[i]);
    }
    return modifiedMagicians;
}

const magicians: string[] = ["Harry", "David", "John"];
const greatMagicians: string[] = make_great([...magicians]);

show_magicians(magicians);
console.log("-----------------------");
show_magicians(greatMagicians);
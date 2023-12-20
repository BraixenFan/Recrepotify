const song1 = {
    position: 1,
    name: "Alone again",
    artist: "The Weeknd",
    duration: 250
}
const song2 = {
    position: 2,
    name: "Too late",
    artist: "The Weeknd",
    duration: 239
}
const song3 = {
    position: 3,
    name: "Hardest to love",
    artist: "The Weeknd",
    duration: 221
}
const song4 = {
    position: 4,
    name: "Save your Tears Remix",
    artist: "The Weeknd, Ariana Grande",
    duration: 191
}
const song5 = {
    position: 5,
    name: "Scared to Live",
    artist: "The Weeknd",
    duration: 191
}
const song6 = {
    position: 6,
    name: "After hours",
    artist: "The Weeknd",
    duration: 361
}

let songs = [song1, song2, song3, song4, song5, song6];
let sortedSongs;
let totdurat = 0;

function orderAlf() {
    sortedSongs = songs.sort((a, b) => a.name - b.name)
    console.log(sortedSongs);
}

function showdurat() {
    for (var i = 0; i < songs.length; i++) {
        totdurat = totdurat + songs[i].duration;
    }
    console.log("La duracion total de las canciones es de " + totdurat + " segundos");
    totdurat = 0; //Reset after count finanilization
}

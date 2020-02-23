//########################latihan#######################
const animals = [
    {
        name: "Fluffy",
        species: "cat"
    },
    {
        name: "Carlo",
        species: "dog"
    },
    {
        name: "Nemo",
        species: "fish"
    },
    {
        name: "Hamilton",
        species: "dog"
    },
    {
        name: "Dory",
        species: "fish"
    },{
        name: "Ursa",
        species: "cat"
    },   
]
let fish = animals.filter((animal) => animal.species === "fish")
// console.log(fish)
let names = animals.map(
    (animal) => animal.name
)
// console.log(names)

let orders = [
    {total:325},
    {total:512},
    {total:128},
    {total:32}
]
let total = orders.reduce(
    (total, order) => total + order.total, 0
)
// console.log(total)

//#####################endoflatihan######################
//#####################homework#########################

// Diketahui struktur data seperti berikut. 
// Lakukan filter terhadap data dibawah yang memiliki present = true. 
// Kemudian cetak berapa banyak hasilnya dan cetak hasilnya dengan 
// console.log.
/*
OUTPUT:
Jumlah yang present true = 4
present true =  Miss Scarlet
                Reverend Green
                Colonel Mustard
                Profesor Plum
*/
const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {balllroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {balllroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {balllroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {balllroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {balllroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Profesor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {balllroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
]
// for (let i = 0; i < videoData.length; i++) {
//     if (videoData.present = true) {
//         console.log("dump")
//     }
// }

// let present = videoData.filter(
//     (x) => x.present === true
// )
// console.log(x);

let resPresent = videoData.filter(
    (cPresent) => cPresent.present == true
);
let namesVideoData = resPresent.map(
    (cName) => cName.name
    )
console.log("Jumlah yang memiliki present true = "+namesVideoData.length)    
console.log(namesVideoData)

//#####################endhomework##########################

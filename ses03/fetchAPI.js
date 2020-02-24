require('es6-promise').polyfill();
require('isomorphic-fetch')

// fetch('https://swapi.co/api/people/')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(swapi) {
//         // console.log(swapi);
//     })
//     .then(swapi.filter(hairBrown) => hairBrown.hair_color = "brown" {
//         console.log(hairBrown);
//     }).catch((err) => {
        
//     });
// height >= 150 dan hair_color = brown
// console.log(swapi);

//##02

fetch('https://swapi.co/api/people/')
.then(response => response.json())
// .then(swapi => console.log(swapi))
// .then(swapi => swapi)
// .then(swapi => swapi.filter(swa => swa.height >= 150))
// .then(swa => console.log(swa))
.then(response =>{
    let people = response.results;
    people.forEach(person => {
        let hairColor = person.hair_color.split(", ")
        if(person.height >= 150 && hairColor[0] == "brown"){
            console.log(person.name);
        }
    });
})
.catch(err =>{
    console.error(err)
})
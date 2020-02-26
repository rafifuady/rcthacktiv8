const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = (array) => {
    return new Promise((resolve, reject) => {
      let newArray = array.map(word => {
            if(typeof word === 'string') {
              return word.toUpperCase()
            } else {
              return word
            }
        })

        resolve(newArray)
    })
}

const sortWords = (array) => {
    return new Promise((resolve, reject) => {
        resolve(array.sort())
    })
}

makeAllCaps(complicatedArray)
.then(sortWords)
.then(res => {
    console.log(res)
})
.catch(error => console.log(error))

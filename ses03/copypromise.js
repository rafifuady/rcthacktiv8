let pizzaS = {
    price: 40000,
    topping: 'papperoni',
    size: 4,
    cookingTime: 1 * 1000
  }
  let udin = {
    money: 31000,
    jumlahPizza: 0
  }
  
  let orderPizza = (orang, pizza) => {
    return new Promise((resolve, reject) => {
      if(orang.money > pizza.price){
        setTimeout(() => {
          orang.jumlahPizza += 1
          orang.money -= pizza.price
          
          resolve(orang)
        }, pizza.cookingTime)
      }else{
        reject('uang user tidak cukup')
      }
    })
  }
  
  
  // orderPizza(udin, pizzaS)
  //   .then(orang => {
  //     if(orang.money > pizzaS.price){
  //       return orderPizza(orang, pizzaS)
  //     }
  //   })
  //   .then(orang => {
  //     console.log(orang, `<=================== orang setelah order ke 2 ==================`);
  //   })
  //   .catch(err => {
  //     console.log(err, `<=================== error ==================`);
  //   })
  
  
  (async (orang, pizza) => {
    let udin = orang 
    while(udin.money > pizza.price){
      udin = await orderPizza(udin, pizza)
    }
   
    console.log(udin, `<=================== udin ==================`);
  })(udin, pizzaS)
  
  
  
  
  fecth('https://swapi.co/api/people')
  .then(res => res.json())
  .then(response => {
      let people = response.results;
      people.forEach(person => {
          let hairColor = person.hair_color.split(",")
          if(person.height >= '150' && hairColor[0] == 'brown') {
              console.log(person.name)
          }
      });
  
  }).catch(err => {
      console.log("ERROR ", err);
  })
  
  fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then(function(response) {
          let nama = []
          response['results'].forEach((res) => {
              if(res.height >= 150 && res.hair_color.match(/brown/g)) {
                  nama.push(res.name)
              }   
          })
          console.log(nama);
      }).catch(err =>{
          console.log(err)
      });
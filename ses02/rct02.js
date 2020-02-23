// let array = [{nama: 'udin'},{nama: 'adin'},{nama: 'aladin'}]

// // coba munculin nama2 dalam variable array
// //console.log(array[1])

// for(let i=0;i<array.length;i++) {
//     "nama : "+ array[i].nama +" dan tinggi: "+ array [i].tinggi
//   }

//   let array = [
//     { nama: 'udin', tinggi: '170', mata: 2, kaki: 2, tangan: 2, rambut: 'hitam', warnaMata: 'coklat'}, 
//     { nama: 'adin', tinggi: '160', mata: 2, kaki: 2, tangan: 2, rambut: 'hitam', warnaMata: 'coklat'}, 
//     { nama: 'aladin', tinggi: '150', mata: 2, kaki: 2, tangan: 2, rambut: 'hitam', warnaMata: 'coklat'}
//   ]
//   let keys = ['nama', 'tinggi', 'mata', 'kaki', 'tangan', 'rambut', 'warnaMata']
//   //salaaaaaaaaaaaah
//   let cetak
//   for(let i=0;i<array.length;i++) {
//     for(let j=0;j<keys.length;j++) {
//         cetak =keys[j]+" "+array[i][keys[j]])
//     }
//   }
//     //benar
//   for(let i=0;i<array.length;i++) {
//     let res = ''
//     for(let y=0;y<keys.length;y++) {
//         res += `${keys[y]}: ${array[i][keys[y]]}, `
//     }
//     console.log(res)
//   }

let arrayMultiDimensi = [[1,2,3], [4,5,6], [7,8,9], [10,11,12,13], [15,16,17,18,19]]

for(let i=0;i<arrayMultiDimensi.length;i++) {
    let res = ''
    for(let y=0;y<arrayMultiDimensi[i].length;y++) {
        res += `${arrayMultiDimensi[i][y]}, `
    }
    console.log(res)
}

// munculkan angka 1 sampai 19
// 1
// 2
// ...
// 19


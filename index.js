const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});




//+++++++NOTES AND COMMENTS++++++++++++++=

// ///TYPE ERROR WITH INVALID CAT BREED ENTRY
// TRIED || catDescription !== catBreed
// TypeError: Cannot read property 'description' of undefined
//     at Request._callback (/vagrant/w2/day4-api/JSON_the_cat/breedFetcher.js:12:34)


// const catURI = 'https://api.thecatapi.com/v1/breeds/search?q=';
// const breedSearchURI = catURI + breedName;


//https://api.thecatapi.com/v1/breeds/search
//?q = 
//siberian
// const data = JSON.parse(body);
// console.log(data);
// console.log(typeof data);


  //     if (error) {
  //       console.log(`Error: `, error);
  //       return; 
  //     }

  //   // console.log(data);
  //   // console.log(typeof data);

  //   console.log(data[0].description)


// fetchBreedDescription('Siberian', (error, description) {

// });
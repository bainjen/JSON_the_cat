const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "Here are some details about The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });

  it('returns an error where an invalid or nonexisting breed is passed in', (done) => {
    fetchBreedDescription('dog', (err, desc) => {
      
      assert.equal(desc, null);

      const expectedDesc = `dog does not exist. Try again!`;

      assert.equal(err, expectedDesc);

      done();
    });
  });
});


'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = (data, neighbour = '') => {
  const html = `<article class="country ${neighbour}" >
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(2)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);
  });
};

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();
  console.log(request.responseText);

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    //render country 1
    renderCountry(data);

    //get neighbour country
    const [neighbour] = data.borders;

    if (!neighbour) return;

    //AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');
//making calls in order

//Promise holds future result of an asynchronous operation
//lifecycle of promise: pending->settled: 2 types 1. fulfilled 2. rejected
const request = fetch(`https://restcountries.eu/rest/v2/name/portugal`);
console.log(request);

//consuming promises
const getData = function (country) {
  //Country 1
  fetch(`https://restcountries.eu/rest/v2/name/{country}`)
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`Country not found (${response.status})`);
      }
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      //Country 2
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.log(err);
    })
    .finally(() => {});
};

//coding challenge # 1
const whereAmI = function (lat, long) {
  fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`Problem with geocoding !!!(${response.status})`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.state},${data.country}`);
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
    })
    .catch(err => {
      console.log(err);
    });
};

//Event loop in practice
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 100000; i++) {}
  console.log(`Resolved promise 2`);
});
console.log('Test end');

//Building our own promise

console.log('Lottery draw is happening');
const lotteryPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win'); //Marks promise as resolved
    } else {
      reject(new Error('You lost your money'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited one second more');
  });

Promise.resolve('abc').then(x => console.log(x));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
  });
};

getPosition().then(pos => console.log(pos));

const whereAmI2 = function () {
  getPosition()
    .then(pos => {
      console.log(pos.coords);
      const { latitude: lat, longitude: long } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${long}?geoit=json`);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Problem with geocoding !!!(${response.status})`);
      }

      return response.json();
    })
    .then(data => {
      console.log('DATA', data);
      console.log(`You are in ${data.state},${data.country}`);
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
    })
    .catch(err => {
      console.log(err);
    });
};

btn.addEventListener('click', whereAmI2);

const imgContainer = document.querySelector('.images');

//Coding challenge # 2
const createImg = imgPath => {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// let currentImage;

// createImg('img/img-1.jpg')
//   .then(img => {
//     currentImage = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImg('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImage = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImg('img/img-3.jpg');
//   })
//   .then(img => {
//     currentImage = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   })
//   .catch(err => {
//     console.log(err);
//   });

//async/await

//try/catch in async functions
const whereAmI3 = async function () {
  try {
    //Geo location
    const position = await getPosition();
    const { latitude: lat, longitude: long } = position.coords;

    //reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${long}?geoit=json`);
    const geo = await resGeo.json();
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${geo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${geo.city},${geo.country}`;
  } catch (err) {
    console.error('Eroor ');
    //reject promise returned from asynced function
    throw err;
  }
};

// whereAmI3()
//   .then(city => console.log(city))
//   .catch(err => console.error('Errrrror'))
//   .finally(() => {
//     console.log('Finished getting location');
//   });

//returning values from Async functions
//async function always returns a promise

(async function () {
  try {
    const city = await whereAmI3();
    console.log(city);
  } catch (err) {
    console.error('Errrrror');
  }

  console.log('Finished getting location');
});

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

//Running promises in parallel
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );

    //Parallel promise calls, if one rejects all reject
    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('portugal', 'pakistan', 'china');

//Promise.race: Promise settled first
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/Italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/Hungary`),
    getJSON(`https://restcountries.eu/rest/v2/name/Somalia`),
  ]);

  console.log(res);
})();

//Promise.allSettled never shortcircuits returns all results even if rejected
Promise.allSettled([
  Promise.resolve('Succes'),
  Promise.reject('error'),
  Promise.resolve('One more succes'),
]).then(res => {
  console.log(res);
});

//Promise.any: rejected ignored
Promise.any([
  Promise.resolve('Succes'),
  Promise.reject('error'),
  Promise.resolve('One more succes'),
]).then(res => {
  console.log(res);
});

//coding challenge # 3

let currentImage;

createImg('img/img-1.jpg')
  .then(img => {
    currentImage = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImg('img/img-2.jpg');
  })
  .then(img => {
    currentImage = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImg('img/img-3.jpg');
  })
  .then(img => {
    currentImage = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
  })
  .catch(err => {
    console.log(err);
  });

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImg(img));
    console.log(imgs);

    const imageEl = await Promise.all(imgs);
    console.log(imageEl);
  } catch (e) {}
};

loadAll([`img/img-1.jpg`, `img/img-2.jpg`, `img/img-3.jpg`]);

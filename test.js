str = "Afghanistan";
ans = "-1";
fetch(`https://jsonmock.hackerrank.com/api/countries?name=${str}`, {
  method: "GET",
})
  .then((response) => response.json().data)
  .then((countries) => {
    if (countries.length > 0) {
      for (let country in countries) {
        if (country.name === str) {
          if (country.capital.length > 0) {
            ans = country.capital;
          }
        }
      }
    }
  });
console.log(ans);

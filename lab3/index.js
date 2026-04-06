const renderCountry = (data, isNeighbour = false) => {
  const { name, flag, region, population, languages, currencies } = data;

  const language = languages[0].name;
  const currency = currencies[0].name;
  const pop = (population / 1000000).toFixed(1);

  document.getElementById('output').innerHTML += `
    <div class="col-md-4 col-sm-6">
      <div class="card custom-card shadow-sm ${isNeighbour ? 'neighbour' : ''}">
        <img src="${flag}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="text-muted mb-1">${region}</p>
          <p class="mb-1">${pop} M people</p>
          <p class="mb-1">${language}</p>
          <p class="mb-0">${currency}</p>
        </div>
      </div>
    </div>
  `;
};
const searchCountry=()=>{
    const input = document.getElementById('input').value;
    document.getElementById('output').innerHTML = ` `
   fetch(`https://restcountries.com/v2/name/${input}`)
  .then(res => res.json())
  .then(data => {
    const countryData = data[0];
    renderCountry(countryData);
    return countryData.borders[0]; // just return the code
  })
  .then(neighbourCode => fetch(`https://restcountries.com/v2/alpha/${neighbourCode}`))
  .then(res => res.json())
  .then(neighbourData => renderCountry(neighbourData, true))
  .catch(() => {
    document.getElementById('output').innerHTML = `<h2>Country not found</h2>`;
  });
   

}
 document.getElementById('submit').addEventListener('click',()=>{
        searchCountry();
    }   )
    document.getElementById('input').addEventListener('keydown',function(e){
        if(e.key === 'Enter'){
            searchCountry();
        }
    })
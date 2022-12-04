export function createMarkupCardCountry({
  name: { official },
  capital,
  population,
  flags: { svg },
  languages,
}) {
  return `<div class="card">
     <div class="card-header">
        <img
        class="card-flags-img"
        src="${svg}"
        alt="Flags"
        />
        <h1 class="card-title">${official}</h1>
    </div>
    <p class="card-subtitle"><span>Capital: </span>${capital}</p>
    <p class="card-subtitle"><span>Population: </span>${population}</p>
    <p class="card-subtitle"><span>Languages: </span>${Object.values(
      languages
    ).join(', ')}</p>
    </div>`;
}

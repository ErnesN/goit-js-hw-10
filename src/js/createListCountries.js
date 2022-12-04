export function createListCountries({ name: { official }, flags: { svg } }) {
  return `<li>
    <div class="card-header">
        <img
        class="card-flags-img"
        src="${svg}"
        alt="Flags"
        />
        <h1 class="card-title">${official}</h1>
    </div>
</li>`;
}

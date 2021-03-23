//Array di oggetti
const icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'beer',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-whiskey',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'wine-bottle',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'cocktail',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'coffee',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'glass-martini',
    family: 'fas',
    prefix: 'fa-',
    category: "beverage"
  },
  {
    name: 'dragon',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'kiwi-bird',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'frog',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'hippo',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'otter',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
  {
    name: 'horse',
    family: 'fas',
    prefix: 'fa-',
    category: "animal"
  },
];

// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
const iconsContainer = $('.icons');
const colors = ['pink', 'lightblue', 'brown'];

// Funzione per colorare e stampare i box
function generateIcons (array, html, keyArray, colorArray) {
// Ciclo che seleziona gli oggetti dell' array
  array.forEach( (icon) => {
// Dichiarazione locale var colore vuota e destrutturazione degli oggetti
    let color;
    const {name, family, prefix, category} = icon;
//Si controllano i valori della chiave, e in base alla posizione si associa il colore corrispondente
    keyArray.forEach((element, i) => {
      if ( element == category ) {
        color = colorArray[i];
      }
    });
//Si stampa il box
    html.append(`
      <div>
      <i style="color:${color}" class="${family} ${prefix}${name}"></i>
      <div class="title">${name}</div>
      </div>
    `);

  });
}

// Milestone 2
// Coloriamo le icone per categoria

// Dichiarazione array costante
const iconCategories = [];
//Si aggiunge la chiave solo se è unica
icons.forEach( (icon) => {
if ( iconCategories.includes(icon.category) == false ) {
    iconCategories.push(icon.category);
  }
});
// Si esegue la funzione di stampa
generateIcons(icons, iconsContainer, iconCategories, colors);

// Milestone 3
// Creiamo una select con le categorie di icone e usiamola per filtrare le icone

// Ciclo che stampa le categorie nella select html
const select = $('#type');

iconCategories.forEach( (item) => {
  select.append(`
    <option value="${item}">${item}</option>
    `)
});

// select onchange si esegue la funzione per generare nuovamente le icone corrispondenti alla categoria scelta
select.change( function () {
  iconsContainer.html("");
  const iconsFiltered = icons.filter( (item) => {
    return $(this).val() == item.category;
  });
  if ( iconsFiltered.length == 0 ) {
    generateIcons(icons, iconsContainer, iconCategories, colors);
  } else {
    generateIcons(iconsFiltered, iconsContainer, iconCategories, colors);
  }
});

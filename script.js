// ============================================
// MOVIE DATA - Built-in collections
// ============================================
const movies = {
  netflix: [
    {title:"Roma",year:2018,genre:"drama",provider:"Netflix"},
    {title:"The Irishman",year:2019,genre:"crime",provider:"Netflix"},
    {title:"Marriage Story",year:2019,genre:"drama",provider:"Netflix"},
    {title:"Bird Box",year:2018,genre:"thriller",provider:"Netflix"},
    {title:"Extraction",year:2020,genre:"action",provider:"Netflix"},
    {title:"The Trial of the Chicago 7",year:2020,genre:"drama",provider:"Netflix"},
    {title:"Enola Holmes",year:2020,genre:"adventure",provider:"Netflix"},
    {title:"Don't Look Up",year:2021,genre:"satire",provider:"Netflix"},
    {title:"Glass Onion",year:2022,genre:"mystery",provider:"Netflix"},
    {title:"The Gray Man",year:2022,genre:"action",provider:"Netflix"},
    {title:"Army of the Dead",year:2021,genre:"action",provider:"Netflix"},
    {title:"To All the Boys I've Loved Before",year:2018,genre:"romance",provider:"Netflix"},
    {title:"The Kissing Booth",year:2018,genre:"romance",provider:"Netflix"},
    {title:"Mudbound",year:2017,genre:"drama",provider:"Netflix"},
    {title:"Okja",year:2017,genre:"adventure",provider:"Netflix"},
    {title:"Uncut Gems",year:2019,genre:"thriller",provider:"Netflix"},
    {title:"The Platform",year:2019,genre:"thriller",provider:"Netflix"},
    {title:"Shutter Island",year:2010,genre:"mystery",provider:"Netflix"},
    {title:"The Social Network",year:2010,genre:"drama",provider:"Netflix"},
    {title:"Swiss Army Man",year:2016,genre:"comedy",provider:"Netflix"},
    {title:"The Hateful Eight",year:2015,genre:"western",provider:"Netflix"},
    {title:"The Fundamentals of Caring",year:2016,genre:"comedy",provider:"Netflix"},
    {title:"Klaus",year:2019,genre:"animation",provider:"Netflix"},
    {title:"Beasts of No Nation",year:2015,genre:"war",provider:"Netflix"},
    {title:"Bright",year:2017,genre:"fantasy",provider:"Netflix"}
  ],
  hulu: [
    {title:"Palm Springs",year:2020,genre:"comedy",provider:"Hulu"},
    {title:"Parasite",year:2019,genre:"thriller",provider:"Hulu"},
    {title:"Nomadland",year:2020,genre:"drama",provider:"Hulu"},
    {title:"Portrait of a Lady on Fire",year:2019,genre:"romance",provider:"Hulu"},
    {title:"Booksmart",year:2019,genre:"comedy",provider:"Hulu"},
    {title:"Freaky",year:2020,genre:"horror",provider:"Hulu"},
    {title:"Run",year:2020,genre:"thriller",provider:"Hulu"},
    {title:"Saint Maud",year:2019,genre:"horror",provider:"Hulu"},
    {title:"Happiest Season",year:2020,genre:"romcom",provider:"Hulu"},
    {title:"Little Monsters",year:2019,genre:"comedy",provider:"Hulu"},
    {title:"The Lodge",year:2019,genre:"horror",provider:"Hulu"},
    {title:"The United States vs. Billie Holiday",year:2021,genre:"drama",provider:"Hulu"},
    {title:"The Mauritanian",year:2021,genre:"drama",provider:"Hulu"},
    {title:"Bad Education",year:2019,genre:"drama",provider:"Hulu"},
    {title:"Little Miss Sunshine",year:2006,genre:"comedy",provider:"Hulu"},
    {title:"The Handmaiden",year:2016,genre:"thriller",provider:"Hulu"},
    {title:"The Big Sick",year:2017,genre:"romcom",provider:"Hulu"},
    {title:"A Ghost Story",year:2017,genre:"drama",provider:"Hulu"},
    {title:"Into the Wild",year:2007,genre:"drama",provider:"Hulu"},
    {title:"Midsommar",year:2019,genre:"horror",provider:"Hulu"},
    {title:"Whiplash",year:2014,genre:"drama",provider:"Hulu"},
    {title:"Her",year:2013,genre:"romance",provider:"Hulu"},
    {title:"The Florida Project",year:2017,genre:"drama",provider:"Hulu"},
    {title:"Moonlight",year:2016,genre:"drama",provider:"Hulu"},
    {title:"Eternal Sunshine of the Spotless Mind",year:2004,genre:"romance",provider:"Hulu"}
  ],
  hbomax: [
    {title:"Dune",year:2021,genre:"sci-fi",provider:"HBO Max"},
    {title:"Joker",year:2019,genre:"crime",provider:"HBO Max"},
    {title:"Tenet",year:2020,genre:"sci-fi",provider:"HBO Max"},
    {title:"Mad Max: Fury Road",year:2015,genre:"action",provider:"HBO Max"},
    {title:"The Dark Knight",year:2008,genre:"action",provider:"HBO Max"},
    {title:"Interstellar",year:2014,genre:"sci-fi",provider:"HBO Max"},
    {title:"A Star Is Born",year:2018,genre:"drama",provider:"HBO Max"},
    {title:"La La Land",year:2016,genre:"musical",provider:"HBO Max"},
    {title:"Spotlight",year:2015,genre:"drama",provider:"HBO Max"},
    {title:"Get Out",year:2017,genre:"horror",provider:"HBO Max"},
    {title:"The Conjuring",year:2013,genre:"horror",provider:"HBO Max"},
    {title:"Inception",year:2010,genre:"sci-fi",provider:"HBO Max"},
    {title:"The Matrix",year:1999,genre:"sci-fi",provider:"HBO Max"},
    {title:"The Prestige",year:2006,genre:"thriller",provider:"HBO Max"},
    {title:"Wonder Woman",year:2017,genre:"action",provider:"HBO Max"},
    {title:"Blade Runner 2049",year:2017,genre:"sci-fi",provider:"HBO Max"},
    {title:"The Lord of the Rings: The Fellowship of the Ring",year:2001,genre:"fantasy",provider:"HBO Max"},
    {title:"The Shawshank Redemption",year:1994,genre:"drama",provider:"HBO Max"},
    {title:"Forrest Gump",year:1994,genre:"drama",provider:"HBO Max"},
    {title:"Schindler's List",year:1993,genre:"drama",provider:"HBO Max"},
    {title:"Gladiator",year:2000,genre:"action",provider:"HBO Max"},
    {title:"Fight Club",year:1999,genre:"drama",provider:"HBO Max"},
    {title:"The Departed",year:2006,genre:"crime",provider:"HBO Max"},
    {title:"Black Swan",year:2010,genre:"drama",provider:"HBO Max"},
    {title:"The Social Network",year:2010,genre:"drama",provider:"HBO Max"}
  ],
  disney: [
    {title:"The Lion King",year:1994,genre:"animation",provider:"Disney+"},
    {title:"Soul",year:2020,genre:"animation",provider:"Disney+"},
    {title:"Toy Story",year:1995,genre:"animation",provider:"Disney+"},
    {title:"Toy Story 4",year:2019,genre:"animation",provider:"Disney+"},
    {title:"Avengers: Endgame",year:2019,genre:"action",provider:"Disney+"},
    {title:"Black Panther",year:2018,genre:"action",provider:"Disney+"},
    {title:"Guardians of the Galaxy",year:2014,genre:"sci-fi",provider:"Disney+"},
    {title:"Captain Marvel",year:2019,genre:"action",provider:"Disney+"},
    {title:"Star Wars: The Force Awakens",year:2015,genre:"adventure",provider:"Disney+"},
    {title:"Rogue One",year:2016,genre:"adventure",provider:"Disney+"},
    {title:"Moana",year:2016,genre:"animation",provider:"Disney+"},
    {title:"Frozen",year:2013,genre:"animation",provider:"Disney+"},
    {title:"Coco",year:2017,genre:"animation",provider:"Disney+"},
    {title:"Encanto",year:2021,genre:"animation",provider:"Disney+"},
    {title:"Raya and the Last Dragon",year:2021,genre:"animation",provider:"Disney+"},
    {title:"The Incredibles",year:2004,genre:"action",provider:"Disney+"},
    {title:"Inside Out",year:2015,genre:"animation",provider:"Disney+"},
    {title:"Jungle Book",year:2016,genre:"adventure",provider:"Disney+"},
    {title:"Aladdin",year:2019,genre:"fantasy",provider:"Disney+"},
    {title:"Beauty and the Beast",year:2017,genre:"fantasy",provider:"Disney+"},
    {title:"The Little Mermaid",year:1989,genre:"fantasy",provider:"Disney+"},
    {title:"Cinderella",year:2015,genre:"fantasy",provider:"Disney+"},
    {title:"Dumbo",year:2019,genre:"fantasy",provider:"Disney+"},
    {title:"Sleeping Beauty",year:1959,genre:"animation",provider:"Disney+"},
    {title:"Snow White and the Seven Dwarfs",year:1937,genre:"animation",provider:"Disney+"}
  ]
};

// ============================================
// INITIALIZE STATE & VARIABLES
// ============================================
let csvMovies = [];
let allMovies = Object.values(movies).flat();
let genres = allMovies.reduce((acc, m) => {
  acc[m.genre] = (acc[m.genre] || 0) + 1;
  return acc;
}, {});
let genreList = Object.keys(genres).sort();
let likedMovies = JSON.parse(localStorage.getItem('likedMovies') || '[]');
let dislikedMovies = JSON.parse(localStorage.getItem('dislikedMovies') || '[]');
let watchedMovies = JSON.parse(localStorage.getItem('watchedMovies') || '[]');

console.log('=== MOVIE RANDO STARTED ===');
console.log('Page URL:', window.location.href);
console.log('Initial state loaded - genres:', genreList);

// ============================================
// LOAD CSV DATA
// ============================================
// Detect if running on GitHub Pages and use appropriate URL
const isGitHubPages = window.location.hostname.includes('github.io') || 
                      window.location.hostname.includes('salamitslotus.github.io');
const csvUrl = isGitHubPages || window.location.hostname !== 'localhost'
  ? 'https://raw.githubusercontent.com/salamitslotus/MovieRando/main/MoviesOnStreamingPlatforms.csv'
  : 'MoviesOnStreamingPlatforms.csv';

console.log('Environment detected - GitHub Pages:', isGitHubPages, 'Hostname:', window.location.hostname, 'CSV URL:', csvUrl);

fetch(csvUrl, {
  headers: {
    'Accept': 'text/plain',
    'Cache-Control': 'no-cache'
  }
})
  .then(r => {
    if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
    return r.text();
  })
  .then(csv => {
    const lines = csv.split('\n').slice(1);
    lines.forEach(line => {
      if (!line.trim()) return;
      const parts = [];
      let current = '', inQuote = false;
      for (let i = 0; i < line.length; i++) {
        const c = line[i];
        if (c === '"') inQuote = !inQuote;
        else if (c === ',' && !inQuote) {
          parts.push(current);
          current = '';
        } else current += c;
      }
      parts.push(current);
      const title = parts[2]?.replace(/^"|"$/g, '').trim();
      const year = parseInt(parts[3]) || new Date().getFullYear();
      const rtRating = parts[5]?.trim() || 'N/A';
      const netflix = parts[6] === '1';
      const hulu = parts[7] === '1';
      const prime = parts[8] === '1';
      const disney = parts[9] === '1';
      if (title) {
        const providers = [];
        if (netflix) providers.push('Netflix');
        if (hulu) providers.push('Hulu');
        if (prime) providers.push('Prime Video');
        if (disney) providers.push('Disney+');
        if (providers.length > 0) {
          csvMovies.push({title, year, rating: rtRating, providers});
        }
      }
    });
    console.log('CSV loaded successfully - movies found:', csvMovies.length);
  })
  .catch(e => console.error('CSV load error:', e, 'tried URL:', csvUrl));

// ============================================
// UTILITY FUNCTIONS
// ============================================
function save() {
  localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
  localStorage.setItem('dislikedMovies', JSON.stringify(dislikedMovies));
  localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
  console.log('Data saved to localStorage');
}

function renderList(id, list) {
  const ul = document.getElementById(id);
  if (!ul) {
    console.warn('Element not found:', id);
    return;
  }
  ul.innerHTML = '';
  list.forEach((m, i) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = m.title + (m.year ? ` (${m.year})` : '') + ' — ' + (m.provider || 'Unknown');
    li.appendChild(span);
    const btn = document.createElement('button');
    btn.textContent = 'Remove';
    btn.onclick = () => {
      list.splice(i, 1);
      save();
      renderList(id, list);
    };
    li.appendChild(btn);
    ul.appendChild(li);
  });
}

function getRandomMovie() {
  const g = document.getElementById('genre').value.toLowerCase().trim();
  let filtered = allMovies;
  if (g && g.length > 0) {
    filtered = allMovies.filter(x => x.genre.toLowerCase() === g);
  }
  if (filtered.length === 0) return null;
  return filtered[Math.floor(Math.random() * filtered.length)];
}

function showMovie(m) {
  if (!m) {
    document.getElementById('result').innerHTML = '<p class="hint">❌ No movies found for this genre!</p>';
    return;
  }
  const card = document.createElement('div');
  card.className = 'card';
  // Capitalize genre for display
  const genre = m.genre.charAt(0).toUpperCase() + m.genre.slice(1).toLowerCase();
  card.innerHTML = `<h2>${m.title}</h2><p>${genre} • ${m.year} • ${m.provider}</p><div class="actions"><button class="like">❤️ Like</button><button class="dislike">👎 Dislike</button><button class="watchedBtn">✓ Watched</button></div>`;
  
  const like = card.querySelector('.like');
  const dislike = card.querySelector('.dislike');
  const watched = card.querySelector('.watchedBtn');
  
  like.onclick = () => {
    const movie = {title: m.title, year: m.year, provider: m.provider, genre: m.genre};
    if (!likedMovies.some(x => x.title === movie.title)) {
      likedMovies.push(movie);
      save();
      renderList('likedList', likedMovies);
    }
    showMovie(getRandomMovie());
  };
  dislike.onclick = () => {
    const movie = {title: m.title, year: m.year, provider: m.provider, genre: m.genre};
    if (!dislikedMovies.some(x => x.title === movie.title)) {
      dislikedMovies.push(movie);
      save();
      renderList('dislikedList', dislikedMovies);
    }
    showMovie(getRandomMovie());
  };
  watched.onclick = () => {
    const movie = {title: m.title, year: m.year, provider: m.provider, genre: m.genre};
    if (!watchedMovies.some(x => x.title === movie.title)) {
      watchedMovies.push(movie);
      save();
      renderList('watchedList', watchedMovies);
    }
    showMovie(getRandomMovie());
  };
  
  document.getElementById('result').innerHTML = '';
  document.getElementById('result').appendChild(card);
}

function displaySearchResults(results) {
  const container = document.getElementById('searchResults');
  console.log('displaySearchResults called with:', results.length, 'results, container:', container);
  
  if (!container) {
    console.error('Search results container not found!');
    return;
  }
  
  if (!results.length) {
    container.innerHTML = '<p class="hint">❌ No movies found</p>';
    console.log('No results to display');
    return;
  }
  
  container.innerHTML = '';
  results.slice(0, 50).forEach(m => {
    const card = document.createElement('div');
    card.className = 'search-result-card';
    const rating = m.rating || 'N/A';
    
    // Handle both CSV format (providers array) and built-in format (provider string)
    let providersHTML = '';
    if (m.providers && Array.isArray(m.providers)) {
      providersHTML = m.providers.map(p => '<span>' + p + '</span>').join('');
    } else if (m.provider) {
      providersHTML = '<span>' + m.provider + '</span>';
    }
    
    // Only show rating if it's not N/A
    const ratingHTML = rating !== 'N/A' ? `<div class="rating">⭐ ${rating}</div>` : '';
    
    card.innerHTML = `<h3>${m.title}</h3><p>Year: ${m.year}</p>${ratingHTML}<div class="search-result-platforms">${providersHTML}</div><div class="actions"><button class="like">❤️</button><button class="dislike">👎</button><button class="watchedBtn">✓</button></div>`;
    
    const like = card.querySelector('.like');
    const dislike = card.querySelector('.dislike');
    const watched = card.querySelector('.watchedBtn');
    
    like.onclick = () => {
      const provider = m.providers?.[0] || m.provider || 'Unknown';
      const movie = {title: m.title, year: m.year, provider: provider, genre: 'Unknown'};
      if (!likedMovies.some(x => x.title === movie.title)) {
        likedMovies.push(movie);
        save();
        renderList('likedList', likedMovies);
      }
    };
    dislike.onclick = () => {
      const provider = m.providers?.[0] || m.provider || 'Unknown';
      const movie = {title: m.title, year: m.year, provider: provider, genre: 'Unknown'};
      if (!dislikedMovies.some(x => x.title === movie.title)) {
        dislikedMovies.push(movie);
        save();
        renderList('dislikedList', dislikedMovies);
      }
    };
    watched.onclick = () => {
      const provider = m.providers?.[0] || m.provider || 'Unknown';
      const movie = {title: m.title, year: m.year, provider: provider, genre: 'Unknown'};
      if (!watchedMovies.some(x => x.title === movie.title)) {
        watchedMovies.push(movie);
        save();
        renderList('watchedList', watchedMovies);
      }
    };
    
    container.appendChild(card);
  });
  console.log('Rendered', results.length, 'movies');
}

// ============================================
// INITIALIZE DOM ELEMENTS & EVENT LISTENERS
// ============================================

// Build genre tabs FIRST (before input listener)
const genreTabs = document.querySelector('.genre-tabs');
console.log('Genre tabs element:', genreTabs);
if (genreTabs) {
  // Clear existing tabs to avoid duplicates
  genreTabs.innerHTML = '';
  
  genreList.forEach(g => {
    const btn = document.createElement('button');
    btn.className = 'genre-tab';
    btn.dataset.genre = g.toLowerCase();
    // Capitalize first letter for display
    btn.textContent = g.charAt(0).toUpperCase() + g.slice(1).toLowerCase();
    btn.onclick = () => {
      document.querySelectorAll('.genre-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Always store lowercase in the input
      document.getElementById('genre').value = g.toLowerCase();
    };
    genreTabs.appendChild(btn);
  });
  console.log('Genre tabs created:', genreList.length);
}

// Genre input autocomplete
const genreInput = document.getElementById('genre');
const suggestions = document.getElementById('genreSuggestions');
console.log('Genre input element:', genreInput);
console.log('Suggestions element:', suggestions);
if (genreInput && suggestions) {
  genreInput.addEventListener('input', () => {
    let v = genreInput.value.toLowerCase().trim();
    // Update the input to always be lowercase
    genreInput.value = v;
    suggestions.innerHTML = '';
    const filtered = genreList.filter(g => g.toLowerCase().includes(v));
    if (filtered.length > 0 && v.length > 0) {
      suggestions.classList.add('active');
      filtered.forEach(g => {
        const li = document.createElement('li');
        // Display capitalized but store lowercase
        li.textContent = g.charAt(0).toUpperCase() + g.slice(1).toLowerCase();
        li.onclick = () => {
          genreInput.value = g.toLowerCase();
          suggestions.innerHTML = '';
          suggestions.classList.remove('active');
        };
        suggestions.appendChild(li);
      });
    } else {
      suggestions.classList.remove('active');
    }
  });
  console.log('Genre input listener attached');
}

// Randomize button
const randomizeBtn = document.getElementById('randomize');
console.log('Randomize button:', randomizeBtn);
if (randomizeBtn) {
  randomizeBtn.addEventListener('click', () => {
    console.log('Randomize clicked');
    showMovie(getRandomMovie());
  });
  console.log('Randomize listener attached');
}

// Search feature
const searchBtn = document.getElementById('searchBtn');
const movieSearchInput = document.getElementById('movieSearch');
const platformFilter = document.getElementById('platformFilter');
console.log('Search button:', searchBtn);
console.log('Movie search input:', movieSearchInput);
console.log('Platform filter:', platformFilter);
if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    const query = movieSearchInput.value.toLowerCase().trim();
    const platform = platformFilter.value;
    console.log('Search query:', query, 'Platform filter:', platform, 'CSV movies:', csvMovies.length, 'Built-in movies:', allMovies.length);
    
    // If no query entered, don't search
    if (!query) {
      console.log('Empty search query');
      document.getElementById('searchResults').innerHTML = '<p class="hint">Please enter a movie title to search</p>';
      return;
    }
    
    // Search in both CSV movies and built-in movies
    let searchSource = csvMovies.length > 0 ? csvMovies : allMovies;
    console.log('Searching in:', csvMovies.length > 0 ? 'CSV movies' : 'Built-in movies', '(' + searchSource.length + ' total)');
    
    let results = searchSource.filter(m => {
      const matchTitle = m.title.toLowerCase().includes(query);
      
      // If no platform selected, show all matching titles
      if (!platform) {
        return matchTitle;
      }
      
      // If platform selected, check if movie is on that platform
      let matchPlatform = false;
      if (m.providers && Array.isArray(m.providers)) {
        matchPlatform = m.providers.includes(platform);
      } else if (m.provider) {
        matchPlatform = m.provider === platform;
      }
      
      return matchTitle && matchPlatform;
    });
    
    console.log('Search results found:', results.length, 'matching query:', query);
    displaySearchResults(results.sort((a, b) => a.title.localeCompare(b.title)));
  });
  if (movieSearchInput) {
    movieSearchInput.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        searchBtn.click();
      }
    });
  }
  console.log('Search listener attached');
}

// ============================================
// DARK MODE TOGGLE
// ============================================
const darkToggle = document.getElementById('darkModeToggle');
console.log('Dark mode toggle:', darkToggle);
if (darkToggle) {
  if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark-mode');
    darkToggle.textContent = '☀️';
  }
  darkToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    const isDark = document.documentElement.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark ? 'true' : 'false');
    darkToggle.textContent = isDark ? '☀️' : '🌙';
    console.log('Dark mode toggled:', isDark);
  });
  console.log('Dark mode listener attached');
}

// ============================================
// THEME COLORS
// ============================================
const themes = {
  default: {accent: '#c41e3a', accent2: '#e91e63'},
  ocean: {accent: '#0066cc', accent2: '#0084ff'},
  forest: {accent: '#10b981', accent2: '#34d399'},
  sunset: {accent: '#f97316', accent2: '#fed7aa'},
  purple: {accent: '#7c3aed', accent2: '#c4b5fd'},
  indigo: {accent: '#4f46e5', accent2: '#a5b4fc'}
};

function applyTheme(name) {
  const t = themes[name] || themes.default;
  document.documentElement.style.setProperty('--accent', t.accent);
  document.documentElement.style.setProperty('--accent-2', t.accent2);
  localStorage.setItem('selectedTheme', name);
  console.log('Theme applied:', name);
}

const savedTheme = localStorage.getItem('selectedTheme') || 'default';
applyTheme(savedTheme);

const themeOptions = document.querySelectorAll('.theme-option');
console.log('Theme options found:', themeOptions.length);
themeOptions.forEach(o => {
  o.classList.toggle('active', o.dataset.theme === savedTheme);
  o.addEventListener('click', () => {
    themeOptions.forEach(x => x.classList.remove('active'));
    o.classList.add('active');
    applyTheme(o.dataset.theme);
  });
});

// ============================================
// MODAL CONTROLS
// ============================================
const colorModal = document.getElementById('colorModal');
const colorBackdrop = document.getElementById('colorModalBackdrop');
const customBtn = document.getElementById('colorCustomizer');
const closeColorBtn = document.getElementById('closeColorModal');
const closeX = document.querySelector('.modal-close');

console.log('Color modal:', colorModal);
console.log('Color backdrop:', colorBackdrop);
console.log('Custom btn:', customBtn);
console.log('Close color btn:', closeColorBtn);
console.log('Close X:', closeX);

function toggleModal(modal, backdrop, show) {
  if (modal && backdrop) {
    modal.classList.toggle('active', show);
    backdrop.classList.toggle('active', show);
    console.log('Modal toggled:', show);
  }
}

if (customBtn && colorModal && colorBackdrop) {
  customBtn.addEventListener('click', () => {
    console.log('Custom btn clicked');
    toggleModal(colorModal, colorBackdrop, true);
  });
}

if (closeColorBtn && colorModal && colorBackdrop) {
  closeColorBtn.addEventListener('click', () => {
    toggleModal(colorModal, colorBackdrop, false);
  });
}

if (closeX && colorModal && colorBackdrop) {
  closeX.addEventListener('click', () => {
    toggleModal(colorModal, colorBackdrop, false);
  });
}

if (colorBackdrop && colorModal) {
  colorBackdrop.addEventListener('click', () => {
    toggleModal(colorModal, colorBackdrop, false);
  });
}

// ============================================
// EXPORT/IMPORT FUNCTIONALITY
// ============================================
const exportBtn = document.getElementById('exportData');
if (exportBtn) {
  exportBtn.addEventListener('click', () => {
    const data = {liked: likedMovies, disliked: dislikedMovies, watched: watchedMovies};
    const a = document.createElement('a');
    a.href = 'data:text/json,' + encodeURIComponent(JSON.stringify(data));
    a.download = 'movies.json';
    a.click();
  });
}

const importBtn = document.getElementById('importData');
if (importBtn) {
  importBtn.addEventListener('click', () => {
    document.getElementById('importFile').click();
  });
}

const importFile = document.getElementById('importFile');
if (importFile) {
  importFile.addEventListener('change', e => {
    if (e.target.files[0]) {
      const r = new FileReader();
      r.onload = f => {
        try {
          const d = JSON.parse(f.target.result);
          likedMovies = d.liked || [];
          dislikedMovies = d.disliked || [];
          watchedMovies = d.watched || [];
          save();
          renderList('likedList', likedMovies);
          renderList('dislikedList', dislikedMovies);
          renderList('watchedList', watchedMovies);
        } catch {
          alert('Invalid file format');
        }
      };
      r.readAsText(e.target.files[0]);
    }
  });
}

// ============================================
// CLEAR LISTS
// ============================================
['clearLiked', 'clearWatched', 'clearDisliked'].forEach(id => {
  const btn = document.getElementById(id);
  if (btn) {
    btn.addEventListener('click', () => {
      const listId = id.replace('clear', '').toLowerCase();
      let list = likedMovies;
      if (listId === 'watched') list = watchedMovies;
      else if (listId === 'disliked') list = dislikedMovies;
      list.length = 0;
      save();
      renderList(listId + 'List', list);
    });
  }
});

// ============================================
// INITIALIZE - RENDER LISTS ON LOAD
// ============================================
renderList('likedList', likedMovies);
renderList('watchedList', watchedMovies);
renderList('dislikedList', dislikedMovies);

console.log('=== SCRIPT FULLY LOADED ===');
console.log('Final state:', {
  csvMovies: csvMovies.length,
  allMovies: allMovies.length,
  genreList: genreList.length,
  likedMovies: likedMovies.length,
  dislikedMovies: dislikedMovies.length,
  watchedMovies: watchedMovies.length,
  searchBtnExists: !!document.getElementById('searchBtn'),
  searchInputExists: !!document.getElementById('movieSearch'),
  resultsContainerExists: !!document.getElementById('searchResults')
});

// Final verification - test search functionality
window.testSearch = function(query) {
  const searchBtn = document.getElementById('searchBtn');
  const movieSearchInput = document.getElementById('movieSearch');
  if (movieSearchInput && searchBtn) {
    movieSearchInput.value = query;
    searchBtn.click();
    console.log('Test search executed for:', query);
  } else {
    console.error('Search elements not found!');
  }
};
console.log('Test function available: window.testSearch("matrix")');

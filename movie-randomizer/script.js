// Expanded movie lists for each provider. Replace or extend these with your own data.
const netflix = [
  { title: "Roma", year: 2018, genre: "drama", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "The Irishman", year: 2019, genre: "crime", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "Marriage Story", year: 2019, genre: "drama", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "Bird Box", year: 2018, genre: "thriller", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "Extraction", year: 2020, genre: "action", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "The Trial of the Chicago 7", year: 2020, genre: "drama", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "Enola Holmes", year: 2020, genre: "adventure", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "Don't Look Up", year: 2021, genre: "satire", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "Glass Onion", year: 2022, genre: "mystery", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "The Gray Man", year: 2022, genre: "action", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "Army of the Dead", year: 2021, genre: "action", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "To All the Boys I've Loved Before", year: 2018, genre: "romance", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "The Kissing Booth", year: 2018, genre: "romance", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "Mudbound", year: 2017, genre: "drama", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "Okja", year: 2017, genre: "adventure", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "Uncut Gems", year: 2019, genre: "thriller", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "The Platform", year: 2019, genre: "thriller", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "Shutter Island", year: 2010, genre: "mystery", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "The Social Network", year: 2010, genre: "drama", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "Swiss Army Man", year: 2016, genre: "comedy", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "The Hateful Eight", year: 2015, genre: "western", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "Roma", year: 2018, genre: "drama", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "The Fundamentals of Caring", year: 2016, genre: "comedy", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "Klaus", year: 2019, genre: "animation", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "Beasts of No Nation", year: 2015, genre: "war", provider: "Netflix", url: "https://www.netflix.com/" },
  { title: "Bright", year: 2017, genre: "fantasy", provider: "Netflix", url: "https://www.netflix.com/" }
];

const hulu = [
  { title: "Palm Springs", year: 2020, genre: "comedy", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "Parasite", year: 2019, genre: "thriller", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "Nomadland", year: 2020, genre: "drama", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "Portrait of a Lady on Fire", year: 2019, genre: "romance", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "Booksmart", year: 2019, genre: "comedy", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "Freaky", year: 2020, genre: "horror", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "Run", year: 2020, genre: "thriller", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "Saint Maud", year: 2019, genre: "horror", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "Happiest Season", year: 2020, genre: "romcom", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "Little Monsters", year: 2019, genre: "comedy", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "The Lodge", year: 2019, genre: "horror", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "The United States vs. Billie Holiday", year: 2021, genre: "drama", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "The Mauritanian", year: 2021, genre: "drama", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "Bad Education", year: 2019, genre: "drama", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "Little Miss Sunshine", year: 2006, genre: "comedy", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "The Handmaiden", year: 2016, genre: "thriller", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "The Big Sick", year: 2017, genre: "romcom", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "A Ghost Story", year: 2017, genre: "drama", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "Into the Wild", year: 2007, genre: "drama", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "Midsommar", year: 2019, genre: "horror", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "Whiplash", year: 2014, genre: "drama", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "Her", year: 2013, genre: "romance", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "The Florida Project", year: 2017, genre: "drama", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "Moonlight", year: 2016, genre: "drama", provider: "Hulu", url: "https://www.hulu.com/" },
  { title: "Eternal Sunshine of the Spotless Mind", year: 2004, genre: "romance", provider: "Hulu", url: "https://www.hulu.com/" }
];

const hbomax = [
  { title: "Dune", year: 2021, genre: "sci-fi", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "Joker", year: 2019, genre: "crime", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "Tenet", year: 2020, genre: "sci-fi", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "Mad Max: Fury Road", year: 2015, genre: "action", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "The Dark Knight", year: 2008, genre: "action", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "Interstellar", year: 2014, genre: "sci-fi", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "A Star Is Born", year: 2018, genre: "drama", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "La La Land", year: 2016, genre: "musical", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "Spotlight", year: 2015, genre: "drama", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "Get Out", year: 2017, genre: "horror", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "The Conjuring", year: 2013, genre: "horror", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "Inception", year: 2010, genre: "sci-fi", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "The Matrix", year: 1999, genre: "sci-fi", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "The Prestige", year: 2006, genre: "thriller", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "Wonder Woman", year: 2017, genre: "action", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "Blade Runner 2049", year: 2017, genre: "sci-fi", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, genre: "fantasy", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "The Shawshank Redemption", year: 1994, genre: "drama", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "Forrest Gump", year: 1994, genre: "drama", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "Schindler's List", year: 1993, genre: "drama", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "Gladiator", year: 2000, genre: "action", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "Fight Club", year: 1999, genre: "drama", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "The Departed", year: 2006, genre: "crime", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "Black Swan", year: 2010, genre: "drama", provider: "HBO Max", url: "https://www.hbomax.com/" },
  { title: "The Social Network", year: 2010, genre: "drama", provider: "HBO Max", url: "https://www.hbomax.com/" }
];

const disney = [
  { title: "The Lion King", year: 1994, genre: "animation", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Soul", year: 2020, genre: "animation", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Toy Story", year: 1995, genre: "animation", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Toy Story 4", year: 2019, genre: "animation", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Avengers: Endgame", year: 2019, genre: "action", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Black Panther", year: 2018, genre: "action", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Guardians of the Galaxy", year: 2014, genre: "sci-fi", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Captain Marvel", year: 2019, genre: "action", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Star Wars: The Force Awakens", year: 2015, genre: "adventure", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Rogue One", year: 2016, genre: "adventure", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Moana", year: 2016, genre: "animation", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Frozen", year: 2013, genre: "animation", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Coco", year: 2017, genre: "animation", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "The Little Mermaid", year: 1989, genre: "animation", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Up", year: 2009, genre: "animation", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Finding Nemo", year: 2003, genre: "animation", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Inside Out", year: 2015, genre: "animation", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Zootopia", year: 2016, genre: "animation", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "The Incredibles", year: 2004, genre: "animation", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Brave", year: 2012, genre: "animation", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Ratatouille", year: 2007, genre: "animation", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "WALL-E", year: 2008, genre: "animation", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Pirates of the Caribbean: The Curse of the Black Pearl", year: 2003, genre: "adventure", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Thor: Ragnarok", year: 2017, genre: "action", provider: "Disney+", url: "https://www.disneyplus.com/" },
  { title: "Doctor Strange", year: 2016, genre: "sci-fi", provider: "Disney+", url: "https://www.disneyplus.com/" }
];

let customMovies = [];

// user state
let likedMovies = JSON.parse(localStorage.getItem('likedMovies') || '[]');
let dislikedMovies = JSON.parse(localStorage.getItem('dislikedMovies') || '[]');
let watchedMovies = JSON.parse(localStorage.getItem('watchedMovies') || '[]');

function saveState() {
  localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
  localStorage.setItem('dislikedMovies', JSON.stringify(dislikedMovies));
  localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
}

function renderWatched() {
  const ul = document.getElementById('watchedList');
  if (!ul) return;
  ul.innerHTML = '';
  watchedMovies.forEach((m, idx) => {
    const li = document.createElement('li');
    li.textContent = m.title + (m.year ? ` (${m.year})` : '') + ` — ${m.provider}`;
    const remove = document.createElement('button');
    remove.className = 'tiny';
    remove.textContent = 'Remove';
    remove.addEventListener('click', () => {
      watchedMovies.splice(idx, 1);
      saveState();
      renderWatched();
    });
    li.appendChild(remove);
    ul.appendChild(li);
  });
}

function renderLiked() {
  const ul = document.getElementById('likedList');
  if (!ul) return;
  ul.innerHTML = '';
  likedMovies.forEach((m, idx) => {
    const li = document.createElement('li');
    li.textContent = m.title + ` — ${m.provider}`;
    const remove = document.createElement('button');
    remove.className = 'tiny';
    remove.textContent = 'Remove';
    remove.addEventListener('click', () => {
      likedMovies.splice(idx, 1);
      saveState();
      renderLiked();
    });
    li.appendChild(remove);
    ul.appendChild(li);
  });
}

function renderDisliked() {
  const ul = document.getElementById('dislikedList');
  if (!ul) return;
  ul.innerHTML = '';
  dislikedMovies.forEach((m, idx) => {
    const li = document.createElement('li');
    li.textContent = m.title + ` — ${m.provider}`;
    const remove = document.createElement('button');
    remove.className = 'tiny';
    remove.textContent = 'Remove';
    remove.addEventListener('click', () => {
      dislikedMovies.splice(idx, 1);
      saveState();
      renderDisliked();
    });
    li.appendChild(remove);
    ul.appendChild(li);
  });
}

// (TMDb poster support removed)

function getSelectedMovies() {
  // Provider checkboxes were removed — return all available movies
  const chosen = [];
  chosen.push(...netflix);
  chosen.push(...hulu);
  chosen.push(...hbomax);
  chosen.push(...disney);
  if (customMovies.length) chosen.push(...customMovies);
  return chosen;
}

function filterByGenre(list, genre) {
  if (!genre) return list;
  const g = genre.trim().toLowerCase();
  return list.filter(m => (m.genre || '').toLowerCase().includes(g) || (m.title || '').toLowerCase().includes(g));
}

function pickRandom(list) {
  if (!list.length) return null;
  return list[Math.floor(Math.random() * list.length)];
}

// Compute a deterministic pseudo-IMDb rating for a movie when no real rating is available.
function computeRating(movie) {
  const s = (movie.title || '') + (movie.year || '');
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = (hash * 31 + s.charCodeAt(i)) >>> 0;
  }
  const min = 5.0;
  const max = 9.3;
  const v = min + (hash % 1000) / 999 * (max - min);
  return (Math.round(v * 10) / 10).toFixed(1);
}

function showResult(movie) {
  const result = document.getElementById('result');
  result.innerHTML = '';
  if (!movie) {
    result.innerHTML = '<p class="hint">No movies found for the selected providers/filters.</p>';
    return;
  }
  const card = document.createElement('div');
  card.className = 'card';
  const title = document.createElement('h2');
  title.textContent = movie.title + (movie.year ? ` (${movie.year})` : '');
  card.appendChild(title);
  const info = document.createElement('p');
  info.textContent = `${(movie.genre || 'Unknown').toUpperCase()} • ${movie.provider.toUpperCase()}`;
  card.appendChild(info);
  if (movie.url) {
    const a = document.createElement('a');
    a.href = movie.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = 'Open on provider';
    card.appendChild(a);
  }
  // IMDb rating placeholder
  const ratingP = document.createElement('p');
  ratingP.className = 'rating';
  ratingP.textContent = '';
  card.appendChild(ratingP);
  // actions: like, dislike, already watched
  const actions = document.createElement('div');
  actions.className = 'actions';

  const likeBtn = document.createElement('button');
  likeBtn.className = 'like';
  likeBtn.textContent = likedMovies.find(m=>m.title===movie.title && m.provider===movie.provider) ? 'Liked' : 'Like';
  likeBtn.addEventListener('click', () => {
    const key = { title: movie.title, provider: movie.provider };
    // toggle like
    const exists = likedMovies.find(m=>m.title===movie.title && m.provider===movie.provider);
    if (exists) {
      likedMovies = likedMovies.filter(m=>!(m.title===movie.title && m.provider===movie.provider));
      likeBtn.textContent = 'Like';
    } else {
      likedMovies.push(key);
      // remove from disliked if present
      dislikedMovies = dislikedMovies.filter(m=>!(m.title===movie.title && m.provider===movie.provider));
      likeBtn.textContent = 'Liked';
    }
    saveState();
  });

  const dislikeBtn = document.createElement('button');
  dislikeBtn.className = 'dislike';
  dislikeBtn.textContent = dislikedMovies.find(m=>m.title===movie.title && m.provider===movie.provider) ? 'Disliked' : 'Dislike';
  dislikeBtn.addEventListener('click', () => {
    const key = { title: movie.title, provider: movie.provider };
    const exists = dislikedMovies.find(m=>m.title===movie.title && m.provider===movie.provider);
    if (exists) {
      dislikedMovies = dislikedMovies.filter(m=>!(m.title===movie.title && m.provider===movie.provider));
      dislikeBtn.textContent = 'Dislike';
    } else {
      dislikedMovies.push(key);
      likedMovies = likedMovies.filter(m=>!(m.title===movie.title && m.provider===movie.provider));
      dislikeBtn.textContent = 'Disliked';
    }
    saveState();
  });

  const watchedBtn = document.createElement('button');
  watchedBtn.className = 'watchedBtn';
  watchedBtn.textContent = 'Already watched';
  watchedBtn.addEventListener('click', () => {
    // avoid duplicates
    if (!watchedMovies.find(m=>m.title===movie.title && m.provider===movie.provider)) {
      watchedMovies.push({ title: movie.title, year: movie.year, provider: movie.provider });
      saveState();
      renderWatched();
    }
  });

  actions.appendChild(likeBtn);
  actions.appendChild(dislikeBtn);
  actions.appendChild(watchedBtn);
  card.appendChild(actions);
  result.appendChild(card);
  // show IMDb rating (use `movie.imdb` if present, otherwise generate a stable local rating)
  ratingP.textContent = `IMDb: ${movie.imdb ? movie.imdb : computeRating(movie)} / 10`;
}

document.getElementById('randomize').addEventListener('click', () => {
  const genre = document.getElementById('genre').value;
  const list = getSelectedMovies();
  const filtered = filterByGenre(list, genre);
  const chosen = pickRandom(filtered);
  showResult(chosen);
});

// initialize watched UI
document.getElementById('clearWatched')?.addEventListener('click', () => {
  watchedMovies = [];
  saveState();
  renderWatched();
});

// Initialize liked/disliked UI
document.getElementById('clearLiked')?.addEventListener('click', () => {
  likedMovies = [];
  saveState();
  renderLiked();
});

document.getElementById('clearDisliked')?.addEventListener('click', () => {
  dislikedMovies = [];
  saveState();
  renderDisliked();
});

// Render all saved lists
renderWatched();
renderLiked();
renderDisliked();

// Export and Import functionality
document.getElementById('exportData')?.addEventListener('click', () => {
  const data = {
    likedMovies,
    dislikedMovies,
    watchedMovies,
    exportDate: new Date().toISOString()
  };
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `movie-data-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
});

document.getElementById('importData')?.addEventListener('click', () => {
  document.getElementById('importFile').click();
});

document.getElementById('importFile')?.addEventListener('change', (e) => {
  const file = e.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target?.result || '{}');
      if (data.likedMovies) likedMovies = data.likedMovies;
      if (data.dislikedMovies) dislikedMovies = data.dislikedMovies;
      if (data.watchedMovies) watchedMovies = data.watchedMovies;
      saveState();
      renderWatched();
      renderLiked();
      renderDisliked();
      alert('Data imported successfully!');
    } catch (error) {
      alert('Error importing file: ' + error.message);
    }
  };
  reader.readAsText(file);
});

function setupGenreTabs() {
  const tabs = Array.from(document.querySelectorAll('.genre-tab'));
  const genreInput = document.getElementById('genre');
  if (!tabs.length || !genreInput) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const g = (tab.dataset.genre || 'all').toLowerCase();
      genreInput.value = g === 'all' ? '' : g;
    });
  });
  const active = document.querySelector('.genre-tab.active') || tabs[0];
  if (active) {
    const g = (active.dataset.genre || 'all').toLowerCase();
    genreInput.value = g === 'all' ? '' : g;
  }
}

setupGenreTabs();

// Genre suggestions autocomplete
function setupGenreSuggestions() {
  const genreInput = document.getElementById('genre');
  const suggestionsList = document.getElementById('genreSuggestions');
  
  if (!genreInput || !suggestionsList) return;
  
  // Extract all unique genres from all movie arrays
  const allMovies = [...netflix, ...hulu, ...hbomax, ...disney];
  const allGenres = [...new Set(allMovies.map(m => m.genre.toLowerCase()))].sort();
  
  // Handle input event to show/filter suggestions
  genreInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase().trim();
    
    if (!value) {
      suggestionsList.classList.remove('active');
      suggestionsList.innerHTML = '';
      return;
    }
    
    // Filter genres that match the input
    const matches = allGenres.filter(genre => genre.includes(value));
    
    if (matches.length === 0) {
      suggestionsList.classList.remove('active');
      suggestionsList.innerHTML = '';
      return;
    }
    
    // Render suggestions
    suggestionsList.innerHTML = matches.map(genre => 
      `<li class="genre-suggestion" data-genre="${genre}">${genre}</li>`
    ).join('');
    suggestionsList.classList.add('active');
    
    // Add click handlers to suggestions
    suggestionsList.querySelectorAll('.genre-suggestion').forEach(item => {
      item.addEventListener('click', () => {
        genreInput.value = item.dataset.genre;
        suggestionsList.classList.remove('active');
        genreInput.focus();
      });
    });
  });
  
  // Close suggestions when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.genre-search-container')) {
      suggestionsList.classList.remove('active');
    }
  });
  
  // Close suggestions on blur
  genreInput.addEventListener('blur', () => {
    setTimeout(() => {
      suggestionsList.classList.remove('active');
    }, 200); // Delay to allow click handler to fire
  });
  
  // Show all suggestions on focus (if input is empty)
  genreInput.addEventListener('focus', () => {
    if (!genreInput.value.trim()) {
      suggestionsList.innerHTML = allGenres.map(genre => 
        `<li class="genre-suggestion" data-genre="${genre}">${genre}</li>`
      ).join('');
      suggestionsList.classList.add('active');
      
      suggestionsList.querySelectorAll('.genre-suggestion').forEach(item => {
        item.addEventListener('click', () => {
          genreInput.value = item.dataset.genre;
          suggestionsList.classList.remove('active');
          genreInput.focus();
        });
      });
    }
  });
}

setupGenreSuggestions();

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
  document.documentElement.classList.add('dark-mode');
  darkModeToggle.textContent = '☀️';
}

darkModeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
  const isDark = document.documentElement.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
  darkModeToggle.textContent = isDark ? '☀️' : '🌙';
});

// Theme Presets
const themes = {
  default: {
    accent: '#e11d48',
    accent2: '#f472b6',
    muted: '#7a2840',
    label: 'Default'
  },
  ocean: {
    accent: '#0066cc',
    accent2: '#0084ff',
    muted: '#003d99',
    label: 'Ocean'
  },
  forest: {
    accent: '#10b981',
    accent2: '#34d399',
    muted: '#047857',
    label: 'Forest'
  },
  sunset: {
    accent: '#f97316',
    accent2: '#fb923c',
    muted: '#c2410c',
    label: 'Sunset'
  },
  purple: {
    accent: '#7c3aed',
    accent2: '#a78bfa',
    muted: '#6d28d9',
    label: 'Purple'
  },
  indigo: {
    accent: '#4f46e5',
    accent2: '#6366f1',
    muted: '#3730a3',
    label: 'Indigo'
  }
};

// Color Theme Modal
const colorModal = document.getElementById('colorModal');
const colorModalBackdrop = document.getElementById('colorModalBackdrop');
const colorCustomizerBtn = document.getElementById('colorCustomizer');
const closeColorModalBtn = document.getElementById('closeColorModal');
const modalCloseBtn = document.querySelector('.modal-close');
const themeOptions = document.querySelectorAll('.theme-option');

// Load theme from localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem('selectedTheme') || 'default';
  applyTheme(savedTheme);
  updateActiveThemeUI(savedTheme);
}

function applyTheme(themeName) {
  const theme = themes[themeName] || themes.default;
  
  document.documentElement.style.setProperty('--accent', theme.accent);
  document.documentElement.style.setProperty('--accent-2', theme.accent2);
  document.documentElement.style.setProperty('--muted', theme.muted);
  
  localStorage.setItem('selectedTheme', themeName);
}

function updateActiveThemeUI(themeName) {
  themeOptions.forEach(option => {
    option.classList.remove('active');
    if (option.dataset.theme === themeName) {
      option.classList.add('active');
    }
  });
}

// Modal event listeners
colorCustomizerBtn.addEventListener('click', () => {
  colorModal.classList.add('active');
  colorModalBackdrop.classList.add('active');
});

closeColorModalBtn.addEventListener('click', () => {
  colorModal.classList.remove('active');
  colorModalBackdrop.classList.remove('active');
});

modalCloseBtn.addEventListener('click', () => {
  colorModal.classList.remove('active');
  colorModalBackdrop.classList.remove('active');
});

colorModalBackdrop.addEventListener('click', () => {
  colorModal.classList.remove('active');
  colorModalBackdrop.classList.remove('active');
});

// Theme selection
themeOptions.forEach(option => {
  option.addEventListener('click', () => {
    const themeName = option.dataset.theme;
    applyTheme(themeName);
    updateActiveThemeUI(themeName);
  });
});

// Load theme on page load
loadTheme();
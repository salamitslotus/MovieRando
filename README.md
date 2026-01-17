# Movie Rando Fragrant

Simple static web app to randomly pick a movie from Netflix, Hulu, HBO Max, or Disney+.

Usage
- Open `index.html` in a browser (double-click or use `open index.html`).
- Optionally type a genre to filter (e.g. comedy, drama, sci-fi, romance).
- Click `Randomize` to pick a movie.
- Use the "Like", "Dislike" buttons to save your preference for the shown movie.
- Click "Already watched" to add the movie to the Watched list below; remove items with the "Remove" button or clear all with "Clear watched".
 - Click `Randomize` to pick a movie.
 - Use the "Like", "Dislike" buttons to save your preference for the shown movie.
 - Click "Already watched" to add the movie to the Watched list below; remove items with the "Remove" button or clear all with "Clear watched".

Ratings
- Each movie will show an IMDb-style rating in the result card.
- If a movie object contains a real `imdb` property it will be shown. Otherwise the app computes a stable pseudo-rating locally so every title displays a consistent rating without needing any external API.

Genre tabs
- Use the genre buttons above the filters to focus on a specific genre. Available tabs: All, Action, Comedy, Drama, Romance, Adventure, Horror, Sci-Fi, Thriller, Animation, Family, Fantasy, Crime, Documentary.
- Clicking a tab sets the filter (it populates the genre input) and remains selected until you pick a different tab or change the filter manually.

Sample custom item format:

[
  {"title":"My Movie","year":2020,"genre":"comedy","provider":"netflix","url":"https://..."}
]

Notes
- This app uses sample lists included in `script.js`. Replace or extend them with your own lists or integrate provider APIs where available.
The UI has a Valentine's Day color theme (red/pink).

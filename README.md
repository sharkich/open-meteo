Type: Weather app

using:

React.js
A free weather API (like “open-meteo”).
Components:
Menu/tabs to move between added countries/locales.
Weather component:
The default locale(default single weather forecast) is the browser’s user locale.
Ability to see the next 7 days weather forecast and swap between them (can be less/more if API permits).
Each page shows:
current weather forecast.
Day/night forecast for the day.
Chance to rain.
*Additional API data can be used
New locale button:
Opens a popup with an input to enter a new locale for the weather.
*Can be a hard-coded/dynamic list to choose from, or a dynamic autocomplete.
After adding a new locale, a new tab/menu item is added and the user can switch between them.

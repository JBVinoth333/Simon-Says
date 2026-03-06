# Simon Says Game

A browser-based Simon Says memory game built with HTML, CSS, and JavaScript.

The project has two screens:
- `simon.html`: home/menu screen
- `logic.html`: game screen

## Features

- Random sequence generation for each level
- Difficulty increases every round
- Score tracking during gameplay
- High score saved using `localStorage`
- Pause menu in game
- Sound toggle (on/off)
- Help screen and menu navigation
- Responsive layout for desktop and mobile

## Technologies Used

- HTML
- CSS
- JavaScript

## How to Play

1. Open the home page and click `PLAY`.
2. Watch the color pattern shown by the computer.
3. Repeat the same pattern by clicking the colored tiles.
4. Each successful round adds one more step to the pattern.
5. If you click a wrong tile, the game ends and your score is shown.

## Project Structure

```text
Mini project/
├── simon.html
├── simon.css
├── simon.js
├── logic.html
├── logic.css
├── logic.js
├── level-completed.mp3
├── vinoth.mp3
├── mix.mp3
└── audio.mp3
```

## Run Locally

1. Clone the repository.
2. Open the project folder in VS Code (or file explorer).
3. Open `simon.html` in a browser to start the game.

## Future Improvements

- Add keyboard controls for gameplay
- Add animation polish for transitions
- Add game difficulty modes
- Improve accessibility (focus styles)

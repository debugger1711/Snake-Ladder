# Snake & Ladder (Web)

A lightweight, browser-based implementation of the classic Snakes and Ladders board game using HTML, CSS, and JavaScript.

## Overview

This project recreates the traditional Snakes and Ladders game as a simple web app. It is designed as an educational example to demonstrate core web development concepts and basic game logic in JavaScript.

## Features

- Interactive board (default 10×10, 100 cells)
- Dice roll and player movement
- Snakes and ladders handling (moves player to linked cell)
- Simple UI built with HTML/CSS and game logic in `script.js`

## How It Works

- The board is modeled conceptually as a directed graph of cells.
- From any cell, a player may move up to 6 cells forward (dice roll).
- If a cell contains a snake or ladder, the player is moved immediately to the destination cell defined by that snake/ladder.

## Getting Started

1. Open `index.html` in a modern web browser (double-click or serve the folder via a static server).
2. Use the on-screen controls to roll the dice and take turns.

No build or installation is required — this is a static web project.

## Project Structure

- `index.html` — main page and game UI
- `style.css` — styles for the board and controls
- `script.js` — game logic, dice, movement, and interaction
- `img/` — image assets used by the UI

## Board Representation

The implementation treats the board as a set of numbered cells (0–100). Movement is calculated by adding the dice result to the player's current cell index and applying snakes/ladders redirects when present.

## Customization

- To change board size, snakes, or ladders, edit the configuration in `script.js`.
- Styling can be updated in `style.css`.

## Contributing

Suggestions, improvements, and bug fixes are welcome. Please submit issues or pull requests with a clear description of changes.

## License

This project is provided as-is for educational purposes. Feel free to reuse and adapt the code for learning and demonstration.

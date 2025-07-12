# High Imperial Translator

## Overview
The High Imperial Translator is a single-page web application built with React and TypeScript that connects to the OpenAI API to provide translations in a split-view interface. Users can input text on one side and view the translated output on the other.

## Features
- **Split-View UI**: The application features a user-friendly interface that displays an input pane for text entry and an output pane for displaying translations side by side.
- **OpenAI API Integration**: The app connects to the OpenAI API to fetch translations based on user input.
- **TypeScript Support**: The project is built using TypeScript, providing type safety and improved developer experience.

## Project Structure
```
High-Imperial-Translator
├── public
│   └── index.html
├── src
│   ├── api
│   │   └── openai.ts
│   ├── components
│   │   ├── InputPane.tsx
│   │   ├── OutputPane.tsx
│   │   └── SplitView.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd High-Imperial-Translator
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the application, run:
```
npm start
```
This will launch the app in your default web browser.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
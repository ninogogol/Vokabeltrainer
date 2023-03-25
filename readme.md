# Vokabeltrainer

Vokabeltrainer is a simple vocabulary training application that helps users learn English and German words. The application allows users to add, edit, and delete words, and it manages data storage and retrieval using a JSON file. The backend is built using Express, while the frontend relies on basic HTML, CSS, and JavaScript to interact with the server via asynchronous HTTP requests using the Fetch API.

### Features
- Add new words to the vocabulary list
- Edit existing words in the list
- Delete words from the list
- JSON-based data storage

### Getting Started
##### Prerequisites
- Node.js

##### Installation

1. Clone the repository:
```git clone https://github.com/ninogogol/vokabeltrainer.git```

2. Install dependencies:
```npm i express```

2. Start the development server:
```npm start```

The application will be running on **http://localhost:5040**.

### Usage

1. Open the application in your web browser.
2. Enter an English word and its German translation in the provided input fields.
3. Click the "Speichern" button to add the word pair to the list.
4. To edit a word, click on the word to make it editable, make your changes, and click the "Speichern" button next to the word.
5. To delete a word, click the "Löschen" button next to the word you want to remove.

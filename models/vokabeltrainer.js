const { readFile, writeFile } = require('fs/promises')
const { sanitize } = require('./sanitize')

const PATH_JSON = `${__dirname}/data/words.json`

// Export the showAll function to retrieve all words from the data file
module.exports.showAll = () => {
    return new Promise((resolve, reject) => {
        readWords()
            .then(jsonObj => resolve(jsonObj.words))
            .catch(err => reject(err))
    })
}

// Export the create function to add a new word to the data file
module.exports.create = (englishWord, germanWord) => {
    return new Promise((resolve, reject) => {
        let newWord = null

        readWords()
            .then(jsonObj => {
                jsonObj.autoincrementId ++
                newWord = {
                    english: sanitize(englishWord.trim()),
                    german: sanitize(germanWord.trim()),
                    id: jsonObj.autoincrementId
                }
                jsonObj.words.push(newWord)
                return writeWords(jsonObj)
            })
            .then(() => resolve(newWord.id))
            .catch(err => reject(err))
    })
}

// Export the update function to update an existing word in the data file
module.exports.update = (id, englishWord, germanWord) => {
    return new Promise((resolve, reject) => {
        readWords()
            .then(jsonObj => {
                const wordIndex = jsonObj.words.findIndex(word => word.id == id);

                if (wordIndex === -1) {
                    throw new Error('Word not found');
                }

                jsonObj.words[wordIndex].english = englishWord;
                jsonObj.words[wordIndex].german = germanWord;

                return writeWords(jsonObj);
            })
            .then(() => resolve())
            .catch(err => reject(err));
    });
}

// Export the deleteWord function to remove a word from the data file
module.exports.deleteWord = (id) => {
    return new Promise((resolve, reject) => {
        readWords()
            .then(jsonObj => {
                const wordIndex = jsonObj.words.findIndex(word => word.id == id);

                if (wordIndex === -1) {
                    throw new Error('Word not found');
                }

                jsonObj.words.splice(wordIndex, 1);

                return writeWords(jsonObj);
            })
            .then(() => resolve())
            .catch(err => reject(err));
    });
}

// Private helper function to read the JSON data from the file
const readWords = () => {
    return new Promise((resolve, reject) => {
        readFile(PATH_JSON)
            .then(fileData => resolve(JSON.parse(fileData)))
            .catch(err => reject(err))
    })
}

// Private helper function to write the JSON data to the file
const writeWords = jsonObj => {
    return new Promise((resolve, reject) => {
        writeFile(PATH_JSON, JSON.stringify(jsonObj))
            .then(() => resolve())
            .catch(err => reject(err))
    })
}
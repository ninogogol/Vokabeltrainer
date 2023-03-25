const wordForm = document.getElementById('word-form');
const wordTable = document.getElementById('word-table');

// Add a submit event listener to the form
wordForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the input values from the form
    const english = event.target.elements.english.value;
    const german = event.target.elements.german.value;

    // Send a POST request to the server to create a new word
    fetch('/vokabeltrainer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ english, german })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error(data.error);
        } else {
            // Refresh the word list and reset the form
            loadWords();
            wordForm.reset();
        }
    })
    .catch(error => console.error('Error:', error));
});


// Function to fetch the word list from the server and update the table
function loadWords() {
    fetch('/vokabeltrainer')
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error(data.error);
        } else {
            wordTable.innerHTML = data.words.map(word => `
                <tr>
                    <td contenteditable="true">${word.english}</td>
                    <td contenteditable="true">${word.german}</td>
                    <td class="td-buttons">
                        <button class="edit-button" data-id="${word.id}">Speichern</button>
                        <button class="delete-button" data-id="${word.id}">Löschen</button>
                    </td>
                </tr>
            `).join('');
        }
    })
    .catch(error => console.error('Error:', error));
}

// Load words on page load
loadWords();

// Add a click event listener to the table for handling edit and delete buttons
wordTable.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit-button')) {
        const row = event.target.parentElement.parentElement;
        const english = row.cells[0].innerText;
        const german = row.cells[1].innerText;
        const id = event.target.dataset.id;

        // Update the word with the new values
        updateWord(id, english, german);
    } else if (event.target.classList.contains('delete-button')) {
        const id = event.target.dataset.id;

        // Delete the word with the given id
        deleteWord(id);
    }
});


// Function to send a PUT request to the server to update a word
function updateWord(id, english, german) {
    fetch(`/vokabeltrainer/update`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, english, german })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error(data.error);
        } else {
            // Refresh the word list after updating
            loadWords();
        }
    })
    .catch(error => console.error('Error:', error));
}

// Function to send a DELETE request to the server to delete a word
function deleteWord(id) {
    fetch(`/vokabeltrainer/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error(data.error);
        } else {
            loadWords();
        }
    })
    .catch(error => console.error('Error:', error));
}


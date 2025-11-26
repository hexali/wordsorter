function sortWords() {
    // Get the input string from the user
    const inputString = document.getElementById('inputWords').value;
    
    // Split the input string into an array of words
    const wordList = inputString.split(' ');
    
    // Sort the words alphabetically
    const sortedWordList = wordList.sort((a, b) => a.localeCompare(b));
    
    // Join the sorted words back into a string
    const outputString = sortedWordList.join(', ');
    
    // Display the sorted words
    document.getElementById('outputWords').textContent = outputString;
}
function displayResults() {
    const answer = document.getElementById('answer').value;

    if (answer === "Photo"){
        
    }
    
    const finalMessage = `The last half of your name reversed is: ${nameModified}, and if you were in the world of Dungeons and Dragons, you would be a: ${speciesFinal}.`
    const message = document.createTextNode(finalMessage);
    const output = document.getElementById('fullOutput');       // puts the text into a node to append it
    textOutput.innerHTML = '';
    textOutput.appendChild(message);

    const img = document.createElement('img');
    img.src = speciesImages[speciesFinal];
    img.alt = speciesFinal; 

    img.width = 500;
    img.height = 500; // keeps images from taking up half the screen

    output.appendChild(img);

    const imageOutput = document.getElementById('imageOutput');
    imageOutput.innerHTML = ''; 
    imageOutput.appendChild(img);
}

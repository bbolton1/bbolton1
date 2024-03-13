function displayResults() {
    const answer = document.getElementById('answer').value;
    const output = document.getElementById('output');

    if (answer === "Personal info"){
        const finalMessage = "My name is Brayden Bolton and I am an undergraduate IT student at UNA. I am from Russellville, Alabama." +
        "I plan to focus on work involving cybersecurity and systems analysis. I recently (3/12/2024) turned 20 ";

        const message = document.createTextNode(finalMessage);
    
        output.innerHTML = '';
        output.appendChild(message);
    }

    else if (answer === "Capabilities"){
        const finalMessage = "I am proficient in using Google Cloud services, Windows Active Directory, and a myriad of programming languages." +
        "These languages are as follows: Python, C++, Java, JavaScript, and MySQL." +
        "The coding language I am best at properly utilizing is Python. I also have experience in creating diagrams through Lucid Charts." +
        "If you have any questions, please let me know at bbolton1@una.edu . Thank you for visiting my page";
                    
        const message = document.createTextNode(finalMessage);
        
        output.innerHTML = '';
        output.appendChild(message);
    }

    else if (answer === "Links"){
        const links = [
        {text: "Github Repositories", url: "https://example.com/link1"},
        {text: "Codepen", url: "https://example.com/link2"},
        {text: "Alpha", url: "https://example.com/link3"},
        {text: "Bravo", url: "https://example.com/link3"},
        {text: "Charlie", url: "https://example.com/link3"},
        {text: "Delta", url: "https://example.com/link3"},
        {text: "Echo", url: "https://example.com/link3"},
        ];

        output.innerHTML = ''; // Clear any previous content

        // Loops through each link and creates an anchor element to automate the process
        links.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.className = 'btn btn-secondary m-2';
        anchor.textContent = link.text;
        output.appendChild(anchor);
        });


    }

}

function displayResults() {
    const answer = document.getElementById('answer').value;
    const output = document.getElementById('output');
    
    if (answer === "Photo"){
        const img = document.createElement('img');
        img.src = 'styles/Brayden.jpg'; 
        img.alt = 'Brayden'; 
        img.width = 400;
        img.height = 500; 

        output.appendChild(img); 
        const imageOutput = document.getElementById('output');
        imageOutput.innerHTML = ''; 
        imageOutput.appendChild(img);   // lines 13-15 are mainly to keep the function from being able
                                        // to infinitely append
    }

    else if (answer === "Personal info"){
        const finalMessage = "My name is Brayden Bolton and I am an undergraduate IT student at UNA. I am from Russellville, Alabama." +
        "I plan to focus on work involving cybersecurity and systems analysis.";
        const message = document.createTextNode(finalMessage);
        const output = document.getElementById('output');      
        output.innerHTML = '';
        output.appendChild(message);
    }

    else if (answer === "Capabilities"){
        const finalMessage = "I am proficient in using Google Cloud services, Windows Active Directory, and Virtual Machines." +
        "The coding language I am best at properly utilizing is Python. I am still learning about the different nuances of a myriad of programs " +
        "and other software. Although I am capable of using these programs at an intermediate level. These include, but are not limited to, JavaScript, C++, Java," +
        "C++, Java, JavaScript, GDB, Nginx, and MySQL. If you have any questions, please let me know at bbolton1@una.edu . Thank you for visiting my page";
        const message = document.createTextNode(finalMessage);
        const output = document.getElementById('output');       
        output.innerHTML = '';
        output.appendChild(message);
    }


}

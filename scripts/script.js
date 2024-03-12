function displayResults() {
    const answer = document.getElementById('answer').value;
    const output = document.getElementById('output');
    
    if (answer === "Photo"){
        const img = document.createElement('img');
        img.src = 'styles/Brayden.jpg'; 
        img.alt = 'Brayden'; 
        img.width = 400;
        img.height = 500; 

        output.innerHTML = '';
        output.appendChild(img); 
    }

    else if (answer === "Personal info"){
        const finalMessage = "My name is Brayden Bolton and I am an undergraduate IT student at UNA. I am from Russellville, Alabama." +
        "I plan to focus on working in cybersecurity and systems analysis oriented fields. I recently turned 20";

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


}

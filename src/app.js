//write your code here

     let classicgame = ["rock", "paper", "scissors", "lizard", "spock"];
     
     let selectOptions = {
        rock : ["Scissors", "lizard"],
        paper : ["rock", "spock"],
        scissors : ["paper", "lizard"],
        lizard : ["paper", "spock"],
        spock : ["scissors", "rock"]
     };
    
    
     function Play(YourChoise) 
     {
         YourChoise.toLowerCase()
         const ComputerChoise = classicgame[Math.floor(Math.random() * classicgame.length)]
         console.log(`seleccion de la IA: ${ComputerChoise}`);
         console.log(`seleccion del jugador: ${YourChoise}`);
         
         if(YourChoise === ComputerChoise)
            {
                console.log("empate");
            }
            else if(selectOptions[YourChoise].includes(ComputerChoise))
                {
                    console.log("tu ganas");    
                }
                else
                {
                    console.log("tu pierdes");
                    
                }  
            
        } 
    Play("rock");
    
    
    
    
console.log("Hello Rigo from the console!");
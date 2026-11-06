// Count frequency of each character



function countFrequency()
{
    let name = "mynameisjoyson";
    let characters = "";
    let count = 0;

    for (let i = 0; i<name.length; i++)
    { 
           if(characters.includes(name[i]))
           {
               count = ++count; 
               characters = characters + name[i]; 
               console.log(`"${name[i]}" charater is repeated`)
               
           }
           characters = characters + name[i];
    }

console.log("total number of repeated characters are : " + count)

}

countFrequency();
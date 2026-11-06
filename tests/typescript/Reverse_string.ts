
//Reverse a string

function reverseString()
{
    let name = "joyson";

    let reverse = "";


    for(let i=name.length-1; i>=0; i--)
    {
        reverse = reverse + name[i];
    }

    console.log(`reverse of "${name}" is = ${reverse}`);
}

reverseString();


// Count vowels in a string


function countVowel()
{
    let name = 'joyson';
    let vowels = "aeiou";
    let count = 0;


    for(let i = 0; i<name.length; i++)
    {
        if(vowels.includes(name[i]))
        {
            count = ++count;
        }
    }

    console.log("The number of vowels in the given value is = " + count)
}

countVowel();
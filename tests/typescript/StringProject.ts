// Reverse a string

function reverseString(input:string)
{
    let word = input;
    let reverse = "";

    for(let i = word.length-1; i>=0 ; i--)
    {
        reverse = reverse + word[i];
        // reverse += word[i];
    }

   console.log(`Reverse of the string "${word}" is : ${reverse}`); 
}

reverseString("programming")


// check if the string is palindrome

function palindrome(input:string)
{
    let word = input;
    let reverse = "";

    for(let i = word.length -1; i >= 0; i--)
    {
        reverse += word[i];
    }

    if(word === reverse)
    {
        console.log("The given string is a palindrome");
    }
    else
    {
        console.log("The given string is not a Palindrome")
    }
}

palindrome("madam")

// count vowels

function countVowels(input:string)
{
    let word = input;
    let vowels = "aeiou";
    let count = 0;

    for(let i = 0; i < word.length; i++)
    {
        if(vowels.includes(word[i]))
        {
            count++;
        }
    }
console.log("The vowels present in the given string is : " +count);
}

countVowels("programming")

// count of consonants

function countConsonants(input:string)
{
    let word = input;
    let vowels = "aeiou";
    let count = 0;

    for(let i = 0; i< word.length; i++)
    {
        if(!vowels.includes(word[i].toLowerCase()))
        {
            if(word[i].toLowerCase()>="a" && word[i].toLowerCase()<="z")
            count++
        }
    }
console.log("The consonants present in the given string is : " +count);   

}
countConsonants("pRogRAMMING")


// count frequency of each charater

function countCharaterFrequency(input:string)
{
    let word = input;
    let charcount :{[key:string]:number} = {};

    for(let i = 0; i< word.length; i++)
    {
        let ch = word[i].toLowerCase();

        if(charcount[ch])
        {
            charcount[ch]++;
        }
        else
        {
            charcount[ch]=1;
        }
    } 

    for(let char in charcount)
    {
        console.log(`${char} = ${charcount[char]} `)
    }

}

countCharaterFrequency("programming")

//duplicate characters

function duplicateCharacters()
{
    let word = "programming";
    let duplicates:string[] = [];


    for(let i = 0; i< word.length; i++)
    {
        if(word.indexOf(word[i]) !== word.lastIndexOf(word[i]) && !duplicates.includes(word[i]))
        {
            duplicates.push(word[i]);
        }
    }
    console.log("duplicate of charactersin string is : " +duplicates)
}

duplicateCharacters();
//
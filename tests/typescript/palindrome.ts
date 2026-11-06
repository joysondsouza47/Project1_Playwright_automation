//Check whether a string is palindrome


function palindrome()
{
    let word = "joyson";
    let reverseword = "";

    for(let i = word.length - 1; i >= 0; i--)
    {
        reverseword = reverseword + word[i];
    }
    if(reverseword === word)
    {
        console.log("The given word is a Palindrome");
    }
    else
    {
        console.log("The given word is not a Palindrome")
    }
}

palindrome();
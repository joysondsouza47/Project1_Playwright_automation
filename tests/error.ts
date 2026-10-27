

try
{
    if(false)
    {
        console.log("congrats");
        //throw true;

    } 
    else
    {
        console.log("true")
        throw new Error("no congrats");
    }

}
 catch(error)
{
    
    if(error instanceof Error)
    {
    console.log(error.message)    
    }
}
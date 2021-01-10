const asenkronFunction = (sayi) => 
{
    return new Promise((resolve, reject) =>
    {
        if (sayi === 4)
        {
            resolve("Her şey yolunda")
        }
        else
        {
            reject("Bir sorun var")
        } 
    })
}

asenkronFunction (5)
    .then((data) =>
    {
        console.log(data)
        return 1
    })
    .then((data) => 
    {
        console.log(data)
        return "Gülfem"
    })
    .then((data) =>
    {
        console.log(data)
    })
    .catch((error) =>
    {
        console.log(error)
    })
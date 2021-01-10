const user = {id: 5, name: "Gülfem"};
const misafir = [{id: 6, name: "İrem"}, {id: 7, name: "Kerime"}, {id: 8, name: "Ali"}];

const getUser = () => 
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(function(){
            resolve(user);
        }, 1000);
    });
};

const getMisafir = (userId) =>
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(function(){
            resolve(misafir)
        }, 500);
    });
};

//callback
getUser().then(function(user) 
{
    userId = user.id;
    getMisafir(userId).then(function(misafir)
    {
        console.log(user);
        console.log(misafir);
    });
});

//Promise
getUser()
    .then((user) => 
    {
        console.log(user);
        return misafir;
    })
    .then((misafir) =>
    {
        console.log(misafir);
    })

//async-await
async function AsenkronFunction()
{
    const user = await getUser();
    const misafir = await getMisafir(user.id);
    console.log(user, misafir)
}

AsenkronFunction();
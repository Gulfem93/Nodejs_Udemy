const user = {id: 11, name: "Gülfem"};
const friends = [{id: 5, name: "İrem"}, {id: 6, name: "Kerime"}];

const getUser = () =>
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(function(){
            resolve(user);
        }, 500);
    });
}

const getFriends = () =>
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(function(){
            resolve(friends);
        }, 1000);
    });
}

getUser().then(function(user) 
{
    getFriends().then(function(friends){
        console.log(user);;
        console.log(friends);
    })
});


const { func1, func2 } = require('./func');

console.log(func1(), func2());
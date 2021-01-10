/*
// Çıktı:
//  İkinci
//  Ucuncu
//  Birinci

function birinci(callback)
{
    setTimeout(function()
    {
        console.log("Birinci")
        callback(ucuncu)
    },1000)
}
function ikinci(callback)
{
    setTimeout(function()
    {
        console.log("İkinci")
        callback()
    }, 2000)
}
function ucuncu()
{
    console.log("Ucuncu")
}
birinci(ikinci)
*/


/*
// Çıktı:
//  Ucuncu
//  Birinci
//  İkinci

function birinci(callback)
{
    setTimeout(function()
    {
        console.log("Birinci")
        callback()
    },1000)
}
function ikinci()
{
    console.log("İkinci")
}
function ucuncu()
{
    console.log("Ucuncu")
}
birinci(ikinci)
ucuncu()
*/


/*
// Çıktı:
//  Birinci
//  İkinci
//  Ucuncu

function birinci()
{
    console.log("Birinci")
}
function ikinci()
{
    console.log("İkinci")
}
function ucuncu()
{
    console.log("Ucuncu")
}
birinci()
ikinci()
ucuncu()
*/


/*
// Çıktı:
//  İkinci
//  Ucuncu
//  Birinci

function birinci()
{
    setTimeout(function(){console.log("Birinci")})
}
function ikinci()
{
    console.log("İkinci")
}
function ucuncu()
{
    console.log("Ucuncu")
}
birinci()
ikinci()
ucuncu()
*/

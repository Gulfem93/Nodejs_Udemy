// giriş -> fn() -> çıktı

var toplama = function (sayi1, sayi2)
{
    return sayi1 + sayi2
}
var cikarma = function (sayi1, sayi2)
{
    return (sayi1 - sayi2)
}
var carpma = function (sayi1, sayi2)
{  
    return sayi1 * sayi2
}
var bolme = function (sayi1, sayi2)
{
    return sayi1 / sayi2
}

var s1 = 10,
    s2 = 5

console.log(toplama (s1, s2))
console.log(cikarma (s1, s2))
console.log(carpma (s1, s2))
console.log(bolme (s1, s2))

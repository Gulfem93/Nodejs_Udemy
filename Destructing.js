//Diziler
/*
const degerler = [1, 2, 3]
const [deger1, deger2] = degerler
console.log(deger1)
console.log(deger2)
*/


//Nesneler
/*
const degerler =
{
    deger1: "deger1",
    deger2: "deger2",
    deger3: {isim: "Gülfem", soyisim: "Işık"}
}
// deger2 ve deger3 degerleri degerler1 deki deger2 ve deger3 degerine karşılık gelir.
const{deger2, deger3:{isim}, deger3:{soyisim: Soyad}} = degerler
console.log(deger2)
console.log(isim)
console.log(Soyad)
*/

/*
const degerler =
{
    deger1: "deger1",
    deger2: "deger2",
    deger3: "deger3"
}
// deger2 ve deger3 degerleri degerler1 deki deger2 ve deger3 degerine karşılık gelir.
const{deger2, deger3, deger4 = "deger4"} = degerler
console.log(deger2)
console.log(deger3)
console.log(deger4)
*/
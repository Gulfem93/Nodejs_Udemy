function soyle(text, callback)
{
    console.log(text)
    callback()
}

function CayDemle()
{
    console.log("Çay Demleniliyor")
}

soyle("merhaba", CayDemle)

// SetTimeOut 1 defa çalışır kendini imha eder
setTimeout(function a()
{
    console.log("Çay a")
}, 3000)


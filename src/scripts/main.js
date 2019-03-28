const outEl = document.querySelector("#output")

const bigSpenders = businesses.filter(business => {
    let bigSpender = false
    business.orders.forEach(order => {
        if (order >= 9000) {
            bigSpender = true
        }
    })
    return bigSpender
})

console.log(bigSpenders)

const printBigSpenders = () => {
    outEl.innerHTML = "<h1>Big Spenders</h1>"
    bigSpenders.forEach(business => {
        outEl.innerHTML += `
        <h2>${business.companyName}</h2>
        <section>${business.addressFullStreet}</section>
        <section>${business.addressCity}${business.addressStateCode}${business.addressZipCode}</section>`
        outEl.innerHTML += "<hr/>"
    })
}

printBigSpenders()
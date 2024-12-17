function calculateConfectionaryCosts(celebs) {

    let currentPurchases = celebs.map((celeb) => {
        return {
            name: celeb.name,
            yearlyCumulativeSpend: `£${parseInt(celeb.purchaseToday.costPerItem.slice(1)) * celeb.purchaseToday.amountBought 
                + parseInt(celeb.yearlyCumulativeSpend.slice(1))}`
}})
    
  
    return currentPurchases;
}

module.exports = calculateConfectionaryCosts;
let contactUs = document.getElementById('contactus');
let aboutUs = document.getElementById('aboutus');
let homePage = document.getElementById('home');

const excontactus = () => {

    contactUs.style.display = 'block';
    aboutUs.style.display = 'none';
    home.style.display = 'none';
    document.getElementById('cart').style.display = 'none'

}

const exaboutus = () => {

    aboutUs.style.display = 'block';
    contactUs.style.display = 'none';
    home.style.display = 'none';
    document.getElementById('cart').style.display = 'none'

}

const homepage = () => {

    home.style.display = 'block';
    contactUs.style.display = 'block';
    aboutUs.style.display = 'none';
    document.getElementById('cart').style.display = 'none'

}

const showCart = () => {

    let total1 = document.getElementById('total1').value;
    let total2 = document.getElementById('total2').value;
    let total3 = document.getElementById('total3').value;
    let total4 = document.getElementById('total4').value;
    let total5 = document.getElementById('total5').value;
    let total6 = document.getElementById('total6').value;
    let total7 = document.getElementById('total7').value;
    let total8 = document.getElementById('total8').value;
    let total9 = document.getElementById('total9').value;

    let price1 = document.getElementById('totalnormal1').value;
    let price2 = document.getElementById('totalnormal2').value;
    let price3 = document.getElementById('totalnormal3').value;
    let price4 = document.getElementById('totalnormal4').value;
    let price5 = document.getElementById('totalnormal5').value;
    let price6 = document.getElementById('totalnormal6').value;
    let price7 = document.getElementById('totalnormal7').value;
    let price8 = document.getElementById('totalnormal8').value;
    let price9 = document.getElementById('totalnormal9').value;

    totalSum = Number(total1) + Number(total2) + Number(total3) + Number(total4) + Number(total5) + Number(total6) + Number(total7) + Number(total8) + Number(total9)
    totalrealSum = Number(price1) + Number(price2) + Number(price3) + Number(price4) + Number(price5) + Number(price6) + Number(price7) + Number(price8) + Number(price9)

    totalSum = (Math.ceil(totalSum * 20) / 20).toFixed(2)
    totalrealSum = totalrealSum.toFixed(2);
    totalTax = totalSum - totalrealSum;
    totalTax = totalTax.toFixed(2);


    document.getElementById('taxx').innerText = `Sales Tax : ${totalTax}`;
    document.getElementById('priceWithTax').innerText = `Total : ${totalSum}`;


    document.getElementById('home').style.display = 'none';
    document.getElementById('aboutus').style.display = 'none';
    document.getElementById('contactus').style.display = 'none';
    document.getElementById('priceWithTax').style.display = 'block'
    document.getElementById('cart').style.display = 'block'
}

//CHECKING FOR APPLICABLE TAX WHILE PRESSING INCREMENTATION BUTTON:-
const checkForApplicableTax = (isBooksMedicalFoodItems, isImported, totalPrice) => {

    if (isBooksMedicalFoodItems == true && isImported == true) {
        let tax = .05 * totalPrice;
        roundedTax = (Math.ceil(tax * 20) / 20).toFixed(2)
        pricewithTax = Number(totalPrice) + Number(roundedTax)


    }
    else if (isBooksMedicalFoodItems == false && isImported == false) {
        let tax = .1 * totalPrice;
        roundedTax = (Math.ceil(tax * 20) / 20).toFixed(2)
        pricewithTax = Number(totalPrice) + Number(roundedTax)

    }
    else if (isBooksMedicalFoodItems == true && isImported == false) {
        pricewithTax = totalPrice;

    }
    else if (isBooksMedicalFoodItems == false && isImported == true) {
        let tax = .15 * totalPrice;
        roundedTax = (Math.ceil(tax * 20) / 20).toFixed(2)
        pricewithTax = Number(totalPrice) + Number(roundedTax)

    }
    return pricewithTax;

}

//CHECKING FOR APPLICABLE TAX WHILE PRESSING DECREMENT BUTTON:-
const checkForApplicableTaxdecr = (isBooksMedicalFoodItems, isImported, totalprice, price) => {
    if (isBooksMedicalFoodItems == true && isImported == true) {
        let tax = 0.05 * price;
        roundedTax = (Math.ceil(tax * 20) / 20).toFixed(2)
        leftprice = totalprice - (Number(price) + Number(roundedTax));

    }
    else if (isBooksMedicalFoodItems == false && isImported == false) {
        let tax = 0.1 * price;
        roundedTax = (Math.ceil(tax * 20) / 20).toFixed(2)
        leftprice = totalprice - (Number(price) + Number(roundedTax));
    }
    else if (isBooksMedicalFoodItems == true && isImported == false) {
        leftprice = totalprice - price;
    }
    else if (isBooksMedicalFoodItems == false && isImported == true) {
        let tax = 0.15 * price;
        roundedTax = (Math.ceil(tax * 20) / 20).toFixed(2)
        leftprice = totalprice - (Number(price) + Number(roundedTax));
    }
    return leftprice;

}
//*************************************************************** */

const exincr1 = (itemName, isBooksMedicalFoodItems, isImported, price) => {
    let count = document.getElementById('incrementdecrementValue1').value;
    count = (eval(`${count}+1`));
    document.getElementById('incrementdecrementValue1').value = count;
    let totalPrice = eval(price * count);

    let pricewithTax = checkForApplicableTax(isBooksMedicalFoodItems, isImported, totalPrice)
    pricewithTax = pricewithTax.toFixed(2);
    document.getElementById('total1').value = pricewithTax;
    document.getElementById('totalnormal1').value = totalPrice;
    //sending item information to main html page.
    document.getElementById('list1').innerText = `* Item Name : ${itemName} : Quantity--${count}  Price-- $${pricewithTax}`;
}
const exincr2 = (itemName, isBooksMedicalFoodItems, isImported, price) => {
    let count = document.getElementById('incrementdecrementValue2').value;
    count = (eval(`${count}+1`));
    document.getElementById('incrementdecrementValue2').value = count;

    let totalPrice = eval(price * count);

    let pricewithTax = checkForApplicableTax(isBooksMedicalFoodItems, isImported, totalPrice)

    pricewithTax = pricewithTax.toFixed(2);
    document.getElementById('total2').value = pricewithTax;
    document.getElementById('totalnormal2').value = totalPrice;
    document.getElementById('list2').innerText = `* Item Name : ${itemName} : Quantity--${count}  Price-- $${pricewithTax}`;
}
const exincr3 = (itemName, isBooksMedicalFoodItems, isImported, price) => {
    let count = document.getElementById('incrementdecrementValue3').value;
    count = (eval(`${count}+1`));
    document.getElementById('incrementdecrementValue3').value = count;

    let totalPrice = eval(price * count);

    let pricewithTax = checkForApplicableTax(isBooksMedicalFoodItems, isImported, totalPrice)

    pricewithTax = pricewithTax.toFixed(2);
    document.getElementById('total3').value = pricewithTax;
    document.getElementById('totalnormal3').value = totalPrice;
    document.getElementById('list3').innerText = `* Item Name : ${itemName} : Quantity--${count}  Price-- $${pricewithTax}`;
}
const exincr4 = (itemName, isBooksMedicalFoodItems, isImported, price) => {
    let count = document.getElementById('incrementdecrementValue4').value;
    count = (eval(`${count}+1`));
    document.getElementById('incrementdecrementValue4').value = count;

    let totalPrice = eval(price * count);

    let pricewithTax = checkForApplicableTax(isBooksMedicalFoodItems, isImported, totalPrice)

    pricewithTax = pricewithTax.toFixed(2);
    document.getElementById('total4').value = pricewithTax;
    document.getElementById('totalnormal4').value = totalPrice;
    document.getElementById('totalnormal4').value = totalPrice;

    document.getElementById('list4').innerText = `* Item Name : ${itemName} : Quantity--${count}  Price-- $${pricewithTax}`;
}
const exincr5 = (itemName, isBooksMedicalFoodItems, isImported, price) => {
    let count = document.getElementById('incrementdecrementValue5').value;
    count = (eval(`${count}+1`));
    document.getElementById('incrementdecrementValue5').value = count;
    let totalPrice = eval(price * count);

    let pricewithTax = checkForApplicableTax(isBooksMedicalFoodItems, isImported, totalPrice)

    pricewithTax = pricewithTax.toFixed(2);
    document.getElementById('total5').value = pricewithTax;
    document.getElementById('totalnormal5').value = totalPrice;
    document.getElementById('list5').innerText = `* Item Name : ${itemName} : Quantity--${count}  Price-- $${pricewithTax}`;
}
const exincr6 = (itemName, isBooksMedicalFoodItems, isImported, price) => {
    let count = document.getElementById('incrementdecrementValue6').value;
    count = (eval(`${count}+1`));
    document.getElementById('incrementdecrementValue6').value = count;

    let totalPrice = eval(price * count);

    let pricewithTax = checkForApplicableTax(isBooksMedicalFoodItems, isImported, totalPrice)

    pricewithTax = pricewithTax.toFixed(2);
    document.getElementById('total6').value = pricewithTax;
    document.getElementById('totalnormal6').value = totalPrice;
    document.getElementById('list6').innerText = `* Item Name : ${itemName} : Quantity--${count}  Price-- $${pricewithTax}`;
}
const exincr7 = (itemName, isBooksMedicalFoodItems, isImported, price) => {
    let count = document.getElementById('incrementdecrementValue7').value;
    count = (eval(`${count}+1`));
    document.getElementById('incrementdecrementValue7').value = count;

    let totalPrice = eval(price * count);

    let pricewithTax = checkForApplicableTax(isBooksMedicalFoodItems, isImported, totalPrice)

    pricewithTax = pricewithTax.toFixed(2);
    document.getElementById('total7').value = pricewithTax;
    document.getElementById('totalnormal7').value = totalPrice;
    document.getElementById('list7').innerText = `* Item Name : ${itemName} : Quantity--${count}  Price-- $${pricewithTax}`;
}
const exincr8 = (itemName, isBooksMedicalFoodItems, isImported, price) => {
    let count = document.getElementById('incrementdecrementValue8').value;
    count = (eval(`${count}+1`));
    document.getElementById('incrementdecrementValue8').value = count;

    let totalPrice = eval(price * count);

    let pricewithTax = checkForApplicableTax(isBooksMedicalFoodItems, isImported, totalPrice)

    pricewithTax = pricewithTax.toFixed(2);
    document.getElementById('total8').value = pricewithTax;
    document.getElementById('totalnormal8').value = totalPrice;
    document.getElementById('list8').innerText = `* Item Name : ${itemName} : Quantity--${count}  Price-- $${pricewithTax}`;
}
const exincr9 = (itemName, isBooksMedicalFoodItems, isImported, price) => {
    let count = document.getElementById('incrementdecrementValue9').value;
    count = (eval(`${count}+1`));
    document.getElementById('incrementdecrementValue9').value = count;

    let totalPrice = eval(price * count);

    let pricewithTax = checkForApplicableTax(isBooksMedicalFoodItems, isImported, totalPrice)

    pricewithTax = pricewithTax.toFixed(2);
    document.getElementById('total9').value = pricewithTax;
    document.getElementById('totalnormal9').value = totalPrice;
    document.getElementById('list9').innerText = `* Item Name : ${itemName} : Quantity--${count}  Price-- $${pricewithTax}`;
}
//************************************* */


const exdecr1 = (itemName, isBooksMedicalFoodItems, isImported, price) => {

    let count = document.getElementById('incrementdecrementValue1').value;
    if (count > 0) {
        count = count - 1;
        document.getElementById('incrementdecrementValue1').value = count;

        let totalprice = document.getElementById('total1').value;
        let pricencount = price * count;
        document.getElementById('totalnormal1').value = pricencount;
        let leftprice = checkForApplicableTaxdecr(isBooksMedicalFoodItems, isImported, totalprice, price)
        leftprice = leftprice.toFixed(2);
        document.getElementById('total1').value = leftprice;
        document.getElementById('list1').innerText = `* Item Name : ${itemName} : Quantity--${count}  Price-- $${leftprice}`;
    }


    else
        count = 0;

}

const exdecr2 = (itemName, isBooksMedicalFoodItems, isImported, price) => {

    let count = document.getElementById('incrementdecrementValue2').value;
    if (count > 0) {
        count = count - 1;
        document.getElementById('incrementdecrementValue2').value = count;

        let totalprice = document.getElementById('total2').value;
        let pricencount = price * count;
        document.getElementById('totalnormal2').value = pricencount;
        let leftprice = checkForApplicableTaxdecr(isBooksMedicalFoodItems, isImported, totalprice, price)
        leftprice = leftprice.toFixed(2);
        document.getElementById('total2').value = leftprice;
        document.getElementById('list2').innerText = `* Item Name : ${itemName} : Quantity--${count}  Price-- $${leftprice}`;
    }

    else
        count = 0;

}

const exdecr3 = (itemName, isBooksMedicalFoodItems, isImported, price) => {

    let count = document.getElementById('incrementdecrementValue3').value;
    if (count > 0) {
        count = count - 1;
        document.getElementById('incrementdecrementValue3').value = count;

        let totalprice = document.getElementById('total3').value;
        let pricencount = price * count;
        document.getElementById('totalnormal3').value = pricencount;

        let leftprice = checkForApplicableTaxdecr(isBooksMedicalFoodItems, isImported, totalprice, price)
        leftprice = leftprice.toFixed(2);
        document.getElementById('total3').value = leftprice;
        document.getElementById('list3').innerText = `* Item Name : ${itemName} : Quantity--${count}  Price-- $${leftprice}`;
    }

    else
        count = 0; 

}


const exdecr4 = (itemName, isBooksMedicalFoodItems, isImported, price) => {

    let count = document.getElementById('incrementdecrementValue4').value;
    if (count > 0) {
        count = count - 1;
        document.getElementById('incrementdecrementValue4').value = count;

        let totalprice = document.getElementById('total4').value;
        let pricencount = price * count;
        document.getElementById('totalnormal4').value = pricencount;

        let leftprice = checkForApplicableTaxdecr(isBooksMedicalFoodItems, isImported, totalprice, price)
        leftprice = leftprice.toFixed(2);
        document.getElementById('total4').value = leftprice;
        document.getElementById('list4').innerText = `* Item Name : ${itemName} : Quantity--${count}  Price-- $${leftprice}`;
    }

    else
        count = 0;

}

const exdecr5 = (itemName, isBooksMedicalFoodItems, isImported, price) => {

    let count = document.getElementById('incrementdecrementValue5').value;
    if (count > 0) {
        count = count - 1;
        document.getElementById('incrementdecrementValue5').value = count;

        let totalprice = document.getElementById('total5').value;
        let pricencount = price * count;
        document.getElementById('totalnormal5').value = pricencount;

        let leftprice = checkForApplicableTaxdecr(isBooksMedicalFoodItems, isImported, totalprice, price)
        leftprice = leftprice.toFixed(2);
        document.getElementById('total5').value = leftprice;
        document.getElementById('list5').innerText = `* Item Name : ${itemName} : Quantity--${count}  Price-- $${leftprice}`;
    }

    else
        count = 0;

}

const exdecr6 = (itemName, isBooksMedicalFoodItems, isImported, price) => {
    let count = document.getElementById('incrementdecrementValue6').value;
    if (count > 0) {
        count = count - 1;
        document.getElementById('incrementdecrementValue6').value = count;

        let totalprice = document.getElementById('total6').value;
        let pricencount = price * count;
        document.getElementById('totalnormal6').value = pricencount;

        let leftprice = checkForApplicableTaxdecr(isBooksMedicalFoodItems, isImported, totalprice, price)
        leftprice = leftprice.toFixed(2);
        document.getElementById('total6').value = leftprice;
        document.getElementById('list6').innerText = `* Item Name : ${itemName} : Quantity--${count}  Price-- $${leftprice}`;
    }

    else
        count = 0;

}

const exdecr7 = (itemName, isBooksMedicalFoodItems, isImported, price) => {

    let count = document.getElementById('incrementdecrementValue7').value;
    if (count > 0) {
        count = count - 1;
        document.getElementById('incrementdecrementValue7').value = count;

        let totalprice = document.getElementById('total7').value;
        let pricencount = price * count;
        document.getElementById('totalnormal7').value = pricencount;

        let leftprice = checkForApplicableTaxdecr(isBooksMedicalFoodItems, isImported, totalprice, price)
        leftprice = leftprice.toFixed(2);
        document.getElementById('total7').value = leftprice;
        document.getElementById('list7').innerText = `* Item Name : ${itemName} : Quantity--${count}  Price-- $${leftprice}`;
    }

    else
        count = 0;

}

const exdecr8 = (itemName, isBooksMedicalFoodItems, isImported, price) => {

    let count = document.getElementById('incrementdecrementValue8').value;
    if (count > 0) {
        count = count - 1;
        document.getElementById('incrementdecrementValue8').value = count;

        let totalprice = document.getElementById('total8').value;
        let pricencount = price * count;
        document.getElementById('totalnormal8').value = pricencount;

        let leftprice = checkForApplicableTaxdecr(isBooksMedicalFoodItems, isImported, totalprice, price)
        leftprice = leftprice.toFixed(2);
        document.getElementById('total8').value = leftprice;
        document.getElementById('list8').innerText = `* Item Name : ${itemName} : Quantity--${count}  Price-- $${leftprice}`;
    }

    else
        count = 0;

}

const exdecr9 = (itemName, isBooksMedicalFoodItems, isImported, price) => {

    let count = document.getElementById('incrementdecrementValue9').value;
    if (count > 0) {
        count = count - 1;
        document.getElementById('incrementdecrementValue9').value = count;

        let totalprice = document.getElementById('total9').value;
        let pricencount = price * count;
        document.getElementById('totalnormal9').value = pricencount;

        let leftprice = checkForApplicableTaxdecr(isBooksMedicalFoodItems, isImported, totalprice, price)

        leftprice = leftprice.toFixed(2);
        document.getElementById('total9').value = leftprice;
        document.getElementById('list9').innerText = `* Item Name : ${itemName} : Quantity--${count}  Price-- $${leftprice}`;
    }

    else
        count = 0;

}









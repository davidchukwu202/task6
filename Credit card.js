function CreditCard(cardNumber) {
    // Regular expressions
    const visa= /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercard= /^5[1-5][0-9]{14}$/;

    // Check if the card number matches
    if (visa.test(cardNumber)) {
        return "Visa";
    } else if (mastercard.test(cardNumber)) {
        return "Mastercard";
    } else {
        return "Invalid card type";
    }
}

const cardNumber = "5111222233331111";
console.log(CreditCard(cardNumber));

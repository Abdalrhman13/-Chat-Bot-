function getBotResponse(input) {

    if (input == "hello") {
        return "Hello there!";
    } else if (input == "Hello, I’m good, how are you?") {
        return "I’m great, thanks for asking. how can ı help you?";
    } else if (input == "What do you offer from tourist destinations?") {
        return "We have many tourist destinations،Do you want to go in summer or winter?";
    }else if (input == "I want to go in summer") {
        return "We have destinations to the Maldives, Thailand and Malaysia";
    } else if (input == "I want to go maladives") {
        return "We have a trip next month Do you want to join";
    }else if (input == "Yes I want to join") {
        return "We have VIP and regular services, whichever do you prefer?";
    }else if (input == "I want VIP service") {
        return "Total costs will be $3000";
    }else if (input == "oky") {
        return "Do you want to pay by bank card or cash?";
    } else if (input == "By bank card") {
        return "Well, thank you for choosing Al-Hakimi for travel and tourism";
    } else if (input == "thanks") {
        return "you are welcome";
    }else {
        return "Can you rephrase your question!";
    }
}
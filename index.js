// Code your solutions in this file
function writeCards(names, event) {
    const thankYouMessages = []
    for (let n = 0; n < names.length; n++) {
        let message = `Thank you, ${names[n]}, for the wonderful ${event} gift!`
        thankYouMessages.push(message)
    };
    return thankYouMessages
};


function countDown(int) {
    while (int > -1) {
        console.log(int)
        int--;
    }
}
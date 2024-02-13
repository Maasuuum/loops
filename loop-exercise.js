// Display "Ajke amar mon valo nei" for 39 times(.5)
// var sentence = 1;
// while (sentence <= 39){
//     console.log('Ajke amar mon valo nei');
//     console.log(sentence);
//     sentence ++;
// }

// Display numbers between 58 to 98(1)
// var numbers = 58;
// while(numbers <= 98){
//     console.log(numbers);
//     numbers ++;
// }

// Show all even numbers from 412 to 456(.5)
// var number = 412;
// while(number <= 456){
//     console.log(number);
//     number +=2;
// }

// Show all odd numbers between 581 to 623(1)
// var i = 581;
// while(i <= 623){
//     console.log(i);
//     i +=2;
// }

// Difference between while loop and for loop

// Declare an array for all the topics that you have learned last few days and display them as output(0)
// var topics = ['html', 'css', 'tailwind css', 'bootstrap', 'javascript'];
// for(var i=0; i<topics.length; i++ ){
//     var topic = topics[i];
//     console.log(topic);
// }

// Create an array for all the mobile phone that u used. Display all the elements by using while loop(0)
// var phoneName = ['Nokia', 'Symphony', 'Walton', 'Maximus', 'Micromax', 'Xiomi', 'Vivo'];
// var i = 0;
// while(i < phoneName.length){
//     console.log(phoneName[i]);
//     i++;
// }

// Run a loop from 30 to 86. This loop will stop if the values get higher than 46
// for(var i = 30; i <=86; i++){
//     console.log(i);
//     if(i > 46){
//         break;
//     }
// }
// By using while loop
// var i = 30;
// while(i <= 86){
//     console.log(i);
//     i++;
//     if(i > 46){
//         break;
//     }
// }

var booksPrice = [180, 150, 220, 280, 200, 190, 86, 350, 175];
for(var i = 0; i < booksPrice.length; i++){
    var price = booksPrice[i];
    if(price > 200){
        break;
    }
    console.log(price);
}
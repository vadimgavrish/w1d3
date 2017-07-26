function countLetters (input) {

    input = input.split(" ");
    newString = input.join("").toLowerCase();

    var myCount = {};

    for (i = 0; i < newString.length; i++) {

        var currentLetter = newString[i];

        if (myCount[currentLetter]) {
            
            myCount[currentLetter] += 1;

        } else {

            myCount[currentLetter] = 1;

        }
    }

    return myCount;
}
    
console.log(countLetters("hello my name is Freddy"));


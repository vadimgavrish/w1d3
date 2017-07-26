function returnIndex (input) {

    input = input.split(" ");
    newString = input.join("").toLowerCase();

    var myCount = {};

    for (i = 0; i < newString.length; i++) {

        var currentLetter = newString[i];

        if (myCount[currentLetter]) {

            myCount[currentLetter].push(i);

        } else {
            
            myCount[currentLetter] = [i];

        }
    }

    return myCount;
}
    
console.log(returnIndex("hi my name is tom"));
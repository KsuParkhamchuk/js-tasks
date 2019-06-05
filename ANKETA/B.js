var pharase = [];
var vowels=['у','е','ы','а','о','э','я','и','ю'];
phrase= prompt('Введите строку:');
console.log(countVowels(phrase));

function countVowels(somephrase) {
    var vowel=0;
    for (var i=0;i<phrase.length;i++){
        for(var j = 0;j<vowels.length;j++){
            if (somephrase[i] == vowels[j]){
                vowel++;
            }
        }
    }
    return vowel;
}


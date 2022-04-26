
class UpperCaseFinder{

    findUpperCaseChars(word, i){
        var i = i || 0;
        if(word.length > i){
            if(word[i] == word[i].toUpperCase()){
                return [i].concat(this.findUpperCaseChars(word, i+1));
            }
            return this.findUpperCaseChars(word, i+1);
        }
        return [];
    }
}


module.exports = UpperCaseFinder;


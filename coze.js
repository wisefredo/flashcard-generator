function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.partial = function() {
        var str = text.replace("George Washington", "...");
        return str;

    }
}
module.exports = ClozeCard;

// function myFunction() {
//     var str = document.getElementById("demo").innerHTML; 
//     var res = str.replace("Microsoft", "W3Schools");
//     document.getElementById("demo").innerHTML = res;
// }
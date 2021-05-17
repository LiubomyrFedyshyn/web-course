module.exports = {
    bubbleSort: function (txt) {
        var arr = txt.split('');
        let temp;
        for(let i = 0;i < txt.length;i++){
            for(let j  = 0;j < txt.length - i;j++){
                if(arr[j] > arr[j+1]){
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr.join('');
    },
    bogoSort: function (arr){
        let temp;
        let rnd;
        for(let i = 0;i < arr.length;i++){
            rnd = getRandomInt(arr.length);
            temp = arr[i];
            arr[i] = arr[rnd];
            arr[rnd] = temp;
        }
        return arr;
    }


}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}


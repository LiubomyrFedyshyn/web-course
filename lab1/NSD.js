module.exports= {
    NSD: function (a,b){
        let t;
        if(a < b){
            t = a;
            a = b;
            b = a;
        }
        while(b != 0){
            t = b;
            b = a % b;
            a = t;
        }
        return a;
    }
}
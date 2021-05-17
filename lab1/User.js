module.exports = {
    SortedUsers: function(names){
        return UserSort(UserArr(names));
    }
}

var User = function(name){
     this.name = name;
     this.Name = () => {return name};
}
function compare(a,b){
    var res = false;

    a = a.toLowerCase();
    b = b.toLowerCase();
    for(var i = 0;i < a.length;i++){
        if(a[i] != b[i]){

            return  a[i] > b[i];
        }
    }
}

function UserArr(names){
    let res = [];
    let temp;
    for(let i = 0;i < names.length;i++) {
        res.push(new User(names[i]));
    }
    console.log(res);
    return res;
}
function UserSort(users){

    let temp;
    for(let i = 0;i < users.length;i++){
        for(let j  = 0;j < users.length - i - 1;j++){
            if(compare(users[j].name,users[j+1].name)){
                temp = users[j];
                users[j] = users[j+1];
                users[j+1] = temp;
            }
        }
    }
    return users;
}
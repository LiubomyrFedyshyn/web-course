function find(a, b){
  if (a>b){
    x=b
  }
  else{
    x=a
  }
  for(var i = x; i > 0; i--){
    if(a%i==0&&b%i==0){
      return i;
    }
  }
}
a= 21
b= 9
console.log(a, b)
console.log(find(a,b))

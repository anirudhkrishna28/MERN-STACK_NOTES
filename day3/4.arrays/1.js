let arr = [1,2,3,"abc",false]
console.log(arr);
arr.pop()
console.log(arr);
arr.push((x,y)=> x*y)
console.log(arr);
console.log(arr[4](10,20));
arr.shift();
console.log(arr);
arr.unshift(100);
console.log(arr);

let a = [
    1,
    undefined,
    true,
    null,
    "123",
    '4',
    6.25,
    (str) => "hello!! "+str,
    {1:'a',2:'b',name:"ani"},
    [1,2,3,4,5]
]

console.log(a[7]("ani"));
console.log(a[8].name);
console.log(a[9][2]);

for(key in a[9]){
    console.log(key)
}

arr.push('a','b','c','d')
console.log(arr);


let array = ["anirudh","akilan","chandra","moonprakash","hello"]

console.log(array.slice(1,3));

let ar = array.splice(2,3)

console.log(ar);
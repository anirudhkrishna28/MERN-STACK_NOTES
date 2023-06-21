let s = "Sri Eshwar College";
let a = s.split(" ")
console.log(a);
console.log(a.join("."));

console.log(s.toUpperCase());
console.log(s.toLocaleUpperCase());
let st = "madhu akshaya priya ishwarya saranya";
let sp = st.split(" ")
let ans=[]
for (var i=0;i<sp.length;i++){

let word = sp[i][0].toUpperCase()
for(var j =1;j<sp[i].length;j++)
{
    word+=sp[i][j]
}
ans.push(word)

}
console.log(ans);

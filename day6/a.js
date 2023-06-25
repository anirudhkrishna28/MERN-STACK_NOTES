const add = (a,b) => a+b
const sub = (a,b) => a-b
const mul = (a,b) => a*b
const div = (a,b) => a/b



let char = process.argv[2]
let x = parseInt(process.argv[3])
let y = parseInt(process.argv[4])
let a = 0

switch(char){
    case '+':
        a = add(x,y)
        break
    case '-':
        a = sub(x,y)
        break
    case '*':
        a = mul(x,y)
        break
    case '/':
        a = div(x,y)
        break
}

module.exports = {add,sub,mul,div}
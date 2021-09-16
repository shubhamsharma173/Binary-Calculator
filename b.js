
const res = document.querySelector('#res');
const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btnClr = document.querySelector('#btnClr');
const btnEql = document.querySelector('#btnEql');
const btnSum = document.querySelector('#btnSum');
const btnSub = document.querySelector('#btnSub');
const btnMul = document.querySelector('#btnMul');
const btnDiv = document.querySelector('#btnDiv');

btn0.addEventListener('click', event => {
  res.innerHTML += 0;
});
btn1.addEventListener('click', event => {
  res.innerHTML += 1;
});
btnSum.addEventListener('click', event => {
  res.innerHTML += '+';
});
btnSub.addEventListener('click', event => {
  res.innerHTML += '-';
});
btnMul.addEventListener('click', event => {
  res.innerHTML += '*';
});
btnDiv.addEventListener('click', event => {
  res.innerHTML += '/';
});
btnClr.addEventListener('click', event => {
  res.innerHTML = '';
});

function calc(str, op) {
    strs = str.split(op);
    strs[0] = parseInt(strs[0],2)
    strs[1] = parseInt(strs[1],2)
    // console.log(eval(strs[0] + op + strs[1]));
    res.innerHTML = eval(strs[0] + op + strs[1]).toString(2);
}

btnEql.addEventListener('click', event => {
    str = res.innerHTML;
    
    str.includes('+') ? calc(str,'+') : null
    str.includes('-') ? calc(str,'-') : null
    str.includes('*') ? calc(str,'*') : null
    str.includes('/') ? calc(str,'/') : null
});
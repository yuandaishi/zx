#!/usr/bin/env zx
// let name = ['a','b','c'];
// for(let i=0;i<name.length;i++){
//     await $`mkdir ${name[i]}`;
// }

// cd('/a')

let res = await fetch('https://juejin.cn/post/6979989936137043999');
if(res.ok){
    console.log(await res.text())
}
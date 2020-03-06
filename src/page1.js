import "./page1.css"
import $ from 'jquery'

let $view = $(".view > span")

const $plus=$(".plus");
const $minus=$(".minus");
const $multi=$(".multi");
const $divide=$(".divide")

//从localStorage中取出number，并写入页面
const number = localStorage.getItem("number");
$view.text(number || 100);

$plus.on("click",()=>{
    //console.log("hi");
    //每次按键获取当前的数字
    let number = parseInt($view.text());
    //console.log(typeof(number));
    number +=2;
    localStorage.setItem("number",number.toString());
    $view.text(number);
})
$minus.on("click",()=>{
    let number = parseInt($view.text());
    //console.log(typeof(number));
    number -=2;
    localStorage.setItem("number",number.toString());
    $view.text(number);
})
$multi.on("click",()=>{
    let number = parseInt($view.text());
    //console.log(typeof(number));
    number *=2;
    localStorage.setItem("number",number.toString());
    $view.text(number);
})
$divide.on("click",()=>{
    let number = parseInt($view.text());
    //console.log(typeof(number));
    number /=2;
    localStorage.setItem("number",number.toString());
    $view.text(number);
})
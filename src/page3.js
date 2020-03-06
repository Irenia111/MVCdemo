import './page3.css'

import $ from 'jquery'

const $wave = $(".page3 .wave");

$wave.hover(() => {
    $wave.toggleClass('active');
    //toggleClass,如果没有class就加上，有则删除
})
$wave.click(() => {
    $wave.toggleClass('active');
    //toggleClass,如果没有class就加上，有则删除
})

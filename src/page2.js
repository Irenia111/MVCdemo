import './page2.css'

import $ from 'jquery';

const $tab = $(".tablist");

$tab.on("click","li",(e)=>{
       let $target = $(e.currentTarget);
       let $content = $(".content .tabcontent");
       let index = $target.index();
       console.log(index);

       $target.addClass("now").siblings().removeClass("now");

       //如果是修改class的话，要记得先删后加
       $content.eq(index).removeClass("unshow").addClass("show").siblings().removeClass("show").addClass("unshow")
       console.log( $content.eq(index));
})


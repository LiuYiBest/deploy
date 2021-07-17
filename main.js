let html = document.querySelector('#html'); //获取html中标签的id选择器
let style = document.querySelector('#style');//设置style样式

let string = `
/*八卦图绘制流程：
*Eight Diagrams
*首先准备一个DIV
*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*接下来把div变成一个八卦图
*正在绘制中...
*首先，把div变成一个圆
*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgb(0,0,0,0.5);
    border: none;
}
/*阴阳八卦，一黑一白
*利用背景渐变CSSGradient
*/
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*创建阴阳间隔
*利用镜像渐变创建阴阳鱼
*/
#div1::before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 15%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 100%);
    border-radius: 50%;
}
#div1::after {
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 15%, 
    rgba(255,255,255,1) 15%, rgba(255,255,255,1) 100%);
    border-radius: 50%;
}
`;

let string2 = "";
let n = 0;

let step = () => {
    setTimeout(() => {

        if (string[n] === "\n") {
            string2 += "<br>";
        } else if (string[n] === " ") {
            //空格替换缩进
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        //不能与html共用string2，需要给文字加上注释/* */，不然会影响
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 10000);//设置滚动条始终下拉
        html.scrollTo(0, 10000);
        if (n < string.length - 1) {  //消除<符号
            //如果n不是最后一个就继续
            n += 1;
            step();
        } else {

        }
    }, 40);
}
step();


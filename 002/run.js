!function(){
	let duration = 50
	// 前缀 代码 回调
	function writeCode(prefix, code, fn){
		// 选择代码
		let container = document.querySelector("#code")
		// 选择样式
		let styleTag = document.querySelector("#styleTag")
		let message = `
		/* 为我最爱的薇画一只多啦A梦 */
		`
		let n = 0
		setTimeout(function run(){
			n += 1
			if (container.innerHTML == message) {
				duration = 1
			}
			container.innerHTML = message.substring(0, n)
			styleTag.innerHTML = code.substring(0, n)
			container.scrollTop = container.scrollHeight

			if (n < code.length) {
				setTimeout(run, duration)
			}else{
				fn && fn.call()
			}
		},20)
	}
	let code = `
  .wrapper{
      margin: 50px 100px;
  }
  .doraemon{
      position: relative;
  }
  .head{
      position: relative;
      width: 320px;
      height: 300px;
      border-radius: 150px;
      background: #07bbee;
      /*此放射渐变也是使脸的左下角暗一些，看上去更真实*/
      background: -webkit-radial-gradient(right top,#fff 10%,#07bbee 20%,#10a6ce 75%,#000);
      background: -moz-radial-gradient(right top,#fff 10%,#07bbee 20%,#10a6ce 75%,#000);
      background: -ms-radial-gradient(right top,#fff 10%,#07bbee 20%,#10a6ce 75%,#000);
      border: 2px solid #555;
      box-shadow: -5px 10px 15px rgba(0,0,0,0.45);
  }
  .face{
      /*让所有脸部元素可自由定位*/
      position: relative;
      /*脸在头部背景上面*/
      z-index: 2;
  }
  .whiteFace{
      width: 265px;
      height: 195px;
      border-radius: 150px;
      position: absolute;
      top: 75px;
      left: 25px;
      background: #fff;
      /*此放射渐变也是使脸的左下角暗一些，看上去更真实*/
      background: -webkit-radial-gradient(right top,#fff 75%,#eee 80%,#999 90%,#444);
      background: -moz-radial-gradient(right top,#fff 75%,#eee 80%,#999 90%,#444);
      background: -ms-radial-gradient(right top,#fff 75%,#eee 80%,#999 90%,#444);
  }
  .nose{
      width: 30px;
      height: 30px;
      border-radius: 15px;
      background:#c93300;
      border:2px solid #000;
      position: absolute;
      top: 110px;
      left: 140px;
      /*鼻子在白色脸底上面*/
      z-index: 3;
  }
  .nose .light{
      width: 10px;
      height: 10px;
      border-radius: 5px;
      /*通过阴影实现高光*/
      box-shadow: 19px 8px 5px #fff;
  }
  .philtrum{
      width: 3px;
      height: 100px;
      background: #333;
      position: absolute;
      top: 143px;
      left: 155px;
      z-index: 3;
  }
  .mouth{
      width: 220px;
      height: 400px;
      /*通过底边框加上圆角模拟微笑嘴巴*/
      border-radius: 120px;
      border-bottom: 3px solid #333;
      position: absolute;
      top: -160px;
      left: 45px;
  }
  .eyes{
      position: relative;
      z-index: 3;
  }
  .eye{
      width: 72px;
      height: 82px;
      background: #fff;
      border: 2px solid #000;
      border-radius: 35px;
      position: absolute;
      top: 40px;
      -webkit-animation: eyemove 3s linear infinite;
      -moz-animation: eyemove 3s linear infinite;
      -ms-animation: eyemove 3s linear infinite;
      -o-animation: eyemove 3s linear infinite;
      animation: eyemove 3s linear infinite;
  }
  /*让眼睛动起来*/
  @-webkit-keyframes eyemove {
      70%{
          margin:0 0 0 0;
      }
      80% {
          margin: -22px 0 0 0;
      }

      85% {
          margin: -22px 0 0 5px;
      }

      90% {
          margin: -22px 10px 0 0;
      }

      93% {
          margin: -22px 0 0 0;
      }

      96% {
          margin: 0 0 0 0;
      }
  }
  @-moz-keyframes eyemove {
      70% {
          margin: 0 0 0 0;
      }

      80% {
          margin: -22px 0 0 0;
      }

      85% {
          margin: -22px 0 0 5px;
      }

      90% {
          margin: -22px 10px 0 0;
      }

      93% {
          margin: -22px 0 0 0;
      }

      96% {
          margin: 0 0 0 0;
      }
  }

  @-o-keyframes eyemove {
      70% {
          margin: 0 0 0 0;
      }

      80% {
          margin: -22px 0 0 0;
      }

      85% {
          margin: -22px 0 0 5px;
      }

      90% {
          margin: -22px 10px 0 0;
      }

      93% {
          margin: -22px 0 0 0;
      }

      96% {
          margin: 0 0 0 0;
      }
  }
  @keyframes eyemove {
      70% {
          margin: 0 0 0 0;
      }

      80% {
          margin: -22px 0 0 0;
      }

      85% {
          margin: -22px 0 0 5px;
      }

      90% {
          margin: -22px 10px 0 0;
      }

      93% {
          margin: -22px 0 0 0;
      }

      96% {
          margin: 0 0 0 0;
      }
  }
  .eyes .left{
      left: 82px;
  }
  .eyes .right{
      left: 156px;
  }
  .eyeball{
      width: 14px;
      height: 14px;
      background: #000;
      border-radius: 7px;
      position: absolute;
      top: 40px;
  }
  .eye .bleft{
      left: 50px;
  }
  .eye .bright{
      left: 7px;
  }
  .whiskers{
      width: 220px;
      height: 80px;
      background: #fff;
      border-radius: 15px;
      position: absolute;
      top: 120px;
      left: 45px;
      z-index: 2;
  }
  .whisker{
      width: 60px;
      height: 2px;
      background: #333;
      position: absolute;
      z-index: 2;
  }
  .l1{
      top: 25px;
      left: 0;
  }
  .l2{
      top: 45px;
      left: -2px;
  }
  .l3{
      top: 65px;
      left: 0;
  }
  .r1{
      top: 25px;
      left: 165px;
  }
  .r2{
      top: 45px;
      left: 167px;
  }
  .r3{
      top: 65px;
      left: 165px;
  }
  .r20{
      -webkit-transform: rotate(200deg);
      -moz-transform: rotate(200deg);
      -ms-transform: rotate(200deg);
      -o-transform: rotate(200deg);
      transform: rotate(200deg);
  }
  .r160{
      -webkit-transform: rotate(160deg);
      -moz-transform: rotate(160deg);
      -ms-transform: rotate(160deg);
      -o-transform: rotate(160deg);
      transform: rotate(160deg);
  }
  .collar{
      width: 230px;
      height: 20px;
      background: #c40;
      /*线性渐变 让围巾看上去更自然*/
      background: -webkit-gradient(linear,left top,left bottom,from(#c40),to(#800400));
      background: -moz-linear-gradient(center top,#c40,#800400);
      background: -ms-linear-gradient(center top,#c40,#800400);
      border: 2px solid #000;
      border-radius: 10px;
      position: relative;
      top: -40px;
      left: 45px;
      z-index: 4;
  }
  .bell{
      width: 40px;
      height: 40px;
      _overflow: hidden; /*IE6 hack*/
      border-radius: 50px;
      border:2px solid #000;
      background: #f9f12a;
      background: -webkit-gradient(linear, left top, left bottom, from(#f9f12a),color-stop(0.5, #e9e11a), to(#a9a100));
      background: -moz-linear-gradient(top, #f9f12a, #e9e11a 75%,#a9a100);
      background: -ms-linear-gradient(top, #f9f12a, #e9e11a 75%,#a9a100);
      box-shadow: -5px 5px 10px rgba(0,0,0,0.25);
      position: absolute;
      top: 5px;
      left: 90px;
  }
  .bell_line{
      width: 36px;
      height: 2px;
      background: #f9f12a;
      border: 2px solid #333;
      border-radius: 3px 3px 0 0;
      position: absolute;
      top: 10px;
  }
  .bell_circle{
      width: 12px;
      height: 10px;
      background: #000;
      border-radius: 5px;
      position: absolute;
      top: 20px;
      left: 14px;
  }
  .bell_under{
      width: 3px;
      height: 15px;
      background: #000;
      position: absolute;
      top: 27px;
      left: 18px;
  }
  .bell_light{
      width: 12px;
      height: 12px;
      border-radius: 10px;
      box-shadow: 19px 8px 5px #fff;
      position: absolute;
      top: -5px;
      left: 5px;
      opacity: 0.7;
  }
  .body{
      position: relative;
      top: -310px;
  }
  .belly{
      width: 220px;
      height: 165px;
      background: #07beea;
      background: -webkit-gradient(linear,right top,left top,from(#07beea),color-stop(0.5, #0073b3),color-stop(0.75,#00b0e0), to(#0096be));
      background: -moz-linear-gradient(right center,#07beea,#0073b3 50%,#00b0e0 75%,#0096be 100%);
      background: -ms-linear-gradient(right center,#07beea,#0073b3 50%,#00b0e0 75%,#0096be 100%);
      border: 2px solid #333;
      position: absolute;
      top: 265px;
      left: 50px;
  }
  .bellyband{
      width: 170px;
      height: 170px;
      background: #fff;
      background: -webkit-gradient(linear, right top, left bottom, from(#fff),color-stop(0.75,#fff),color-stop(0.83,#eee),color-stop(0.90,#999),color-stop(0.95,#444), to(#000));
      background: -moz-linear-gradient(right top,#fff,#fff 75%,#eee 83%,#999 90%,#444 95%,#000);
      background: -ms-linear-gradient(right top,#fff,#fff 75%,#eee 83%,#999 90%,#444 95%,#000);
      border:2px solid #000;
      border-radius: 85px;
      position: absolute;
      top: 230px;
      left: 72px;
  }
  .pocket{
      width: 130px;
      height: 130px;
      border-radius: 65px;
      background: #fff;
      background: -webkit-gradient(linear, right top, left bottom, from(#fff),color-stop(0.70,#fff),color-stop(0.75,#f8f8f8),color-stop(0.80,#eee),color-stop(0.88,#ddd), to(#fff));
      background: -moz-linear-gradient(right top, #fff, #fff 70%,#f8f8f8 75%,#eee 80%,#ddd 88%, #fff);
      background: -ms-linear-gradient(right top, #fff, #fff 70%,#f8f8f8 75%,#eee 80%,#ddd 88%, #fff);
      border:2px solid #000;
      position: absolute;
      top: 250px;
      left: 92px;
  }
  .pocketAdorn{
      width: 134px;
      height: 60px;
      background: #fff;
      border-bottom: 2px solid #000;
      position: absolute;
      top: 259px;
      left: 92px;
  }
  .leftHand{
      width: 100px;
      height: 100px;
      position: absolute;
      top:272px;
      left: -10px;
  }
  .rightHand{
      width: 100px;
      height: 100px;
      position: absolute;
      top:272px;
      left: 248px;
  }
  .arm{
      width: 80px;
      height: 50px;
      background: #07beea;
      background: -webkit-gradient(linear, left top, left bottom, from(#07beea),color-stop(0.85,#07beea), to(#555));
      background: -moz-linear-gradient(center top, #07BEEA, #07BEEA 85%, #555);
      background: -ms-linear-gradient(center top, #07BEEA, #07BEEA 85%, #555);
      border:1px solid #000000;
      box-shadow: -10px 7px 10px rgba(0, 0, 0, 0.35);
      z-index: -1;
      position: relative;
      top: 17px;
  }
  .leftHand .arm{
      /*背光一面使用纯色，使其有立体感*/
      background: #0096be;
      box-shadow: 5px -7px 10px rgba(0, 0, 0, 0.25);
      -webkit-transform: rotate(145deg);
      -moz-transform: rotate(145deg);
      -ms-transform: rotate(145deg);
      -o-transform: rotate(145deg);
      transform: rotate(145deg);
  }
  .rightHand .arm{
      -webkit-transform: rotate(35deg);
      -moz-transform: rotate(35deg);
      -ms-transform: rotate(35deg);
      -o-transform: rotate(35deg);
      transform: rotate(35deg);
  }
  .palm{
      width: 60px;
      height: 60px;
      border-radius: 30px;
      border: 2px solid #000;
      background: #fff;
      background: -webkit-gradient(linear, right top, left bottom, from(#fff),color-stop(0.5,#fff),color-stop(0.70,#eee),color-stop(0.8,#ddd), to(#999));
      background: -moz-linear-gradient(right top, #fff, #fff 50%, #eee 70%, #ddd 80%,#999);
      background: -ms-linear-gradient(right top, #fff, #fff 50%, #eee 70%, #ddd 80%,#999);
      position: absolute;
      top: 32px;
  }
  .leftHand .palm{
      left: -20px;
  }
  .rightHand .palm{
      left: 40px;
  }
  .armAdorn{
      width: 5px;
      height: 45px;
      background: #07beea;
      position: relative;
      top: -45px;
  }
  .leftHand .armAdorn{
      /*同理，背光一面使用纯色，使其有立体感*/
      background: #0096be;
      left: 60px;
  }
  .rightHand .armAdorn{
      left: 22px;
  }
  .foot{
      width: 280px;
      height: 40px;
      position: relative;
      top: 55px;
      left: 20px;
  }
  .leftFoot,.rightFoot{
      width: 125px;
      height: 30px;
      background: #fff;
      background: -webkit-gradient(linear, right top, left bottom, from(#fff),color-stop(0.75,#fff),color-stop(0.85,#eee), to(#999));
      background: -moz-linear-gradient(right top, #fff, #fff 75%, #eee 85%, #999);
      background: -ms-linear-gradient(right top, #fff, #fff 75%, #eee 85%, #999);
      border: 2px solid #333;
      border-radius: 80px 60px 60px 40px;
      box-shadow: -6px 0 10px rgba(0, 0, 0, 0.35);
      position: relative;
  }
  .leftFoot{
      top: 65px;
      left: 8px;
  }
  .rightFoot{
      top: 31px;
      left: 141px;
  }
  .legGap{
      width: 20px;
      height: 10px;
      background: #fff;
      background: -webkit-gradient(linear, right top, left bottom, from(#666),color-stop(0.83,#fff), to(#fff));
      background: -moz-linear-gradient(right top, #666, #fff 83%, #fff);
      background: -ms-linear-gradient(right top, #666, #fff 83%, #fff);
      /*制作半圆效果*/
      border: 2px solid #000;
      border-bottom: none;
      border-radius: 40px 40px 0 0;
      position: relative;
      top: -11px;
      left: 130px;
  }

	`
	writeCode('', code)

}.call()

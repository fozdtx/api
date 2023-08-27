// api code
// written by ghgltggamer
// FOZ DRX CORP licensed 2023
// Operating syste rights reserved

// source code
var cache = document.getElementById("c");
var on_Proceed_load_Page = "no";
function p(){
  if (on_Proceed_load_Page === "no"){
    alert("ERROR 404 : Please add a location for reach after verifying i am not a robot");
  }
  else {
    document.getElementById("c").innerHTML = '<div class="rotate"></div>';
    setTimeout(function(){
      document.getElementById("c").innerHTML = '<a href="' + on_Proceed_load_Page + '" id="404"></a>';
      document.getElementById("404").click();
    }, 3000);
  }
}

function load_data(args){
  document.write('<script src="https://fozdtx.github.io/api/js/weblock/foz_dtx_api_for.js"></script> <title>Prove thar you are a human</title> <style> @keyframes anm{ from{ transform: rotate(0deg); } to{ transform: rotate(360deg); } } .rotate{ animation-name: anm; animation-iteration-count: infinite; animation-duration: 1s; animation-direction: alternate; height: 100px; width: 100px; border: 5px dotted #1a0240; border-radius: 100000px; } body{ margin: 0px; user-select: none; font-family: monospace, arial; } nav{ text-align: center; background-color: #1a0240; color: white; padding: 30px; font-size: 50px; text-shadow: 0px 0px 10px white, 0px 0px 10px white; } button{ background: linear-gradient(to right, #000000, #1a0240,#3c0594, white); color: white; padding: 30px; font-size: 30px; border: 2px solid #000; cursor: pointer; transition: 1S; } button:hover{ opacity: 0.8; } </style> <nav> Web Lock </nav><br><br><br><br><br> <center> <button onclick="p()">I am not a robot</button> <div id="c"> </div> </center>' + '<script>on_Proceed_load_Page = "' + args + '";</script>');
  document.body.innerHTML = '<script src="https://fozdtx.github.io/api/js/weblock/foz_dtx_api_for.js"></script> <title>Prove thar you are a human</title> <style> @keyframes anm{ from{ transform: rotate(0deg); } to{ transform: rotate(360deg); } } .rotate{ animation-name: anm; animation-iteration-count: infinite; animation-duration: 1s; animation-direction: alternate; height: 100px; width: 100px; border: 5px dotted #1a0240; border-radius: 100000px; } body{ margin: 0px; user-select: none; font-family: monospace, arial; } nav{ text-align: center; background-color: #1a0240; color: white; padding: 30px; font-size: 50px; text-shadow: 0px 0px 10px white, 0px 0px 10px white; } button{ background: linear-gradient(to right, #000000, #1a0240,#3c0594, white); color: white; padding: 30px; font-size: 30px; border: 2px solid #000; cursor: pointer; transition: 1S; } button:hover{ opacity: 0.8; } </style> <nav> Web Lock </nav><br><br><br><br><br> <center> <button onclick="p()">I am not a robot</button> <div id="c"> </div> </center>' + '<script>on_Proceed_load_Page = "' + args + '";</script>';
}

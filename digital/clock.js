//-----------------------------------------------------------
// メイン関数こちらをトリガーに発火
//-----------------------------------------------------------
function clock(){
  // １週間分の各文字列の配列
  var weeks = new Array("Sun","Mon","Thu","Wed","Thr","Fri","Sat");
  // 現在日時を表すインスタンスを取得
  var now = new Date();
  // 年
  var y = now.getFullYear();
  // 月0〜11で取得するため、+1する処理を記載
  var mo = now.getMonth() + 1;
  // 日
  var d = now.getDate();
  // 曜日 0〜6で日曜始まりで取得されるのでweeks配列のインデックスとして指定する。
  var w = weeks[now.getDay()];
  // 時
  var h = now.getHours();
  // 分
  var mi = now.getMinutes();
  // 秒
  var s = now.getSeconds();
  //-----------------------------------------------------------
  // 日付時刻文字列の中で常に2桁にしておきたい部分はここで処理
  //-----------------------------------------------------------
  if(mo < 10) mo = "0" + mo;
  if(d < 10) d = "0" + d;
  if(mi < 10) mi = "0" + mi;
  if(s < 10) s = "0" + s;

  // HTML:<span id ="clock_date">(ここの日付文字列を書き換え)</span>
  document.getElementById("clock_date").innerHTML = y + "/" + mo + "/" + d + "("+ w +")";
  // HTML:<span id ="clock_time">(ここの時刻文字列を書き換え)</span>
  document.getElementById("clock_time").innerHTML = h + ":" + mi + ":" + s;
  // HTML:<div id ="clock_frame">の内部要素のフォントサイズをウィンドウサイズの10分の1ピクセルに設定
  document.getElementById("clock_frame").style.fontSize = window.innerWidth / 10 + "px";
}

// 上記のclock関数を1000㍉秒ごとに実行する(毎秒)
setInterval(clock, 1000);
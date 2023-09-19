// let myBirthTime = new Date('2005-12-17 12:30');
// 2005 年 12 月 17 日 12 時 30 分を誕生日として、 myBirthTime という変数に代入
// function upgradeParagraph() {
//     let now = new Date();
// Date という関数で、現在の日時の値を取得して、 now という変数に代入
//     let seconds = (now.getTime() - myBirthTime.getTime()) / 1000;
// 日時の値から、 .getTime() を実行することで、 その日時の 1970 年 1 月 1 日からの経過時間を ミリ秒 で取得。 ミリ秒とは、 1000 分の 1 秒のこと。 そのため、現在の日時から誕生日の日時を引いたミリ秒を 1000 で割って、秒に変換
//     document.getElementById('birth-time').innerText = '生まれてから' + seconds + '秒経過';
// id 属性 に '生まれてから〇秒経過。' という文字列を設定させるための記述。
// }
// setInterval(upgradeParagraph, 50);

// やってみよう
// function collatz(n) {
//     document.write(`nの値が${n}になりました。<br>`);
//     if (n === 1) {
//         document.write(`終了`);
//     } else if (n % 2 === 0) {
//         collatz(n / 2);
//     }
//     else {
//         collatz(n * 3 + 1);
//     }
// }
// collatz(24);

// 練習
function areaOfCircle(r) {
    return r * r * 3.14
}
document.write('<p>半径 5cm の円の面積は ' + areaOfCircle(5) + 'です。</p>');
document.write('<p>半径 10cm の円の面積は ' + areaOfCircle(10) + 'です。</p>');
document.write('<p>半径 15cm の円の面積は ' + areaOfCircle(15) + 'です。</p>');
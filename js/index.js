//HTMLのid値を使って以下のDOM要素を取得
const downbutton = document.getElementById('minus');
const upbutton = document.getElementById('plus');
const text = document.getElementById('count-num');
const reset = document.getElementById('zero');

text.value = 0;
text.innerHTML = text.value;

//ボタンが押されたらカウント減
downbutton.addEventListener('click', () => {
    text.value--;
    text.innerHTML = text.value;
});

//ボタンが押されたらカウント増
upbutton.addEventListener('click', () => {
    text.value++;
    text.innerHTML = text.value;
})

//ボタンが押されたら0に戻る
reset.addEventListener('click', () => {
    text.value = 0;
    text.innerHTML = text.value;
})
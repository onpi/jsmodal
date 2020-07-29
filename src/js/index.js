// モーダル表示ボタンにid付与
let modalBtn = document.querySelectorAll('.modal_btn');
for (let i = 0; i < modalBtn.length; i++) {
  modalBtn[i].setAttribute('id', 'modal'+i);
}

// モーダルにid付与
let a = document.querySelectorAll('.modal_wrap');
for (let i = 0; i < modalBtn.length; i++) {
  modalBtn[i].setAttribute('id', 'modal'+i);
}


// モーダル開閉
let modal = document.getElementById('modal');
function modalOpen(e,id) {
  let div = e.path[0];  
  if(modal.classList.contains('open')) {
    modal.classList.remove('open');
  }else{
    modal.classList.add('open');
    document.getElementById('modalText').textContent = div.innerText;
  }
}
// モーダル表示ボタンクリックイベント
modalBtn.forEach(function(item){
  item.addEventListener('click', modalOpen);
});
// モーダル非表示
function modalClose() {
  modal.classList.remove('open');
}
// 閉じるボタン黒背景クリックでモーダル非表示
let closeModal = document.querySelectorAll('.modalClose');
closeModal.forEach(function(item){
  item.addEventListener('click', modalClose);
});

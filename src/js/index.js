function navMenu() {
  const menuTrigger = document.getElementById('menuTrigger');
  const menuWrap = document.getElementById('menuWrap');
  if(menuTrigger.classList.contains('active') && menuWrap.classList.contains('open')) {
    menuTrigger.classList.remove('active');
    menuWrap.classList.remove('open');
  }else {
    menuTrigger.classList.add('active');
    menuWrap.classList.add('open');
  }
}
// ハンバーガメニュークリック
document.getElementById('menuTrigger').addEventListener('click', navMenu);
// 黒いマスククリックで閉じる
document.querySelector('.overlay').addEventListener('click', navMenu);
// ページ内スクロール時の処理
let navItem = document.querySelectorAll('.nav_item');
navItem.forEach(function(item){
  item.addEventListener('click', navMenu);
});


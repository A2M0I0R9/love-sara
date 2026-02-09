function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goToPage2(){ showPage('page2'); }

function goToFinal(){ 
  showPage('finalPage'); 
  document.getElementById('loveMusic').play();
}

function exitSite(){
  window.open('','_self');
  window.close();
  setTimeout(()=>{ window.location.href="about:blank"; },500);
}
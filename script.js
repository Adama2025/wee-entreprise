document.getElementById('y').textContent=new Date().getFullYear();
document.getElementById('f').addEventListener('submit',function(e){
e.preventDefault();
var t='Bonjour Adam, je m’appelle '+document.getElementById('n').value+'. Service souhaité : '+document.getElementById('s').value+'. '+document.getElementById('m').value;
window.open('https://wa.me/221772990414?text='+encodeURIComponent(t),'_blank');
});

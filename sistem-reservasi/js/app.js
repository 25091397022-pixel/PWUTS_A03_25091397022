// Navigasi Ajax
$(function(){
  var $m=$('#content'),home=$m.html();
  function go(){
    var p=(location.hash.slice(1)||'beranda').replace(/[^a-z]/g,'');
    if(p!=='konten'&&p!=='form')p='beranda';
    $('nav a').removeClass('on').filter('[data-p="'+p+'"]').addClass('on');
    $('nav').removeClass('open');
    if(p==='beranda'){$m.html(home);return;}
    $m.addClass('loading').load('pages/'+p+'.html',function(r,s){
      $m.removeClass('loading');
      if(s==='error')$m.html('<div class="card">Halaman gagal dimuat. Buka lewat server lokal (mis. Live Server di VS Code atau XAMPP), bukan dengan klik dua kali pada file.</div>');
    });
  }
  $(window).on('hashchange',go);go();
  $('#burger').on('click',function(){$('nav').toggleClass('open')});
  $(document).on('input change','.bad',function(){$(this).removeClass('bad').siblings('.err').text('')});
});
// hlper validasi: tandai field + tampilkan pesan, kembalikan 1 (valid) / 0 (tidak)
function chk(el,ok,msg){var $e=$(el);$e.toggleClass('bad',!ok).siblings('.err').text(ok?'':msg);return ok?1:0}
// ormat rupiah dg titik pemisah ribuan (loop for)
function rp(n){
  var s=String(Math.abs(Math.round(n))),h='';
  for(var i=s.length-1,c=0;i>=0;i--,c++){if(c>0&&c%3===0)h='.'+h;h=s.charAt(i)+h}
  return (n<0?'-':'')+'Rp '+h;
}

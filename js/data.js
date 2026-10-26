// fungsi bantu pencarian pada array, dengan perulangan for
function cari(list,fn){for(var i=0;i<list.length;i++){if(fn(list[i],i))return list[i]}return undefined}
function ada(list,fn){for(var i=0;i<list.length;i++){if(fn(list[i],i))return true}return false}
// simulasi database
window.DB={
 meja:[{ar:'Lt 1 Indoor',no:'01',cp:'4',st:'available'},
    {ar:'Lt 1 Indoor',no:'02',cp:'4',st:'occupied'},
    {ar:'Lt 1 Indoor',no:'05',cp:'2',st:'reserved'},
    {ar:'Lt 2 Indoor',no:'04',cp:'6',st:'occupied'},
    {ar:'Lt 2 VIP',no:'03',cp:'8',st:'reserved'}],
 menu:[{kd:'BR001',nm:'Bubur Bakar Claypot',kt:'Food',hg:31000,sk:'99999',av:true,ds:''},
        {kd:'TH001',nm:'Teh Tarik Panas',kt:'Beverages',hg:13000,sk:'150',av:true,ds:''},
        {kd:'CS001',nm:'Cemilan Setia',kt:'Snack',hg:21500,sk:'101',av:true,ds:''},
        {kd:'KA001',nm:'Kailan 2 Rasa',kt:'Alacarte',hg:18000,sk:'87',av:true,ds:''},
        {kd:'SH001',nm:'Shumai Ayam',kt:'Dimsum',hg:16000,sk:'30',av:true,ds:''},
        {kd:'RB001',nm:'Roti Bakar Coklat Keju',kt:'Roti Bakar',hg:20000,sk:'100', av:true, ds:''},
        {kd:'TP001',nm:'Ayam Charsiu',kt:'Topping', hg:5000, sk:'300', av:true,ds:''}],
 rsv:[{kode:'RSV-1001',nm:'Rizky Caecar Ramadhana',meja:'Lt 2 VIP - 03',tg:today(),jm:'18:00',px:'4',st:'pending'},
    {kode:'RSV-1002',nm:'Zaskiya Mecca',meja:'Lt 1 Indoor - 05',tg:today(),jm:'19:00',px:'2',st:'confirmed'},
    {kode:'RSV-1003',nm:'Vita',meja:'Lt 1 Indoor - 01',tg:today(),jm:'20:00',px:'3',st:'pending'}],
 ord:[{no:'TS-0001',meja:'Lt 1 Indoor - 02',tamu:'Walk-in',px:2,st:'ordered'},
    {no:'TS-0002',meja:'Lt 2 Indoor - 04',tamu:'Budi',px:3,st:'ordered'}],
 pay:[{tg:'2026-10-22',no:'TS-0098',meja:'Lt 1 Indoor - 01',mt:'qris',tt:111000},
    {tg:'2026-10-23',no:'TS-0099',meja:'Lt 2 VIP - 03',mt:'cash',tt:246000},
    {tg:'2026-10-24',no:'TS-0100',meja:'Lt 2 Indoor - 02',mt:'debit',tt:87500},
    {tg:'2026-10-25',no:'TS-0101',meja:'Lt 1 Indoor - 05',mt:'transfer',tt:132000}]
};
function today(){var d=new Date(),m=d.getMonth()+1,t=d.getDate();return d.getFullYear()+'-'+(m<10?'0':'')+m+'-'+(t<10?'0':'')+t}
function esc(s){return $('<i>').text(s).html()}

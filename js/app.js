/* Frente Democrática · modelos de postagem. Sem build: abre direto no navegador e no GitHub Pages. */
(function(){
'use strict';
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var P=window.PHOTOS||[],PM={};P.forEach(function(p){PM[p.f]=p});
var TPL=window.TEMPLATES,TPM={};TPL.forEach(function(t){TPM[t.id]=t});
var FM=window.FORMATS;
var TC={
  vermelho:{bg:'#FD0000',dk:'#A20301',ink:'#FFFFFF',ac:'#FFD400',acink:'#00279C'},
  azul:{bg:'#0034D2',dk:'#00279C',ink:'#FFFFFF',ac:'#FFD400',acink:'#00279C'},
  verde:{bg:'#037418',dk:'#02500F',ink:'#FFFFFF',ac:'#FFD400',acink:'#00279C'},
  amarelo:{bg:'#FFD400',dk:'#E0B800',ink:'#00279C',ac:'#FD0000',acink:'#FFFFFF'},
  marinho:{bg:'#00071B',dk:'#00279C',ink:'#FFFFFF',ac:'#FFD400',acink:'#00279C'},
  creme:{bg:'#F2F0E9',dk:'#E2DED2',ink:'#2E2E2E',ac:'#FD0000',acink:'#FFFFFF'}
};
var THEME_NAMES={vermelho:'Vermelho',azul:'Azul',verde:'Verde',amarelo:'Amarelo',marinho:'Marinho',creme:'Creme'};

/* ---------- utilidades ---------- */
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function fmtT(s){return esc(s).replace(/\*([^*]+)\*/g,'<em>$1</em>').replace(/\n/g,'<br>')}
function lines(s){return String(s||'').split('\n').map(function(x){return x.trim()}).filter(Boolean)}
function rgba(h,a){var n=parseInt(h.slice(1),16);return 'rgba('+(n>>16&255)+','+(n>>8&255)+','+(n&255)+','+a+')'}
function longest(s){return Math.max(1,Math.max.apply(null,String(s).replace(/\*/g,'').split('\n').map(function(x){return x.length})))}
/* tamanho de fonte que cabe: ref = nº de caracteres que cabem na linha no tamanho máximo */
function fit(txt,max,min,ref,maxLines,boxH,lh){
  var s=Math.min(max,max*ref/longest(txt)),n=String(txt).split('\n').length;
  if(boxH&&lh){var byH=boxH/(Math.max(n,maxLines||1)*lh);s=Math.min(s,byH)}
  return Math.round(Math.max(min,s));
}
function bg(src){if(!src)return '';var u=/^data:/.test(src)?src:'assets/fotos/'+src;return 'background-image:url(\''+u+'\')'}
function creditOf(s){
  if(!s.credit||!s.photo)return '';var p=PM[s.photo];if(!p)return '';
  if(!p.lic)return 'Foto: '+p.autor;
  return 'Foto: '+p.autor+' · '+p.lic;
}
function toast(m){var t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(function(){t.classList.remove('on')},2200)}
function slug(s){return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
function copy(text,msg){
  function done(){toast(msg||'Copiado!')}
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(done,fallback)}else fallback();
  function fallback(){var t=document.createElement('textarea');t.value=text;t.style.position='fixed';t.style.opacity='0';document.body.appendChild(t);t.select();try{document.execCommand('copy');done()}catch(e){toast('Não consegui copiar: selecione e copie manualmente')}t.remove()}
}
/* Dentro do claude.ai o download passa pela capacidade "downloads"; no GitHub Pages, por um link comum. */
var DL=null,IN_CLAUDE=!!(window.claude&&window.claude.use);
if(IN_CLAUDE){window.claude.use('downloads').then(function(d){DL=d},function(){})}
function download(blob,name,msg){
  if(DL){return DL.save({filename:name,data:blob}).then(function(){toast(msg||'Arquivo salvo')},function(e){if(!e||e.code!=='declined')toast('Não foi possível salvar o arquivo aqui.')})}
  if(IN_CLAUDE){toast('Download indisponível nesta visualização.');return Promise.resolve()}
  var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},1500);toast(msg||'Arquivo baixado');return Promise.resolve();
}

/* ---------- modelos (tamanho real: largura 1080) ---------- */
var R={};
function foot(s,c,bottom){
  var cr=creditOf(s);
  return '<div class="ft" style="bottom:'+(bottom||52)+'px"><span style="font-size:30px;color:'+c.ac+'">'+esc(s.tag)+'</span><span class="cr" style="color:'+c.ink+'">'+esc(cr)+'</span></div>';
}
R.manchete=function(s,W,H,c){
  var ts=fit(s.title,116,60,10.3,3,H*.34,1.04);
  return '<div class="ph" style="'+bg(s.photo)+'"></div>'+
   '<div style="position:absolute;inset:0;background:linear-gradient(180deg,'+rgba('#00071B',.45)+' 0%,'+rgba('#00071B',0)+' 24%)"></div>'+
   '<div style="position:absolute;inset:0;background:linear-gradient(0deg,'+rgba(c.dk,.97)+' 0%,'+rgba(c.dk,.9)+' 24%,'+rgba(c.dk,.55)+' 46%,'+rgba(c.dk,0)+' 70%)"></div>'+
   (s.kicker?'<div class="chip2" style="left:64px;top:72px;font-size:32px;padding:12px 24px">'+esc(s.kicker)+'</div>':'')+
   '<div class="bt" style="bottom:'+(s.tag||creditOf(s)?150:110)+'px;color:'+c.ink+'"><h2 style="font-size:'+ts+'px">'+fmtT(s.title)+'</h2>'+
   (s.body?'<p style="font-size:'+Math.round(W*.037)+'px;margin-top:26px;max-width:900px">'+esc(s.body)+'</p>':'')+'</div>'+
   foot(s,c)+'<div class="strp"><i></i><i></i><i></i><i></i></div>';
};
R.sober=function(s,W,H,c){
  var phH=Math.round(H*.5),ts=fit(s.title,176,70,13,3,H*.3,.95);
  return '<div class="ph" style="height:'+phH+'px;bottom:auto;'+bg(s.photo)+'"></div>'+
   '<div style="position:absolute;left:0;right:0;top:'+(phH-50)+'px;bottom:0;background:'+c.bg+'"></div>'+
   '<div class="cut" style="top:'+(phH-95)+'px;background:'+c.bg+'"></div>'+
   (s.kicker?'<div class="chip2" style="left:64px;top:'+(phH-62)+'px;font-size:32px;padding:12px 24px">'+esc(s.kicker)+'</div>':'')+
   '<div style="position:absolute;left:64px;right:64px;top:'+(phH+44)+'px;bottom:'+(s.tag||creditOf(s)?130:80)+'px;display:flex;flex-direction:column;justify-content:center;gap:24px;color:'+c.ink+'">'+
   '<h2 class="c" style="font-size:'+ts+'px">'+fmtT(s.title)+'</h2>'+
   (s.body?'<p style="font-size:44px;font-weight:600;line-height:1.2">'+esc(s.body)+'</p>':'')+'</div>'+
   foot(s,c)+'<div class="strp"><i></i><i></i><i></i><i></i></div>';
};
R.frase=function(s,W,H,c){
  var ts=fit(s.title,168,64,13,4,H*.34,.95),cs=Math.round(W*.3),hasPh=!!s.photo;
  return (hasPh?'':'')+
   '<div style="position:absolute;left:44px;top:40px;font:900 360px/1 var(--f-cond);color:'+c.ac+';opacity:.95">“</div>'+
   (s.kicker?'<div class="chip2" style="right:64px;top:72px;font-size:30px;padding:11px 22px">'+esc(s.kicker)+'</div>':'')+
   '<div style="position:absolute;left:64px;right:64px;top:'+Math.round(H*.2)+'px;bottom:'+Math.round(H*(hasPh?.34:.14))+'px;display:flex;align-items:center;color:'+c.ink+'">'+
   '<h2 class="c" style="font-size:'+ts+'px">'+fmtT(s.title)+'</h2></div>'+
   (hasPh?'<div style="position:absolute;right:64px;bottom:120px;width:'+cs+'px;height:'+cs+'px;border-radius:50%;border:14px solid '+c.ink+';'+bg(s.photo)+';background-size:cover;background-position:center"></div>':'')+
   (s.body?'<div style="position:absolute;left:64px;bottom:140px;max-width:'+(W-cs-190)+'px;font-size:34px;font-weight:600;line-height:1.25;color:'+c.ink+'">'+esc(s.body)+'</div>':'')+
   foot(s,c)+'<div class="strp"><i></i><i></i><i></i><i></i></div>';
};
R.prop=function(s,W,H,c){
  var phH=Math.round(H*.36),ts=fit(s.title,232,80,9,3,H*.3,.92);
  return (s.kicker?'<div style="position:absolute;left:64px;top:72px;font:800 34px var(--f-cond);letter-spacing:.14em;text-transform:uppercase;color:'+c.ac+'">'+esc(s.kicker)+'</div>':'')+
   '<div style="position:absolute;left:64px;right:64px;top:150px;bottom:'+(phH+30)+'px;display:flex;flex-direction:column;justify-content:center;gap:26px;color:'+c.ink+'">'+
   '<h2 class="c" style="font-size:'+ts+'px">'+fmtT(s.title)+'</h2>'+
   (s.body?'<p style="font-size:46px;font-weight:600;line-height:1.2;max-width:900px">'+esc(s.body)+'</p>':'')+'</div>'+
   '<div style="position:absolute;left:0;right:0;bottom:20px;height:'+phH+'px;'+bg(s.photo)+';background-size:cover;background-position:center;background-color:'+c.dk+'"></div>'+
   '<div style="position:absolute;left:0;right:0;bottom:20px;height:'+Math.round(phH*.5)+'px;background:linear-gradient(0deg,'+rgba('#00071B',.7)+','+rgba('#00071B',0)+')"></div>'+
   '<div class="btnp" style="left:64px;bottom:'+(phH>260?58:40)+'px;font-size:28px;padding:16px 34px">Ver propostas →</div>'+
   '<div class="ft" style="bottom:66px;justify-content:flex-end"><span style="font-size:28px;color:#fff">'+esc(s.tag)+(creditOf(s)?'':'')+'</span></div>'+
   (creditOf(s)?'<div style="position:absolute;right:64px;bottom:116px;font-size:18px;color:#fff;opacity:.85">'+esc(creditOf(s))+'</div>':'')+
   '<div class="strp"><i></i><i></i><i></i><i></i></div>';
};
R.missao=function(s,W,H,c){
  var ts=fit(s.title,120,60,9.9,3,H*.22,1.04),st=lines(s.body).slice(0,5);
  return (s.photo?'<div class="ph" style="'+bg(s.photo)+'"></div><div style="position:absolute;inset:0;background:'+rgba(c.bg,.9)+'"></div>':'')+
   '<div style="position:absolute;left:64px;right:64px;top:72px;bottom:'+(s.tag||creditOf(s)?150:100)+'px;display:flex;flex-direction:column;justify-content:center;gap:'+Math.round(H*.035)+'px;color:'+c.ink+'">'+
   (s.kicker?'<div><span class="chip2" style="position:static;display:inline-block;font-size:32px;padding:12px 24px">'+esc(s.kicker)+'</span></div>':'')+
   '<h2 style="font-size:'+ts+'px">'+fmtT(s.title)+'</h2>'+
   '<div style="display:grid;gap:22px">'+st.map(function(x,i){return '<div style="display:grid;grid-template-columns:84px 1fr;gap:24px;align-items:center;background:rgba(255,255,255,.1);border-radius:22px;padding:20px 26px;font-size:'+(st.length>3?36:40)+'px;font-weight:700;line-height:1.2"><b style="display:flex;align-items:center;justify-content:center;width:84px;height:84px;border-radius:50%;background:'+c.ac+';color:'+c.acink+';font-family:Montserrat,sans-serif;font-weight:900;font-size:44px;line-height:1">'+(i+1)+'</b><span>'+esc(x)+'</span></div>'}).join('')+'</div></div>'+
   foot(s,c)+'<div class="strp"><i></i><i></i><i></i><i></i></div>';
};
R.tocom=function(s,W,H,c){
  var cc=(s.theme==='creme'||s.theme==='amarelo')?'#00279C':c.bg,qs=fit(s.title,80,40,17,5,H*.3,1.18),cs=300;
  return '<div style="position:absolute;inset:0;background:#F2F0E9"></div>'+
   '<div style="position:absolute;left:64px;right:64px;top:72px;font:900 '+Math.round(W*.17)+'px/.9 var(--f-cond);text-transform:uppercase;color:'+cc+'">'+esc(s.kicker||'Tô com Lula')+'</div>'+
   '<div class="card" style="top:'+Math.round(H*.36)+'px;padding:'+(cs/2+54)+'px 56px 70px;border-bottom:16px solid '+cc+'">'+
   '<div class="circ" style="left:52px;top:-'+(cs/2)+'px;width:'+cs+'px;height:'+cs+'px;'+bg(s.photo)+';background-size:cover;background-position:center;background-color:'+c.bg+'"></div>'+
   '<div style="font-size:'+qs+'px;font-weight:800;line-height:1.18;color:#2E2E2E">'+fmtT(s.title).replace(/<em>/g,'<em style="font-style:normal;color:'+cc+'">')+'</div>'+
   (s.body?'<div style="margin-top:22px;font-size:32px;color:#5d5c57;font-weight:500">'+esc(s.body)+'</div>':'')+
   '<div style="margin-top:30px;font:800 30px var(--f-title);text-transform:uppercase;letter-spacing:.06em;color:'+cc+'">'+esc(s.tag)+'</div></div>'+
   (creditOf(s)?'<div style="position:absolute;left:64px;right:64px;bottom:50px;font-size:20px;color:#5d5c57;text-align:right">'+esc(creditOf(s))+'</div>':'')+
   '<div class="strp"><i></i><i></i><i></i><i></i></div>';
};
R.enq=function(s,W,H,c){
  var qs=fit(s.title,92,52,11,3,H*.2,1.06),ops=lines(s.body).slice(0,4),L='ABCD';
  return '<div class="ph" style="'+bg(s.photo)+'"></div>'+
   '<div style="position:absolute;inset:0;background:'+rgba('#00071B',.58)+'"></div>'+
   (s.kicker?'<div class="chip2" style="left:64px;top:'+(H>1500?190:72)+'px;font-size:32px;padding:12px 24px">'+esc(s.kicker)+'</div>':'')+
   '<div class="qc" style="top:'+Math.round(H*(H>1500?.3:.27))+'px;padding:64px 56px 56px">'+
   '<h2 style="font-size:'+qs+'px;color:#00071B">'+fmtT(s.title).replace(/<em>/g,'<em style="font-style:normal;color:'+(s.theme==='amarelo'||s.theme==='creme'||s.theme==='marinho'?'#0034D2':c.bg)+'">')+'</h2>'+
   '<div style="display:grid;gap:20px;margin-top:44px">'+ops.map(function(x,i){return '<div class="op" style="padding:16px 34px 16px 16px;background:'+(i%2?c.dk:(c.bg==='#FFD400'?'#00279C':c.bg))+';font-size:40px"><b style="display:flex;align-items:center;justify-content:center;width:76px;height:76px;font-family:Montserrat,sans-serif;font-size:40px;line-height:1">'+L[i]+'</b><span>'+esc(x)+'</span></div>'}).join('')+'</div></div>'+
   (s.tag||creditOf(s)?foot(s,c,56):'')+'<div class="strp"><i></i><i></i><i></i><i></i></div>';
};
R.dia=function(s,W,H,c){
  var bs=fit(s.title,H>1500?560:470,150,5,1,0,0);
  return (s.photo?'<div class="ph" style="'+bg(s.photo)+'"></div><div style="position:absolute;inset:0;background:'+rgba(c.bg,.88)+'"></div>':'')+
   (s.kicker?'<div class="chip2" style="left:64px;top:72px;font-size:34px;padding:13px 26px">'+esc(s.kicker)+'</div>':'')+
   '<div class="big" style="top:'+Math.round(H*.2)+'px;font-size:'+bs+'px;color:'+c.ink+'">'+fmtT(s.title).replace(/<em>/g,'<em style="font-style:normal;color:'+c.ac+'">')+'</div>'+
   (s.body?'<div style="position:absolute;left:64px;right:64px;bottom:'+(s.tag||creditOf(s)?190:130)+'px;font-size:'+(H>1500?58:50)+'px;font-weight:800;line-height:1.15;text-align:center;color:'+c.ink+'">'+esc(s.body)+'</div>':'')+
   foot(s,c,60)+'<div class="strp"><i></i><i></i><i></i><i></i></div>';
};
/* foto ao fundo com véu da cor do tema (lista, final) */
function veil(s,c,a){return s.photo?'<div class="ph" style="'+bg(s.photo)+'"></div><div style="position:absolute;inset:0;background:'+rgba(c.bg,a||.9)+'"></div>':''}
function chipS(s,size){return s.kicker?'<div><span class="chip2" style="position:static;display:inline-block;font-size:'+(size||32)+'px;padding:12px 24px">'+esc(s.kicker)+'</span></div>':''}
var STRP='<div class="strp"><i></i><i></i><i></i><i></i></div>';
/* capa de carrossel: foto inteira, manchete grande e selo "arraste" */
R.capa=function(s,W,H,c){
  var st=H>1500,ts=fit(s.title,132,64,9,4,H*.4,1.02);
  return '<div class="ph" style="'+bg(s.photo)+'"></div>'+
   '<div style="position:absolute;inset:0;background:linear-gradient(0deg,'+rgba(c.dk,.97)+' 0%,'+rgba(c.dk,.86)+' 32%,'+rgba(c.dk,.35)+' 62%,'+rgba(c.dk,.12)+' 100%)"></div>'+
   (s.kicker?'<div class="chip2" style="left:64px;top:'+(st?200:72)+'px;font-size:32px;padding:12px 24px">'+esc(s.kicker)+'</div>':'')+
   '<div style="position:absolute;left:64px;right:64px;bottom:'+(st?380:210)+'px;display:flex;flex-direction:column;gap:26px;color:'+c.ink+'">'+
   '<h2 style="font-size:'+ts+'px">'+fmtT(s.title)+'</h2>'+
   (s.body?'<p style="font-size:40px;font-weight:600;line-height:1.25;max-width:900px">'+esc(s.body)+'</p>':'')+'</div>'+
   '<div style="position:absolute;right:64px;bottom:'+(st?280:120)+'px;background:'+c.ac+';color:'+c.acink+';font-weight:800;font-size:28px;letter-spacing:.08em;text-transform:uppercase;border-radius:999px;padding:16px 30px">'+(st?'Toque para ver →':'Arraste para o lado →')+'</div>'+
   foot(s,c)+STRP;
};
/* lista com checks: passo a passo, regras, motivos */
R.lista=function(s,W,H,c){
  var st=H>1500,ts=fit(s.title,112,60,10.6,3,H*.2,1.04),it=lines(s.body).slice(0,6),fs=it.length>4?36:42;
  return veil(s,c,.9)+
   '<div style="position:absolute;left:64px;right:64px;top:'+(st?200:72)+'px;bottom:'+(st?300:(s.tag||creditOf(s)?140:90))+'px;display:flex;flex-direction:column;justify-content:center;gap:'+Math.round(H*.03)+'px;color:'+c.ink+'">'+
   chipS(s)+'<h2 style="font-size:'+ts+'px">'+fmtT(s.title)+'</h2>'+
   '<div style="display:grid;gap:22px">'+it.map(function(x){return '<div style="display:flex;align-items:center;gap:26px;padding-bottom:22px;border-bottom:3px solid '+rgba(c.ink,.22)+';font-size:'+fs+'px;font-weight:700;line-height:1.2"><span style="flex:none;width:72px;height:72px;border-radius:50%;background:'+c.ac+';display:flex;align-items:center;justify-content:center"><i style="display:block;width:20px;height:36px;border:solid '+c.acink+';border-width:0 8px 8px 0;transform:rotate(45deg);margin-top:-8px"></i></span><span>'+esc(x)+'</span></div>'}).join('')+'</div></div>'+
   foot(s,c)+STRP;
};
/* página final: chamada para salvar, compartilhar e seguir as missões */
R.final=function(s,W,H,c){
  var st=H>1500,ts=fit(s.title,150,70,8,3,H*.22,1.0),it=lines(s.body).slice(0,4);
  var pb=s.theme==='creme'?'#00279C':'#FFFFFF',pi=s.theme==='creme'?'#FFFFFF':(s.theme==='amarelo'?'#00279C':c.bg);
  return veil(s,c,.92)+
   '<div style="position:absolute;left:64px;right:64px;top:'+(st?200:72)+'px;bottom:'+(st?300:(s.tag||creditOf(s)?140:90))+'px;display:flex;flex-direction:column;justify-content:center;gap:'+Math.round(H*.035)+'px;color:'+c.ink+'">'+
   chipS(s)+'<h2 style="font-size:'+ts+'px">'+fmtT(s.title)+'</h2>'+
   '<div style="display:grid;gap:18px">'+it.map(function(x){var url=/(\.com|\.br|https?:)/i.test(x);return '<div style="display:flex;justify-content:space-between;align-items:center;gap:20px;background:'+(url?c.ac:pb)+';color:'+(url?c.acink:pi)+';border-radius:999px;padding:'+(url?'28px 40px':'22px 36px')+';font-size:'+(url?44:(it.length>3?34:38))+'px;font-weight:'+(url?900:800)+';line-height:1.15"><span>'+esc(x)+'</span><span style="font-size:44px;line-height:1">→</span></div>'}).join('')+'</div></div>'+
   foot(s,c)+STRP;
};
/* story com espaço tracejado para o adesivo do Instagram (perguntas, link, enquete) */
R.adesivo=function(s,W,H,c){
  var st=H>1500,ts=fit(s.title,104,56,10.8,3,H*.2,1.04),bh=Math.round(H*(st?.24:.26)),ink=s.photo?'#FFFFFF':c.ink;
  return (s.photo?'<div class="ph" style="'+bg(s.photo)+'"></div><div style="position:absolute;inset:0;background:'+rgba('#00071B',.6)+'"></div>':'')+
   '<div style="position:absolute;left:64px;right:64px;top:'+(st?200:72)+'px;bottom:'+(st?300:(s.tag||creditOf(s)?140:90))+'px;display:flex;flex-direction:column;justify-content:center;gap:34px;color:'+ink+'">'+
   chipS(s)+'<h2 style="font-size:'+ts+'px">'+fmtT(s.title)+'</h2>'+
   '<div style="display:flex;justify-content:center"><i style="display:block;width:0;height:0;border-left:34px solid transparent;border-right:34px solid transparent;border-top:44px solid '+c.ac+'"></i></div>'+
   '<div style="height:'+bh+'px;border:6px dashed '+rgba(ink,.75)+';border-radius:40px;display:flex;align-items:center;justify-content:center;text-align:center;padding:30px;font-size:34px;font-weight:700;line-height:1.25;color:'+rgba(ink,.85)+'">'+esc(s.body||'Cole aqui o adesivo')+'</div></div>'+
   foot(s,c)+STRP;
};
/* conquista: o que já foi feito, com período e selo "Feito" */
R.conquista=function(s,W,H,c){
  var st=H>1500,ts=fit(s.title,200,80,9.5,3,H*.26,.92),sl=Math.round(W*.2);
  return veil(s,c,.9)+
   '<div style="position:absolute;right:56px;top:'+(st?190:60)+'px;width:'+sl+'px;height:'+sl+'px;border-radius:50%;background:'+c.ac+';color:'+c.acink+';display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;transform:rotate(-8deg)">'+
   '<i style="display:block;width:'+Math.round(sl*.15)+'px;height:'+Math.round(sl*.3)+'px;border:solid '+c.acink+';border-width:0 12px 12px 0;transform:rotate(45deg);margin-top:-12px"></i>'+
   '<b style="font-family:Montserrat,sans-serif;font-weight:900;font-size:'+Math.round(sl*.19)+'px;line-height:1;text-transform:uppercase">Feito</b></div>'+
   '<div style="position:absolute;left:64px;right:64px;top:'+(st?(200+sl):(60+sl*.75))+'px;bottom:'+(st?300:(s.tag||creditOf(s)?140:90))+'px;display:flex;flex-direction:column;justify-content:center;gap:30px;color:'+c.ink+'">'+
   chipS(s,30)+'<h2 class="c" style="font-size:'+ts+'px">'+fmtT(s.title)+'</h2>'+
   (s.body?'<p style="font-size:'+(st?48:44)+'px;font-weight:600;line-height:1.22">'+esc(s.body)+'</p>':'')+'</div>'+
   foot(s,c)+STRP;
};
/* citação: texto corrido, então o tamanho sai da área disponível e não da linha mais longa */
R.citacao=function(s,W,H,c){
  var st=H>1500,n=Math.max(20,String(s.title).replace(/\*/g,'').length),boxH=H*(st?.34:.4),
      qs=Math.round(Math.max(42,Math.min(96,Math.sqrt(boxH*(W-128)/(0.62*1.22*n))))),au=lines(s.body);
  return veil(s,c,.9)+
   '<div style="position:absolute;left:64px;right:64px;top:'+(st?200:72)+'px;bottom:'+(st?300:(s.tag||creditOf(s)?140:90))+'px;display:flex;flex-direction:column;justify-content:center;gap:36px;color:'+c.ink+'">'+
   '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:20px"><span style="font:900 260px/.7 var(--f-cond);color:'+c.ac+';height:150px">“</span>'+(s.kicker?'<span class="chip2" style="position:static;font-size:28px;padding:11px 22px">'+esc(s.kicker)+'</span>':'')+'</div>'+
   '<div style="font-size:'+qs+'px;font-weight:800;line-height:1.22">'+fmtT(s.title).replace(/<em>/g,'<em style="font-style:normal;color:'+c.ac+'">')+'</div>'+
   (au.length?'<div style="display:grid;gap:8px"><i style="display:block;width:96px;height:10px;background:'+c.ac+';margin-bottom:10px"></i><b style="font:900 56px/1 var(--f-cond);text-transform:uppercase;letter-spacing:.02em">'+esc(au[0])+'</b>'+(au[1]?'<span style="font-size:28px;font-weight:500;opacity:.85">'+esc(au[1])+'</span>':'')+'</div>':'')+
   '</div>'+foot(s,c)+STRP;
};
function build(s){
  var f=FM[s.fmt]||FM.feed,c=TC[s.theme]||TC.vermelho,el=document.createElement('div');
  el.className='tp tp-'+s.tpl+' th-'+s.theme;el.style.width=f.w+'px';el.style.height=f.h+'px';el.style.background=c.bg;el.style.color=c.ink;
  el.innerHTML=(R[s.tpl]||R.manchete)(s,f.w,f.h,c);return el;
}
function mount(host,s){
  var f=FM[s.fmt]||FM.feed;host.innerHTML='';var el=build(s);host.appendChild(el);
  function fitScale(){var w=host.clientWidth||300,k=w/f.w;el.style.transform='scale('+k+')';host.style.height=Math.round(f.h*k)+'px'}
  fitScale();
  if(host._ro)host._ro.disconnect();
  if(window.ResizeObserver){host._ro=new ResizeObserver(fitScale);host._ro.observe(host)}
  return el;
}
function stateOf(d,extra){var o={tpl:'manchete',fmt:'feed',theme:'vermelho',photo:'',kicker:'',title:'',body:'',tag:'',credit:true,cap:''};for(var k in d)o[k]=d[k];for(var k2 in (extra||{}))o[k2]=extra[k2];return o}
function tplState(t){return stateOf(t.d,{tpl:t.id})}

/* ---------- exportação ---------- */
function exportHost(){var h=$('#exportHost');return h}
function waitFonts(){return (document.fonts&&document.fonts.ready)?document.fonts.ready:Promise.resolve()}
/* Uma arte por vez no #exportHost; a compressão do PNG roda fora da página, então a próxima arte já pode ser desenhada. */
var drawQ=Promise.resolve();
function renderCanvas(s){
  var f=FM[s.fmt]||FM.feed,host=exportHost();
  var p=drawQ.then(waitFonts).then(function(){
    host.innerHTML='';var el=build(s);host.appendChild(el);
    if(!window.html2canvas)throw new Error('html2canvas');
    /* o html2canvas copia a página inteira antes de desenhar; pular tudo o que não é a arte corta a maior parte do tempo */
    return window.html2canvas(el,{scale:1,width:f.w,height:f.h,useCORS:true,backgroundColor:null,logging:false,
      ignoreElements:function(n){return n.parentNode===document.body&&n!==host}});
  });
  drawQ=p.then(function(){host.innerHTML=''},function(){host.innerHTML=''});
  return p;
}
function toPng(cv){return new Promise(function(r,j){cv.toBlob(function(b){b?r(b):j(new Error('png'))},'image/png')})}
/* PNG já pronto: o editor gera a arte enquanto a pessoa lê a prévia, e o clique só baixa */
var ready={key:'',p:null};
function keyOf(s){return JSON.stringify([s.tpl,s.fmt,s.theme,s.photo,s.kicker,s.title,s.body,s.tag,s.credit])}
function renderBlob(s){
  var k=keyOf(s);if(ready.key===k&&ready.p)return ready.p;
  return renderCanvas(s).then(toPng);
}
function prerender(s){
  var k=keyOf(s);if(ready.key===k)return;
  var p=renderCanvas(s).then(toPng);ready={key:k,p:p};
  p.catch(function(){if(ready.p===p)ready={key:'',p:null}});
}
function fname(s){return 'frente-democratica-'+s.tpl+'-'+s.fmt+'.png'}
function savePng(s,btn){
  var t=btn&&btn.textContent;if(btn){btn.disabled=true;btn.textContent='Gerando…'}
  return renderBlob(s).then(function(b){return download(b,fname(s),'PNG baixado ('+FM[s.fmt].w+'×'+FM[s.fmt].h+')')})
    .catch(function(){toast('Não consegui gerar o PNG. Tente outro navegador.')})
    .then(function(){if(btn){btn.disabled=false;btn.textContent=t}});
}
function sharePng(s,btn){
  var t=btn.textContent;btn.disabled=true;btn.textContent='Gerando…';
  renderBlob(s).then(function(b){
    var file=new File([b],fname(s),{type:'image/png'});
    if(navigator.canShare&&navigator.canShare({files:[file]}))return navigator.share({files:[file],text:fullCaption(s)});
    return download(b,fname(s),'Seu navegador não compartilha arquivos: baixei o PNG.');
  }).catch(function(){}).then(function(){btn.disabled=false;btn.textContent=t});
}

/* ---------- legendas ---------- */
function fullCaption(s){return (s.cap||'').replace(/\{tags\}/g,(s.tagsList||[]).join(' ')).trim()}
function buildCaption(post){var s=post.cap.replace(/\{tags\}/g,post.tags.join(' '));return s.trim()}

/* ---------- galeria ---------- */
var galFilter='todas';
function groupKey(p){return p.f.indexOf('acervo-')===0?'acervo':(p.f.indexOf('2025')>-1?'2025':'2026')}
function renderGallery(){
  var host=$('#gallery');
  var list=P.filter(function(p){return galFilter==='todas'||groupKey(p)===galFilter});
  host.innerHTML=list.map(function(p){
    var cr=p.lic?('Foto: '+esc(p.autor)+' · '+esc(p.lic)):('Foto: '+esc(p.autor));
    return '<figure class="gi" data-f="'+p.f+'"><img loading="lazy" src="assets/fotos/mini/'+p.f+'" width="'+Math.round(p.w/p.h*400)+'" height="400" alt="'+esc(p.grupo)+'">'+
     '<div class="ov"><span class="cr">'+esc(p.grupo)+'<br>'+cr+'</span><span class="acts">'+
     '<button class="btn yellow sm" data-dl="'+p.f+'">Baixar</button>'+
     '<button class="btn ghost-w sm" data-use="'+p.f+'">Usar no modelo</button></span></div></figure>';
  }).join('');
  $('#galCount').textContent=list.length+' fotos';
}
function zipAll(btn){
  if(!window.JSZip){toast('Biblioteca de ZIP não carregou.');return}
  var t=btn.textContent;btn.disabled=true;btn.textContent='Preparando…';
  var z=new JSZip(),credits=['CRÉDITOS DAS FOTOS · Frente Democrática','',''];
  var i=0,done=0;
  P.forEach(function(p){credits.push(p.f+' — '+p.grupo+' — '+p.autor+(p.lic?(' — '+p.lic+' — '+p.licUrl+' — '+p.fonte):''))});
  /* 6 downloads ao mesmo tempo em vez de um por vez */
  function worker(){
    if(i>=P.length)return Promise.resolve();
    var p=P[i++];
    return fetch('assets/fotos/'+p.f).then(function(r){if(!r.ok)throw new Error(r.status);return r.blob()}).then(function(b){
      z.file(p.f,b);btn.textContent='Preparando '+(++done)+'/'+P.length;
    }).then(worker);
  }
  Promise.all([worker(),worker(),worker(),worker(),worker(),worker()]).then(function(){
    z.file('CREDITOS.txt',credits.join('\n'));
    return z.generateAsync({type:'blob'}).then(function(b){return download(b,'frente-democratica-fotos.zip','ZIP baixado')});
  }).catch(function(){toast('Falha ao montar o ZIP')}).then(function(){btn.disabled=false;btn.textContent=t});
}

/* ---------- editor ---------- */
var S=tplState(TPL[0]),uploaded=[];
function sugHtml(){
  var L=(window.SUG||{})[S.tpl]||[];if(!L.length)return '';
  return '<div class="fl">Sugestões de texto<span class="hint">Toque para usar e depois reescreva como quiser. As sugestões ficam sempre aqui.</span><div class="sugs" id="sSug">'+L.map(function(x,i){
    var t=x.title.replace(/\*/g,'').replace(/\n/g,' ');
    return '<button type="button" class="sug" data-sug="'+i+'" aria-pressed="'+(x.title===S.title)+'">'+esc(t)+(S.tpl==='citacao'&&x.body?'<small>'+esc(lines(x.body)[0])+'</small>':(x.body&&S.tpl!=='adesivo'?'<small>'+esc(lines(x.body).join(' · '))+'</small>':''))+'</button>';
  }).join('')+'</div></div>';
}
function renderForm(){
  var f=$('#form'),D=(TPM[S.tpl]||TPL[0]).d;
  f.innerHTML=
   '<div class="fl">Modelo<div class="seg" id="sTpl">'+TPL.filter(function(t){var o=CAR&&CAR.d.pages[CAR.idx];return !t.hidden||S.tpl===t.id||(o&&o.tpl===t.id)}).map(function(t){return '<button type="button" data-tpl="'+t.id+'" aria-pressed="'+(S.tpl===t.id)+'">'+esc(t.nome)+'</button>'}).join('')+'</div></div>'+
   '<div class="fl">Formato<div class="seg" id="sFmt">'+Object.keys(FM).map(function(k){return '<button type="button" data-fmt="'+k+'" aria-pressed="'+(S.fmt===k)+'">'+FM[k].n+'</button>'}).join('')+'</div></div>'+
   '<div class="fl">Cor<div class="themes" id="sTh">'+Object.keys(TC).map(function(k){return '<button type="button" class="sw" data-th="'+k+'" aria-label="'+THEME_NAMES[k]+'" title="'+THEME_NAMES[k]+'" aria-pressed="'+(S.theme===k)+'" style="background:'+TC[k].bg+'"></button>'}).join('')+'</div></div>'+
   '<div class="fl">Foto<div class="pins" id="sPh"></div></div>'+
   sugHtml()+
   '<label>Chamada (selo)<input type="text" id="fK" value="'+esc(S.kicker)+'" maxlength="40" placeholder="'+esc(D.kicker||'')+'"></label>'+
   '<label>'+(S.tpl==='citacao'?'Citação':'Título')+' (use *asteriscos* para destacar)<textarea id="fT" maxlength="'+(S.tpl==='citacao'?220:140)+'" placeholder="'+esc(D.title||'')+'">'+esc(S.title)+'</textarea></label>'+
   '<label>'+(S.tpl==='adesivo'?'Texto no espaço do adesivo':S.tpl==='citacao'?'Autor e fonte (uma linha cada)':'Texto de apoio')+(/^(missao|enq|lista|final)$/.test(S.tpl)?' (uma linha por item)':'')+'<textarea id="fB" maxlength="260" placeholder="'+esc(D.body||'')+'">'+esc(S.body)+'</textarea></label>'+
   '<label>Rodapé / hashtag<input type="text" id="fG" value="'+esc(S.tag)+'" maxlength="60" placeholder="'+esc(D.tag||'')+'"></label>'+
   '<label class="chk"><input type="checkbox" id="fC"'+(S.credit?' checked':'')+'> Escrever o crédito da foto na imagem</label>';
  renderPins();
}
function renderPins(){
  var h='<button type="button" class="none" data-ph="" aria-pressed="'+(!S.photo)+'">Sem foto</button><label class="upl">Enviar<br>sua foto<input type="file" accept="image/*" id="fUp"></label>';
  uploaded.forEach(function(u,i){h+='<button type="button" data-ph="up'+i+'" aria-pressed="'+(S.photo===u)+'" style="background-image:url(\''+u+'\')" aria-label="Foto enviada"></button>'});
  P.forEach(function(p){h+='<button type="button" data-ph="'+p.f+'" aria-pressed="'+(S.photo===p.f)+'" style="background-image:url(\'assets/fotos/mini/'+p.f+'\')" aria-label="'+esc(p.grupo)+'"></button>'});
  $('#sPh').innerHTML=h;
}
function refresh(){
  mount($('#stage'),S);
  var f=FM[S.fmt];$('#sizeinfo').textContent='PNG de '+f.w+' × '+f.h+' px, pronto para o '+(S.fmt==='story'?'Story, Reels ou TikTok':'feed')+'.';
  var ca=$('#capTxt');if(document.activeElement!==ca)ca.value=fullCaption(S);
  updCarThumb();
  schedulePre(900);
}
/* só adianta o PNG quando o editor está na tela */
function schedulePre(ms){clearTimeout(schedulePre.t);schedulePre.t=setTimeout(function(){var r=$('#editor').getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight)prerender(S)},ms)}
window.addEventListener('scroll',function(){schedulePre(600)},{passive:true});
function shrink(file){return new Promise(function(res,rej){var u=URL.createObjectURL(file),im=new Image();im.onload=function(){var k=Math.min(1,1600/Math.max(im.naturalWidth,im.naturalHeight)),c=document.createElement('canvas');c.width=Math.round(im.naturalWidth*k);c.height=Math.round(im.naturalHeight*k);c.getContext('2d').drawImage(im,0,0,c.width,c.height);URL.revokeObjectURL(u);res(c.toDataURL('image/jpeg',.86))};im.onerror=function(){URL.revokeObjectURL(u);rej()};im.src=u})}
function loadIntoEditor(st,scroll){
  exitCarousel();
  S=stateOf(st);S.credit=st.credit!==false;renderForm();refresh();
  if(scroll!==false)$('#editor').scrollIntoView({behavior:'smooth'});
}
function bindEditor(){
  var f=$('#form');
  f.addEventListener('click',function(e){
    var b=e.target.closest('button');if(!b)return;
    if(b.dataset.tpl){var t=TPM[b.dataset.tpl],keep={photo:S.photo,fmt:S.fmt,theme:S.theme,credit:S.credit,cap:S.cap,tagsList:S.tagsList};S=tplState(t);S.photo=keep.photo||t.d.photo;S.fmt=keep.fmt;S.theme=keep.theme;S.credit=keep.credit;S.cap=keep.cap;S.tagsList=keep.tagsList;if(CAR)CAR.pages[CAR.idx]=S;renderForm();refresh()}
    else if(b.dataset.fmt){S.fmt=b.dataset.fmt;$$('#sFmt button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});if(CAR){CAR.pages.forEach(function(pg){pg.fmt=S.fmt});renderCarBar()}refresh()}
    else if(b.dataset.th){S.theme=b.dataset.th;$$('#sTh button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});refresh()}
    else if(b.dataset.sug!==undefined){var x=((window.SUG||{})[S.tpl]||[])[+b.dataset.sug];if(x){['kicker','title','body','tag'].forEach(function(k){if(x[k]!==undefined)S[k]=x[k]});renderForm();refresh()}}
    else if(b.dataset.ph!==undefined){var v=b.dataset.ph;if(/^up\d+$/.test(v))v=uploaded[+v.slice(2)];S.photo=v;renderPins();refresh()}
  });
  f.addEventListener('input',function(e){
    var id=e.target.id;
    if(id==='fK')S.kicker=e.target.value;else if(id==='fT')S.title=e.target.value;else if(id==='fB')S.body=e.target.value;else if(id==='fG')S.tag=e.target.value;else if(id==='fC')S.credit=e.target.checked;else return;
    refresh();
  });
  f.addEventListener('change',function(e){
    if(e.target.id==='fUp'&&e.target.files[0]){shrink(e.target.files[0]).then(function(d){uploaded.push(d);S.photo=d;renderPins();refresh()},function(){toast('Imagem inválida')})}
  });
  $('#png').addEventListener('click',function(){savePng(S,this)});
  $('#shr').addEventListener('click',function(){sharePng(S,this)});
  $('#capTxt').addEventListener('input',function(){S.cap=this.value;S.tagsList=[]});
  $('#capCopy').addEventListener('click',function(){copy($('#capTxt').value,'Legenda copiada!')});
  $('#reset').addEventListener('click',function(){
    if(CAR){var orig=CAR.d.pages[CAR.idx];S=orig?carPageState(CAR.d,orig):stateOf(TPM[S.tpl].d,{tpl:S.tpl,fmt:S.fmt,cap:S.cap,tagsList:S.tagsList});S.fmt=CAR.pages[0].fmt;CAR.pages[CAR.idx]=S}else S=tplState(TPM[S.tpl]);
    renderForm();refresh()});
  bindCarBar();
  if(!(navigator.canShare)||IN_CLAUDE){$('#shr').hidden=true}
}


/* ---------- carrosséis e sequências de stories ---------- */
var CARS=window.CAROUSELS||[],CARM={},CAR=null;CARS.forEach(function(d){CARM[d.id]=d});
function carPageState(d,p){var s=stateOf(p,{fmt:d.fmt});s.cap=d.cap;s.tagsList=d.tags;return s}
function carCaption(d){return d.cap.replace(/\{tags\}/g,d.tags.join(' ')).trim()}
function carWord(fmt,n){return fmt==='story'?(n===1?'tela':'telas'):(n===1?'página':'páginas')}
function stripHtml(pages,fmt,attr){
  return '<div class="strip'+(fmt==='story'?' st':'')+'">'+pages.map(function(p,i){return '<button type="button" class="sp" '+attr(i)+'><span class="thumb"></span><small>'+(i+1)+'. '+esc(TPM[p.tpl].nome)+'</small></button>'}).join('')+'</div>';
}
function renderCarousels(){
  $('#cars').innerHTML=CARS.map(function(d){
    var st=d.fmt==='story';
    return '<article class="car"><div class="car-h"><div style="min-width:0"><span class="tag2">'+(st?'Sequência de stories':'Carrossel')+' · '+d.pages.length+' '+carWord(d.fmt,d.pages.length)+'</span><h3>'+esc(d.nome)+'</h3><p class="muted">'+esc(d.desc)+'</p></div>'+
     '<div class="rowbtn" style="justify-content:flex-start"><button type="button" class="btn blue sm" data-car="'+d.id+'">Editar '+(st?'esta sequência':'este carrossel')+'</button><button type="button" class="btn sm" data-carzip="'+d.id+'">Baixar todas (ZIP)</button><button type="button" class="btn sm" data-carcap="'+d.id+'">Copiar legenda</button></div></div>'+
     stripHtml(d.pages,d.fmt,function(i){return 'data-car="'+d.id+'" data-pg="'+i+'" aria-label="Editar '+carWord(d.fmt,1)+' '+(i+1)+'"'})+'</article>';
  }).join('');
  $$('#cars .sp').forEach(function(b){var d=CARM[b.dataset.car];mount($('.thumb',b),carPageState(d,d.pages[+b.dataset.pg]))});
}
function zipPages(pages,base,btn){
  if(!window.JSZip){toast('Biblioteca de ZIP não carregou.');return}
  var t=btn.textContent,z=new JSZip(),done=0;btn.disabled=true;btn.textContent='Gerando 0/'+pages.length;
  /* as páginas são desenhadas em fila e comprimidas ao mesmo tempo */
  Promise.all(pages.map(function(pg,k){
    return renderBlob(pg).then(function(b){z.file(base+'-'+(k<9?'0':'')+(k+1)+'.png',b);btn.textContent='Gerando '+(++done)+'/'+pages.length});
  })).then(function(){return z.generateAsync({type:'blob'})})
    .then(function(b){return download(b,base+'.zip',pages.length+' imagens baixadas, na ordem de publicação')})
    .catch(function(){toast('Não consegui gerar as imagens. Tente outro navegador.')}).then(function(){btn.disabled=false;btn.textContent=t});
}
function openCarousel(id,pg){
  var d=CARM[id];CAR={id:id,d:d,pages:d.pages.map(function(p){return carPageState(d,p)}),idx:pg||0};
  S=CAR.pages[CAR.idx];renderCarBar();renderForm();refresh();
  $('#editor').scrollIntoView({behavior:'smooth'});
}
function exitCarousel(){CAR=null;var b=$('#carBar');b.hidden=true;b.innerHTML=''}
function renderCarBar(){
  var b=$('#carBar');if(!CAR){b.hidden=true;return}
  var st=CAR.pages[0].fmt==='story';b.hidden=false;
  b.innerHTML='<div class="cb-h"><div><span class="fl">Editando '+(st?'sequência de stories':'carrossel')+' · '+CAR.pages.length+' '+carWord(CAR.pages[0].fmt,CAR.pages.length)+'</span><b class="cb-n">'+esc(CAR.d.nome)+'</b></div>'+
   '<div class="rowbtn" style="justify-content:flex-start"><button type="button" class="btn sm" id="cbDup">Duplicar '+carWord(CAR.pages[0].fmt,1)+'</button><button type="button" class="btn sm" id="cbDel"'+(CAR.pages.length<2?' disabled':'')+'>Remover '+carWord(CAR.pages[0].fmt,1)+'</button><button type="button" class="btn blue sm" id="cbZip">Baixar todas (ZIP)</button><button type="button" class="btn sm" id="cbExit">Sair do carrossel</button></div></div>'+
   stripHtml(CAR.pages,CAR.pages[0].fmt,function(i){return 'data-cbp="'+i+'" aria-pressed="'+(i===CAR.idx)+'"'}).replace('class="strip','id="cbStrip" class="strip')+
   '<p class="small muted" style="margin:0">Clique numa '+carWord(CAR.pages[0].fmt,1)+' para editar. Formato e legenda valem para todas.</p>';
  $$('#cbStrip .sp').forEach(function(x){mount($('.thumb',x),CAR.pages[+x.dataset.cbp])});
}
function updCarThumb(){
  if(!CAR)return;var x=$('#cbStrip [data-cbp="'+CAR.idx+'"]');
  if(x){mount($('.thumb',x),S);$('small',x).textContent=(CAR.idx+1)+'. '+TPM[S.tpl].nome}
}
function bindCarBar(){
  $('#carBar').addEventListener('click',function(e){
    var b=e.target.closest('button');if(!b||!CAR)return;
    if(b.dataset.cbp!==undefined){CAR.idx=+b.dataset.cbp;S=CAR.pages[CAR.idx];$$('#cbStrip .sp').forEach(function(x){x.setAttribute('aria-pressed',x===b)});renderForm();refresh()}
    else if(b.id==='cbDup'){var c=JSON.parse(JSON.stringify(S));CAR.pages.splice(CAR.idx+1,0,c);CAR.d={nome:CAR.d.nome,fmt:CAR.d.fmt,cap:CAR.d.cap,tags:CAR.d.tags,pages:[]};CAR.idx++;S=c;renderCarBar();renderForm();refresh()}
    else if(b.id==='cbDel'&&CAR.pages.length>1){CAR.pages.splice(CAR.idx,1);CAR.d={nome:CAR.d.nome,fmt:CAR.d.fmt,cap:CAR.d.cap,tags:CAR.d.tags,pages:[]};CAR.idx=Math.min(CAR.idx,CAR.pages.length-1);S=CAR.pages[CAR.idx];renderCarBar();renderForm();refresh()}
    else if(b.id==='cbZip')zipPages(CAR.pages,'frente-democratica-'+CAR.id,b);
    else if(b.id==='cbExit'){exitCarousel();toast('Você saiu do carrossel. A página atual continua no editor.')}
  });
}

/* ---------- vitrine de modelos ---------- */
function renderTemplates(){
  $('#tgrid').innerHTML=TPL.filter(function(t){return !t.hidden}).map(function(t){
    return '<article class="tcard"><button class="thumb" data-t="'+t.id+'" aria-label="Editar modelo '+esc(t.nome)+'"></button><h3>'+esc(t.nome)+'</h3><p>'+esc(t.desc)+'</p><button class="btn blue sm" data-t="'+t.id+'" style="align-self:flex-start">Editar este modelo</button></article>';
  }).join('');
  $$('#tgrid .thumb').forEach(function(h){var t=TPM[h.dataset.t];mount(h,tplState(t))});
}

/* ---------- calendário ---------- */
var allPosts={};
function renderDays(){
  $('#days').innerHTML=window.DAYS.map(function(d){
    return '<div class="day"><h3>'+esc(d.t)+' <small>'+esc(d.s)+'</small></h3>'+(d.nota?'<div class="note">'+esc(d.nota)+'</div>':'')+
     (d.posts.length?'<div class="posts">':'')+d.posts.map(function(p){
       allPosts[p.id]=p;
       return '<article class="post"><div class="meta"><span>'+(p.quando?esc(p.quando)+' · ':'')+FM[p.fmt].n+'</span><span>'+esc(TPM[p.tpl].nome)+'</span></div><div class="thumb" data-p="'+p.id+'" style="cursor:pointer"></div>'+
        '<h4>'+esc(p.title.replace(/\*/g,'').replace(/\n/g,' '))+'</h4><div class="acts"><button class="btn blue sm" data-open="'+p.id+'">Ver legenda</button><button class="btn sm" data-edit="'+p.id+'">Editar</button></div></article>';
     }).join('')+(d.posts.length?'</div>':'')+'</div>';
  }).join('');
  $$('#days .thumb').forEach(function(h){mount(h,postState(allPosts[h.dataset.p]))});
}
function postState(p){var s=stateOf(p);s.cap=p.cap;s.tagsList=p.tags;return s}
function openPost(id){
  var p=allPosts[id],s=postState(p),dlg=$('#dlg');
  $('#dlgTitle').textContent=p.title.replace(/\*/g,'').replace(/\n/g,' ');
  $('#dlgCap').textContent=buildCaption(p);
  $('#dlgTags').innerHTML=p.tags.map(function(t){return '<button class="chip'+(window.TAGS.army.some(function(a){return a.t===t})?' army':'')+'" data-copy="'+esc(t)+'">'+esc(t)+'</button>'}).join('');
  mount($('#dlgPv'),s);
  $('#dlgCopy').onclick=function(){copy(buildCaption(p),'Legenda copiada!')};
  $('#dlgPng').onclick=function(){savePng(s,this)};
  $('#dlgEdit').onclick=function(){dlg.close();loadIntoEditor(s)};
  dlg.showModal();requestAnimationFrame(function(){mount($('#dlgPv'),s)});setTimeout(function(){if(dlg.open)prerender(s)},350);
}

/* ---------- hashtags ---------- */
var picked=[];
function renderTags(){
  $('#tArmy').innerHTML=window.TAGS.army.map(function(a){return '<button class="chip army" data-tag="'+esc(a.t)+'" title="'+esc(a.c)+'">'+esc(a.t)+'</button>'}).join('');
  $('#tCamp').innerHTML=window.TAGS.camp.map(function(t){return '<button class="chip" data-tag="'+esc(t)+'">'+esc(t)+'</button>'}).join('');
  $('#tTema').innerHTML=window.TAGS.tema.map(function(t){return '<button class="chip" data-tag="'+esc(t)+'">'+esc(t)+'</button>'}).join('');
  $('#tArmyNotes').innerHTML=window.TAGS.army.map(function(a){return '<li><b>'+esc(a.t)+'</b> — '+esc(a.c)+'</li>'}).join('');
}
function updPicked(){$('#picked').textContent=picked.length?picked.join(' '):'Clique nas tags para montar o seu conjunto';$('#pickCopy').disabled=!picked.length;$$('[data-tag]').forEach(function(b){b.classList.toggle('on',picked.indexOf(b.dataset.tag)>-1)})}

/* ---------- inicialização ---------- */
function init(){
  /* tema claro/escuro */
  var tb=$('#themebtn'),root=document.documentElement;
  function setT(m){root.setAttribute('data-theme',m);tb.textContent=m==='dark'?'Modo claro':'Modo escuro';try{localStorage.setItem('fd-theme',m)}catch(e){}}
  var saved=null;try{saved=localStorage.getItem('fd-theme')}catch(e){}
  setT(saved||(window.matchMedia&&matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));
  tb.addEventListener('click',function(){setT(root.getAttribute('data-theme')==='dark'?'light':'dark')});

  /* colagem do topo */
  var hero=['lancamento-campanha-2026-08-16-06.jpg','ato-copacabana-2025-09-21-01.jpg','acervo-14.jpg','ato-paulista-2025-09-21-03.jpg'];
  $('#collage').innerHTML=hero.map(function(f,i){return '<div style="background-image:url(\'assets/fotos/'+(i?'mini/':'')+f+'\')"></div>'}).join('');
  $('#nFotos').textContent=P.length;$('#nModelos').textContent=TPL.filter(function(t){return !t.hidden}).length;
  var np=0;window.DAYS.forEach(function(d){np+=d.posts.length});$('#nPosts').textContent=np;

  renderGallery();renderTemplates();renderCarousels();renderDays();renderTags();updPicked();
  $('#nCars').textContent=CARS.length;
  $('#cars').addEventListener('click',function(e){
    var z=e.target.closest('[data-carzip]'),c=e.target.closest('[data-carcap]'),o=e.target.closest('[data-car]');
    if(z){var d=CARM[z.dataset.carzip];zipPages(d.pages.map(function(p){return carPageState(d,p)}),'frente-democratica-'+d.id,z)}
    else if(c)copy(carCaption(CARM[c.dataset.carcap]),'Legenda copiada!');
    else if(o)openCarousel(o.dataset.car,o.dataset.pg?+o.dataset.pg:0);
  });
  S=tplState(TPL[0]);renderForm();bindEditor();refresh();

  $$('#galFilters .fbtn').forEach(function(b){b.addEventListener('click',function(){galFilter=b.dataset.g;$$('#galFilters .fbtn').forEach(function(x){x.setAttribute('aria-pressed',x===b)});renderGallery()})});
  $('#zipAll').addEventListener('click',function(){zipAll(this)});
  $('#gallery').addEventListener('click',function(e){var d=e.target.closest('[data-dl]');if(d){fetch('assets/fotos/'+d.dataset.dl).then(function(r){return r.blob()}).then(function(bl){return download(bl,d.dataset.dl,'Foto baixada')}).catch(function(){toast('Não consegui baixar a foto.')});return}var b=e.target.closest('[data-use]');if(b){S.photo=b.dataset.use;renderForm();refresh();$('#editor').scrollIntoView({behavior:'smooth'});toast('Foto aplicada no editor')}});
  $('#tgrid').addEventListener('click',function(e){var b=e.target.closest('[data-t]');if(b){loadIntoEditor(tplState(TPM[b.dataset.t]))}});
  $('#days').addEventListener('click',function(e){
    var o=e.target.closest('[data-open]'),ed=e.target.closest('[data-edit]'),th=e.target.closest('.thumb');
    if(o)openPost(o.dataset.open);else if(ed)loadIntoEditor(postState(allPosts[ed.dataset.edit]));else if(th)openPost(th.dataset.p);
  });
  document.addEventListener('click',function(e){
    var c=e.target.closest('[data-copy]');if(c){copy(c.dataset.copy,'Tag copiada!')}
    var t=e.target.closest('[data-tag]');if(t){var v=t.dataset.tag,i=picked.indexOf(v);if(i>-1)picked.splice(i,1);else picked.push(v);updPicked()}
  });
  $('#pickCopy').addEventListener('click',function(){copy(picked.join(' '),'Tags copiadas!')});
  $('#pickClear').addEventListener('click',function(){picked=[];updPicked()});
  $('#dlgClose').addEventListener('click',function(){$('#dlg').close()});
  $('#dlg').addEventListener('click',function(e){if(e.target===this)this.close()});

  /* destaque do menu */
  if('IntersectionObserver' in window){
    var links={};$$('.nav a').forEach(function(a){links[a.getAttribute('href').slice(1)]=a});
    var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){$$('.nav a').forEach(function(a){a.classList.remove('on')});var a=links[x.target.id];if(a)a.classList.add('on')}})},{rootMargin:'-40% 0px -55% 0px'});
    Object.keys(links).forEach(function(id){var s=document.getElementById(id);if(s)io.observe(s)});
  }
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();

var IDRViewer=function(){var x={View:{MultiFile:0,SplitSpreads:1,SingleFile:2,IDR:3}},m=1,w=0,y=0,d=0,p=0,ta=0,e,n,r,t,aa=[],ba,B,ha=!0,ua,F,l=x.View,P=l.MultiFile,A,D,Q,H,ca,va,R,K,ka,la,G,L,wa,xa,ya,za,da,S,ea,T,fa,Aa,Ba,M={},q;x.makeNavBar=function(a,b,c,k){ba=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);/iPhone|iPad|iPod/i.test(navigator.userAgent);F=!k;q=c;n=g("contentContainer");r=g("mainContent");p=a;g("pgCount").innerHTML="/"+p;A=g("goBtn");D=
g("zoomBtn");Q=g("btnFullscreen");H=g("btnOutlines");ca=g("btnThumbnails");va=g("btnPrev");g("btnNext");R=g("btnMove");K=g("btnSelect");ka=g("btnZoomIn");la=g("btnZoomOut");S=0;ea=1;L=0;wa=1;xa=2;ya=3;za=4;B=da=5;e=g("jpedal");U.setup(q,b);document.fullscreenEnabled||document.msFullscreenEnabled||document.mozFullScreenEnabled||document.webkitFullscreenEnabled?(V("fullscreenchange",document,ia),V("MSFullscreenChange",document,ia),V("mozfullscreenchange",document,ia),V("webkitfullscreenchange",document,
ia)):Q.parentNode.removeChild(Q);this.setSelectMode(S);a=Da("page");a=""!=a?parseInt(a):1;if(ba){D.parentNode.removeChild(D);R.parentNode.removeChild(R);K.parentNode.removeChild(K);ka.parentNode.removeChild(ka);la.parentNode.removeChild(la);r.style.overflow="hidden";W.setup(a);var f=window.innerWidth,z=window.innerHeight;c=function(){setTimeout(function(){if(f!==window.innerWidth||z!==window.innerHeight)n.innerHTML="",m=1,f=window.innerWidth,z=window.innerHeight,W.setup(d)},300)};window.onorientationchange=
c;window.onresize=c}else{for(b=0;b<p;b++)if(c[b][0]!=c[0][0]||c[b][1]!=c[0][1]){ha=!1;break}ha&&!ua&&1<p&&(G=document.createElement("select"),G.id="viewBtn",c=document.createElement("option"),c.innerHTML="Single Pages",G.appendChild(c),c=document.createElement("option"),c.innerHTML="Magazine",G.appendChild(c),c=document.createElement("option"),c.innerHTML="Continuous",G.appendChild(c),G.onchange=Ea,g("mainNav").appendChild(G),G.selectedIndex=P);M.setViewMode(P);ha&&P===l.SplitSpreads?X.setup(a):ha&&
P===l.SingleFile?N.setup(a):O.setup(a);B=da;D.selectedIndex=B;window.onresize=E}};var U=function(){var a={},b=[],c=0,k,f,z,e=!1,h=!1,v=!1,oa=!0;a.setup=function(a,c){f=g("leftContent");k=g("left");z=c;n(a);for(var u=0;u<p;u++)b[u]=!1;h=e=!1;V("scroll",f,l);u=document.createElement("script");u.setAttribute("src","bookmarks/bookmarks.js");u.setAttribute("onload","IDRViewer.setBookmarks(bookmarks);");u.onreadystatechange=function(){"complete"==this.readyState&&IDRViewer.setBookmarks(bookmarks)};(document.head||
document.getElementsByTagName("head")[0]).appendChild(u)};a.toggleThumbnails=function(){e?(k.style.width="0",k.style.left="-20px"):(ma(-1),k.style.width="200px",k.style.left="0",l());e=!e};a.toggleOutlines=function(a){h&&!a?(g("thumbnailPanel").style.display="inline",g("outlinePanel").style.display="none",f.scrollTop=g("thumb"+d).getBoundingClientRect().top-80,h=!h,ca.className="inactive navBtn",H.className="navBtn"):a&&"inactive navBtn"!=H.className&&(g("thumbnailPanel").style.display="none",g("outlinePanel").style.display=
"inline",h=!h,ca.className="navBtn",H.className="inactive navBtn")};var n=function(a){for(var b=[],c=0;c<p;c++){var k=Math.floor(160/a[c][0]*a[c][1]);b[c]=a[c][0]>a[c][1]||200>=k?k:200}for(a=1;a<=p;a++){var d=document.createElement("a");d.style.height=b[a-1]+"px";d.className="thumbnail";d.href="?page="+a;d.id="thumb"+a;(function(a){d.onclick=function(){oa=!1;IDRViewer.goToPage(a);return!1}})(a);d.setAttribute("title","Page "+a);d.innerHTML='<img src="assets/loading.gif"/>';f.children[0].appendChild(d)}},
l=function(a){var b=f.scrollTop;c=b;setTimeout(function(){ma(b)},500)},ma=function(a){if(a==c||-1==a)for(a=0;a<p;a++)if(!b[a]){var d=f.children[0].children[a];if(d.offsetTop>f.scrollTop+f.clientHeight)break;d.offsetTop+d.clientHeight>f.scrollTop&&(d=a,b[d]||(f.children[0].children[d].children[0].setAttribute("src","thumbnails/"+(d+1)+z),b[d]=!0))}};a.scrollToPage=function(a,b){var c=g("thumb"+a);if("thumbnail currentPageThumbnail"!=c.className){for(var d=1;d<=p;d++)g("thumb"+d).className="thumbnail";
c.className="thumbnail currentPageThumbnail";oa&&(d=v?80:40,f.scrollTop=f.scrollTop+c.getBoundingClientRect().top-d)}"undefined"!=typeof b&&(g("thumb"+b).className="thumbnail currentPageThumbnail");oa=!0};a.setBookmarks=function(a){g("leftContent").style.top="40px";g("leftNav").style.display="block";m(g("outlinePanel"),a);h?ca.className="navBtn":H.className="navBtn";v=!0};var m=function(a,b){for(var c=document.createElement("ul"),d=0;d<b.length;d++)(function(){var a=b[d],k=document.createElement("li");
k.setAttribute("title","Page "+a.page);k.innerHTML=a.title;k.onclick=function(){IDRViewer.goToPage(parseInt(a.page))};c.appendChild(k);"undefined"!=typeof a.children&&m(c,a.children)})();a.appendChild(c)};return a}(),Ca=function(){A.style.width="65px";A.innerHTML="";var a=document.createElement("option");a.value=1;a.innerHTML="1";A.appendChild(a);for(var b,c=2;c<=p;c+=2)a=document.createElement("option"),a.value=c,b=c!==p||1===p%2?String(c+"-"+(c+1)):String(c),a.innerHTML=b,A.appendChild(a);A.selectedIndex=
d/2},pa=function(){A.innerHTML="";for(var a=1;a<=p;a++){var b=document.createElement("option");b.value=a;b.innerHTML=String(a);A.appendChild(b)}A.selectedIndex=d-1},C={applyTransform:function(a,b){a.style.webkitTransform=b;a.style.mozTransform=b;a.style.msTransform=b;a.style.oTransform=b;a.style.transform=b},applyTransformOrigin:function(a,b){a.style.webkitTransformOrigin=b;a.style.mozTransformOrigin=b;a.style.msTransformOrigin=b;a.style.oTransformOrigin=b;a.style.transformOrigin=b},applyTransitionDuration:function(a,
b){a.style.webkitTransitionDuration=b;a.style.mozTransitionDuration=b;a.style.msTransitionDuration=b;a.style.oTransitionDuration=b;a.style.transitionDuration=b}},X=function(){var a={},b,c,d,f,z;a.setup=function(c){t=l.SplitSpreads;Ca();w=q[0][0];y=q[0][1];b=w;window.onpopstate=function(b){a.goToPage(b.state.page,!1)};a.goToPage(c,!1)};a.goToPage=function(a,c){a>p&&(a=p);1!==a&&0!==a%2&&--a;e.parentNode.removeChild(e);f=d=void 0;M.setPage(a);var l=1<a&&a<p,h=l?a+1:void 0;U.scrollToPage(a,h);w=b;l&&
(w*=2);n.style.width=w+"px";var ma="container"+a;A.selectedIndex=a/2;if(c&&history.pushState)try{history.pushState({page:a},null,"?page="+a)}catch(r){}e=document.createElement("div");e.id=ma;e.style.width=w+"px";n.appendChild(e);C.applyTransformOrigin(e,"top left");e.style.margin="0";E();if(F)d=document.createElement("object"),d.setAttribute("width",""+b),d.setAttribute("height",""+y),d.setAttribute("data",a+".svg"),d.setAttribute("type","image/svg+xml"),e.appendChild(d),E();else{var q=function(){z||
(m(),z=!0);var c=document.createElement("iframe");c.setAttribute("src",a+".html");c.setAttribute("style","width: "+b+"px; height: "+y+"px; position: absolute; border: 0;");c.onload=function(){d=c};e.appendChild(c)};$.ajax({url:a+".html",success:function(b){try{var c=$("<div />").html(b).find("#jpedal").attr("id","page"+a).css({position:"absolute"});$(e).append(c);setTimeout(function(){var b=function(){window["load"+a]()};isIE||setTimeout(b,1E3);b();if("file:"==window.location.protocol){var b=g("fonts"+
a),c=document.createElement("style");c.setAttribute("type","text/css");c.innerHTML=b.innerHTML;e.appendChild(c)}},1)}catch(d){q()}},error:q})}if(l)if(F)f=document.createElement("object"),f.setAttribute("width",""+b),f.setAttribute("height",""+y),f.setAttribute("data",h+".svg"),f.setAttribute("type","image/svg+xml"),f.setAttribute("style","position: absolute; left: "+b+"px;"),e.appendChild(f),E();else{var t=function(){z||(m(),z=!0);var a=document.createElement("iframe");a.setAttribute("src",h+".html");
a.setAttribute("style","width: "+b+"px; height: "+y+"px; position: absolute; border: 0; left: "+b+"px;");a.onload=function(){f=a};e.appendChild(a)};$.ajax({url:h+".html",success:function(a){try{var c=$("<div />").html(a).find("#jpedal").attr("id","page"+h).css({position:"absolute",left:b});$(e).append(c);setTimeout(function(){var a=function(){window["load"+h]()};isIE||setTimeout(a,1E3);a();if("file:"==window.location.protocol){var a=g("fonts"+h),b=document.createElement("style");b.setAttribute("type",
"text/css");b.innerHTML=a.innerHTML;e.appendChild(b)}},1)}catch(d){t()}},error:t})}};var m=function(){Y.currentSelectMode==ea?a.enablePanning():a.enableTextSelection()};a.enableTextSelection=function(){if(z||F)h(),c.style.visibility="hidden"};a.enablePanning=function(){if(z||F)"undefined"!=typeof d&&Z(d.contentWindow),"undefined"!=typeof f&&Z(f.contentWindow),h(),c.style.visibility="visible"};var h=function(){"undefined"==typeof c&&(c=document.createElement("div"),c.id="jpedalOverlay",c.setAttribute("style",
"width: inherit; height: inherit; position: absolute; z-index: 10; visibility: hidden;"),n.insertBefore(c,n.firstChild))};return a}(),O=function(){var a={},b,c,k;a.setup=function(b){t=l.MultiFile;pa();window.onpopstate=function(b){a.goToPage(b.state.page,!1)};a.goToPage(b,!1)};a.goToPage=function(c,f){e.parentNode.removeChild(e);b=void 0;M.setPage(c);U.scrollToPage(d);w=q[d-1][0];y=q[d-1][1];n.style.width=w+"px";n.style.height=y+"px";r.scrollTop=0;A.selectedIndex=d-1;if(f&&history.pushState)try{history.pushState({page:d},
null,"?page="+d)}catch(h){}if(F)e=document.createElement("object"),e.setAttribute("width",""+w),e.setAttribute("height",""+y),e.setAttribute("data",d+".svg"),e.setAttribute("type","image/svg+xml"),e.setAttribute("id","jpedal"),n.appendChild(e),b=e,C.applyTransformOrigin(e,"top left"),E();else{var l=function(){k||(Y.currentSelectMode==ea?a.enablePanning():a.enableTextSelection(),k=!0);e=document.createElement("iframe");e.setAttribute("id","jpedal");e.setAttribute("src",d+".html");e.setAttribute("style",
"width: "+w+"px; height: "+y+"px; position: relative; border: 0;");e.onload=function(){b=e};n.appendChild(e);C.applyTransformOrigin(e,"top left");E()};$.ajax({url:d+".html",success:function(a){try{var b=$("<div />").html(a).find("#jpedal").css({margin:"0",overflow:"hidden",position:"relative"});$(n).append(b);setTimeout(function(){e=g("jpedal");C.applyTransformOrigin(e,"top left");E();var a=function(){window["load"+d]()};isIE||setTimeout(a,1E3);a();if("file:"==window.location.protocol){var a=g("fonts"+
d),b=document.createElement("style");b.setAttribute("type","text/css");b.innerHTML=a.innerHTML;a.parentNode.removeChild(a);g("jpedal").appendChild(b)}},1)}catch(c){l()}},error:l})}};a.enableTextSelection=function(){if(k||F)f(),c.style.visibility="hidden"};a.enablePanning=function(){if(k||F)"undefined"!=typeof b&&Z(b.contentWindow),f(),c.style.visibility="visible"};var f=function(){"undefined"==typeof c&&(c=document.createElement("div"),c.id="jpedalOverlay",c.setAttribute("style","width: inherit; height: inherit; position: absolute; z-index: 10; visibility: hidden;"),
n.insertBefore(c,n.firstChild))};return a}(),N=function(){var a={},b=[],c=0,k,f,z;a.setup=function(c){t=l.SingleFile;pa();k=[];window.onpopstate=function(b){a.goToPage(b.state.page,!1)};C.applyTransformOrigin(e,"top left");y=0;w=q[0][0];for(var d=0;d<p;d++){b[d]=!1;var g=document.createElement("div");g.id="page"+(d+1);g.setAttribute("style","position:relative; overflow: hidden; background-color: white; margin: 0 auto 10px; width: "+q[d][0]+"px; height: "+q[d][1]+"px;");e.appendChild(g);y+=q[d][1]+
10}n.style.height=y+"px";r.onscroll=m;a.goToPage(c,!1)};var m=function(a){var k=window.pageYOffset;c=k;setTimeout(function(){if(k==c){if(0<g("page1").getBoundingClientRect().top)M.setPage(1),A.selectedIndex=d-1;else for(var a=1;a<=p;a++){var f=g("page"+a).getBoundingClientRect(),e=f.top,f=f.bottom-f.top;if(e<=.25*f&&e>.5*-f){M.setPage(a);A.selectedIndex=d-1;break}}U.scrollToPage(d);for(a=1;a<=p;a++)b[a]||(f=g("page"+a),e=f.getBoundingClientRect().top,e<=f.clientHeight&&e>=-f.clientHeight&&h(a))}},
250)};a.goToPage=function(a,c){r.scrollTop=r.scrollTop+g("page"+a).getBoundingClientRect().top-45;b[a]||h(a)};var h=function(c){b[c]=!0;if(F){var d=document.createElement("object");d.setAttribute("width",""+q[c-1][0]);d.setAttribute("height",""+q[c-1][1]);d.setAttribute("data",c+".svg");d.setAttribute("type","image/svg+xml");k[c-1]=d;g("page"+c).appendChild(d)}else{var e=function(){f||(Y.currentSelectMode==ea?a.enablePanning():a.enableTextSelection(),f=!0);var b=document.createElement("iframe");b.setAttribute("src",
c+".html");b.setAttribute("style","width: "+q[c-1][0]+"px; height: "+q[c-1][1]+"px; position: relative; border: 0;");k[c-1]=b;g("page"+c).appendChild(b)};$.ajax({url:c+".html",success:function(a){try{var b=$("<div />").html(a).find("#jpedal").html();$("#page"+c).html(b);setTimeout(function(){var a=function(){window["load"+c]()};isIE||setTimeout(a,1E3);a();if("file:"==window.location.protocol){var a=g("fonts"+c),b=document.createElement("style");b.setAttribute("type","text/css");b.innerHTML=a.innerHTML;
a.parentNode.removeChild(a);g("jpedal").appendChild(b)}},1)}catch(d){e()}},error:e})}};a.enableTextSelection=function(){if(f||F)v(),z.style.visibility="hidden"};a.enablePanning=function(){if(f||F){for(var a=0;a<k.length;a++)"undefined"!=typeof k[a]&&Z(k[a].contentWindow);v();z.style.visibility="visible"}};var v=function(){"undefined"==typeof z&&(z=document.createElement("div"),z.id="jpedalOverlay",z.setAttribute("style","width: inherit; height: inherit; position: absolute; z-index: 10; visibility: hidden;"),
n.insertBefore(z,n.firstChild))};return a}(),W=function(){var a={},b=[],c=[],k=[],f,e,w,h=0,v=0,x,y,B=0,D,E,G,L,u,S=!1;a.next=function(){this.goToPage(u?d+2:d+1,!0,!0)};a.prev=function(){this.goToPage(d-1,!0,!0)};a.setup=function(Fa){t=l.IDR;n.removeAttribute("style");n.style.overflow="visible";n.style.padding="0";n.style.margin="0";n.style.webkitBackfaceVisibility="hidden";n.style.webkitPerspective="1000";S||(r.addEventListener("touchstart",ia),r.addEventListener("touchmove",ka),r.addEventListener("touchend",
la),S=!0);u=window.innerWidth>window.innerHeight;M.setViewMode(l.IDR,u?"landscape":"portrait");if(!ha||q[0][0]>q[0][1])u=!1;u?Ca():pa();for(var c=1;c<=p;c++)b[c]=!1;window.onpopstate=function(b){b.state&&a.goToPage(b.state.page,b.state.slide,!1)};setTimeout(function(){a.goToPage(Fa,!1,!1)},0)};var P=!1,H=!1,ga,R,K=!1,ea,T,V,W,X,N,O,Y,Z,aa,ba,Q,I,J,ca,da,fa,ia=function(a){D=P=!1;1!==a.touches.length||K||1!==m||(R=a.touches[0].clientX,T=a.touches[0].clientX,V=a.touches[0].clientY,W=T,X=V,P=!0,ea=Date.now());
ca&&(da=!0);1===a.touches.length&&1<m&&(E=a.touches[0].clientX,G=a.touches[0].clientY,L=!0,N=v,O=h,Y=N,Z=O,aa=Date.now(),ba=Date.now(),Q||(Q=setInterval(function(){N=Y;O=Z;Y=v;Z=h;ba=aa;aa=Date.now()},200)));if(2===a.touches.length&&!H){D=!0;L=!1;qa(d);var b=a.touches[0].clientX-f,c=a.touches[1].clientX-f,e=a.touches[0].clientY;a=a.touches[1].clientY;w=Math.sqrt(Math.pow(Math.abs(b-c),2)+Math.pow(Math.abs(e-a),2));x=b-(b-c)/2;y=e-(e-a)/2}},ka=function(a){a.preventDefault();a.stopPropagation();if(1===
a.touches.length&&P&&1===m){H=!0;var b=R-a.touches[0].clientX;0!==b&&(R=a.touches[0].clientX,W=a.touches[0].clientX,X=a.touches[0].clientY,ga-=b,C.applyTransform(n,"translate3d("+ga+"px, 0, 0)"))}else if(1===a.touches.length&&L){fa=!0;b=a.touches[0].clientX;a=a.touches[0].clientY;var c=a-G;v+=b-E;h+=c;E=b;G=a;ra();requestAnimationFrame(function(){na(v,h,m,!0)},g("main"))}else if(2===a.touches.length&&!K&&a.cancelable&&D&&!H&&(B=(B+1)%2,1!==B)){var d=a.touches[0].clientX-f,e=a.touches[1].clientX-f,
c=a.touches[0].clientY,k=a.touches[1].clientY;a=Math.sqrt(Math.pow(Math.abs(d-e),2)+Math.pow(Math.abs(c-k),2));b=a/w;1>m*b&&(m=b=1);4<m*b&&(b=1);m*=b;d-=(d-e)/2;c-=(c-k)/2;v=v+d-x;h=h+c-y;e=-v+d;v-=e*b-e;e=-h+c;h-=e*b-e;ra();x=d;y=c;requestAnimationFrame(function(){na(v,h,m,!0)},g("main"));w=a}},la=function(b){var c;if(0===b.touches.length){if(H){var e=H=!1;300>Date.now()-ea&&(b=T-W,c=V-X,100<Math.abs(b)&&Math.abs(b)>.25*Math.abs(c)&&(e=!0,0<b?a.next():a.prev()));e||(b=-window.innerWidth*(d-1),u&&
(b=-window.innerWidth*Math.floor(d/2)),ga>b+window.innerWidth/2?a.prev():ga<b-window.innerWidth/2?a.next():a.goToPage(d,!0,!1))}clearInterval(Q);Q=null;fa&&(fa=!1,e=Date.now()-ba,b=N-v,c=O-h,I=b/(e/16),J=c/(e/16),.5>Math.abs(I)&&(I=0),.5>Math.abs(J)&&(J=0),0===I&&0===J||window.requestAnimationFrame(ja,g("main")))}},ja=function(){ca=!0;!da&&(-.5>I||.5<I||-.5>J||.5<J)?(v-=I,h-=J,I*=.95,J*=.95,ra(),na(v,h,m,!0),window.requestAnimationFrame(ja,g("main"))):da=ca=!1},ra=function(){0<v&&(I=v=0);0<h&&(J=
h=0);var a=q[d-1][0]*k[d];u&&(a*=2);var b=a*m;v<a-b&&(v=a-b,I=0);a=q[d-1][1]*k[d];b=a*m;h<a-b&&(h=a-b,J=0)},na=function(a,b,e,f){a=Math.round(2*a)/2;b=Math.round(2*b)/2;a=f?"translate3d("+(a+c[d])+"px, "+b+"px, 0) scale("+e*k[d]+")":"translateX("+(a+c[d])+"px) translateY("+b+"px) scale("+e*k[d]+")";b=g("page"+d);C.applyTransform(b,a)},sa=function(a){if(!b[a]){var d=document.createElement("div");d.setAttribute("id","page"+a);d.style.width=u&&1!=a&&(a<p||1===p%2)?2*q[a][0]+"px":q[a-1][0]+"px";d.style.height=
q[a-1][1]+"px";qa(a);c[a]=u&&1!=a?window.innerWidth*Math.floor(a/2)+f:window.innerWidth*(a-1)+f;C.applyTransform(d,"translate3d("+c[a]+"px, 0, 0) scale("+k[a]+")");C.applyTransformOrigin(d,"top left");d.style.marginTop=e+"px";d.style.position="absolute";n.appendChild(d)}b[a]||(F?(b[a]=!0,d=document.createElement("div"),d.setAttribute("style","position: absolute"),g("page"+a).appendChild(d),$(d).load(a+".svg")):$.ajax({url:a+".html",success:function(c){b[a]||(b[a]=!0,c=$("<div />").html(c).find("#jpedal").css("position",
"absolute"),$("#page"+a).append(c),setTimeout(function(){var b=function(){window["load"+a]()};isIE||setTimeout(b,1E3);b()},1))}}));u&&1!=a&&!b[a+1]&&a!=p&&(F?(b[a+1]=!0,d=document.createElement("div"),d.setAttribute("style","position: absolute; left: "+q[a][0]+"px"),g("page"+a).appendChild(d),$(d).load(a+1+".svg")):$.ajax({url:a+1+".html",success:function(c){b[a+1]||(b[a+1]=!0,c=$("<div />").html(c).find("#jpedal").css("position","absolute"),(a<p||1===p%2)&&c.css("left",q[a][0]),$("#page"+a).append(c),
setTimeout(function(){var b=function(){window["load"+(a+1)]()};isIE||setTimeout(b,1E3);b()},1))}}))},qa=function(a){var b;b=u&&1!=a&&(a<p||1===p%2)?(window.innerWidth-20)/(2*q[a][0]):(window.innerWidth-20)/q[a-1][0];var c=(window.innerHeight-40-20)/q[a-1][1];b<c?(k[a]=b,f=10):(k[a]=c,f=(window.innerWidth-20-(u&&1!=a&&(a<p||1===p%2)?2*q[a][0]*k[a]:q[a-1][0]*k[a]))/2+10);return e=(window.innerHeight-40-q[a-1][1]*k[a])/2};a.goToPage=function(c,e,f){if(1<m)m=1,requestAnimationFrame(function(){na(0,0,
m,!0);a.goToPage(c,e,f)},g("main"));else{K=!0;1>c&&(c=1);c>p&&(c=p);u&&1!==c&&1===c%2&&--c;qa(c);b[c]||sa(c);ga=u?-(window.innerWidth*Math.floor(c/2)):-(window.innerWidth*(c-1));e&&C.applyTransitionDuration(n,"200ms");C.applyTransform(n,"translate3d("+ga+"px, 0, 0)");u&&1!==c&&1===c%2&&--c;u&&1!==c&&c<p?U.scrollToPage(c,c+1):U.scrollToPage(c);M.setPage(c);if(f&&history.pushState)try{history.pushState({page:d,slide:e},null,"?page="+d)}catch(k){}A.selectedIndex=u?Math.floor(d/2):d-1;var h=function(){var a;
K=!1;a=c;u&&1===a&&(a=0);var e=a-1,f=a+1;u&&(--e,f+=1,2===a&&(e=1));1<=e&&!b[e]&&sa(e);f<=p&&!b[f]&&sa(f);C.applyTransitionDuration(n,"");n.removeEventListener("transitionend",h,!1);n.removeEventListener("webkitTransitionEnd",h,!1);if(u)for(e=2;e<=p;e+=2)b[e]&&(e<d-2||e>d+2)&&(b[e]=!1,a=g("page"+e),a.parentNode.removeChild(a),e<p&&(b[e+1]=!1));else for(e=1;e<=p;e++)b[e]&&(e<d-1||e>d+1)&&(b[e]=!1,a=g("page"+e),a.parentNode.removeChild(a))};e?(n.addEventListener("transitionend",h,!1),n.addEventListener("webkitTransitionEnd",
h,!1)):h()}};return a}();x.setBookmarks=U.setBookmarks;x.setDefaultViewMode=function(a){if(a===l.MultiFile||a===l.SplitSpreads||a===l.SingleFile)P=a};var Da=function(a){for(var b=document.URL,c=b.toString().indexOf("?"),b=-1!=c?b.substr(c+1).split("&"):"",c=0;c<b.length;c++)if(b[c]=b[c].split("="),b[c][0]==a)return b[c][1];return""};x.toggleOutlines=U.toggleOutlines;var Z=function(a){try{a.getSelection?a.getSelection().empty?a.getSelection().empty():a.getSelection().removeAllRanges&&a.getSelection().removeAllRanges():
a.document.selection&&a.document.selection.empty()}catch(b){}},Y=function(){var a={},b,c,d=!1,e=!!window.opera||0<=navigator.userAgent.indexOf(" OPR/"),e=!!window.chrome&&!e;"undefined"!==typeof InstallTrigger?(T="-moz-grab",fa="-moz-grabbing"):e?(T="-webkit-grab",fa="-webkit-grabbing"):fa=T="all-scroll";a.currentSelectMode=S;a.enableTextSelection=function(){this.currentSelectMode=S;K.className="inactive navBtn";R.className="navBtn";r.style.cursor="";var a=function(a){};r.onmousedown=a;document.onmouseup=
a;r.onmousemove=a;t===l.MultiFile?O.enableTextSelection():t===l.SplitSpreads?X.enableTextSelection():t===l.SingleFile&&N.enableTextSelection()};a.enablePanning=function(){this.currentSelectMode=ea;K.className="navBtn";R.className="inactive navBtn";Z(window);r.style.cursor=T;r.onmousedown=function(a){a=a||window.event;r.style.cursor=fa;b=a.clientX;c=a.clientY;d=!0;return!1};document.onmouseup=function(a){r.style.cursor=T;d=!1};r.onmousemove=function(a){if(d)return a=a||window.event,r.scrollLeft=r.scrollLeft+
b-a.clientX,r.scrollTop=r.scrollTop+c-a.clientY,b=a.clientX,c=a.clientY,!1};t===l.MultiFile?O.enablePanning():t===l.SplitSpreads?X.enablePanning():t===l.SingleFile&&N.enablePanning()};return a}();x.setSelectMode=function(a){ba||(a==S?Y.enableTextSelection():Y.enablePanning())};var Ga=function(){var a=0;self.innerHeight?a=self.innerWidth:document.documentElement&&document.documentElement.clientHeight?a=document.documentElement.clientWidth:document.body&&(a=document.body.clientWidth);return a},ja=function(){var a=
r.scrollTop,b=n.offsetHeight;B===L&&(D.selectedIndex=L);4<m?m=4:.25>m&&(m=.25);"undefinded"!==typeof isIE&&isIE&&(e.style.zoom=m);C.applyTransform(e,"translateX(0px) translateY(0px) scale("+m+")");n.style.width=w*m+"px";n.style.height=y*m+"px";var c=Math.floor(100*m);ba||(D.options[0].innerHTML=c+"%");t==l.SingleFile&&(e.style.width=Math.floor(100/c*100)+"%");r.scrollTop=n.offsetHeight/b*a;ta++;1===ta%2&&E()};x.zoomIn=function(){B=L;m*=1.2;ja()};var Ea=function(){var a=G.selectedIndex;a!=t&&(M.setViewMode(a),
IDRViewer.setSelectMode(S),t===l.SingleFile&&(r.onscroll=function(a){},D.style.display=""),t=l.IDR,n.innerHTML="",n.setAttribute("style",""),e=document.createElement("div"),e.id="jpedal",n.appendChild(e),B=da,D.selectedIndex=B,a===l.MultiFile?O.setup(d):a===l.SplitSpreads?X.setup(d):a===l.SingleFile&&(D.style.display="none",N.setup(d),E()))};x.zoomUpdate=function(){B=D.selectedIndex;B!=L&&E()};var E=function(){var a,b,c,e,f,g=function(){a=r.clientWidth;t===l.SingleFile&&(w=aa[d].width);m=(a-6)/w},
n=function(){a=r.clientWidth;b=r.clientHeight;t==l.SingleFile&&(w=aa[d].width,f=aa[d].height);e=t!=l.SplitSpreads||1!==d&&d!==p?(a-6)/w:(a-6)/(2*w);c=(b-6)/y;t==l.SingleFile&&(c=(b-6)/f);m=e>c?c:e};switch(B){case da:var h=w;t!==l.SplitSpreads||1!==d&&d!==p||(h=2*w);h>y&&y>r.clientHeight?n():h>Ga()&&ha?g():m=1;break;case xa:g();break;case ya:b=r.clientHeight;c=(b-6)/y;t==l.SingleFile&&(f=aa[d].height,c=(b-6)/f);m=c;break;case za:n();break;case wa:m=1}ja()};x.zoomOut=function(){B=L;m/=1.2;ja()};x.goToPage=
function(a){0===a&&(a=parseInt(A.options[A.selectedIndex].value));t===l.IDR?W.goToPage(a,!1,!0):t===l.SplitSpreads?X.goToPage(a,!0):t===l.MultiFile?O.goToPage(a,!0):t===l.SingleFile&&N.goToPage(a,!0)};x.next=function(){t===l.IDR?W.next():t===l.SplitSpreads?d+1<=p&&this.goToPage(d+2):d<p&&this.goToPage(d+1)};x.prev=function(){t===l.IDR?W.prev():1<d&&this.goToPage(d-1)};var V=function(a,b,c){if(b.addEventListener)b.addEventListener(a,c,!1);else if(b.attachEvent)return b.attachEvent("on"+a,c)},g=function(a){return document.getElementById(a)};
x.toggleThumbnails=U.toggleThumbnails;var ia=function(){Q.className=document.fullscreenElement||document.msFullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?"navBtn open":"navBtn closed"};x.toggleFullScreen=function(){document.fullscreenElement||document.msFullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?
document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen():document.body.requestFullscreen?document.body.requestFullscreen():document.body.msRequestFullscreen?document.body.msRequestFullscreen():document.body.mozRequestFullScreen?document.body.mozRequestFullScreen():document.body.webkitRequestFullscreen&&document.body.webkitRequestFullscreen()};x.addToolBarHyperlink=function(a,b){var c=new Image;c.src=a;var d=document.createElement("a");d.href=b;d.className=
"customNavLink";d.appendChild(c);d.setAttribute("target","_blank");g("mainNav").insertBefore(d,va)};x.disableViewModeSwitching=function(){ua=!0};x.on=function(a,b){"pagechange"===a?Aa=b:"viewmodechange"===a&&(Ba=b)};M.setPage=function(a){if(a!=d){var b=Aa;b&&b({page:a});d=a}};M.setViewMode=function(a,b){var c=Ba;if(c){var d={viewmode:a};""!=b&&(d.orientation=b);c(d)}};return x}();

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:@
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler@
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		//document.addEventListener("resume", onResume, false);
        app.receivedEvent('deviceready');

		
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		var IDPage = getParameterByName('id');
		
		last_click_time = new Date().getTime();
		
		document.addEventListener('click', function (e) {
								  
								  click_time = e['timeStamp'];
								  
								  if (click_time && (click_time - last_click_time) < 2000) { e.stopImmediatePropagation();
								  
								  e.preventDefault();
								  
								  return false;
								  
								  }
								  
								  last_click_time = click_time;
								  
								  }, true);
		
		/*if(PushbotsPlugin.isiOS()){
			PushbotsPlugin.initializeiOS("56257215177959a6258b4569");
		}
		if(PushbotsPlugin.isAndroid()){
			PushbotsPlugin.initializeAndroid("56257215177959a6258b4569", "994279687975");
		 
		}
		
		PushbotsPlugin.resetBadge();*/
		

		//StatusBar.styleDefault();
		
		//$("#galleriaimg").html("<tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='center' ><img id='figura' src='img/fig1.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='left' ><div id='img1' class='visione3' align='center'><b>Il Referral Marketing come strategia </b></div></td></tr><tr><td width='100%' align='center' ><br></td></tr><tr><td width='100%' align='center' ><img src='img/fig2.jpg' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='left' ><div id='img2' class='visione3' align='center'><b>European Experience Exchange Londra</b></div></td></tr><tr><td width='100%' align='center' ><br></td></tr><tr><td width='100%' align='center' ><img src='img/fig3.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='left' ><div id='img3' class='visione3' align='center'><b>Le professioni che hanno successo in BNI</b></div></td></tr><tr><td width='100%' align='center' ><br></td></tr><tr><td width='100%' align='center' ><img src='img/fig4.jpg' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='left' ><div id='img4' class='visione3' align='center'><b>Conferenza Nazionale BNI Italia 2015</b></div></td></tr><tr><td width='100%' align='center' ><br></td></tr><tr><td width='100%' align='center' ><img src='img/fig5.jpg' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='left' ><div id='img5' class='visione3' align='center'><b>Conferenza Nazionale BNI Italia 2015</b></div></td></tr><tr><td width='100%' align='center' ><br></td></tr><tr><td width='100%' align='center' ><img src='img/fig6.jpg' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='left' ><div id='img6' class='visione3' align='center'><b>Conferenza Nazionale BNI Italia 2015</b></div></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='center' ><img src='img/fig7.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='left' ><div id='img6' class='visione3' align='center'><b>Il Segreto di Marketing piu' conosciuto al mondo – Prima Edizione</b></div></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr>");

		
		// se id == 2 devo andare nella pagina 2
		
		
		if(IDPage==2){

			resetscroll()
			
			window.location.href = "#page2";

			
		}
		else if(IDPage==21){
			
			$.mobile.changePage( "#page3", { transition: "slide", changeHash: false });
			carica2()
			
		}
		else if(IDPage==7){
			
			resetscroll7()
			
			window.location.href = "#page7";

		}
		else if(IDPage==44){
			
			resetscroll44()
			
			window.location.href = "#page5";
			
		}
		else if(IDPage==41){
			
			$.mobile.changePage( "#page6", { transition: "slide", changeHash: false });
			carica4()
			
		}
		else if(IDPage==4){
			
			$.mobile.changePage( "#page4", { transition: "slide", changeHash: false });
			carica3()

		}
		else if(IDPage==1){
			
			$.mobile.changePage( "#page2", { transition: "slide", changeHash: false });
			carica()
			
		}
		else if(IDPage==61){
			
			$.mobile.changePage( "#page8", { transition: "slide", changeHash: false });
			carica8();
			
		}
		else if(IDPage==71){
			
			$.mobile.changePage( "#page7", { transition: "slide", changeHash: false });
			vedi()
			
		}
		else
		{
		   localStorage.setItem("caricafoto", "1");
		}
		


		
		//IPAD CHANGE
		if(screen.width < 768){
			
			if(screen.height < 500){

				$("#copertina").attr("height", "27%");
				$("#spazio4").show("height", "25px");
				$("#spazio4a").attr("height", "20px");
				$("#spazio4b").attr("height", "25px");
				$("#tr4").hide();
				$("#tr4b").hide();
				$("#no4a").hide();
				$("#no4b").hide();
				$("#pallina").attr("width", "18px");
				$("#imgsms").attr("width", "50%");
				$("#imgemail").attr("width", "50%");
				$("#imgqr").attr("width", "25%");
				
			}


			$("#video").html("<iframe width='220' height='130' src='http://www.youtube.com/embed/cf5PVgbrlCM?feature=player_embedded' frameborder='0' allowfullscreen></iframe>");
			
			$("#video2").html("<iframe width='220' height='130' src='http://www.youtube.com/embed/Hl10lNEVBrU?feature=player_embedded' frameborder='0' allowfullscreen></iframe>");
		}
		else
		{
			//alert(screen.width);
			
			$("#testoTitolo").attr("class", "visione3IPAD");
			$("#testo").attr("class", "visioneIPAD");
			$("#testoCentrale").attr("class", "visione2IPAD");
			$("#Nome").attr("class", "visione3aIPAD");
			$("#titolo").attr("class", "visione4IPAD");
			$("#titolob").attr("class", "visione4IPAD");
			$("#titolov1").attr("class", "visione4IPAD");
			$("#titolov2").attr("class", "visione4IPAD");
			$("#titolov3").attr("class", "visione4IPAD");
			$("#iper").attr("class", "visioneiperIPAD");
			$("#copertina").attr("height", "90%");
			$("#pallina").attr("width", "46px");
			$("#spazioipad").show();
			$("#spazioipad3").show();
			$("#spazioipad4").show();
			$("#spazioipad5").show();
			$("#spazioipad6").show();
			$("#spazioipad7").show();
			$("#spazioipad8").show();
			
			$("#sendapp").attr("class", "visione3IPAD");
			$("#scegli").attr("class", "visioneIPAD0");
			$("#digital").attr("class", "visione3IPAD");
			
			$("#img1").attr("class", "visione3IPAD");
			$("#img2").attr("class", "visione3IPAD");
			$("#img3").attr("class", "visione3IPAD");
			$("#img4").attr("class", "visione3IPAD");
			$("#img5").attr("class", "visione3IPAD");
			$("#img6").attr("class", "visione3IPAD");
			
			$("#indirizzotext").attr("class", "visioneIPAD");
			$("#indirizzoV").attr("class", "visione2IPAD");
			$("#phonetext").attr("class", "visioneIPAD");
			$("#phoneV").attr("class", "visione2IPAD");
			$("#mobiletext").attr("class", "visioneIPAD");
			$("#mobileV").attr("class", "visione2IPAD");
			$("#emailtext").attr("class", "visioneIPAD");
			$("#emailV").attr("class", "visione2IPAD");
			$("#webtext").attr("class", "visioneIPAD");
			$("#webV").attr("class", "visione2IPAD");
			
			//$("#video").html("<iframe width='460' height='280' src='http://www.youtube.com/embed/cf5PVgbrlCM?feature=player_embedded' frameborder='0' allowfullscreen></iframe>");
			
			$("#video2").html("<iframe width='460' height='280' src='http://www.youtube.com/embed/Hl10lNEVBrU?feature=player_embedded' frameborder='0' allowfullscreen></iframe>");
			
			//initscroll()
		}
		

		var ciccio;
		
		$(document).on("touchend", "#primo", function(e){
					   if(localStorage.getItem("caricazoom0") == "1"){
					   
					   window.location.href = "index.html?id=1";
					   
					   }
					   else
					   {
					   
					   $("#pagee").show();
					   $("#phone").show();
					   
					   $.mobile.changePage( "#page2", { transition: "slide", changeHash: false });
					   //carica()
					   }
					   

		});
		
		$(document).on("touchend", "#secondo", function(e){
					   if(localStorage.getItem("caricazoom0") == "1"){
					   
					   window.location.href = "index.html?id=21";
					   
					   }
					   else
					   {
					   
					   $("#pagee").show();
					   $("#phone").show();
					   
					   $.mobile.changePage( "#page3", { transition: "slide", changeHash: false });
					   carica2()
					   }

		});
		
		$(document).on("touchend", "#terzo", function(e){
					   if(localStorage.getItem("caricazoom0") == "1"){
					   
					   window.location.href = "index.html?id=4";
					   
					   }
					   else
					   {
					   
					   $("#pagee").show();
					   $("#phone").show();
					   
					   $.mobile.changePage( "#page4", { transition: "slide", changeHash: false });
					   carica3()
					   }
		});
		
		$(document).on("touchend", "#quarto", function(e){
					   if(localStorage.getItem("caricazoom0") == "1"){
					   
					   window.location.href = "index.html?id=41";
					   
					   }
					   else
					   {
					   
					   $("#pagee").show();
					   $("#phone").show();
					   
					   $.mobile.changePage( "#page6", { transition: "slide", changeHash: false });
					   carica4()
					   }
					   

		});
		
		$(document).on("touchend", "#sesto", function(e){
					   if(localStorage.getItem("caricazoom0") == "1"){
					   
					   window.location.href = "index.html?id=61";
					   
					   }
					   else
					   {
					   
					   $("#pagee").show();
					   $("#phone").show();
					   
					   $.mobile.changePage( "#page8", { transition: "slide", changeHash: false });
					   carica8();
					   }
					   

		});
		
		$(document).on("touchend", "#vedi", function(e){
					   if(localStorage.getItem("caricazoom0") == "1"){
					   
					   window.location.href = "index.html?id=71";
					   
					   }
					   else
					   {
					   
					   $("#pagee").show();
					   $("#phone").show();
					   
					   $.mobile.changePage( "#page7", { transition: "slide", changeHash: false });
					   vedi()
					   }
					   

		});
		
		$(document).on("touchend", "#primos", function(e){
			
			if(localStorage.getItem("caricazoom") == "1"){
					   

					window.location.href = "index.html?id=2";
		
			}
			else
			{

				$("#pagee").show();
				$("#phone").show();
					   
				$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
				initscroll()
			}
					   
			/*setTimeout (function(){
				$("#galleriaimg").html("");
				$("#pagee").show();
				$("#phone").show();
						
				$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
				initscroll()
			}, 200);*/
					   
		});
		
		$(document).on("touchend", "#secondos", function(e){
			$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			initscroll()
		});
		
		$(document).on("touchend", "#terzos", function(e){
					   
			$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			initscroll()
			//checkpush()
		});
		
		$(document).on("touchend", "#quartos", function(e){
			e.preventDefault();
			$.mobile.changePage( "#page4", { transition: "slide", changeHash: false, reverse: true });

			//carica3()

		});
		
		$(document).on("touchend", "#quartos44", function(e){
					   
					   if(localStorage.getItem("caricazoom44") == "1"){
					   
					   
					   window.location.href = "index.html?id=44";
					   
					   }
					   else
					   {
					   
					   $("#pagee").show();
					   $("#phone").show();
					   
					   $.mobile.changePage( "#page4", { transition: "slide", changeHash: false, reverse: true });
					   
					   carica3()
					   }

					   
		});
		
		$(document).on("touchend", "#quintos", function(e){
					   if(localStorage.getItem("caricazoom7") == "1"){
					   //alert()
					   
					   //$.mobile.changePage(
						window.location.href = "index.html?id=7";
										   /*{
										   allowSamePageTransition : true,
										   transition              : 'none',
										   showLoadMsg             : false,
										   reloadPage              : true
										   }
										   );*/
					   
					   
					   }
					   else
					   {
					   
					   $("#pagee").show();
					   $("#phone").show();
					   
					   $.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
					   initscroll()
					   }

		});
		
		$(document).on("touchend", "#sestos", function(e){
			
			$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			initscroll()
					   
		});
		
		$(document).on("touchend", "#ottavos", function(e){
			$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
			initscroll()

		});
		
		$(document).on("touchend", "#pulsms", function(e){
			aprisms()
		});
		
		$(document).on("touchend", "#pulrefresh", function(e){
			carica3()
		});
		
		$(document).on("touchend", "#riccer", function(e){
			richiedicert()
		});
		$(document).on("touchend", "#ricric", function(e){
			richiediric()
		});
		

		setTimeout (function(){
			$("#pagee").show();
			$("#phone").show();
		}, 500);
		
		localStorage.setItem("caricazoom0", "0");
		
		$("#wrapper").bind("gestureend", function(event){
			localStorage.setItem("caricazoom0", "1");
		});
		
		$("#wrapper").bind("dblclick doubletap", function(event){
			//alert()
			localStorage.setItem("caricazoom0", "1");
		});



		var connectionStatus = false;
		connectionStatus = navigator.onLine ? 'online' : 'offline';
		
		if(connectionStatus=='online'){

			$(".spinner").hide();
			
			//checkpush()
			//provino()
			
			
			/*setTimeout (function(){
						
						PushbotsPlugin.getToken(function(token){
							
							localStorage.setItem("Token", token);
							
							regToken()

						});
						
			}, 2000);*/
			
		}
		else{
			/*$('#noconn').show();
			
			var tabella = "<table align='center' border='0' width='100%' height='120px'>";
			tabella = tabella + "<tr><td align='center'><a href='javascript:riparti()' class='btn'><font color='#fff'>Connetti</font></a></td></tr>";
			tabella = tabella + "</table>";
			
			$('#noconn').html(tabella);

			$(".spinner").hide();
			
			$("#footer").show();*/
		}
    }
	
}

function refreshPage() {
	$.mobile.changePage(
						window.location.href,
						{
      allowSamePageTransition : true,
      transition              : 'none',
      showLoadMsg             : false,
      reloadPage              : true
						}
						);
}


function verificawifi(){
	$("#verifica").click();
}


function onResume() {
	
	setTimeout(function() {
		//alert("onResume");
		//navigator.splashscreen.show();
		window.location.href = "#page";
		setTimeout(function() {
			$("#pagee").show();
			$("#phone").show();
			//navigator.splashscreen.hide();
		}, 2500);
	}, 0);
	
	//show splash
	//app.initialize();
}


function getKey(key){
	if ( key == null ) {
		keycode = event.keyCode;
		
	} else {
		keycode = key.keyCode;
	}
	
	if (keycode ==13){
		
		document.activeElement.blur();
		$("input").blur()
		return false;
		
	}
	
}


function alertDismissed() {
	
}


function initscroll() {
	
	//if is null
	if (localStorage.getItem("Token") === null || typeof(localStorage.getItem("Token")) == 'undefined' || localStorage.getItem("Token")=="null") {
		
		setTimeout (function(){
					
			PushbotsPlugin.getToken(function(token){
											
					localStorage.setItem("Token", token);
											
					regToken()
											
			});
					
		}, 500);
		
	}

	var myScroll;
	myScroll = new iScroll('wrapper', {
						   zoom: true,
						   click: true,
						   zoomMin:1,
						   zoomMax:1.5,
						   zoomStart:1,
						   hideScrollbar: true,
						   hScrollbar:false,
						   vScrollbar:false,
						   bounce: false,
						   wheelAction: 'zoom',
						   onBeforeScrollStart:function (e) {
						   
						   },
						   onScrollMove: function(e){}
						   });
	
	setTimeout (function(){
		myScroll.refresh();
	}, 500);
	
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	document.addEventListener('DOMContentLoaded', loaded, false);


}

function resetscroll() {
	
	
	/*var myScroll2;
	
	myScroll2 = new iScroll('wrapper2', {
							zoom: true,
							click: true,
							zoomMin:1,
							zoomMax:2,
							zoomStart:1,
							hideScrollbar: true,
							hScrollbar:false,
							vScrollbar:false
							});
	setTimeout (function(){
				
		myScroll2.refresh();
	
	}, 300);
	
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	document.addEventListener('DOMContentLoaded', loaded, false);*/
	
	setTimeout (function(){

		$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
				
		$("#pagee").show();
		$("#phone").show();
				
	}, 700);
	
}

function resetscroll7() {
	
	
	/*var myScroll7;
	
	myScroll7= new iScroll('wrapper7', {
							zoom: true,
							click: true,
							zoomMin:1,
							zoomMax:2,
							zoomStart:1,
							hideScrollbar: true,
							hScrollbar:false,
							vScrollbar:false
							});
	setTimeout (function(){
				
				myScroll7.refresh();

				}, 300);
	
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	document.addEventListener('DOMContentLoaded', loaded, false);*/
	
	setTimeout (function(){
				
		$.mobile.changePage( "#page", { transition: "slide", changeHash: false, reverse: true });
				
		$("#pagee").show();
		$("#phone").show();

				
	}, 700);
	
	
}

function resetscroll44() {
	
	setTimeout (function(){
				
				$.mobile.changePage( "#page4", { transition: "slide", changeHash: false, reverse: true });
				carica3()
				
				$("#pagee").show();
				$("#phone").show();
				
				
				}, 700);
	
	
}


function carica() {
	$("#pagee").hide();
	$("#phone").hide();
	localStorage.setItem("caricazoom", "0");
	
	$(".spinner").show();

	$("#wrapper2").bind("gestureend", function(event){
		localStorage.setItem("caricazoom", "1");
	});
	
	$("#wrapper2").bind("dblclick doubletap", function(event){
		localStorage.setItem("caricazoom", "1");
	});
	
	
	//setTimeout (function(){
	/*$("#galleriaimg").append("<tr><td width='100%' align='center' ><img id='figura' src='img/fig1.jpg' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='center' ><img src='img/fig2.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='center' ><img src='img/fig3.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr>");
				
		
		setTimeout (function(){
				$("#galleriaimg").append("<tr><td width='100%' align='center' ><img src='img/fig4.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='center' ><img src='img/fig5.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='center' ><img src='img/fig6.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='center' ><img src='img/fig7.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='center' ><img src='img/fig8.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='center' ><img src='img/fig9.png' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' align='center' ><img src='img/fig10.jpg' width='90%'></td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr><tr><td width='100%' colspan='2'>&nbsp;</td></tr>");
					
	 
					
		}, 0);*/


	var myScroll2;
	
	myScroll2 = new iScroll('wrapper2', {
							zoom: true,
							click: true,
							zoomMin:1,
							zoomMax:1.5,
							hideScrollbar: true,
							hScrollbar:false,
							vScrollbar:false,
							bounce: false
							});
	setTimeout (function(){
		$(".spinner").hide();
				
		myScroll2.refresh();
				
	}, 700);
	
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	document.addEventListener('DOMContentLoaded', loaded, false);

	
	//}, 500);
	
	//localStorage.setItem("caricafoto", "2");
	
	//refreshPage()
	
}

function carica2() {
	
	var myScroll3;
	
	myScroll3 = new iScroll('wrapper3', {
		click: true,
		zoom: true,
	});
	setTimeout (function(){
		myScroll3.refresh();
	}, 1000);
	
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	document.addEventListener('DOMContentLoaded', loaded, false);
}

function carica3() {
	
	//provino()
	
}

function carica4() {
	
	var myScroll6;
	
	myScroll6 = new iScroll('wrapper6', { click: true });
	setTimeout (function(){
		myScroll6.refresh();
	}, 1000);
	
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	document.addEventListener('DOMContentLoaded', loaded, false);
}

function carica8() {
	
	var myScroll8;
	
	myScroll8 = new iScroll('wrapper8', { click: true });
	setTimeout (function(){
		myScroll8.refresh();
	}, 1000);
	
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	document.addEventListener('DOMContentLoaded', loaded, false);
}

function carica5(id) {

	provino2(id)

}

function provino() {
	var ciccio;
	var conta = 1;
	localStorage.setItem("controllo", "1");
	PushbotsPlugin.resetBadge();
	
	var contenuto = ""
	//alert("1");

	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://interactivebusinessapp.it/event_list/"+ localStorage.getItem("Token") +"",
		   //data: {token:localStorage.getItem("Token")},
		   contentType: "application/json; charset=utf-8",
		   json: 'callback',
		   timeout: 7000,
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.company_id!=0){
				  //OK
				  
				  if(item.is_read==false){
				  
					if(screen.width < 768){
					    contenuto = contenuto + "<tr title='"+ item.event_id +"'><td width='90%' align='center'><table width='100%' align='left' valign='center'><tr><td width='100%' align='left' colspan='2' valign='center'><div id='datepush' class='visione'>"+ item.activated_at +" - "+ item.expire_on +" </div></td></tr><tr><td width='100%' colspan='2' valign='center'><div id='titolopush' class='visione'>"+ item.title +"</div> </td></tr></table></td><td width='120' align='center' valign='center'><img id='noletto' src='img/notRead.png' width='42px'></td></tr><tr><td colspan='2'><hr></td></tr>"
				  }
				  else{
					 contenuto = contenuto + "<tr title='"+ item.event_id +"'><td width='90%' align='center'><table width='100%' align='left' valign='center'><tr><td width='100%' align='left' colspan='2' valign='center'><div id='datepush' class='visioneIPAD'>"+ item.activated_at +" - "+ item.expire_on +" </div></td></tr><tr><td width='100%' colspan='2' valign='center'><div id='titolopush' class='visioneIPAD'>"+ item.title +"</div> </td></tr></table></td><td width='120' align='center' valign='center'><img id='noletto' src='img/notRead.png' width='80px'></td></tr><tr><td colspan='2'><hr></td></tr>"
				  }
				  
					//ciccio = item.image_tag;
				  }
				  else{
					if(screen.width < 768){
					   contenuto = contenuto + "<tr title='"+ item.event_id +"'><td width='90%' align='center'><table width='100%' align='left' valign='center'><tr><td width='100%' align='left' colspan='2' valign='center'><div id='datepush' class='visione'>"+ item.activated_at +" - "+ item.expire_on +" </div></td></tr><tr><td width='100%' colspan='2' valign='center'><div id='titolopush' class='visione'>"+ item.title +"</div> </td></tr></table></td><td width='120' align='center' valign='center'><img id='letto' src='img/read.png' width='42px'></td></tr><tr><td colspan='2'><hr></td></tr>"
				  }
				  else{
					contenuto = contenuto + "<tr title='"+ item.event_id +"'><td width='90%' align='center'><table width='100%' align='left' valign='center'><tr><td width='100%' align='left' colspan='2' valign='center'><div id='datepush' class='visioneIPAD'>"+ item.activated_at +" - "+ item.expire_on +" </div></td></tr><tr><td width='100%' colspan='2' valign='center'><div id='titolopush' class='visioneIPAD'>"+ item.title +"</div> </td></tr></table></td><td width='120' align='center' valign='center'><img id='letto' src='img/read.png' width='80px'></td></tr><tr><td colspan='2'><hr></td></tr>"
				  }
				  
					//ciccio = ciccio + item.image_tag;
				  }
				  
				  conta = conta + 1;
				  
				  }
				  else{
				  //alert(result.msg);
				  //window.location.href = "Froala/basic.html";
				  //self.document.formia2.emailL.value = localStorage.getItem("emailMemoria");
				  //window.location.href = "#article4";
				  
				  if(screen.width < 768){
				  contenuto = contenuto + "<tr><td width='90%' align='center'>Nessuna Notifica</td></tr><tr><td colspan='2'><hr></td></tr>"
				  }
				  else{
					 contenuto = contenuto + "<tr><td width='90%' align='center'>Nessuna Notifica</td></tr><tr><td colspan='2'><hr></td></tr>"
				  }
				  
			}
				  
		   });
		   
		   $("#contenuto").html(contenuto);
		   
		   $(".spinner").hide();
		   
		   $("tr").click(function(event) {
						 
				if(event.target.nodeName != "A"){
					if ($(this).attr("title") === null || typeof($(this).attr("title")) == 'undefined' || $(this).attr("title")==0){
				}
					else{
						 
						 if(localStorage.getItem("controllo") == "1"){
						 
						 $.mobile.changePage( "#page5", { transition: "slide", changeHash: false });

						 carica5($(this).attr("title"))
						 
						 }

					}
				}
			});
		   
		   var myScroll4;
		   
		   myScroll4 = new iScroll('wrapper4', { click: true });
		   setTimeout (function(){
				myScroll4.refresh();
			}, 700);
		   
		   
		   document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		   
		   document.addEventListener('DOMContentLoaded', loaded, false);
		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   contenuto = contenuto + "<tr><td width='90%' align='center'>Nessuna Notifica</td></tr><tr><td colspan='2'><hr></td></tr>"
		   
		   /*navigator.notification.alert(
										'Nessuna Connessione Internet, Riprova Tra Qualche Minuto',  // message
										alertDismissed,         // callback
										'Connessione Internet',            // title
										'OK'                  // buttonName
										);*/
		   
		   
		   },
		   dataType:"json"});
}

function provino2(id) {
	 $("#contenuto2").html("");
	
	var ciccio;
	var conta = 1;
	localStorage.setItem("controllo", "2");
	
	localStorage.setItem("caricazoom44", "0");
	
	$(".spinner").show();
	
	$("#wrapper5").bind("gestureend", function(event){
		localStorage.setItem("caricazoom44", "1");
	});
	
	$("#wrapper5").bind("dblclick doubletap", function(event){
		localStorage.setItem("caricazoom44", "1");
	});
	
	var contenuto2 = ""
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://interactivebusinessapp.it/event_details/by_id/"+ id +"/"+ localStorage.getItem("Token") +"",
		   //data: {token:localStorage.getItem("Token")},
		   contentType: "application/json; charset=utf-8",
		   json: 'callback',
		   timeout: 7000,
		   crossDomain: true,
		   success:function(result){

				  if (result.company_id!=0){
		   
			 localStorage.setItem("contact", result.contact);
			 localStorage.setItem("emailcontact", result.email);
			 localStorage.setItem("cellulare", result.phone);
		   
		   var testonuovo = result.description;
		   
		   testonuovo = testonuovo.replace("http://www","www")
		   testonuovo = testonuovo.replace("https://www","www")
		   
		   testonuovo = testonuovo.replace("www","http://www")
		   testonuovo = testonuovo.replace("Www","http://www")
		  
		   testonuovo = testonuovo.replace(/((http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?)/g,'<a id="my-link" href="$1" target="_system">$1</a>');
		   

			        if(screen.width < 768){
					contenuto2 = contenuto2 + "<table width='98%' height='100%' border='0' valign='center' align='center' class='div8'><tr><td width='100%' align='center' colspan='2'><font size='3' color='#042e72'><b>"+ result.activated_at +" - "+ result.expire_on +"</b></font></td></tr><tr><td width='100%' colspan='2' align='center'><font size='3' color='#000'><b>"+ result.title +"</b></font></td></tr><tr><td><hr></td></tr><tr> <td width='100%' align='left'>"+ testonuovo +"</td></tr><tr> <td width='100%'>&nbsp;</td></tr><tr><td width='100%' align='center' colspan='2'><img src='http://interactivebusinessapp.it/event_image/full_size/by_tag/"+ result.image_tag +"' width='90%'></td></tr><tr><td></td></tr><tr><td></td></tr></table>"
		            }
		   else{
			contenuto2 = contenuto2 + "<table width='98%' height='100%' border='0' valign='center' align='center' class='div8'><tr><td width='100%' align='center' colspan='2'><div id='datepush' class='visioneIPAD'><b>"+ result.activated_at +" - "+ result.expire_on +"</b></div></td></tr><tr><td width='100%' colspan='2' align='center'><div id='datepush' class='visione2IPAD'><b>"+ result.title +"</b></div></td></tr><tr><td><hr></td></tr><tr> <td width='100%' align='left'><div id='datepush' class='visioneIPAD'>"+ testonuovo +"</div></td></tr><tr> <td width='100%'>&nbsp;</td></tr><tr><td width='100%' align='center' colspan='2'><img src='http://interactivebusinessapp.it/event_image/full_size/by_tag/"+ result.image_tag +"' width='90%'></td></tr><tr><td></td></tr><tr><td></td></tr></table>"
		   }
		   
					conta = conta + 1;
				  
				  }
				  else{
				  
				  contenuto2 = contenuto2 + "<table width='98%' height='100%' border='0' valign='center' align='center' class='div8'><tr><td width='100%' align='center' colspan='2'>Nessuna Notifica</td></tr><tr><td width='100%' colspan='2'>Titolo della notifica</td></tr><tr><td><hr></td></tr><tr> <td width='100%' align='left'></td></tr><tr> <td width='100%'>&nbsp;</td></tr><tr><td width='100%' align='center' colspan='2'></td></tr></table>"
				  }
		   
		   $("#contenuto2").html(contenuto2);
		   
		   
		   
		   var myScroll5;
		   
		   myScroll5 = new iScroll('wrapper5', {
								   zoom: true,
								   click: true,
								   zoomMin:1,
								   zoomMax:1.5,
								   zoomStart:1,
								   hideScrollbar: true,
								   hScrollbar:false,
								   vScrollbar:false,
								   momentum: true,
								   checkDOMChanges: false,
								   topOnDOMChanges: false,
								   bounce: false
			});
		   setTimeout (function(){
				$(".spinner").hide();
				myScroll5.refresh();

			}, 700);
		   
		   
		   document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		   
		   document.addEventListener('DOMContentLoaded', loaded, false);
		   
		   document.getElementById("my-link").onclick = function(e) {
			  var ref = window.open(this.href, '_system', 'location=no');
		     // Return false to prevent the default action if you did redirect with script
		     return false;
		   }
		   

		   
		   },
		   error: function(){
		   $(".spinner").hide();
		   
		   
		   
		   navigator.notification.alert(
										'Nessuna Connessione Internet, Riprova Tra Qualche Minuto',  // message
										alertDismissed,         // callback
										'Connessione Internet',            // title
										'OK'                  // buttonName
										);
		   
		   
		   },
		   dataType:"json"});
	
	
	
}

function checkpush() {

	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://interactivebusinessapp.it/event_list/"+ localStorage.getItem("Token") +"",
		   //data: {token:localStorage.getItem("Token")},
		   contentType: "application/json; charset=utf-8",
		   json: 'callback',
		   timeout: 7000,
		   crossDomain: true,
		   success:function(result){
		   
		   $.each(result, function(i,item){
				  
				  if (item.company_id!=0){
				  //OK
				  
					if(item.is_read==false){
					  $("#pushbutton").removeClass("pulsante3").addClass("pulsante3new");
					  return false;
					}
					else
				    {
					   $("#pushbutton").removeClass("pulsante3new").addClass("pulsante3");
					}
				  }
			});

		   
		   $(".spinner").hide();
		   
		   
		   },
		   error: function(jqxhr,textStatus,errorThrown){
		
		console.log(jqxhr);
		console.log(textStatus);
		console.log(errorThrown);

					
		   //alert(ts.responseText)
		   
		   $(".spinner").hide();
		
		  /* navigator.notification.alert(
										'Nessuna Connessione Internet, Riprova Tra Qualche Minuto',  // message
										alertDismissed,         // callback
										'Connessione Internet',            // title
										'OK'                  // buttonName
										);*/
		   
		   
		   },
		   dataType:"json"});
}


function regToken() {
	var ciccio;
	var conta = 1;
	
	if (localStorage.getItem("Token") === null || typeof(localStorage.getItem("Token")) == 'undefined' || localStorage.getItem("Token")=="null") {
		return;
	}
	else
	{
	
	
	$(".spinner").show();
	$.ajax({
		   type:"GET",
		   url:"http://interactivebusinessapp.it/device/set_token/lpJkwsXpIGgLLAROXQoDbvEMblCgeTjAj2VQuTgdAwZl7Q95Gy/4gHHsBB1jb09J9XyQELLmorHSXE5LvsPMaxeL8f4kfe4pbCgQn/"+ localStorage.getItem("Token") +"",
		   //url:"http://interactivebusinessapp.it/device/set_token/{platform_code}/{company_code}/{device_token}",
		   //Android PxgLiaL7dBgTYUzUyHZRNGIUlT5NIabyHrkZC57PHoJGiiAQZA
		   //data: {token:localStorage.getItem("Token")},
		   contentType: "application/json; charset=utf-8",
		   json: 'callback',
		   timeout: 7000,
		   crossDomain: true,
		   success:function(result){
		   
		   //alert("OK")
		   
		   setTimeout (function(){
				checkpush()
			}, 500);
		   
		   },
		   error: function(){
		   
		   //alert("errore")

		   $(".spinner").hide();
		   
		   setTimeout (function(){
				checkpush()
			}, 500);
		   
		   /*navigator.notification.alert(
										'Nessuna Connessione Internet, Riprova Tra Qualche Minuto',  // message
										alertDismissed,         // callback
										'Connessione Internet',            // title
										'OK'                  // buttonName
										);*/
		   
		   
		   },
		   dataType:"json"});
		
	}

}


function apri(){

	$("#pluto").show();
	$("#pippo").slideToggle( "slow" );
}

function aprisms(){
	
	$("#pluto5").show();
	$("#pippo5").slideToggle("slow");
}

function chiudi(){
	
	$("#pluto").hide();
	$("#pippo").slideToggle( "slow" );
}

function chiudi5(){
	
	$("#pluto5").hide();
	$("#pippo5").slideToggle("slow");
}

function vedi () {
	
	$("#pagee").hide();
	$("#phone").hide();
	localStorage.setItem("caricazoom7", "0");
	
	$("#wrapper7").bind("gestureend", function(event){
			localStorage.setItem("caricazoom7", "1");
	});
	
	$("#wrapper7").bind("dblclick doubletap", function(event){
		localStorage.setItem("caricazoom7", "1");
	});
	
	if(screen.width < 768){
		//alert(screen.width);
		//alert(screen.height);
	}
	else
	{
		//alert(screen.width);
		
		$("#testoTitolo3").attr("class", "visione3IPAD");
		$("#testo3").attr("class", "visioneIPAD");
	}
	
	var myScroll7;
	
	myScroll7 = new iScroll('wrapper7', {
							zoom: true,
							click: true,
							zoomMin:1,
							zoomMax:1.5,
							zoomStart:1,
							hideScrollbar: true,
							hScrollbar:false,
							vScrollbar:false,
							bounce: false
	});
	setTimeout (function(){
		myScroll7.refresh();
	}, 500);
	
	
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	
	document.addEventListener('DOMContentLoaded', loaded, false);
	
	//$("#altro").show();
	//myScroll.refresh();
	
}

function NoVedi () {
	myScroll.scrollTo(0,0);
	myScroll.refresh();
}


function aprifb () {
	var ref = window.open('https://m.facebook.com/', '_system', 'location=no');
}

function apritw () {
	var ref = window.open('http://www.twitter.com/?lang=it', '_system', 'location=no');
}

function apriweb () {
	var ref = window.open('http://www.google.com', '_system', 'location=no');
}

function aprili () {
	var ref = window.open('https://www.linkedin.com', '_system', 'location=no');
}

function aprimail0 () {
	
	window.plugin.email.open({
							 to:      "mariola@bni-italia.it ",
							 subject: "info",
							 body:    "",
							 isHtml:  true
							 });
	
	
}

function aprimail5 () {

window.plugin.email.open({
	to:      "",
	subject: "",
	body:    "La Digital Business Card IBA di 'Paolo Mariola' e' disponibile al link http://www.interactivebusinessapp.it/download/p_mariola",
	isHtml:  true
});


}

function mandasms5 () {
	window.plugins.socialsharing.shareViaSMS("La Digital Business Card IBA di 'Paolo Mariola' e' disponibile al link http://www.interactivebusinessapp.it/download/p_mariola", "", function(msg) {console.log('ok: ' + msg)}, function(msg) {alert('error: ' + msg)})
	
	chiudi5()
}

function aprimail () {
	
	window.plugin.email.open({
		to: ""+ localStorage.getItem("emailcontact") +"",
		subject: "",
		body: "A, "+ localStorage.getItem("contact") +"",
		isHtml: true
	});
	
	
}

function mandasms () {
	window.plugins.socialsharing.shareViaSMS("A, "+ localStorage.getItem("contact") +",", ""+ localStorage.getItem("cellulare") +"", function(msg) {console.log('ok: ' + msg)}, function(msg) {alert('error: ' + msg)})
	
	chiudi5()
}

function aprimappa () {
	
	var addressLongLat = '41.929622, 12.608878';
	
	//window.open("http://maps.apple.com/?q="+addressLongLat, '_blank'); 
	
	window.open("http://maps.apple.com/?address=51,Via Monte Rosa,Milano,italia", "_system");
	
	
}

function aprivideo1 () {
	
	var id = "cf5PVgbrlCM";
	var ref = window.open('http://www.youtube.com/embed/cf5PVgbrlCM?html5=1', '_blank', 'location=yes');
	
}

function aprivideo2 () {
	
	var id = "Hl10lNEVBrU";
	var ref = window.open('http://www.youtube.com/embed/Hl10lNEVBrU?html5=1', '_blank', 'location=yes');
	
}

function richiedicert () {
	
	$("#formreg3").hide();
	$("#formreg2").show();
	
}

function richiediric () {
	
	//$("#formreg1").hide();
	$("#formreg2").hide();
	$("#formreg3").show();
	
}



function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
						  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
						  results = regex.exec(location.search);
						  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
						  }



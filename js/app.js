//Define variaveis das ids
body = document.getElementById("body");

start = document.getElementById("start");
pause = document.getElementById("pause");
reset = document.getElementById("reset");
stop  = document.getElementById("stop");

seconds = document.getElementById("s");
minutes = document.getElementById("m");

controller = document.getElementById("controller");
wrapper = document.getElementById("wrapper");

volta = document.getElementById("volta");

function sizeOfThings(){
	var windowHeight = window.innerHeight;
	body.setAttribute("style","height:" + windowHeight + "px;");
	// document.querySelector('.painel').setAttribute("style","line-height:" + windowHeight + "px;");

};

sizeOfThings();

window.addEventListener('resize', function(){
	sizeOfThings();
});

//Inicia o Cronometro, na funcao updateDisplay
function Start() {
	myVar = setInterval(updateDisplay, 1000);
}

function Pause() {
	clearInterval(myVar);
}

function Reset(){
	Pause();

	s.innerText="00";
	m.innerText="00";		

	Start();
}

function Stop() {
	clearInterval(myVar);
	s.innerText="00";
	m.innerText="00";
}

function limpaVolta() {
	var volta = document.querySelector('.volta');
	while (volta.firstChild) {
	  volta.removeChild(volta.firstChild);
	}
}

function updateDisplay(){		
	var s_val = s.innerText;
	var m_val = m.innerText;

	s_val++;
	
	if ( s_val < 10 ) {
		s_val = "0" + s_val;
	}

	else if ( s_val > 59 ) {
		s_val = "00";
		m_val++;
		if ( m_val < 10 ) {
			m_val = "0" + m_val;
		}
		m.innerText = m_val;
	}
	s.innerText = s_val;

}

//Botoes
start.onclick=function(){ 
	Start(); 
	body.setAttribute("class", "start");
	wrapper.removeAttribute("class","show");
};

pause.onclick=function(){ 
	Pause(); 
	body.setAttribute("class", "pause");
	wrapper.removeAttribute("class","show");
};

reset.onclick=function(){ 
	Reset(); 
	body.setAttribute("class", "start");
	wrapper.removeAttribute("class","show");
	limpaVolta();
};

stop.onclick=function(){ 
	Stop(); 
	body.setAttribute("class", "stop");
	wrapper.removeAttribute("class","show");
};

volta.onclick=function(){ 
	var tempo = document.querySelector('.time').innerText;
	var tempo = document.createTextNode(tempo);
	var lista = document.createElement("li");
	lista.appendChild(tempo);
	document.querySelector('.volta').appendChild(lista);
}
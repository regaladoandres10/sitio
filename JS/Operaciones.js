window.onload = function()
{
	var n = document.getElementById('numero');
	var Mostrar = document.getElementById('btn_Mostrar');
	var divHTML = document.getElementById('div_Resultado');
	Mostrar.addEventListener("click", datos_Click);

	function datos_Click()
	{
		var Volumen, PI, P;
		Radio = parseFloat(numero.value);
		PI = 3.14159;
		P = "VOLUME";
		Volumen = PI * Radio * Radio * Radio * (4.0/3);
		div_Resultado.innerHTML = P + " = " + Volumen.toFixed(3);
	}
}
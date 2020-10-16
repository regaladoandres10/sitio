window.onload = function()
{
	var a = document.getElementById('numero');
	var b = document.getElementById('numero2');
	var Mostrar = document.getElementById('btn_Mostrar');
	var divHTML = document.getElementById('div_Resultado');
	Mostrar.addEventListener("click", datos_Click);

	function datos_Click()
	{
		X = parseFloat(numero.value);
		Y = parseFloat(numero2.value);
		if (X > 0 && Y > 0) 
		{
			div_Resultado.innerHTML = "Q1";
		}
		else if (X < 0 && Y > 0) 
		{
			div_Resultado.innerHTML = "Q2";
		}
		else if (X < 0 && Y < 0) 
		{
			div_Resultado.innerHTML = "Q3";
		}
		else if (X > 0 && Y < 0) 
		{
			div_Resultado.innerHTML = "Q4";
		}
		else if (X == 0 && Y == 0) 
		{
			div_Resultado.innerHTML = "Origem";
		}
		else if (X == 0 && Y != 0) 
		{
			div_Resultado.innerHTML = "Eixo Y";
		}
		else if (Y == 0 && X != 0) 
		{
			div_Resultado.innerHTML = "Eixo X";
		}
	}
}
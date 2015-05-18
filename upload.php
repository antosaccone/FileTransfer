<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Upload</title>
</head>

<body>
<?php
	//Este archivo iría en la carpeta fotos del hosting
	//Se podría hacer un HTML con un form para probar si la imagen se sube bien
	$destino = "/home/ucymxbzr/public_html/fotos/"; //Empieza con / xq es un servidor linux
	$archivo = $destino.basename($_FILES['foto']['name']); //basename devuelve el último componente de una ruta, igual que substr en JS
	if(move_uploaded_file($_FILES['foto']['tmp_name'], $archivo)){
		echo "El archivo es válido y fue cargado exitosamente.";	
	}else{
		echo "¡Posible ataque de carga de archivos!";
	}
	
	//print_r($_FILES); Para ver todo lo que le llega
?>
</body>
</html>
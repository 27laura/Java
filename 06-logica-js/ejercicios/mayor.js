let n1, n2, n3, mayor;
n1 = parseInt(prompt("Digite el primer número"));
n2 = parseInt(prompt("Digite el segundo número"));
n3 = parseInt(prompt("Digite el primer número"));

if(n1 >= n2 && n1 >= n3){
    mayor = n1;
}else if(n2 >= n1 && n2 >= n3){
    mayor = n2;
}else{
    mayor = n3;
}
alert("El número mayor es:"+ mayor);


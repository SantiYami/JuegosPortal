$(document).ready(inicio);

function inicio(){
	puntaje= 0;
	vida=100;
	lienzo = $("#lienzo")[0];
	contexto = lienzo.getContext("2d");
	buffer = document.createElement("canvas");

	portal1 = new Portal();
	portal1.dibujar(contexto);
	
	portal2 = new Portal();
	portal2.dibujar(contexto);
	
	portal3 = new Portal();
	portal3.dibujar(contexto);
	
	portal4 = new Portal();
	portal4.dibujar(contexto);
	
	bom1 = new Bomba();
	bom1.dibujar(contexto);
	
	bom2 = new Bomba();
	bom2.dibujar(contexto);
	
	bom3 = new Bomba();
	bom3.dibujar(contexto);
	
	bom4 = new Bomba();
	bom4.dibujar(contexto);
	
	bom5 = new Bomba();
	bom5.dibujar(contexto);
	
	bom6 = new Bomba();
	bom6.dibujar(contexto);
	
	personaje = new Personaje();
	personaje.dibujar(contexto); 
	
	animar();
}

function animar(){
	contexto.clearRect(0,0,1500,800);
	contexto.drawImage($("#fondo")[0],0,0);
	portal1.dibujar(contexto);
	portal2.dibujar(contexto);
	portal3.dibujar(contexto);
	portal4.dibujar(contexto);
	bom1.dibujar(contexto);
	bom2.dibujar(contexto);
	bom3.dibujar(contexto);
	bom4.dibujar(contexto);
	bom5.dibujar(contexto);
	bom6.dibujar(contexto);
	personaje.dibujar(contexto);
	personaje.actualizar(0,contexto);
	window.onkeydown = compruebaTecla;
	
	setTimeout("animar()",20)
	contexto.font="bold 22px sans-serif";
	contexto.fillStyle='white';
	contexto.fillText("Puntaje: "+puntaje,20,780);
}

function Portal(){
	this.x=numeroAleatorio(-10,1450);
	this.y=numeroAleatorio(-10,720);
	this.SupY=this.y;
	this.InfY=this.y+150;
	this.DerX=this.x+150;
	this.IzqX=this.x;
	
	this.imagenesP = [$("#p1")[0],$("#p2")[0],$("#p3")[0],$("#p4")[0],$("#p5")[0],$("#p6")[0],$("#p7")[0],$("#p8")[0],$("#p9")[0],$("#p10")[0],$("#p11")[0],$("#p12")[0],$("#p13")[0],$("#p14")[0],$("#p15")[0]];
	this.contP=0;
	this.img=this.imagenesP[this.contP];
	
	this.dibujar=function(ctx){
		ctx.drawImage(this.img,this.x,this.y);
	}
}

function Bomba(){
	this.x=numeroAleatorio(-10,1450);
	this.y=numeroAleatorio(-10,720);
	this.SupY=this.y;
	this.InfY=this.y+20;
	this.DerX=this.x+20;
	this.IzqX=this.x;
	
	
	this.img=$("#bomba")[0];
	
	this.dibujar=function(ctx){
		ctx.drawImage(this.img,this.x,this.y);
	}
}

function Personaje(){
	this.x=numeroAleatorio(-10,1450);
	this.y=numeroAleatorio(-10,720);
	this.imagenes = [$("#u1")[0],$("#u2")[0],$("#u3")[0],$("#u4")[0],$("#u5")[0],$("#u6")[0],$("#u7")[0],$("#u8")[0],$("#u9")[0],$("#u10")[0]];
	this.imagenes2 = [$("#a1")[0],$("#a2")[0],$("#a3")[0],$("#a4")[0],$("#a5")[0],$("#a6")[0],$("#a7")[0],$("#a8")[0],$("#a9")[0],$("#a10")[0]];
	this.imagenes3 = [$("#d1")[0],$("#d2")[0],$("#d3")[0],$("#d4")[0],$("#d5")[0],$("#d6")[0],$("#d7")[0],$("#d8")[0],$("#d9")[0],$("#d10")[0]];
	this.imagenes4 = [$("#i1")[0],$("#i2")[0],$("#i3")[0],$("#i4")[0],$("#i5")[0],$("#i6")[0],$("#i7")[0],$("#i8")[0],$("#i9")[0],$("#i10")[0]];
	this.cont = 0;
	this.img=this.imagenes[this.cont];
	this.dibujar=function(ctx){
		ctx.drawImage(this.img,this.x,this.y);
	}

	this.actualizar=function(num,contexto){
			this.cont = (this.cont + 1) % 10;
			portal1.contP= (portal1.contP+1)%15;
			portal1.img=portal1.imagenesP[portal1.contP]; 
			portal2.contP= (portal1.contP+1)%15;
			portal2.img=portal1.imagenesP[portal1.contP]; 
			portal3.contP= (portal1.contP+1)%15;
			portal3.img=portal1.imagenesP[portal1.contP]; 
			portal4.contP= (portal1.contP+1)%15;
			portal4.img=portal1.imagenesP[portal1.contP]; 
			
		if(num==2){
			this.img=this.imagenes3[this.cont]; 
			this.x=this.x+10;
			this.dibujar(contexto);
		}
		else if(num==3){
			this.img=this.imagenes4[this.cont]; 
			this.x=this.x-10;
			this.dibujar(contexto);
		}
		else if(num==4){
			this.img=this.imagenes[this.cont]; 
			this.y=this.y-10;
			this.dibujar(contexto);
		}
		else if(num==5){
			this.img=this.imagenes2[this.cont]; 
			this.y=this.y+10;
			this.dibujar(contexto);
		}
		if(this.x<-17)
			this.x=this.x+10;
		else if(this.x>1450)
			this.x=this.x-10;
		else if(this.y<-20)
			this.y=this.y+10;
		else if(this.y>720)
			this.y=this.y-10;
		
		//Portales
		if(this.x+130>portal1.IzqX && this.x<portal1.DerX && this.y+130>portal1.SupY && this.y<portal1.InfY){
			this.x=numeroAleatorio(-10,1450);
			this.y=numeroAleatorio(-10,720);
			puntaje=puntaje+1;
		}
		if(this.x+130>portal2.IzqX && this.x<portal2.DerX && this.y+130>portal2.SupY && this.y<portal2.InfY){
			this.x=numeroAleatorio(-10,1450);
			this.y=numeroAleatorio(-10,720);
			puntaje=puntaje+1;
		}
		if(this.x+130>portal3.IzqX && this.x<portal3.DerX && this.y+130>portal3.SupY && this.y<portal3.InfY){
			this.x=numeroAleatorio(-10,1450);
			this.y=numeroAleatorio(-10,720);
			puntaje=puntaje+1;
		}
		if(this.x+130>portal4.IzqX && this.x<portal4.DerX && this.y+130>portal4.SupY && this.y<portal4.InfY){
			this.x=numeroAleatorio(-10,1450);
			this.y=numeroAleatorio(-10,720);
			puntaje=puntaje+1;
			
		}
		
		//Bombas
		if(this.x+130>bom1.IzqX && this.x<bom1.DerX && this.y+130>bom1.SupY && this.y<bom1.InfY){
			bom1.delete;
			bom1 = new Bomba();
			bom1.dibujar(contexto);
			vida=vida-5;
		}
		if(this.x+130>bom2.IzqX && this.x<bom2.DerX && this.y+130>bom2.SupY && this.y<bom2.InfY){
			bom2.delete;
			bom2 = new Bomba();
			bom2.dibujar(contexto);
			vida=vida-5;
		}
		if(this.x+130>bom3.IzqX && this.x<bom3.DerX && this.y+130>bom3.SupY && this.y<bom3.InfY){
			bom3.delete;
			bom3 = new Bomba();
			bom3.dibujar(contexto);
			vida=vida-5;
		}
		if(this.x+130>bom4.IzqX && this.x<bom4.DerX && this.y+130>bom4.SupY && this.y<bom4.InfY){
			bom4.delete;
			bom4 = new Bomba();
			bom4.dibujar(contexto);
			vida=vida-5;
		}
		if(this.x+130>bom5.IzqX && this.x<bom5.DerX && this.y+130>bom5.SupY && this.y<bom5.InfY){
			bom5.delete;
			bom5 = new Bomba();
			bom5.dibujar(contexto);
			vida=vida-5;
		}
		if(this.x+130>bom6.IzqX && this.x<bom6.DerX && this.y+130>bom6.SupY && this.y<bom6.InfY){
			bom6.delete;
			bom6 = new Bomba();
			bom6.dibujar(contexto);
			vida=vida-5;
		}
		contexto.fillText("Puntaje: "+puntaje,20,780);
		contexto.fillText("Vida: "+vida,500,780);
		if(vida<=0){
			contexto.fillText("Perdiste",1000,780);
		}
	}
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function compruebaTecla (e) {
var keyCode = document.all ? e.which : e.keyCode;
  if (keyCode == 39)//derecha
	personaje.actualizar(2,contexto);
  else if (keyCode == 37)//izquierda
	personaje.actualizar(3,contexto);
  else if (keyCode ==38)//arriba
    personaje.actualizar(4,contexto);
  else if (keyCode ==40)//abajo
	personaje.actualizar(5,contexto);
  return true;
}

 
 


let u=1;
bl=200;
bb=200;
function mousePressed(){
       bb=bb-20;}
class bird{

  
      
  show(){
    bb=bb+u;
    rect(bl,bb,20,20);}}

  
class obstacle{
  
  constructor(x,y,l,b){
    
    this.y=ay;
    this.x=ax;
    this.l=random(200,100);
    this.b=20;
  ax=ax+100;
     this.x1=this.x;
     this.l1=450-this.l-100;
    this.y1=450-this.l1;
 
   
 }
   
    move(){
      this.x=this.x-u;
      this.x1=this.x1-u;
    if(this.x==200 )
    {
          
   if(bb<this.l || bb>(450-this.l1)){
     u=0;}}
     
   
   
    
  
}
       show(){
      rect(this.x,this.y,this.b,this.l);
       rect(this.x1,this.y1,this.b,this.l1);
    }
  
  
  
}
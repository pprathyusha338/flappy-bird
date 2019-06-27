recs=[]
let ax=50;
let ay=0;
 
function setup() {
  b=new bird();
  
  createCanvas(450,450);
  for(i=0;i<1000;i++){
    rec=new obstacle();
    recs.push(rec);}

}
function draw() {
  background("black");
  for (let y of recs){
    
  y.move();
    y.show();}
    b.show();
    }

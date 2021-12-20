import { CatchingPokemonSharp } from '@mui/icons-material';
import React from 'react';
import Sketch from 'react-p5';

let order;
let n;
let total;
let path;
let clickDetails=[];
let coolBG;
    

export default function Drawing(props) {
    
  let width = Math.max(
    document.body.scrollHeight, document.documentElement.scrollWidth,
    document.body.offsetHeight, document.documentElement.offsetWidth,
    document.body.clientHeight, document.documentElement.clientWidth
  );
    let height = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );

    console.log("dimensions: ", width, height)
    function hilbert(i) {
      
      let points = [];
      points.push( [0, 0] );
      points.push( [0, 1] );
      points.push( [1, 1] );
      points.push( [1, 0] );
      // console.log("points: ", points)
      let index = i&3;
      let v =  points[index];
      
      for( let j = 1; j < order; j++){ 
        i = i>>2;
        index = i&3;
        var len = Math.pow(2,j);
    
        if (index == 0) {
          let temp = v[0];
          v[0] = v[1];
          v[1] = temp;
        } else if ( index == 1 ){
          v[1] += len;
        } else if ( index == 2) {
          v[0] += len;
          v[1] += len;
        } else if (index == 3) {
          let temp = len-1-v[0];
          v[0] = len-1-v[1];
          v[1] = temp;
          v[0] += len;
        }
      }
      
      return v
    } 


    const preload = (p5) => {
      coolBG = p5.loadImage('https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');

    }

    const setup = (p5, canvasParentRef) => {
      p5.createCanvas(width, height).parent(canvasParentRef);
      p5.angleMode(p5.DEGREES);
      p5.strokeWeight(6);
      
      order = 5;
      n = Math.pow(2, order);
      total = n*n;
      path = [];
      // setInterval(RandomCurve, 3000)

      
      
      for( let i = 0; i < total; i++){
        let len = window.innerWidth/(1*n);
        path[i] = hilbert(i).map((x) => (x*len) + len/2);
      }
    }

    function drawCurve(clickInfo, p5){
      let origin = clickInfo.coordinates;
      let counter = clickInfo.counter;
      let color = clickInfo.color;
      // p5.stroke(color[0], color[1], color[2]);
      p5.stroke(Math.random() * (180 - 40) + 180);
      // console.log(clickInfo.color);
    
      p5.push();
      p5.translate(origin[0], origin[1]);
      p5.scale(0.10)
      
        p5.push();
        p5.rotate(0);
        p5.beginShape();
      
          for (let i = Math.max(counter-256,0); i < Math.min(counter,path.length/4); i++){
            p5.vertex(path[i][0], path[i][1]);
          }
        p5.endShape();
        p5.pop();
    
        p5.push();
        p5.rotate(90);
        p5.beginShape();
    
          for (let i = Math.max(counter-256,0); i < Math.min(counter,path.length/4); i++){
            p5.vertex(path[i][0], path[i][1]);
          }
        p5.endShape();
        p5.pop();
    
        p5.push();
        p5.rotate(180);
        p5.beginShape();
    
          for (let i = Math.max(counter-256,0); i < Math.min(counter,path.length/4); i++){
            p5.vertex(path[i][0], path[i][1]);
          }
        p5.endShape();
        p5.pop();
    
        p5.push();
        p5.rotate(270);
        p5.beginShape();
  
          for (let i = Math.max(counter-256,0); i < Math.min(counter,path.length/4); i++){
            p5.vertex(path[i][0], path[i][1]);
          }
        p5.endShape();
        p5.pop();
    
      p5.pop();
    
    }
    
    const draw = p5 => {
      p5.image(coolBG, 0, 0, width, height)
      
      p5.noFill();

      // circle(100,100,200);
      
      clickDetails.map(click => { drawCurve(click, p5); click.counter+=1 });
      
      if(clickDetails.length>0 && clickDetails[0].counter>=path.length/2) {
        clickDetails.shift();
      }

      // p5.textFont('Arial');
      // p5.textStyle(p5.ITALIC);
      // p5.textSize(20);
      // p5.stroke(256);
      // p5.text("© Akshay Sharma, 2021", window.innerWidth*0.7, window.innerHeight*0.95);
    }

    
    function RandomCurve(){
      if(clickDetails.length<20){
        clickDetails.push({coordinates: [Math.random() * window.innerWidth,Math.random()*window.innerHeight], counter: 0, color:  [Math.random() * 256, Math.random() * 256, Math.random() * 256 ]})
      }
    }

    function mousePressed(e){
      console.log("dimensions: ", width, height)
      if(!(e.mouseX > window.innerWidth*0.12 && e.mouseX < window.innerWidth*0.88 && e.mouseY>window.innerHeight*0.12 && e.mouseY<window.innerHeight*0.77))
        clickDetails.push({coordinates: [e.mouseX,e.mouseY], counter: 0, color:  [Math.random() * 256, Math.random() * 256, Math.random() * 256 ]})
    }

    const windowResized = (p5) => {
      p5.resizeCanvas(window.innerWidth, window.innerHeight);
    }
    
    return <Sketch windowResized={windowResized} preload={preload}setup={setup} draw={draw} mousePressed={mousePressed} />
  }
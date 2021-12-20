import React, {useEffect, memo} from "react";
import Sketch from "react-p5";

export default memo( (props, p5) => {
    let mouseX = 0;
    let mouseY = 0;
    let img;
    let lastRot = 0;
    let transformedMouseX = 0.0000001;
    let transformedMouseY = 0.000001;
    console.log("hiii: ", props.mobile)
    let mobileScale = (props.mobile) ? 1.3 : 1;
    let pt = [(window.innerWidth*-0.375) - 0.5, (window.innerHeight*-0.375) - 0.5, window.innerWidth*0.75, window.innerHeight*0.65 * mobileScale];
    let hit = false;
    let angle = 0;
    let mouseVector;
    let target;
    console.log("rendering")

    const preload = (p5) => {
        console.log("preloading...")
        img = p5.loadImage('https://images.unsplash.com/photo-1585511582331-14e7c5f89735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrJTIwdGV4dHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80');
    }


	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL).parent(canvasParentRef);
        p5.angleMode(p5.DEGREES);
        mouseVector  = p5.createVector();

	};


	const draw = (p5) => {
		p5.clear();

        p5.directionalLight(256, 256, 256,  1,  0, -0.1);
        p5.directionalLight(256, 256, 256, -1,  0, -0.1);
        p5.directionalLight(256, 256, 256,  0,  1, -0.1);
        p5.directionalLight(256, 256, 256,  0, -1, -0.1);

        p5.texture(img);

        mouseVector = p5.createVector(transformedMouseX, transformedMouseY);        
        mouseVector.rotate(90);
        // console.log("mouseVector: ", mouseVector)

        // console.log("\n\nRotAngle: ", 15*(transformedMouseX/0.375), "\naxis:", mouseVector);


        if(hit){
            let t = 10 * (Math.sqrt(Math.pow(transformedMouseY,2) + Math.pow(transformedMouseX,2))/0.375);
        
            if(angle>t){
                angle = Math.max(angle-0.5,t);
            }
            else if (angle<t){
                angle = Math.min(angle+0.5, t);
            }
        } 
        else {
            
            if(angle>target){
                angle = Math.max(angle-0.5,target);
            } else if (angle<target){
                angle = Math.min(angle+0.5,target);
            }
            else if(angle == target && target != 0){
                target = target*-0.6 ;
            }
        }

        // console.log(mouseVector + "\nPT: " +  pt + "\nAngle: " + angle )
        p5.rotate(angle, mouseVector);
        // console.log("pt: ", pt);
        p5.rect(pt[0], pt[1], pt[2], pt[3]);
        // p5.circle(transformedMouseX * window.innerWidth, transformedMouseY*window.innerHeight, 50)
        
        // p5.stroke(255, 0, 0); 
        // p5.strokeWeight(10);

        // p5.beginShape(p5.POINTS);
        // p5.vertex(0, 0);
        // p5.endShape();
	};


    function mouseMoved(e){
        mouseX=e.mouseX;
        mouseY=e.mouseY;
        transformedMouseX = (mouseX/(window.innerWidth)) - 0.5;
        transformedMouseY = (mouseY/(window.innerHeight)) - 0.5;

        // console.log("mouse: ", mouseX, mouseY);
        // console.log("transformed:", transformedMouseX, transformedMouseY);

        let px = (pt[0]/(window.innerWidth));
        let py = (pt[1]/(window.innerHeight));
        let px2 = ((pt[0]+pt[2])/(window.innerWidth));
        let py2 = ((pt[1]+pt[3])/(window.innerHeight))
        // console.log(px, py)
        // console.log("Res: ",  transformedMouseY<py2, transformedMouseY, py2)
        if(transformedMouseX > px && transformedMouseX < px2 && transformedMouseY > py && transformedMouseY < py2) {
            hit = true;
            target = angle * -0.6;
        }
        else{
            hit = false;
        }

        // console.log(hit + "\n\n" + pt + "\n\n" + transformedMouseX + " " +   transformedMouseY )
    }

    const windowResized = (p5) =>{
        p5.resizeCanvas(window.innerWidth, window.innerHeight)
        pt = [(window.innerWidth*-0.375) - 0.5, (window.innerHeight*-0.375) - 0.5, window.innerWidth*0.75, window.innerHeight*0.65];
    }

	return <Sketch windowResized={windowResized} preload={preload} setup={setup} draw={draw} mouseMoved={mouseMoved} />;
})
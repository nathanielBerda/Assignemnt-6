var main = document.createElement('div');
main.className = "mainDiv"
var body = document.getElementsByTagName("body")[0];
body.appendChild(main);

body.style.margin="0"


array= new Array(20);

for(i=0;i<20;i++){
    array[i]=Math.floor(Math.random()*3+2);
    console.log(array[i]);
}

for(i=0;i<20;i++){
    for(j=0;j<array[i];j++){
    var dirt = document.createElement('div');
    dirt.setAttribute("x", i);
    dirt.setAttribute('y', j);
    dirt.id="d"+"x"+i+"y"+j;
    dirt.className="square dirt";
    dirt.style.marginLeft= i*50 + "px";
    dirt.style.marginTop= 550-j*50+ "px";
    dirt.innerHTML= i+","+j;
    main.appendChild(dirt);
    }
    var grass = document.createElement('div');
    grass.setAttribute("x", i);
    grass.id="g"+"x"+i+"y"+j;
    grass.setAttribute('y', array[i]);
    grass.className="square grass";
    grass.style.marginLeft= i*50 + "px";
    grass.style.marginTop= 550-array[i]*50+ "px";
    grass.innerHTML= i+","+array[i];
    main.appendChild(grass);
    for(j=array[i]+1;j<12;j++){
    var sky = document.createElement('div');
    sky.setAttribute("x", i);
    sky.id="s"+"x"+i+"y"+j;
    sky.setAttribute('y', j);
    sky.className="square sky"
    sky.style.marginLeft= i*50 + "px";
    sky.style.marginTop= 550-j*50+ "px";
    sky.innerHTML= i+","+j;
    main.appendChild(sky);
    }
}

t=Math.floor(Math.random()*18+1);
for(i=0;i<3;i++){
var tree = document.createElement('div');
    tree.className="square tree";
    tree.style.marginLeft= t*50 + "px";
    tree.style.marginTop= 550-array[t]*50-50*(i+1)+"px";
    tree.innerHTML= i+","+array[i];
    tree.id="t"+"x"+i+"y"+j;
    main.appendChild(tree);
}
for(i=0;i<3;i++){
    for(j=0;j<4;j++){
    var leaf = document.createElement('div');
    leaf.className="square leaf";
    leaf.style.marginLeft= t*50-100+i*50+50 + "px";
    leaf.style.marginTop= 550-array[t]*50-4*50-50*j+"px";
    leaf.innerHTML= i+","+array[i];
    leaf.id="l"+"x"+i+"y"+j;
    main.appendChild(leaf);
    }
}

arrayRock=Math.floor(Math.random()*18);
for(i=0;i<3;i++){
    var rock = document.createElement('div');
    rock.className="square rock";
    rock.style.marginLeft= (arrayRock+i)*50+ "px";
    rock.style.marginTop= 550-(array[arrayRock+i]+1)*50+"px";
    rock.innerHTML= i+","+array[i];
    rock.id="r"+"x"+i+"y"+j;
    main.appendChild(rock);
  }


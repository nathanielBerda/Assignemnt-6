var main = document.createElement('div');
main.className = "mainDiv";
var body = document.getElementsByTagName("body")[0];
body.appendChild(main);
body.style.margin="0";


var sideBar = $("<div></div>");
sideBar.addClass("sideBar");
sideBar.appendTo( body );

var toolsBox = $("<div></div>");
toolsBox.addClass("toolsBox");
toolsBox.appendTo( sideBar );

var toolAxe = $("<div></div>");
toolAxe.addClass("tool toolAxe");
toolAxe.attr("id","axe");
toolAxe.appendTo( toolsBox );

var toolShovel = $("<div></div>");
toolShovel.addClass("tool toolShovel");
toolShovel.attr("id","shovel");
toolShovel.appendTo( toolsBox );

var toolPickAxe = $("<div></div>");
toolPickAxe.addClass("tool toolPickAxe");
toolPickAxe.attr("id","pickAxe");
toolPickAxe.appendTo( toolsBox );

var rockInventory = $("<div></div>");
rockInventory.addClass("inventory");
rockInventory.attr("id","rockInv");
rockInventory.appendTo( toolsBox );

var grassInventory = $("<div></div>");
grassInventory.addClass("inventory");
grassInventory.attr("id","grassInv");
grassInventory.appendTo( toolsBox );

var treeInventory = $("<div></div>");
treeInventory.addClass("inventory");
treeInventory.attr("id","treeInv");
treeInventory.appendTo( toolsBox );

var leafInventory = $("<div></div>");
leafInventory.addClass("inventory");
leafInventory.attr("id","leafInv");
leafInventory.appendTo( toolsBox );




array= new Array(20);

for(i=0;i<20;i++){
    array[i]=Math.floor(Math.random()*3+2);
    console.log(array[i]);
}

for(i=0;i<20;i++){
    for(j=0;j<array[i];j++){
    
var dirt = document.createElement('div');
    dirt.className="square dirt";
    dirt.setAttribute("x", i);
    dirt.setAttribute('y', j);
    dirt.id="d"+"x"+i+"y"+j;
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

var selectedTool = '';
var bagWood = [];
var bagRock = [];
var bagGrass = [];

$(".tool").click(function(){
    selectedTool = this.id;
});

$(".square.sky").click(function(){
    console.log('hello');
});
$(".square.rock").one('click', rockClick);
$(".square.tree").one('click', treeClick);
$(".square.leaf").one('click', leafClick);
$(".square.grass").one('click', grassClick);


var rockCount = 0;
var grassCount = 0;
var woodCount = 0;
var leafCount = 0;

function rockClick(){
    console.log("before click", $(this));
    if (selectedTool == 'pickAxe'){
        bagRock.push(this);
        $(this).removeClass('rock').addClass('sky');
        console.log('rock is gone');
        console.log(bagRock);

        if (rockCount == 0){
            rockCount++;
            $('#rockInv').addClass('inv rock');
            $('#rockInv').text(rockCount);
        } else {
            rockCount++;
            $('#rockInv').text(rockCount);
        }
    }
}

function grassClick(){
    if (selectedTool == 'shovel'){
        bagGrass.push(this);
        $(this).removeClass('grass').addClass('sky');
        console.log('grass is gone');
        console.log(bagGrass);

        if (grassCount == 0){
            grassCount++;
            $('#grassInv').addClass('inv grass');
            $('#grassInv').text(grassCount);
        } else {
            grassCount++;
            $('#grassInv').text(grassCount);
        }
    }
}


// var woodCount = 0;
// var leafCount = 0;

function treeClick(){
    if (selectedTool == 'axe'){
        bagWood.push(this);
        $(this).removeClass('tree').addClass('sky');
        console.log('tree is gone');
        console.log(bagWood);

        if (woodCount == 0){
            woodCount++;
            $('#treeInv').addClass('inv tree');
            $('#treeInv').text(woodCount);
        } else {
            woodCount++;
            $('#treeInv').text(woodCount);
        }

    }
}


function leafClick(){
    if (selectedTool == 'axe'){
        bagWood.push(this);
        $(this).removeClass('leaf').addClass('sky');
        console.log('leaf is gone');
        console.log(bagWood);

        if (leafCount == 0){
            leafCount++;
            $('#leafInv').addClass('inv leaf');
            $('#leafInv').text(leafCount);
        } else {
            leafCount++;
            $('#leafInv').text(leafCount);
        }

    }
}


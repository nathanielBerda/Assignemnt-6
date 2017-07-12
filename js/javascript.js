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
toolsBox.css('cursor','pointer');
toolsBox.css('z-index','999999');

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

var dirtInventory = $("<div></div>");
dirtInventory.addClass("inventory");
dirtInventory.attr("id","dirtInv");
dirtInventory.appendTo( toolsBox );


array= new Array(20);

for(i=0;i<20;i++){
    array[i]=Math.floor(Math.random()*3+2);
    console.log(array[i]);
}
for(i=0;i<20;i++){
    
for(j=0;j<12;j++){
        var sky = document.createElement('div');
    // sky.setAttribute("x", i);
    sky.id="s"+"x"+i+"y"+j;
    // sky.setAttribute('y', j);
    sky.className="square sky"
    sky.style.marginLeft= i*50 + "px";
    sky.style.marginTop= 550-j*50+ "px";
    sky.innerHTML= i+","+j;
    main.appendChild(sky);
    }
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
    grass.setAttribute('y', array[i]);
    grass.id="g"+"x"+i+"y"+j;
    grass.className="square grass";
    grass.style.marginLeft= i*50 + "px";
    grass.style.marginTop= 550-array[i]*50+ "px";
    grass.innerHTML= i+","+array[i];
    main.appendChild(grass);

    
}

t=Math.floor(Math.random()*18+1);
for(j=array[t];j<array[t]+3;j++){
var tree = document.createElement('div');
    tree.setAttribute("x", t);
    tree.setAttribute('y', j+1);
    tree.className="square tree";
    tree.style.marginLeft= t*50 + "px";
    tree.style.marginTop= 550-50*(j+1)+"px";
    tree.innerHTML= t+","+(j+1);
    tree.id="t"+"x"+t+"y"+j+1;
    main.appendChild(tree);
}
for(i=t;i<t+3;i++){
    for(j=array[t];j<array[t]+4;j++){
    var leaf = document.createElement('div');
    leaf.setAttribute("x", (i-1));
    leaf.setAttribute('y', (j+4));
    leaf.className="square leaf";
    leaf.style.marginLeft= t*50-100+(i-t)*50+50 + "px";
    leaf.style.marginTop= 550-array[t]*50-4*50-50*(j-array[t])+"px";
    leaf.innerHTML= (i-1)+","+(j+4);
    leaf.id="l"+"x"+(i-1)+"y"+j+4;
    main.appendChild(leaf);
    }
}


arrayRock=Math.floor(Math.random()*18);
for(i=arrayRock;i<arrayRock+3;i++){
    var rock = document.createElement('div');
    rock.setAttribute("x", i);
    rock.setAttribute('y', (array[i]+1));
    rock.className="square rock";
    rock.style.marginLeft= (i)*50+ "px";
    rock.style.marginTop= 550-(array[i]+1)*50+"px";
    rock.innerHTML= i+","+(array[i]+1);
    rock.id="r"+"x"+i+"y"+j;
    main.appendChild(rock);
  }

var selectedTool = '';



$(".tool").click(function(){

    $('.tool').removeClass('selected');
    selectedTool = this.id;
    $('.logo').hide();
    $(this).addClass('selected');
    // $('body').css('cursor', 'url(../Assignemnt-6/imgs/cursor/'+selectedTool+'.png)');      

    $(document).mousemove(function(e) {
        $('#'+selectedTool).show();
        $('#'+selectedTool).offset({
            left: e.pageX -50 ,
            top: e.pageY -50,
    });
    $('body').css('cursor','none');    
});
});

$(".square.rock").on('click', rockClick);
$(".square.tree").on('click', treeClick);
$(".square.leaf").on('click', leafClick);
$(".square.grass").on('click', grassClick);
$(".square.dirt").on('click', dirtClick);

var rockCount = 0;
var grassCount = 0;
var woodCount = 0;
var leafCount = 0;
var dirtCount = 0;

function rockClick(){
    console.log("before click", $(this));
    if (selectedTool == 'pickAxe'){
        // var y = parseInt(this.style.marginTop);
        // var f = $(this).attr('x');
        // var g =  $(this).attr('y');
        // console.log('x value::' + f);

        // var a = $( "div[x='"+f+"']" );
        // console.log(a);
        // for(j=g;j<12;j++){
        //     // var oldMargin = a[j].css("margin-top")
        //     console.log("to move dpwn",a[j], j)
        //     $(a[j]).css('margin-top',parseInt(($(a[j]).css("margin-top"))+50+'px'))
        // }


        $(this).remove();
        console.log('rock is gone');

       


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
        $(this).remove();
        console.log('grass is gone');

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

function dirtClick(){
    if (selectedTool == 'shovel'){
        // var y = parseInt(this.style.marginTop);
        // var f = $(this).attr('x');
        // var g =  parseInt($(this).attr('y'));
        // console.log('x value:' + f);

        // var a = $( "div[x='"+f+"']" );
        // console.log(a);
        // console.log(g);
        // for(j=g;j<a.length;j++){
        //     // var oldMargin = a[j].css("margin-top")
        //     var oldMargin = parseInt(($(a[j]).css("margin-top")))+50+'px';
        //     $(a[j]).css('margin-top',oldMargin);
        // }

        $(this).remove();
        console.log('dirt is gone');

        if (dirtCount == 0){
            dirtCount++;
            $('#dirtInv').addClass('inv dirt');
            $('#dirtInv').text(dirtCount);
        } else {
            dirtCount++;
            $('#dirtInv').text(dirtCount);
        }
    }
}

function treeClick(){
    if (selectedTool == 'axe'){
        $(this).remove();
        console.log('tree is gone');

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
        $(this).remove();
        console.log('leaf is gone');

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


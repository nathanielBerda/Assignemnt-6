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
// toolsBox.css('cursor','pointer'); 
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
rockInventory.attr("element","rock");
rockInventory.attr("arrayNo","0");
rockInventory.appendTo( toolsBox );

var grassInventory = $("<div></div>");
grassInventory.addClass("inventory");
grassInventory.attr("id","grassInv");
grassInventory.attr("element","grass");
grassInventory.attr("arrayNo","1");
grassInventory.appendTo( toolsBox );

var treeInventory = $("<div></div>");
treeInventory.addClass("inventory");
treeInventory.attr("id","treeInv");
treeInventory.attr("element","tree");
treeInventory.attr("arrayNo","2");
treeInventory.appendTo( toolsBox );

var leafInventory = $("<div></div>");
leafInventory.addClass("inventory");
leafInventory.attr("id","leafInv");
leafInventory.attr("element","leaf");
leafInventory.attr("arrayNo","3");
leafInventory.appendTo( toolsBox );

var dirtInventory = $("<div></div>");
dirtInventory.addClass("inventory");
dirtInventory.attr("id","dirtInv");
dirtInventory.attr("element","dirt");
dirtInventory.attr("arrayNo","4");
dirtInventory.appendTo( toolsBox );

array= new Array(20);

for(i=0;i<20;i++){
    array[i]=Math.floor(Math.random()*3+2);

}
for(i=0;i<20;i++){
    
for(j=0;j<12;j++){
        var sky = document.createElement('div');
    sky.setAttribute("sx", i);
    sky.id="s"+"x"+i+"y"+j;
    sky.setAttribute('sy', j);
    sky.className="square sky"
    sky.style.marginLeft= i*50 + "px";
    sky.style.marginTop= 550-j*50+ "px";
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
    main.appendChild(dirt);
    }

var grass = document.createElement('div');
    grass.setAttribute("x", i);
    grass.setAttribute('y', array[i]);
    grass.id="g"+"x"+i+"y"+j;
    grass.className="square grass";
    grass.style.marginLeft= i*50 + "px";
    grass.style.marginTop= 550-array[i]*50+ "px";
    main.appendChild(grass);

    
}

arrayRock=Math.floor(Math.random()*18);
for(i=arrayRock;i<arrayRock+3;i++){
    var rock = document.createElement('div');
    rock.setAttribute("x", i);
    rock.setAttribute('y', (array[i]+1));
    rock.className="square rock";
    rock.style.marginLeft= (i)*50+ "px";
    rock.style.marginTop= 550-(array[i]+1)*50+"px";
    rock.id="r"+"x"+i+"y"+j;
    main.appendChild(rock);
  }

t=Math.floor(Math.random()*18+1);
for(j=array[t];j<array[t]+3;j++){
var tree = document.createElement('div');
    tree.setAttribute("x", t);
    tree.setAttribute('y', j+1);
    tree.className="square tree";
    tree.style.marginLeft= t*50 + "px";
    tree.style.marginTop= 550-50*(j+1)+"px";
    tree.id="t"+"x"+t+"y"+j+1;
    main.appendChild(tree);
}
for(i=t;i<t+3;i++){
    for(j=array[t];j<array[t]+4;j++){
    var leaf = document.createElement('div');
    leaf.setAttribute("x", t);
    leaf.setAttribute('y', (j+4));
    leaf.className="square leaf";
    leaf.style.marginLeft= t*50-100+(i-t)*50+50 + "px";
    leaf.style.marginTop= 550-array[t]*50-4*50-50*(j-array[t])+"px";
    leaf.id="l"+"x"+(i-1)+"y"+j+4;
    main.appendChild(leaf);
    }
}




var selectedTool = '';

$(".tool").click(function(){
    $('.tool').removeClass('selected');
    selectedTool = this.id;
    $('.cursors').hide();
    $('body').css('cursor','none');
    $(this).addClass('selected');
    // $('body').css('cursor', 'url(../Assignemnt-6/imgs/cursor/'+selectedTool+'.png)');      

    $(document).mousemove(function(e) {
        $('#'+selectedTool).show();

        $('#'+selectedTool).offset({
            left: e.pageX -50 ,
            top: e.pageY -50,
    });
    //   
});
});

$(".square.rock").click(rockClick);
$(".square.tree").on('click', treeClick);
$(".square.leaf").on('click', leafClick);
$(".square.grass").on('click', grassClick);
$(".square.dirt").on('click', dirtClick);

$(".square.sky").on('click',addelement);

$(".inventory").on('click',pickBlock);




var rockCount = 0;
var grassCount = 0;
var woodCount = 0;
var leafCount = 0;
var dirtCount = 0;

element = "";

var invArray = [0,0,0,0,0];
var b = '';

function pickBlock(){
    selectedTool = '';
    $('.toolsBox').children().removeClass('selected');
    $('.cursors').hide(); 
    body.style.cursor = 'pointer'; 

    
    element = $(this).attr('element');
    $(this).addClass('selected');
    b = $(this).attr('arrayNo');
    console.log(b);
}






function addelement(){
    console.log('b is:' +b);
console.log(invArray[b]);
    if (element == '') {

    } 
    else if (invArray[b] > 0){
        // alert("create leaf");
        i=parseInt($(this).attr('sx'));
        j=parseInt($(this).attr('sy'));
        // alert(j);
        var are = document.createElement('div');
        are.setAttribute("x", 12);
        are.setAttribute('y', (10+4));
        $(are).addClass("square "+ element);
        are.style.marginLeft= i*50+"px"
        are.style.marginTop= 550-j*50+"px";
        console.log(invArray[b]);
        main.appendChild(are);
        var hash = element+'Inv';
        
        if (invArray[b] == 0){
            $("#" + hash).removeClass('inv ' + element);
            $("#" + hash).text('');
        }
        else {
             invArray[b]--;  
           $("#" + hash).text(invArray[b]);
        } 
    
    } 
console.log('b is:' +b);

    // if (grassCount != 0){
    //     alert("create grass");
    //     i=parseInt($(this).attr('sx'));
    //     j=parseInt($(this).attr('sy'));
    //     // alert(j);
    //     var grass = document.createElement('div');
    //     grass.setAttribute("x", 12);
    //     grass.setAttribute('y', (10+4));
    //     $(grass).addClass("square grass");
    //     grass.style.marginLeft= i*50+"px"
    //     grass.style.marginTop= 550-j*50+"px";
    //     grass.innerHTML= "cacoudij"
    //     grass.id="cacou"
    //     main.appendChild(grass);
    //     rockCount--;
    //     $('#grassInv').text(grassCount);
    //     if ($('#grassInv').text() == 0){
    //         $('#grassInv').removeClass('inv grass');
    //         $('#grassInv').text('');
    //     }
    // }



}




function rockClick(){
    if (selectedTool == 'pickAxe'){
    // var y = parseInt(this.style.marginTop);
    //     var f = $(this).attr('x');
    //     var g =  parseInt($(this).attr('y'));
     

    //     var a = $( "div[x='"+f+"']" );
    //     console.log(a.length);
    //     console.log(a);
    //      for(j=g;j<a.length+1;j++){
    //          // var oldMargin = a[j].css("margin-top")
    //          var oldMargin = parseInt(($(a[j]).css("margin-top")))+50+'px';
    //          $(a[j]).css('margin-top',oldMargin);
    //           var oldy = parseInt(($(a[j]).attr("y")))-1;
    //          $(a[j]).attr('y',oldy);
    //          $(a[j]).text(f+","+oldy);
    //     }

        $(this).remove();

       invArray[0]++;



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
        var y = parseInt(this.style.marginTop);
        var f = $(this).attr('x');
        var g =  parseInt($(this).attr('y'));
     

        var a = $( "div[x='"+f+"']" );
        console.log(a.length);
        console.log(a);
         for(j=g;j<a.length+1;j++){
             // var oldMargin = a[j].css("margin-top")
             var oldMargin = parseInt(($(a[j]).css("margin-top")))+50+'px';
             $(a[j]).css('margin-top',oldMargin);
              var oldy = parseInt(($(a[j]).attr("y")))-1;
             $(a[j]).attr('y',oldy);
             
        }

        invArray[1]++



        $(this).remove();

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
        var y = parseInt(this.style.marginTop);
        var f = $(this).attr('x');
        var g =  parseInt($(this).attr('y'));
     

        var a = $( "div[x='"+f+"']" );
        console.log(a.length);
        console.log(a);
         for(j=g;j<a.length+1;j++){
             // var oldMargin = a[j].css("margin-top")
             var oldMargin = parseInt(($(a[j]).css("margin-top")))+50+'px';
             $(a[j]).css('margin-top',oldMargin);
              var oldy = parseInt(($(a[j]).attr("y")))-1;
             $(a[j]).attr('y',oldy);
        }
        invArray[4]++

        $(this).remove();

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
        var y = parseInt(this.style.marginTop);
        var f = $(this).attr('x');
        var g =  parseInt($(this).attr('y'));
     

        var a = $( "div[x='"+f+"']" );
        console.log('a length is:' +a.length);
        console.log(a);
        console.log('g is:' +g );
         for(j=g+1;j<a.length+1;j++){
             // var oldMargin = a[j].css("margin-top")
             var oldMargin = parseInt(($(a[j]).css("margin-top")))+50+'px';
             $(a[j]).css('margin-top',oldMargin);
              var oldy = parseInt(($(a[j]).attr("y")))-1;
             $(a[j]).attr('y',oldy);
        }
        
        
        invArray[2]++
        
        
        $(this).remove();

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
       invArray[3]++
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


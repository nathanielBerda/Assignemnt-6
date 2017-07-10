var main = document.createElement('div');
main.style.width = "1000px";
main.style.height = "600px";
main.style.zIndex = 9;
main.style.border = "2px solid";
main.style.marginLeft= "20px";
main.style.marginTop= "20px";
main.style.background= "#7FFFD4";
var body = document.getElementsByTagName("body")[0];
body.appendChild(main);

body.style.margin="0"



for(i=0;i<10;i++){
    var dirt = document.createElement('div');
dirt.className="dirt"

    main.appendChild(dirt);
}


array= new Array(20);
for(i=0;i<20;i++){
    array[i]=Math.floor(Math.random());
}
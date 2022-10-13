//header content

var logo = document.createElement("img");
var header = document.createElement("header");
var site_title = document.createElement("h1");
var button1 = document.createElement("button");
var button2 = document.createElement("Button");


logo.src = "https://res.cloudinary.com/derrickstahlman/image/upload/v1665416689/monthly_bean_gauvls.png";


var buttonText1 = document.createTextNode("Home");
var buttonText2 = document.createTextNode("Subscribe");
var title_text = document.createTextNode("The Monthly Bean");


site_title.appendChild(title_text);
button1.appendChild(buttonText1);
button2.appendChild(buttonText2);


header.appendChild(logo);
header.appendChild(site_title);
header.appendChild(button1);
header.appendChild(button2);


header.style.width = "100vw";
header.style.minHeight = "15vh";
header.style.fontSize = "1.5em";
header.style.borderBottom = "2px solid black";
header.style.textAlign = "center";

button1.style.margin = "1em";
button2.style.margin = "1em";

logo.style.display = "block";
logo.style.height = "15vh";














document.body.appendChild(header);











//main content



var main = document.createElement("main");
var main_title = document.createElement("h2");
var main_header = document.createElement("h3");

var main_header2 = document.createElement("h3");
var main_header3 = document.createElement("h3");
var main_title_text = document.createTextNode("Monthly Subscription levels");
var mh_text = document.createTextNode("Level 1 $7.99");
var mh2_text = document.createTextNode("Level 2 $9.99");
var mh3_text = document.createTextNode("Level 3 $12.99");


var mp_text = document.createTextNode("This level includes 1 bag of our finest coffee, a code to access our daily musing blog, and a monthly bean sticker upon signing up.");
var mp2_text = document.createTextNode("This level includes 1 bag of our finest coffee, 10 coffee pods, a code to access our daily musings, and a monthly bean coaster up signing up.");
var mp3_text = document.createTextNode("This level includes 1 bag of our finest coffee, 30 coffee pods, a code to access our daily musings and a coffee cup upon signing up.");
var main_para = document.createElement("p");
var main_para2 = document.createElement("p");
var main_para3 = document.createElement("p");





main_title.appendChild(main_title_text);
main_header.appendChild(mh_text);
main_header2.appendChild(mh2_text);
main_header3.appendChild(mh3_text);
main_para.appendChild(mp_text)
main_para2.appendChild(mp2_text)
main_para3.appendChild(mp3_text)

main.appendChild(main_title);
main.appendChild(main_header);
main.appendChild(main_para);
main.appendChild(main_header2);
main.appendChild(main_para2);
main.appendChild(main_header3);
main.appendChild(main_para3);

main.style.width = "50vw";
main.style.fontSize = "2em"; 
main.style.margin = "0 auto";
main_header.style.backgroundColor = "black";
main_header.style.color = "white";
main_header2.style.backgroundColor = "black";
main_header2.style.color = "white";
main_header3.style.backgroundColor = "black";
main_header3.style.color = "white";
main_header.style.textAlign = "center";
main_header2.style.textAlign = "center";
main_header3.style.textAlign = "center";



document.body.appendChild(main);




//footer content

var footer = document.createElement("footer");


var site_copy = document.createElement("p");

var copyright = document.createTextNode(" ©Derrick Stahlman");
site_copy.appendChild(copyright);
footer.appendChild(site_copy);

footer.style.width = "100vw";
footer.style.height = "5vh";
footer.style.borderTop = "2px solid black";
site_copy.style.textAlign = "center";




document.body.appendChild(footer)








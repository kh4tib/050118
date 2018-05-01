let i = 0;
let image = [];
let time = 3000;

image[0] = "https://images.unsplash.com/photo-1525092005711-6006b26262b9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=28a520ea456f52e2c37a9cd6bbe993c0&auto=format&fit=crop&w=2089&q=80";
image[1] = "https://images.unsplash.com/photo-1435783099294-283725c37230?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=35daf97494e5fcbe60535eb8f8a2c6de&auto=format&fit=crop&w=2000&q=80";
image[2] = "https://images.unsplash.com/photo-1488120299791-f9241bdf10c9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fdc89b097dfc81ef5a0989b27831eaab&auto=format&fit=crop&w=1419&q=80";
image[3] = "https://images.unsplash.com/photo-1506860076259-17466043319b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d8f399d6629cc7e4e3ba6b41dd802b5&auto=format&fit=crop&w=2002&q=80";

function imageSlide(){
    document.slide.src = image[i];

    if(i < image.length -1){
        i++;
    } else {
        i = 0;
    }
    
    setTimeout("imageSlide()", time);
}

window.onload = imageSlide;
let addButton=document.getElementById("add");
let form=document.getElementById("form");
let closeButton=document.getElementById("close");
let posts=document.getElementById("posts");


addButton.addEventListener("click",()=>{
    form.style.visibility="visible"
});


let uploaded_image=""
let image_input=document.getElementById("file")
form.addEventListener("change",function(){
    const reader=new filfeReader();
    reader.addEventListener("load",(e)=>{
        uploaded_image=reader.result;
        document.querySelector("#file");
    })
    reader.readAsDataURL(this.files[0]);
})


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let titre = document.getElementById("title").value;
    let ficher =document.getElementById("file").value;
    let description=document.getElementById("description").value;
    

    let uploaded_image=""
    // let image_input=document.getElementById("file")
    form.addEventListener("change",function(){
        const reader=new filfeReader();
        reader.addEventListener("load",(e)=>{
            uploaded_image=reader.result;
            document.getElementById("file");
        })
        reader.readAsDataURL(this.files[0]);
    })



    //Création des éléments de notre dome
    let divElement=document.createElement("div");
    let pElement=document.createElement("p");
    let imgElement=document.createElement("img");
    let h2Element=document.createElement('h2');
    let spanElement=document.createElement("span")

    //Capturer la datte du post
    let date= new Date();
    let dateFr=date.toLocaleDateString("fr-FR",{
        weekday:"long",
        year:"numeric",
        month:"long",
        day:"numeric",
    });


    h2Element.innerHTML=titre;
    pElement.innerHTML=description;
    imgElement.src=ficher;
    spanElement=dateFr;
    
    divElement.appendChild(pElement);
    divElement.appendChild(h2Element);
    divElement.appendChild(imgElement);

    // let image_input=document.getElementById("file")
    form.addEventListener("change",function(){
        const reader=new filfeReader();
        reader.addEventListener("load",(e)=>{
            ficher=reader.result;
        })
    })




    posts.appendChild(divElement);
    form.reset();
    form.style.visibility="hidden"
});

closeButton.addEventListener("click",(e)=>{
    form.style.visibility="hidden";
})



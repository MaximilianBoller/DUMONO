

var infoReq = new XMLHttpRequest(); // New request object

let collectionArray = [];

infoReq.onload = function() {
    //console.log(this.response);

    let jsonObject = JSON.parse(this.response);
    collectionArray = jsonObject.collections;

    console.log(collectionArray);
    createCollectionBanner();
};
infoReq.open("get", "collections.json", true);
infoReq.send();







let collectionCarrussel = document.getElementById('collectionCarrusel');




function createCollectionBanner(){

    if(collectionCarrussel.innerHTML != null){
        collectionCarrussel.innerHTML = "";
    }

    for(let i = 0; i < collectionArray.length; ++i){


        // tag
        let tag = document.createElement('div');
            tag.classList.add("banner-tag");
            tag.innerText = collectionArray[i].tag;

        // illustration
        let illustration = document.createElement('div');
            illustration.classList.add("banner-illustration");
            illustration.style.backgroundImage = 'url(' + collectionArray[i].illustration + ')';



        // counter
        let carrusellCounter = document.createElement('div');
            carrusellCounter.classList.add("carrusel-counter");
            carrusellCounter.innerText = i+1 + " / " + collectionArray.length;


        // back button
        let backBanner  = document.createElement('img');
            backBanner.classList.add("icon-button");
            backBanner.setAttribute('src', "img/icon/back.svg");
            backBanner.setAttribute('id', "banner-carrusel-back");
            backBanner.addEventListener('click', function(){
                previouseBanner();
            });

            // forward button
        let forwardBanner  = document.createElement('img');
            forwardBanner.classList.add("icon-button");
            forwardBanner.setAttribute('src', "img/icon/forward.svg");
            forwardBanner.setAttribute('id', "banner-carrusel-forward");
            forwardBanner.addEventListener('click', function(){
                nextBanner();
            });


        let banner = document.createElement('div');
            banner.classList.add("banner");
            //banner.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(' + collectionArray[i].img + ');';
            banner.style.backgroundImage = 'url(' + collectionArray[i].img + ')';

            //linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(' + collectionArray[i].img + ');


        let emptyDiv = document.createElement('div');
            emptyDiv.classList.add("banner-image");


        let bannerText = document.createElement('div');
            bannerText.classList.add("banner-text");

        let name = document.createElement('div');
            name.classList.add('banner-name');
            name.innerText = collectionArray[i].name;

        let description = document.createElement('div');
            description.classList.add('banner-description');
            description.innerText = collectionArray[i].description;
        
        let goToCollectionButton = document.createElement('div');
            goToCollectionButton.classList.add("call-to-action-button");
            goToCollectionButton.innerText = "View Collection";


            bannerText.append(name);
            bannerText.append(description);
            bannerText.append(goToCollectionButton);

            banner.append(backBanner);
            banner.append(bannerText);
            banner.append(forwardBanner);
            banner.append(carrusellCounter);

            banner.append(tag);
            banner.append(illustration);

            bannerArray[i] = banner;


    }

    addBannerToCarrusel();
}


let bannerArray = [];
let i = 0;



function addBannerToCarrusel(){

    if(collectionCarrussel.innerHTML != null){
        collectionCarrussel.innerHTML = "";
        collectionCarrussel.append(bannerArray[0]);
    }else{
        collectionCarrussel.append(bannerArray[0]);
    }

}

function nextBanner(){
    if(i < bannerArray.length - 1){
        i = ++i;
        updateBanner();
  
    }else{
        i = 0;
        updateBanner();
    }
}

function previouseBanner(){
    if(i > 0){
        i = --i;
        updateBanner();
  
    }else{
        i = bannerArray.length - 1;
        updateBanner();
    }

}

function updateBanner(){
    if(collectionCarrussel.innerHTML != null){
        collectionCarrussel.innerHTML = "";
        collectionCarrussel.append(bannerArray[i]);
    }else{
        collectionCarrussel.append(bannerArray[i]);
    }  
}


window.onload = function () {
    setInterval(nextBanner, 5000);
    console.log("next banner");
};
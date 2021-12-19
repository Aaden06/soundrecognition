function startmicrophone(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/TI3okMVf3/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("type_of_noise").innerHTML = 'I can hear-'+ results[0].label;
        document.getElementById("accuracy_number").innerHTML = 'Accuracy-'+ (results[0].confidence*100).toFixed(2)+"%";
        img = document.getElementById("image");
        if(results[0].label == "bark"){
            img.src = "dog.jpeg";
        }
        if(results[0].label == "meow"){
            img.src = "cat.jpeg";
        }
        if(results[0].label == "roar"){
            img.src = "lion.jpeg";
        }
        else{
            img.src = "ear.jpeg";
        }

    }
}


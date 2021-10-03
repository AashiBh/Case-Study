console.log('ml5 version', ml5.version);
classifier= ml5.imageClassifier('MobileNet', modelLoaded);
function modelLoaded(){
    console.log('Model Loaded');
}
var Anna=document.getElementById("PrettyWB")
function identify(){
    classifier.classify(Anna, gotResult);
}
function gotResult(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("ResultName").innerHTML= results[0].label;
    }
}
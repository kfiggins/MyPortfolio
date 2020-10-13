//initialization of the model object  
let mobileNet;       

//setup function is the Startup function in P5   
function setup()   {   

      //create canvas on the page   
     createCanvas(400,300);    

     //initialize the image in a variable       
     img_dog=createImg('./ironman.jpg',imageReady);    

      //hide the image from displaying it on the Page    
      img_dog.hide();        

      //initialize the mobilenet object with a callback       
      mobileNet= ml5.imageClassifier('MobileNet',ModelLoaded);      
 } 

//callback function indicating  the image is ready and is Displayed on the Canvas   
function imageReady()   {

       //Displaying the image on the canvas     
       image(img_dog,0,0,400,300);   

}       

//callback function for when the model is ready for prediction   
function ModelLoaded()   {       
       console.log('Model is ready');       
       
       //predicting the image after the Image and Model is Ready, Its again need a callback    
       // because prediction takes time   
       mobileNet.predict(img_dog,result)  
 }     
  
//callback function to get the results   
function result(err,res)   {    

       //check for errors   
        if(err)       
        {   
             //log the error if any    
             console.error(err)      
        }    
       else
       {   
        //log the result    
        console.log(res);  
  
        //get the label from the JSON result   
       let label = res[0].className;     
   
       //get the probablity from the JSON result   
       let prob = res[0].probability;  
     
       //creation of DOM and printing the label and probability    
       fill(0);    
       createP(label);    
       createP(prob);       
      }  
 }



const button1=document.getElementById("btn");


const apiKey="29VRDJyYeV1oNuFVzSXFMA==hPlj6qXNTPVN1rKM";


const options={
    method:"GET",
    headers:{
  "X-Api-Key": apiKey,      
    },
};



async functon getquote(){
    const response=await fetch(apiUrl,options)
    const data= response.jason()
    console.log(data);
}

button1.addEventListener("click",getquote);

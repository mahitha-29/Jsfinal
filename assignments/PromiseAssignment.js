
//using arrow
let getData = (uId) =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve("mahitha.kamarapu@zemosolabs.com");
            }, 4000);
    })
    }
 let Display = async ()=>{  
    console.log("start");
    getData("mahitha").then((email)=>{
        console.log("Email id of the user id is: " + email);
        console.log("end");
    }) 
}
Display();


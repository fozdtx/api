var UUID = null;

function search(){
  
  
  // uuid generation 
  UUID = crypto.randomUUID();
  
  // getting url
  var url = document.getElementById("url").value;
  
  // checking if https clint is there 
  if (url.includes("https://") === true){
    
    window.open(url);
    
  }
  // if https clint included
  else if (url.includes("http://") === true) {
  
    window.open(url);
  
  }
  // if www. domain hosting includes
  else if (url.includes("www.") ===  true){
    
    window.open("https://" + url);
    
  }
  
  // if any clint not included then 
  else {
    
    document.write("<a style='text-align:center;padding:10%;border: 1px solid black;' href='https://www." + url + ".com'> " + url + ".com</a>")
    
  }
  
  document.getElementById("search_id").innerHTML = UUID;
  
  
  // searching 
  // window.open(url);
  
  
}

function get(){
  
  
  // getting the text area
  var txt = document.getElementById("txt").value;
  
  if (document.getElementById("txt").value.includes("hy") ===  true){
    
    alert("hy")
    
  }
  
  
}

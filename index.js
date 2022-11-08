function findDigits(n) {
    // Write your code here
    
    let arr = Array.from(String(n), Number);
    let count = 0;
    
    for(let i=0; i<arr.length; i++){
        
        if(n%arr[i] === 0) {
            count += 1
        } 
    }
    
return count;
    
}

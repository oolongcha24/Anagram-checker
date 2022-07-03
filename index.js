let output = document.getElementById("answer")

function isAnagram(){
    let str1 = document.getElementById("string1").value;
    let str2 = document.getElementById("string2").value;
    let sortedStr1 = str1.toLowerCase().split('').sort().join('');
    let sortedStr2 = str2.toLowerCase().split('').sort().join('');
    console.log(sortedStr1) 
    console.log(sortedStr2)
    if(sortedStr1 === sortedStr2){
        console.log("true")
        output.innerText = "Yes! Word2 is an anagram of Word1."
    }
    else{
        console.log("false")
        output.innerText = "No! It is not anagram."
    }
}

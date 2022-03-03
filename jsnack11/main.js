

const newArray = [1, 2, 3, 4, 5, 6, 7, 8];

const redDiv = document.getElementById(`red`);
const greenDiv = document.getElementById(`green`);

        for (let i = 0; i < newArray.length; i++){
            if (oddOrEven(newArray[i])){
                console.log("pari")
                redDiv.innerHTML+= newArray[i] + " ";
            } else {
                console.log("dispari")
                greenDiv.innerHTML+= newArray[i] + " ";
            }
        }

    function oddOrEven (number){
    
        if (number % 2 === 0){
            return true;
        }
        return false;
    
    }

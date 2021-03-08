var question1 = prompt("What  animal is the superhero most similar to?");
var regx1 = /^[a-z]+$/;
if(question1.length<=20 && question1.match(regx1)){
    var question2 = prompt("Is the superher o male or female? Leave blank if uknown or other.");
    var regx2 = /^$|(male|female)/;
    if(question2.match(regx2)){
        var question3 = prompt("How old is the superhero?");
        var regx3 = /^[1-9]\d*$/;
        if(question3.length <= 5 && question3.match(regx3)){
            if(question2 == 'male' && question3 < 18){
                alert(`The superhero name is: ${question1}-boy!`)
            }
            else if (question2 == 'female' && question3 < 18){
                alert(`The superhero name is: ${question1}-girl!`);
            }
            else if(question2 == 'male' &&  question3 >= 18){
                alert(`The superhero name is: ${question1}-man!`);
            }
            else if(question2 == 'female' && question3 >= 18){
                alert(`The superhero name is: ${question1}-woman!`);
            }
            else if(question2 == '' && question3 < 18){
                alert(`The superhero name is: ${question1}-kid!`);
            }
            else if(question2 == '' && question3 >= 18){
                alert(`The superhero name is: ${question1}-hero!`);
            }
        }
        else{
            alert("false input");
        }
    }
    else{
        alert("false input");
    }
}
else{
    alert("false input");
}

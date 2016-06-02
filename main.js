$(document).ready(function() {
    var num1 = null;
    var num2;
    var operand;
    var total;
    var numbers = $('.number');
    var operations = $('.operation');
    var input = $('#display');
    var calculation = $('.calculation');
    var equals = $('#equals');

    //Handling Event Listeners for numbers
    $('.number').on('click',function(){
      var curNum = $(this).text();
      $('#display').append(curNum);
      calculation.empty();
    });
    // for(var i = 0; i < numbers.length; i++){
    //   numbers[i].addEventListener('click', function(){
     //  input.value += this.textContent;
    //   $('#display').append(this.textContent);
    //   });
    // }

    //Handling Event Listeners for operations
    operations.on('click', function(){
      if(!num1){
        num1 = input.text();
        console.log(num1 + " this is num1");
      }
      operand = $(this).text();
      operations.toggle('click');
      input.empty();
      calculation.empty();
    });
    // for(var i = 0; i < operations.length; i++){
    //   operations[i].addEventListener('click', function(){
    //     if(num1 === null){
    //       num1 = $('#display').val();
    //       console.log(num1);
    //     }else{
    //     num2 = $('#display').val();
    //      console.log(num2);
    //   }
    //     $('#display').val('');
    //     var final = $('#display').val() + this.textContent;
    //     //input.value = '';
    //     calculation[0].textContent += final;
    //   });
    // }

    equals.on('click', function(){
        num2 = input.text();
        var convert1 = parseInt(num1);
        var convert2 = parseInt(num2);
        num1 = null;
        num2 = null;
        switch(operand){
          case '+':
          total = convert1 + convert2;
          break;
          case '-':
          total = convert1 - convert2;
          break;
          case '/':
          total = convert1 / convert2;
          break;
          case '*':
          total = convert1 * convert2;
          break;
          default:
          alert("No operand selected");
        }
        input.empty();
        calculation.append(total);
        operations.toggle('click');
    });

});

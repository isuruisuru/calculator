function clearData() {
        document.getElementById("result").value = "";
    }
    
    function display(value) {
        document.getElementById("result").value += value;
    }
    
    function calculate() {
        var operand1 = document.getElementById("result").value;
        var operand2 = eval(operand1);
        document.getElementById("result").value = operand2;
    }
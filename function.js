
    const clickableDivh = document.getElementById('homebutton');

    clickableDivh.addEventListener('click', function() {
        const targetPageURL = 'home.html';
        window.location.href = targetPageURL;
        console.log("Loading Home");
    });

    const clickableDiv1 = document.getElementById('subbutton1');

    clickableDiv1.addEventListener('click', function() {
        const targetPageURL = 'subpage1.html';
        window.location.href = targetPageURL;
        console.log("Loading Subpage1");
    });

    const clickableDiv2 = document.getElementById('subbutton2');

    clickableDiv2.addEventListener('click', function() {
        const targetPageURL = 'subpage2.html';
        window.location.href = targetPageURL;
        console.log("Loading Subpage2");
    });

    const clickableDiv3 = document.getElementById('subbutton3');

    clickableDiv3.addEventListener('click', function() {
        const targetPageURL = 'subpage3.html';
        window.location.href = targetPageURL;
        console.log("Loading Subpage3");
    });

    const clickableDiv4 = document.getElementById('subbutton4');

    clickableDiv4.addEventListener('click', function() {
        const targetPageURL = 'subpage4.html';
        window.location.href = targetPageURL;
        console.log("Loading Subpage4");
    });

    const clickableDiv5 = document.getElementById('subbutton5');

    clickableDiv5.addEventListener('click', function() {
        const targetPageURL = 'subpage5.html';
        window.location.href = targetPageURL;
        console.log("Loading Subpage5");
    });

    const clickableCButton = document.getElementById('closebutton');

    clickableCButton.addEventListener('click', function hideAndShowDiv() {
        var myDiv = document.getElementById("adbox");
    
        myDiv.style.display = "none";

        setTimeout(function() {
            myDiv.style.display = "block";
        }, 10000); 
    });

    document.getElementById("NameForm").addEventListener("submit", function(event) {
        event.preventDefault();
    
        const firstName = document.getElementById("fname").value;
        const lastName = document.getElementById("lname").value;
    
        const table = document.getElementById("nameTableBody");
        const newRow = table.insertRow(table.rows.length);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        cell1.innerHTML = firstName;
        cell2.innerHTML = lastName;
    
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
    });
    

        function lataaDokumentti() {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
          document.getElementById("contentbox").innerHTML =
          this.responseText;
        }
        xhttp.open("GET", "korvaava_teksti.txt");
        xhttp.send();
      }

      
        function submitForm(){
        var inputArray = [];

        inputArray.push(document.getElementById("item1").value);
        inputArray.push(document.getElementById("item2").value);
        inputArray.push(document.getElementById("item3").value);
        inputArray.push(document.getElementById("item4").value);
        inputArray.push(document.getElementById("item5").value);

        var outputParagraph = document.getElementById("itemlista");
        outputParagraph.innerHTML = inputArray.join(', ');

        // Clear the input fields
        document.getElementById("item1").value = "";
        document.getElementById("item2").value = "";
        document.getElementById("item3").value = "";
        document.getElementById("item4").value = "";
        document.getElementById("item5").value = "";
    
    }
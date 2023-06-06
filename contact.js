function updateSecondDropdown() {
    var firstDropdown = document.getElementById("first-dropdown");
    var secondDropdown = document.getElementById("second-dropdown");
    var selectedOption = firstDropdown.value;

    // Clear existing options
    secondDropdown.innerHTML = "";

    if (selectedOption === "option1") {
      var option1 = document.createElement("option");
      option1.value = "option1value1";
      option1.text = "Pharmacy";
      secondDropdown.appendChild(option1);

      var option2 = document.createElement("option");
      option2.value = "option1value2";
      option2.text = "Neuromedicine";
      secondDropdown.appendChild(option2);

      var option3 = document.createElement("option");
      option3.value = "option1value3";
      option3.text = "Others";
      secondDropdown.appendChild(option3);
    } else if (selectedOption === "option2") {
      var option1 = document.createElement("option");
      option1.value = "option2value1";
      option1.text = "Textile Marketing";
      secondDropdown.appendChild(option1);

      var option2 = document.createElement("option");
      option2.value = "option2value2";
      option2.text = "Digital Marketer";
      secondDropdown.appendChild(option2);

      var option3 = document.createElement("option");
      option3.value = "option2value3";
      option3.text = "Others";
      secondDropdown.appendChild(option3);
    } else if (selectedOption === "option3") {
      var option1 = document.createElement("option");
      option1.value = "option3value1";
      option1.text = "Drinks";
      secondDropdown.appendChild(option1);

      var option2 = document.createElement("option");
      option2.value = "option3value2";
      option2.text = "Fruit";
      secondDropdown.appendChild(option2);

      var option3 = document.createElement("option");
      option3.value = "option3value3";
      option3.text = "Others";
      secondDropdown.appendChild(option3);
    }
  }
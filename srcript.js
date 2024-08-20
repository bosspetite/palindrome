 let textInput = document.getElementById("text-input");
      let checkBtn = document.getElementById("check-btn");
      let result = document.getElementById("result");

      checkBtn.addEventListener("click", palindrome);

      function palindrome() {
        let inputValue = textInput.value.trim();

        // Check if the input is empty and display an alert
        if (inputValue === "") {
          alert("Please input a value");
          return; // Exit the function to prevent further execution
        }

        // Process the string: remove non-alphanumeric characters and convert to lowercase
        const processedStr = inputValue.replace(/[\W_]/g, "").toLowerCase();

        // Check if the processed string is a palindrome
        const isPalindrome = processedStr === processedStr.split('').reverse().join('');

        // Display the result
        if (isPalindrome) {
          result.innerHTML = `<strong>${inputValue}</strong> is a palindrome`;
        } else {
          result.innerHTML = `<strong>${inputValue}</strong> is not a palindrome`;
        }
      }
    

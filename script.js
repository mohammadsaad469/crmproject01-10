const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});







// Function to handle translation
function translateField(englishInputId, marathiOutputId) {
  const englishName = document.getElementById(englishInputId).value;

  // If the English name input is empty, clear the Marathi field and return early
  if (!englishName.trim()) {
    document.getElementById(marathiOutputId).value = ''; // Clear the Marathi field
    return;
  }
  
  // Translation API URL
  const apiUrl = `https://api.mymemory.translated.net/get?q=${englishName}&langpair=en|mr`;
  
  // Fetch translation from API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Get translated text from API response
      const marathiName = data.responseData.translatedText;
      
      // Set translated name to Marathi input field
      document.getElementById(marathiOutputId).value = marathiName;
    })
    .catch(error => {
      console.error('Error:', error);
      // Show a user-friendly error message in Marathi field
      document.getElementById(marathiOutputId).value = "Translation Error!";
    });
}












































if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  
    recognition.onstart = function() {
      document.getElementById('output').textContent = 'Listening...';
    };
  
    recognition.onresult = function(event) {
      const result = event.results[0][0].transcript;
      document.getElementById('output').textContent = 'You said: ' + result;
      // You can add logic here to process the user's command
    };
  
    recognition.onend = function() {
      recognition.start(); // Restart the recognition after it ends
    };
  
    // Start recognition
    recognition.start();
  } else {
    document.getElementById('output').textContent = 'Speech recognition not supported in this browser.';
  }
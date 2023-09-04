document.getElementById('convertBtn').addEventListener('click', function() {
    var fileInput = document.getElementById('file');
    
    if (fileInput.files.length > 0) {
      var selectedFile = fileInput.files[0];
      
      var reader = new FileReader();
      
      reader.onload = function(e) {
        var fileContent = e.target.result;
        
        var parser = new DOMParser();
        var xmlDoc = document.implementation.createDocument(null, 'rootElement');

        var element1 = xmlDoc.createElement('element1');
        element1.textContent = 'Value1';
        xmlDoc.documentElement.appendChild(element1);

        var element2 = xmlDoc.createElement('element2');
        element2.textContent = 'Value2';
        xmlDoc.documentElement.appendChild(element2);

        var serializer = new XMLSerializer();

        var xmlString = serializer.serializeToString(xmlDoc);
        
        var xmlBlob = new Blob([new XMLSerializer().serializeToString(xmlDoc)], { type: 'application/xml' });
        
        var downloadLink = document.getElementById('downloadLink');
        downloadLink.href = URL.createObjectURL(xmlBlob);
        
        downloadLink.style.display = 'block';
      };
      
      reader.readAsText(selectedFile);
    } else {
      alert('Пожалуйста, выберите файл перед нажатием кнопки "gen".');
    }
  });
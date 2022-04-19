var fs = require('fs');
function ReadAppend(filetobeappended, appendFile){ 
  fs.readFile(filetobeappended, function (err, data) {
    if (err) throw err;
    console.log("before appending: \n"+data); 
  fs.readFile(appendFile, function (err, data) {
    if (err) throw err;
    console.log('File read!');

    fs.appendFile(filetobeappended, data, function (err) {
      if (err) throw err;
      console.log('The \'question.js\' was appended to \'question.json\'!');
     
      fs.readFile(filetobeappended, function (err, data) {
        if (err) throw err;
        console.log("\"After appending, the contents in question.json are:\" \n"+data);
      
      });
    });
  });
});
}

// edited this with my file names
filetobeappended = 'question.json';
appendFile = 'question.js';
ReadAppend(filetobeappended, appendFile);
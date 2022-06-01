// ------------------------------------------------------------------------------------------------------------
// Rock Paper Scissors
// ------------------------------------------------------------------------------------------------------------

const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  const readWrite = (file, contentType) => {
    fs.readFile(file, function(err, data) {
      res.writeHead(200, {'Content-Type': contentType});
      res.write(data);
      res.end();
    });
  }

  switch(page){
    case '/' : 
      readWrite('index.html', 'text/html')
      break;
    case '/otherpage' : 
      readWrite('otherpage.html', 'text/html')
      break;
    case '/otherotherpage' : 
      readWrite('otherotherpage.html', 'text/html')
      break;
    case '/api': 

      function isWinner(playerChoice, computerChoice){
        if (playerChoice === computerChoice){
          return 'Draw!'
        }
        switch(playerChoice){
          case 'rock': 
            if (computerChoice === 'paper'){
              return 'Computer'
            }
            break;
          case 'paper': 
            if (computerChoice === 'scissors'){  
              return 'Computer'
                      }
            break;
          case 'scissors': 
            if (computerChoice === 'rock'){
              return 'Computer'
            }
            break;
        }
        return 'Player'
      }

      randNum = Math.floor(Math.random()*3)
      let playerChoice = params['student']
      // let compChoice = (params['student'] == 'flip') ? randNum === 0 ? 'rock' : randNum === 1 ? 'paper' : 'scissors' : 'type "flip" in the input box'
      let compChoice = (playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors') ? randNum === 0 ? 'rock' : randNum === 1 ? 'paper' : 'scissors' : null
      
            res.writeHead(200, {'Content-Type': 'application/json'});
      const objToJson = {
        result: compChoice,
        winner: isWinner(playerChoice, compChoice)
      }
      res.end(JSON.stringify(objToJson));
      break;
    case '/css/style.css' : 
      fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
      })
      break;
    case '/js/main.js' :
      fs.readFile('js/main.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });
      break;
    case '/assets/rock.jpg' :
      fs.readFile('assets/rock.jpg', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });
      break;


    case '/assets/paper.jpg' :
      fs.readFile('assets/paper.jpg', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });
      break;

    case '/assets/scissors.jpg' :
      fs.readFile('assets/scissors.jpg', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });
      break;

    default : 
      figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
      });
      break;
    }
})
server.listen(8000);





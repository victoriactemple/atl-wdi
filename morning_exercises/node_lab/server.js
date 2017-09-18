const http = require('http');
//create a server and listen for any request that comes in on that specific port

const urlParser = require('url'); // Adds urlParser

const server = http.createServer().listen(3001)

console.log('I\'m listening on port: 3001');

//when our local server gets a request, we want to respond with this fucntion. 
//very similar concept to a click event listener


server.on('request', function(request, response) {
    var urlObj  = urlParser.parse( request.url ); //
    var pathname = urlObj.pathname; // parsing our the important info in the url
    
    console.log("requested: " + pathname);


    //refactor to write everything out into a swtich statement

    // swith(pathname){
    //     case '/funtimes':
    //     response.write(`<h1>${message}!</h1>`);
    //     response.write(`<ul>`);
    //     funThings.forEach(thing => {
    //       response.write(`<li>${thing}</li>`);
    //     });
    //     response.write(`</ul>`);
    //     break;
    //   case '/movies':
    //     response.write(`<h1>Movies!</h1>`);
    //     response.write(`<ul>`);
    //     movies.forEach(thing => {
    //       response.write(`<li>${thing}</li>`);
    //     });
    //     response.write(`</ul>`);
    //     break;
    //   case '/portfolio':
    //     response.write(`<h1>Coming Soon!</h1>`)
    //     break;
    //   default:
    //     response.write(`<h1>Not found!</h1>`)
    //     break;
    // }
  
    const funThings= [ "HTML" , "CSS", "JS"];
    const movies = ["Grease", "Rocky Horror", "Halloween"];
    // says not to worry if this is looking super foreign to us because Express will do a lot of the hard stuff for us

    response.write('<html>');
    const message = "fun-times";
    //write in the header 200 - everything is OK. and in the header we'll be sending you html




    // this is the first way of looping through it before we refactor and move to a swtich statement.
    response.writeHead(200, {'Content-Type': 'text/html'});
    if (pathname === '/fun-times') {
        response.write(`<h1>${message}</h1>`)
        funThings.forEach ((thing) => {
            response.write(`<li>${thing}</li`)
        }) 
        response.write(`<ul>`);

    }  else if (pathname === '/movies') {
        response.write(`<h1>Movie</h1>`);
        response.write(`<ul>`);
        movies.forEach((thing) => {
            response.write(`<li>${thing}</li`);
            
        })

    }
    else {
        response.write('<h1>not sure what this is for</h1>')
    }

 

        // response.write(`<ul>`)
        // response.write(`<li>The Presitge</li>`);
        // response.write(`<li>Other movie</li>`);
        // response.write(`<li>other movie 2</li>`);
        // response.write(</ul>);
    
    response.write('<script>console.log("I \'m client-side JavaScript being sent via server-side JavaScript");</script>');
    //then end html
    response.write('</html>');
    response.end();

});
  
    //go to browser and type localhost:3001 and you will see Hello World
    
    //write out this script tag

//   });

 
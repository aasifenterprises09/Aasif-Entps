//our Service.js code.
//In regular usage move this code to a separate Service.js file
var servicejs = `
//Init variables.
var count = 0;
var diff = 1;

//Called when service is started.
function OnStart()
{
    app.ShowPopup( "Hello from Service!" );

    //Start a timer to do some regular work.
    setInterval( DoWork, 5000 );
}

//Called when we get a message from main app.
function OnMessage( msg )
{
    app.Debug( msg );

    //Handle commands from main App.
    if( msg == "change" ) diff = (diff > 0 ? -1 : 1);
}

//This is where we do some regular background task
//(here we just modify a counter and send it back to the app, if its running).
function DoWork()
{
    count += diff;
    app.ShowPopup( count )
}`



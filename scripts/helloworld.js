/**
 * Created by .
 * User: trevor
 * Date: 2011/03/22
 * Time: 4:02 PM
 * To change this template use File | Settings | File Templates.
 */
//Create an object on the fly. These methods act like static methods on the object. -- appMonitor.start();
var appMonitor = {
      start: function(timeout) {
        timer = setTimeout("runTests()", timeout);
      },

      stop: function() {
        clearTimeout(timer);
      }
};



var pageLoaded = 0;

// The html page that loads this script will fire this off when it finishes loading.
// Note: Because we reference DOM elements from within our JS, we make use of the onload event
//       to let us know when all the elements have been initialized so that our JS can access them.
//       Another way to do this is bu using a timer to keep check whether an element is available. This
//       ensures that we no longer have to wait for the entire page to load (including pics, etc)
//       before we can access any element! - see var pageLoaded above!
window.onload = initialize;
// This next line will execute before the page finishes loading. It will then check if the element
// with the specified Id is available. If not it sets a timer to check again in 100ms.
setProperties('btnClickMe', registerButtonEvent);

function setProperties(id, methodToCall) {
    if (document.getElementById(id) != null)
        methodToCall();
    else if (!pageLoaded)
        setTimeout("setProperties(\'' + id + \'', '\' + methodToCall + \'')", 100);
}

function registerButtonEvent() {
    $('btnClickMe').addEvent('click', function(e) { sayHello() });
}

function initialize() {
  //The following only gets executes by browsers running jscript instead of javascript - IE!!
  /*@cc_on
      @if (@_jscript)
        alert('This browser is running JScript');
      @else */
        alert('This browser is running JavaScript'); /*
      @end
    @*/


    //This checks whether this function is valid for the current browser used. (Use without the () at the end otherwise it'll execute!)
    if (document.getElementById)
    {
        document.getElementById('parClickMe').onclick = sayHello;
    }
}

function sayHello() {
    //Notify all that page has loaded.
    pageLoaded = 1;

    // Get any element defined in html that has a specific Id associated to it. In this case
    // I'm getting the paragraph I defined in the body of index.html.
    // Note: The html that loads this file must have an element with id "MyParagraphId"
    // for this to work.
    document.getElementById('MyParagraphId').innerHTML = 'Hello World';
}

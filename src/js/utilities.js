//helper functions to add an event listener
function addEvent(el, event, callback){
    if('addEventListener' in el){
        el.addEventListener(event, callback, false);
    } else {
        el['e' + event + callback] = callback;
        el[event + callback] = function(){
            rl['e' + event + callback](window.event);
        };
        el.attachEvent('on' + event + el[event + callback]);
    }
}

//helper function to reset the CSS
function refreshCSS(){
    let links = document.getElementsByTagName('link');
        for (let i = 0; i < links.length; i++) {
            if (links[i].getAttribute('rel') == 'stylesheet') {
                let href = links[i].getAttribute('href')
                                        .split('?')[0];
                  
                let newHref = href + '?version=' 
                            + new Date().getMilliseconds();
                  
                links[i].setAttribute('href', newHref);
            }
        }
}
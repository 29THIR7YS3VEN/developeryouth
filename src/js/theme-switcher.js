var toggleSwitch = document.getElementById('ts');

addEvent('toggleSwitch', 'click', function(){
    var stylesheetControl = document.getElementById("v")

    if (stylesheetControl.href == "../static/css/light.css"){
        stylesheetControl.setAttribute("href", "../static/css/dark.css");
        toggleSwitch.setAttribute("src", "../static/icons/moon.png");
        refreshCSS();
    } else {
        stylesheetControl.setAttribute("href", "../static/css/light.css");
        toggleSwitch.setAttribute("src", "../static/icons/sun.png");
        refreshCSS();
    }
})

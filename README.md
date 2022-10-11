# Manual
I decided to use flask for this application since its lightweight and easy to use with SQL which I shall use for the database. I've created a rough directory template to start with as well as a few prewritten CSS, JS, HTML and Python files. Feel free to add whatever you see fit, and use any other technologies provided it doesn't conflict with what is already there.

# Directory Structure
### Root
- `app.py` is the main python file which will deal with requests, etc
- `app_database_init.py` python file to initialize the SQL database, which I've already written
- `database_schema.sql` will define which tables the database should be initialized with.
- `database.db` the app's main database
- `requirements.txt`
### Static
- `css/common.css` - Prewritten css file for front-end animations on load and on scroll
- `css/utils.css` This is where colors, fonts, and the like should be specified in variables so they can be used accross all css files.
- `css/main.css` For layout. Try not to specify any colors here, just anything else that will be the same across light and dark mode.
- `css/dark.css` Define colors for dark mode
- `css/light.css` Define colors for light mode
- `css/bootstrap.css` Use wherever needed.
###
- `js/animations.css` prewritten jquery framework for animations.
- `js/theme-switcher.js` for switching between light and dark mode.
- `js/main.js` is like the all-purpose jibber jabber bits and bobs js file. Feel free to create new js files for specific jobs rather than use this file.
- `js/utilities.js` for functions that will be used across all js files.
###
- `images` is to store any images needed for the website
- `fonts` for any fonts needed
- `videos` for any videos needed
- `uploads` is to store user uploads, as will be written in python.

### Templates
- `app` is for everything the user interacts with once they login, so `app/app_template.html` will be the Jinja template for that.
- `site` is for everything the user interacts with before they login, so `site/site_template.html` should be the Jinja template for that
- `errors` html templates for the page displayed for 404, 500, etc.
- `emails` are for automatic email templates


# Testing and editing application.
### Make sure you have the following installed:
- Python 3
- Pip

### Run the application
- Download the zip from main and unzip it.
- Install requirements.txt by running `pip install -r requirements.txt` in the root directory
- Run `python app_database_init.py` in the root directory, if running for the first time
- Run `flask run` in the root directory

### Edit the application
After downloading and unzipping from main, you can work on it locally from your own copy of the file, then create a pull request when you are ready to merge it.

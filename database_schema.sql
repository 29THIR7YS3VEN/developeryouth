/* file containing sql commands to initialize the web-app's main database*/

-- Users, to handle user accounts, signup, signin.
CREATE TABLE users (
  -- account details
  user_id INTEGER PRIMARY_KEY, -- Unique ID will be assigned to each user
  username TEXT, -- Username as chosen by user
  email TEXT, -- Email as inputed by user
  display_name TEXT, -- Display name as inputted by user
  password TEXT, -- ideally will be hashed using werkzeug
  date_of_birth TEXT, -- We want to restrict the platform so this will be better
  
  -- administrative info
  status TEXT, -- account status (unverified, active, banned, etc.)
  
  -- customizable user info
  profile_photo_path TEXT, --will contain the path linking to the profile picture
  banner_photo_path TEXT, --will contain the path linking to the banner picture
  user_bio TEXT 
);

-- Handle all projects created on the platform
CREATE TABLE projects (
  project_id INTEGER PRIMARY_KEY, --Each project will be assigned a unique id
  project_name TEXT, --As inputted by the creator
  project_description TEXT, --as inputted by creator
  project_photo TEXT, --""
  creator_id INTEGER, -- Will be used in the programme to identify the creator
  creator TEXT, -- creator's username/display name
  contributors TEXT,
  date_created TEXT -- date created.
);

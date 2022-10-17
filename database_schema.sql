CREATE TABLE users (
  -- account details
  user_id INTEGER PRIMARY_KEY,
  username TEXT,
  email TEXT,
  display_name TEXT,
  password TEXT, -- ideally will be hashed using werkzeug
  date_of_birth TEXT,
  
  -- administrative info
  status TEXT,
  
  -- customizable user info
  profile_photo_path TEXT,
  banner_photo_path TEXT,
  user_bio TEXT, 
);

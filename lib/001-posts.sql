-- Up
CREATE TABLE Posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  excerpt TEXT,
  body TEXT,
  posts_image IMAGE
  posts_date DATE
);

-- Down
DROP TABLE Posts;
-- Up
CREATE TABLE Posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  excerpt TEXT,
  body TEXT,
  posts_image IMAGE
  posts_date DATE
);

INSERT INTO Posts (title, excerpt)
VALUES (
    "Advanced Machine Learning Algorithm",
    "Learn about the underlying complexities behind machine learning models..."
  );

-- Down
DROP TABLE Posts;
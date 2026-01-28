CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  title TEXT,
  completed BOOLEAN DEFAULT FALSE
);

INSERT INTO users (name) VALUES
('Ram'),
('DevOps'),
('Kubernetes');


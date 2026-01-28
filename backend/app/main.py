from fastapi import FastAPI, HTTPException
from app.database import get_connection
from app.models import User

app = FastAPI(title="K8s Demo Backend")

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/users")
def get_users():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT id, name FROM users;")
    rows = cur.fetchall()
    cur.close()
    conn.close()
    return rows

@app.post("/users")
def create_user(user: User):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("INSERT INTO users (name) VALUES (%s) RETURNING id;", (user.name,))
    user_id = cur.fetchone()['id']
    conn.commit()
    cur.close()
    conn.close()
    return {"id": user_id, "name": user.name}

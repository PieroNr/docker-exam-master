const express = require("express");
const config = require("./db.config");

const db = require("knex")({
  client: "mysql2",
  connection: {
    host: config.HOST,
    port: config.PORT,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE,
  },
});


const cors = require("cors");
const app = express();

const port = "4001"
app.use(express.json());
app.use(cors());

db.schema
  .hasTable("todos")
  .then((exists) => {
    if (!exists) {
      return db.schema.createTable("todos", (table) => {
        table.increments("id");
        table.string("title");
        table.boolean("completed");
      });
    }
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/todos", async (req, res) => {
  try {
    const todos = await db.select("*").from("todos");
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.post("/todos", async (req, res) => {
  const { title, completed } = req.body;
  try {
    const todo = await db.insert({ title, completed }).into("todos");
    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.delete("/todos/:todoId", async (req, res) => {
  try {
    const todoId = req.params.todoId;
    await db.where({ id: todoId }).del().from("todos");
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

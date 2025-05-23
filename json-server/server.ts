import { readFileSync } from "fs";
import jsonServer from "json-server";
import { join } from "path";

const server = jsonServer.create();
const router = jsonServer.router(join(__dirname, "db.json"));
const middlewares = jsonServer.defaults({});

server.use(middlewares);
server.use(jsonServer.bodyParser);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
server.use(async (_req, _res, next) => {
  await new Promise((res) => setTimeout(res, 800));
  next();
});

server.post("/login", (req, res) => {
  try {
    const { username, password } = req.body as {
      username: string;
      password: string;
    };

    const users = (JSON.parse(
      readFileSync(join(__dirname, "db.json"), { encoding: "utf-8" }),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    ).users ?? []) as {
      username: string;
      password: string;
    }[];
    const userFromBd = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (userFromBd) {
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: "User not found" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "ERROR" });
  }
});

server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: "AUTH ERROR" });
  }

  next();
});

server.use(router);

server.listen(8000, () => {
  console.log("JSON Server is running");
});

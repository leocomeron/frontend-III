import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createServer, Model } from "miragejs";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

createServer({
  models: {
    course: Model,
  },
  seeds(server) {
    server.create("course", {
      name: "Frontend I",
      duration: 80,
      teacher: "Wesley",
    });
    server.create("course", {
      name: "Frontend II",
      duration: 100,
      teacher: "Bruno",
    });
    server.create("course", {
      name: "Fullstack",
      duration: 80,
      teacher: "Ana",
    });
  },
  routes() {
    this.namespace = "api/courses";

    this.get("/", (schema, request) => {
      return schema.courses.all();
    });

    this.get("/:id", (schema, request) => {
      let id = request.params.id;
      return schema.courses.find(id);
    });

    this.put("/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let course = schema.courses.find(id);
      return course.update(newAttrs);
    });

    this.post("/", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      return schema.courses.create(attrs);
    });

    this.delete("/:id", (schema, request) => {
      let id = request.params.id;
      return schema.courses.find(id).destroy();
    });
  },
});

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

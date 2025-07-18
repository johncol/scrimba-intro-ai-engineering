import express from "express";

import { getMoviesDataFromFile } from "./getMoviesDataFromFile.mjs";
import { initAppDomain } from "./initAppDomain.mjs";
import { queryMovies } from "./queryMovies.mjs";
import { wrapWithHTML } from "./wrapWithHTML.mjs";

const app = express();

app.get("/", async (request, response) => {
  const { query } = request.query;

  if (!query) {
    response
      .status(400)
      .contentType("html")
      .send(
        wrapWithHTML(`
          <h1>Error</h1>
          <p>No query provided</p>
        `)
      );
    return;
  }

  const queryResponse = await queryMovies(query);

  response
    .status(200)
    .contentType("html")
    .send(
      wrapWithHTML(`
        <h1>Query</h1>
        <p>${query}</p>
        <h1>Response</h1>
        <p>${queryResponse}</p>
    `)
    );
});

app.get("/raw-movies", async (request, response) => {
  const dataResponse = getMoviesDataFromFile();

  response
    .status(200)
    .contentType("text")
    .send(dataResponse);
});

app.listen(5000, async () => {
  console.log("Starting server...");
  await initAppDomain();
  console.log("Done! Server is running on http://localhost:5000");
});

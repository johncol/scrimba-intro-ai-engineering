import ollama from "ollama";
import express from "express";

const app = express();

app.get("/", async (request, response) => {
  const query = request.query.query;

  if (!query) {
    return response.status(200).contentType("html").send(`
      <html>
        <head>
          <title>Ollama</title>
          <style>${styles}</style>
        </head>
        <body>
          <h1>My friend..</h1>
          <p>Use the URL to send a query by adding ?query=your_query</p>
        </body>
      </html>
      `);
  }

  const result = await ollama.chat({
    model: "mistral",
    messages: [{ role: "user", content: query }],
  });

  response.status(200).contentType("html").send(`
    <html>
      <head>
        <title>Ollama</title>
        <style>${styles}</style>
      </head>
      <body>
        <h1>Query</h1>
        <p>${query}</p>
        <h1>Response</h1>
        <p>${result.message.content}</p>
      </body>
    </html>
    `);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const styles = `
:root {
  --font-body: system-ui, sans-serif;
  --font-heading: 'Georgia', serif;
  --font-size-base: 1rem;
  --line-height-base: 1.6;
  --max-line-length: 65ch;
  --text-color: #222;
  --heading-color: #111;
}

body {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  line-height: var(--line-height-base);
  color: var(--text-color);
  max-width: var(--max-line-length);
  margin: 0 auto;
  padding: 1rem;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--heading-color);
  line-height: 1.2;
  margin-top: 2em;
  margin-bottom: 0.5em;
}
`;

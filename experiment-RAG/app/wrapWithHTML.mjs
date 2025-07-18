export const wrapWithHTML = (htmlContent) => {
  return `
<html>
  <head>
    <title>LangChain + OpenAI Embeddings API + Supabase + OpenAI Responses API</title>
    <style>${styles}</style>
  </head>
  <body>
    ${htmlContent}
  </body>
</html>
`;
};

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
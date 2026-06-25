export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <title>Não foi possível carregar esta página</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 16px/1.5 system-ui, -apple-system, sans-serif; background: #f7fbfd; color: #1f2937; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 30rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.5rem; margin: 0 0 0.5rem; }
      p { color: #526271; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; }
      a, button { min-height: 2.75rem; padding: 0.65rem 1.25rem; border-radius: 999px; font: inherit; font-weight: 600; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #0077a8; color: #fff; }
      .secondary { background: #fff; color: #1f2937; border-color: #cce7f2; }
    </style>
  </head>
  <body>
    <main class="card">
      <h1>Não foi possível carregar esta página</h1>
      <p>Ocorreu um erro inesperado. Tente novamente ou volte ao início.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Tentar novamente</button>
        <a class="secondary" href="/">Voltar ao início</a>
      </div>
    </main>
  </body>
</html>`;
}

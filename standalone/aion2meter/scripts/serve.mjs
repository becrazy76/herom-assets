import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, extname, sep } from 'node:path';
const root = fileURLToPath(new URL('../public/',import.meta.url));
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.json':'application/json; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png', '.pdf':'application/pdf' };
const port = Number(process.env.PORT || 4173);
createServer(async (request,response) => {
  try {
    const requested = decodeURIComponent(new URL(request.url,'http://localhost').pathname);
    const path = requested === '/aion2meter' ? '/' : requested.startsWith('/aion2meter/') ? requested.slice('/aion2meter'.length) : requested;
    const file = resolve(root, `.${path === '/' ? '/index.html' : path}`);
    if (!file.startsWith(root.endsWith(sep) ? root : `${root}${sep}`)) { response.writeHead(403); response.end(); return; }
    const data = await readFile(file);
    response.writeHead(200,{'Content-Type':types[extname(file)] || 'application/octet-stream','Cache-Control':'no-store'}); response.end(data);
  } catch { response.writeHead(404); response.end('Not found'); }
}).listen(port,'127.0.0.1',() => console.log(`Aion2Meter preview: http://127.0.0.1:${port}`));

import { createServer } from "vite";
import { ViteNodeServer } from "vite-node/server";

const server = await createServer({
  plugins: [
    {
      name: "logger",
      transform(code, id) {
        console.log(`[transform] ${id}`);
      },
    },
  ],
});
await server.pluginContainer.buildStart({});

const node = new ViteNodeServer(server);

console.log("transformRequest #1");
await node.transformRequest("./example.ts");

console.log("transformRequest #2");
await node.transformRequest("./example.ts");

console.log("transformRequest #3");
node.fetchCache.clear();
//node.fetchCaches.ssr.clear();
//node.fetchCaches.web.clear();
await node.transformRequest("./example.ts");

node.server.close();

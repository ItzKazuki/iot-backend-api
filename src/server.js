import Hapi from '@hapi/hapi'
import router from './router.js';

const init = async () => {
  const server = Hapi.server({
    host: 'localhost',
    port: 9000,
    routes: {
      cors: {
        origin: ['*']
      }
    }
  });

  server.route(router);

  await server.start();
  console.log(`server started at ${server.info.uri}`)
}

init();
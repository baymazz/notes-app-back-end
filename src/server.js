const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  try {
    const server = Hapi.server({
      port: 5000,
      host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',  
      routes: {
        cors: {
          origin: ['*'],
        },
      },
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
  } catch (error) {
    console.error('Terjadi kesalahan saat inisialisasi server:', error);
  }
};

init();

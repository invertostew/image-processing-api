import app from './src/app';

const APP_PORT = 3000;

app.listen(APP_PORT, (): void => {
  console.log(`App listening on http://localhost:${APP_PORT}`);
});

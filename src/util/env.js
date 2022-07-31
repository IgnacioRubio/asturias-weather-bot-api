try {
  if (process.env.PORT_NUMBER === undefined) throw new Error("Enviroment variable 'PORT_NUMBER' not defined.");
  if (process.env.MONGODB_HOST === undefined) throw new Error("Enviroment variable 'MONGODB_HOST' not defined.");
  if (process.env.MONGODB_DATABASE === undefined) throw new Error("Enviroment variable 'MONGODB_DATABASE' not defined.");
  if (process.env.MONGODB_USER === undefined) throw new Error("Enviroment variable 'MONGODB_USER' not defined.");
  if (process.env.MOGNODB_PASSWORD === undefined) throw new Error("Enviroment variable 'MOGNODB_PASSWORD' not defined.");
  if (process.env.EMAIL_HOST === undefined) throw new Error("Enviroment variable 'EMAIL_HOST' not defined.");
  if (process.env.EMAIL_PORT === undefined) throw new Error("Enviroment variable 'EMAIL_PORT' not defined.");
  if (process.env.EMAIL_AUTH_USER === undefined) throw new Error("Enviroment variable 'EMAIL_AUTH_USER' not defined.");
  if (process.env.EMAIL_AUTH_PASS === undefined) throw new Error("Enviroment variable 'EMAIL_AUTH_PASS' not defined.");
  if (process.env.EMAIL_MSG_FROM === undefined) throw new Error("Enviroment variable 'EMAIL_MSG_FROM' not defined.");
  if (process.env.EMAIL_MSG_TO === undefined) throw new Error("Enviroment variable 'EMAIL_MSG_TO' not defined.");

} catch (err) {
  throw err;
}

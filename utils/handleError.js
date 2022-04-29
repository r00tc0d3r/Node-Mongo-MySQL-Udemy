const handleHttpError = (res, message = "Algo Sucedio", code = 403) => {
  res.status(code);
  res.send({ error: message });
};
module.exports = { handleHttpError };

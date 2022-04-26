const customHeader = (req, res, next) => {
  try {
    const apiKey = req.headers.api_key;
    if (apiKey === "kelo-01") {
      next();
    } else {
      res.status(403);
      res.send({ error: "API key no es correcta" });
    }
  } catch (e) {
    res.status(403);
    res.send({ error: "Algo ocurrio en el custom header" });
  }
};

module.exports = customHeader;

const jwt = require('jsonwebtoken');

function validateToken(req, res, next) {
  const authorizationHeader = req.headers['authorization'];
  let result;

  if (authorizationHeader) {
    const token = req.headers['authorization'].split(' ')[1]; // Pega o token do cabeçalho
    try {
      // Verifica e decodifica o token
      result = jwt.verify(token, "palavra_secreta"); // A chave secreta usada para assinar o token
      req.decoded = result;
      next();
    } catch (err) {
      result = {
        error: `Authentication error. Invalid Token.`,
        status: 401
      };
      res.status(401).send(result);
    }
  } else {
    result = {
      error: `Authentication error. Token required.`,
      status: 401
    };
    res.status(401).send(result);
  }
}

module.exports = validateToken;

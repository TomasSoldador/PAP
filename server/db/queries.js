const QueryExplorer = `SELECT * FROM perfil WHERE username LIKE ? LIMIT 10; `;
const SelectAllPerfilUserId = "SELECT * FROM perfil WHERE Usuario_id = ?";
const SelectUserWithEmail = "SELECT * FROM usuario WHERE email = ?";
const SelectALLPostsLoja = 'SELECT * FROM PostsLoja';
const SelectAllPosts = 'SELECT * FROM posts';
const SelectAllPerfilWithId = `SELECT * FROM perfil WHERE id = ? LIMIT 1; `;
const UpdatePasswordWithId = "UPDATE usuario SET password = ? WHERE id = ?";
const SelectAllPerfilWithUsername = "SELECT * FROM perfil WHERE username = ?";
const SelectAllPerfilWithUsernameLimit1 = `SELECT * FROM perfil WHERE username = ? LIMIT 1; `;
const SelectAllPostsWithId = `SELECT * FROM posts WHERE perfil_id = ? `;
const SelectAllPostsLojaWithId = `SELECT * FROM PostsLoja WHERE perfil_id = ? `;


module.exports = {
  QueryExplorer,
  SelectAllPerfilUserId,
  SelectUserWithEmail,
  SelectALLPostsLoja,
  SelectAllPerfilWithId,
  UpdatePasswordWithId,
  SelectAllPosts,
  SelectAllPerfilWithUsername,
  SelectAllPerfilWithUsernameLimit1,
  SelectAllPostsWithId,
  SelectAllPostsLojaWithId
};
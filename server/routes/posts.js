const express = require('express');
const db = require('../db/db');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const validateToken = require('../middleware/validateToken');
const { SelectAllPosts, SelectAllPerfilWithId } = require("../db/queries");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dest = './images/imagesPosts';
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const handleInsertPostError = (res, error) => {
  console.error('Erro ao inserir dados no banco de dados (routes/posts.js):', error);
  res.status(500).json({ success: false, message: 'Erro interno do servidor' });
};

router.post('/insert', validateToken, upload.array('images', 4), async (req, res) => {
  try {
    const images = req.files.map(file => file.filename);
    const descricao = req.body.descricao;

    const perfil_id = req.decoded.id;

    // Inserir dados na tabela posts
    await db.query('INSERT INTO posts (perfil_id, foto1, foto2, foto3, foto4, descricao) VALUES (?, ?, ?, ?, ?, ?)',
      [perfil_id, images[0], images[1], images[2], images[3], descricao]);

    res.status(200).json({ success: true, message: 'Imagens e descrição enviadas com sucesso' });
  } catch (error) {
    handleInsertPostError(res, error);
  }
});

const handleGetPostsError = (res, error) => {
  console.error('Erro ao recuperar posts do banco de dados (routes/posts.js):', error);
  res.status(500).json({ success: false, message: 'Erro interno do servidor' });
};

router.get('/get', async (req, res) => {
  try {
    const { limit = 5, offset = 0 } = req.query;
    const query = `${SelectAllPosts} ORDER BY id DESC LIMIT ${offset}, ${limit}`;

    db.query(query, async (err, result) => {
      if (err) {
        handleGetPostsError(res, err);
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    handleGetPostsError(res, error);
  }
});

router.post('/getAll', async (req, res) => {
  try {
    db.query(SelectAllPosts, async (err, result) => {
      if (err) {
        handleGetPostsError(res, err);
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    handleGetPostsError(res, error);
  }
});

const handleGetPerfilError = (res, error) => {
  console.error('Erro ao recuperar dados de perfil do banco de dados (routes/posts.js):', error);
  res.status(500).json({ success: false, message: 'Erro interno do servidor' });
};

router.post('/getPerfil', async (req, res) => {
  try {
    const { idperfil } = req.body;

    db.query(SelectAllPerfilWithId, [idperfil], async (err, result) => {
      if (err) {
        handleGetPerfilError(res, err);
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    handleGetPerfilError(res, error);
  }
});

router.post('/upload', async (req, res) => {
  const postId = req.body.postId;
  const descricao = req.body.descricao

  await db.query(`
      UPDATE posts
      SET descricao = ?
      WHERE id = ?
    `, [descricao, postId]
  );

  res.json("alterado")
})

router.post('/comentarios', async (req, res) => {
  try{
    const { postId, mensagem, userFoto, username } = req.body.data;
    console.log(req.body.data)
  
    await db.query('INSERT INTO comentarios (username, imageUrl, comentarios, posts_id) VALUES (?, ?, ?, ?)',
        [username, userFoto, mensagem, postId]);

    res.status(200).json({ success: true, message: 'Imagens e descrição enviadas com sucesso' });
  } catch {
    console.error('Erro ao recuperar dados de perfil do banco de dados (routes/posts.js):', error);
    res.status(500).json({ success: false, message: 'Erro interno do servidor' });
  }
})

router.post('/getComentarios', async (req, res) => {
  try {
    const postId = req.body.postId;

    db.query('SELECT * FROM comentarios WHERE posts_id = ? ORDER BY id DESC', [postId], async (err, result) => {
      if (err) {
        handleGetPerfilError(res, err);
      } else {
        res.json(result);
      }
    });

  } catch (error) {
    console.error('Erro ao buscar comentários:', error);
    res.status(500).json({ success: false, message: 'Erro interno do servidor' });
  }
});

router.post('/scomentarios', async (req, res) => {
  try{
    const { comentarioId, mensagem, imageUrl, username } = req.body;
    console.log(req.body);
  
    await db.query('INSERT INTO scomentarios (username, imageUrl, comentario, comentarios_id) VALUES (?, ?, ?, ?)',
          [username, imageUrl, mensagem, comentarioId]);

    res.status(200).json({ success: true, message: 'Imagens e descrição enviadas com sucesso' });
  } catch (error) {
    console.error('Erro ao recuperar dados de perfil do banco de dados (routes/posts.js):', error);
    res.status(500).json({ success: false, message: 'Erro interno do servidor' });
  }
});

router.post('/getScomentarios', async (req, res) => {
  try {
    const comentarioId = req.body.comentarioId;

    db.query('SELECT * FROM scomentarios WHERE comentarios_id = ? ORDER BY id DESC', [comentarioId], async (err, result) => {
      if (err) {
        handleGetPerfilError(res, err);
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    console.error('Erro ao buscar comentários:', error);
    res.status(500).json({ success: false, message: 'Erro interno do servidor' });
  }
})

router.post('/getlikePost', async (req, res) => {
  const { postId } = req.body;

  console.log(postId)
  try {
    db.query('SELECT Likes FROM posts WHERE id = ? ', [postId], async (err, result) => {
      if (err) {
        handleGetPerfilError(res, err);
      } else {
        res.json(result);
      }
    });
  } catch {
    console.error('Erro ao buscar comentários:', error);
    res.status(500).json({ success: false, message: 'Erro interno do servidor' });
  }
});

router.post('/likePost', async (req, res) => {
  const postsId = req.body.postsId;
  const numeroLikes = req.body.numeroLikes;
  try {
    db.query('UPDATE posts SET Likes = ? WHERE id = ? ', [numeroLikes, postsId], async (err, result) => {
      if (err) {
        handleGetPerfilError(res, err);
      } else {
        res.json("alteradooo");
      }
    });
  } catch (error) {
    console.error('Erro ao buscar comentários:', error);
    res.status(500).json({ success: false, message: 'Erro interno do servidor' });
  }
});



module.exports = router;

const express = require('express');

const router = express.Router();

const Livro = require('./livro');

router.get('/', async (req, res) => {

  const livros = await Livro.findAll()
  res.send(livros);
});

router.get('/:id', async (req, res) => {
  const livroId = req.params.id;

  const livro = await Livro.findByPk(livroId)
  res.send(livro);
});

router.get('/:id/nome', async (req, res) => {
  const livro = await Livro.findByPk(livroId)

  res.send({
    nome: livro.nome
  })
})

router.post('/', async (req, res) => {
  let novoLivro = req.body;
  novoLivro = await Livro.create(req.body)
  res.send({ message: 'livro adicionado com sucesso', livro: novoLivro });
});

router.put('/:id', async (req, res) => {
  const livroId = req.params.id;
  const dadosNovosLivro = req.body;

  let livro = await Livro.findByPk(livroId);

  if (livro) {
    livro.set({ ...dadosNovosLivro })
    await livro.save();
    res.send({ message: 'livro atualizado com sucesso' });
  } else {
    res.status(404).send({ message: 'livro não encontrado' });
  }
});

router.delete('/:id', async (req, res) => {
  const livroId = req.params.id;
  let livro = await Livro.findByPk(livroId);
  if (livro) {
    await livro.destroy();
    res.send({ message: 'livro excluído com sucesso' });
  } else {
    res.status(404).send({ message: 'livro não encontrado' });
  }
});

module.exports = router;


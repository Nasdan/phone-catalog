const express = require('express');
const router = express.Router();

module.exports = repository =>
  router
    .get('/', async (_, res, next) => {
      try {
        const phones = await repository.getPhones();
        res.json(phones);
      } catch (error) {
        next(error);
      }
    })
    .get('/:id', async (req, res, next) => {
      try {
        const { id } = req.params;
        const phone = await repository.getPhoneById(id);
        res.json(phone);
      } catch (error) {
        next(error);
      }
    });

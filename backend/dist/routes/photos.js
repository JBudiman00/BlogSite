"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
//Controllers
const photosController = require('../controllers/photosController');
router.get('/:id', photosController.getPhoto);
router.post('/:id', photosController.postPhoto);
router.patch('/:id', photosController.patchPhoto);
router.delete('/:id', photosController.deletePhoto);
module.exports = router;

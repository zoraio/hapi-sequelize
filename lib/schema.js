'use strict';

const Joi = require('joi');
const Sequelize = require('sequelize');

const internals = {};

internals.option = exports.option = Joi.object().keys({
  name: Joi.string().token().required(),
  models: Joi.alternatives().try(Joi.string(), Joi.array().items(Joi.string())), //  Joi.string().array().items(Joi.string()).required(),
  instance: Joi.object().type(Sequelize).required(),
  sync: Joi.boolean().default(false).required(),
  forceSync: Joi.boolean().default(false).required(),
  debug: Joi.boolean()
});

exports.options = Joi.alternatives().try(Joi.array().items(internals.option), internals.option);
'use strict';

const phonebook = {
  Marcus: '+380445554433',
  Timur: '+380543532422',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };

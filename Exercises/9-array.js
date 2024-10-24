'use strict';


const phonebook =  [
  { name: 'Marcus Aurelius', phone: '+380431114233' },
  { name: 'Mark Darknet',  phone: '+380505123839' },
  { name: 'NetFriend',  phone: '+380445554432' },
  { name: 'Alex Aura', phone:  '+380465851423' },

];

const findPhoneByName = (name) => {
  for (const obj of phonebook)
    if (obj.name === name) return obj.phone;
};

module.exports = { phonebook, findPhoneByName };

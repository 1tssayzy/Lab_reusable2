'use strict';

const fn = () => {
  const obj1 = ('Aurelius');
  let  obj2 = ('Aurelius');
  obj1.name = 'Aurelius';
  obj2.name = 'Aurelius';
  obj2 = { name : 'Aurelius' };
};

module.exports = { fn };

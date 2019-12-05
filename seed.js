const { green, red } = require('chalk');
const { db, Student, Campus } = require('./server/db');

const students = [
  {
    firstName: 'Penelope',
    lastName: 'McGillicuddy',
    email: 'penelope@gmail.com',
    imageUrl: 'https://robohash.org/penelope?set=set2',
    gpa: 3.2
  },
  {
    firstName: 'Helena',
    lastName: 'Horstein',
    email: 'helena@gmail.com',
    imageUrl: 'https://robohash.org/helena?set=set2',
    gpa: 3.5
  },
  {
    firstName: 'Todd',
    lastName: 'Hottentoff',
    email: 'todd@gmail.com',
    imageUrl: 'https://robohash.org/todd?set=set2',
    gpa: 3.9
  }
];

const campuses = [
  {
    name: 'Earth',
    address: '1 Earth Way, Chicago',
    description: 'some text here lorem ipsum',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1280px-The_Earth_seen_from_Apollo_17.jpg'
  },
  {
    name: 'Jupiter',
    address: '12 Jupiter Ave, Jupiter City',
    description: 'some text here lorem ipsum',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019_-_Edited.jpg/1280px-Jupiter%2C_image_taken_by_NASA%27s_Hubble_Space_Telescope%2C_June_2019_-_Edited.jpg'
  },
  {
    name: 'Pluto',
    address: '76 Pluto Rd, Plutopolis',
    description: 'some text here lorem ipsum',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/1280px-Pluto_in_True_Color_-_High-Res.jpg'
  }
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    const [penelope, helena, todd] = await Student.bulkCreate(students, {
      returning: true,
      validate: true
    });

    const [earth, jupiter, pluto] = await Campus.bulkCreate(campuses, {
      returning: true,
      validate: true
    });
    //**model must exist (above) before assn can be set up */
    await Promise.all([
      earth.addStudents(penelope),
      jupiter.addStudents(helena),
      pluto.addStudents(todd)
    ]);
    // seed your database here!
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch(err => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}

// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
// if (require.main === module) {
//   seed()
//     .then(() => {
//       console.log(green("Seeding success!"));
//       db.close();
//     })
//     .catch(err => {
//       console.error(red("Oh noes! Something went wrong!"));
//       console.error(err);
//       db.close();
//     });
// }

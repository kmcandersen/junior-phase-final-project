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
    firstName: 'Hortensia',
    lastName: 'Horstein',
    email: 'hortensia@gmail.com',
    imageUrl: 'https://robohash.org/hortensia?set=set2',
    gpa: 3.5
  },
  {
    firstName: 'Titus',
    lastName: 'Andromedon',
    email: 'titus@gmail.com',
    imageUrl: 'https://robohash.org/titus?set=set2',
    gpa: 3.1
  },
  {
    firstName: 'Aaron',
    lastName: 'Pocalypse',
    email: 'aaron@gmail.com',
    imageUrl: 'https://robohash.org/aaron?set=set2',
    gpa: 3.1
  },
  {
    firstName: 'Victoria',
    lastName: 'Von Doom',
    email: 'vicky@gmail.com',
    imageUrl: 'https://robohash.org/victoria?set=set2',
    gpa: 3.6
  },
  {
    firstName: 'Terror',
    lastName: 'Byte',
    email: 'towerofterror@gmail.com',
    imageUrl: 'https://robohash.org/terror?set=set2',
    gpa: 2.9
  },
  {
    firstName: 'Rorschach',
    lastName: 'Finklestein',
    email: 'rorschach@gmail.com',
    imageUrl: 'https://robohash.org/rorschach?set=set2',
    gpa: 2.5
  },
  {
    firstName: 'T-Rex',
    lastName: 'Magoo',
    email: 'trex@gmail.com',
    imageUrl: 'https://robohash.org/trex?set=set2',
    gpa: 3.3
  },
  {
    firstName: 'Todd',
    lastName: 'Hottentoff',
    email: 'todd@gmail.com',
    imageUrl: 'https://robohash.org/todd?set=set2',
    gpa: 3.9
  },
  {
    firstName: 'Muggsy',
    lastName: 'Bogues',
    email: 'muggsy@gmail.com',
    imageUrl: 'https://robohash.org/muggsy?set=set2',
    gpa: 3.8
  }
];

const campuses = [
  {
    name: 'Earth',
    address: '1 Earth Way, Chicago',
    description: 'Highest % of human students',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1280px-The_Earth_seen_from_Apollo_17.jpg'
  },
  {
    name: 'Mercury',
    address: '12 Mercury Rd, Mercury Heights',
    description: 'Hot stuff',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1024px-Mercury_in_color_-_Prockter07-edit1.jpg'
  },
  {
    name: 'Venus',
    address: '17 Venutian Way, Venusville',
    description: 'Bright minds',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg'
  },
  {
    name: 'Mars',
    address: '1996 Mars St, Marsville',
    description: 'The redder the better',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1024px-OSIRIS_Mars_true_color.jpg'
  },
  {
    name: 'Jupiter',
    address: '12 Jupiter Ave, Jupiter City',
    description: '79 moons (that we know of)',
    imageUrl: 'http://kristenandersen.online/planets/jupiter.jpg'
  },
  {
    name: 'Saturn',
    address: '77 Saturn St, Saturn City',
    description: 'We love to code',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Saturn_during_Equinox_%28rot45%29.jpg/1024px-Saturn_during_Equinox_%28rot45%29.jpg'
  },
  {
    name: 'Uranus',
    address: '96 Uranus Ln, Uranus City',
    description: 'An Ice Giant',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/1024px-Uranus2.jpg'
  },
  {
    name: 'Neptune',
    address: '142 Neptune Pkwy, Neptune Town',
    description: "It/'s chilly out here",
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg'
  },
  {
    name: 'Pluto',
    address: '76 Pluto Rd, Plutopolis',
    description: 'Small but mighty',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/1280px-Pluto_in_True_Color_-_High-Res.jpg'
  }
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    const [
      penelope,
      helena,
      titus,
      aaron,
      victoria,
      terror,
      rorschach,
      trex,
      todd,
      muggsy
    ] = await Student.bulkCreate(students, {
      returning: true,
      validate: true
    });

    const [
      earth,
      mercury,
      venus,
      mars,
      jupiter,
      saturn,
      uranus,
      neptune,
      pluto
    ] = await Campus.bulkCreate(campuses, {
      returning: true,
      validate: true
    });
    //**model must exist (above) before assn can be set up */
    await Promise.all([
      earth.addStudents(penelope),
      earth.addStudents(victoria),
      mercury.addStudents(rorschach),
      venus.addStudents(trex),
      jupiter.addStudents(helena),
      jupiter.addStudents(aaron),
      neptune.addStudents(todd),
      pluto.addStudents(titus),
      pluto.addStudents(muggsy)
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

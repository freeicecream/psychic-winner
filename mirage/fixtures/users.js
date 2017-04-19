export default [{
  id: 1,
  firstName: 'Kamal',
  lastName: 'Narang',
  position: 'Vice President',
  photo: 'https://randomuser.me/api/portraits/lego/0.jpg',
  subordinateIds: [2, 3]
}, {
  id: '2',
  firstName: 'Sunil Kumar',
  lastName: 'Gupta',
  position: 'GM - Strat Ops',
  photo: 'https://randomuser.me/api/portraits/lego/1.jpg',
  superiorId: '1',
  subordinateIds: ['4', '7']
}, {
  id: '3',
  firstName: 'Salman',
  lastName: 'Siddiqui',
  position: 'General Manager',
  photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  superiorId: '1'
}, {
  id: '4',
  firstName: 'Anthony Misael',
  lastName: 'Dy',
  position: 'Manager Projects',
  photo: 'https://randomuser.me/api/portraits/lego/4.jpg',
  superiorId: '2',
  subordinateIds: ['5', '6']
}, {
  id: '5',
  firstName: 'Oliver',
  lastName: 'Moreno',
  position: 'Senior Associate - Projects',
  photo: 'https://randomuser.me/api/portraits/lego/5.jpg',
  showInWarning: true,
  superiorId: '4'
}, {
  id: '6',
  firstName: 'Mary Bernadette',
  lastName: 'De Jesus',
  position: 'Associate - Projects',
  photo: 'https://randomuser.me/api/portraits/lego/6.jpg',
  showInWarning: true,
  superiorId: '4'
}, {
  id: '7',
  firstName: 'Norberto',
  lastName: 'Figueroa',
  position: 'Senior Manager - Admin',
  photo: 'https://randomuser.me/api/portraits/lego/7.jpg',
  showInWarning: true,
  superiorId: '2'
}];
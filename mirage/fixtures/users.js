export default [{
  id: 1,
  firstName: 'Kamal',
  lastName: 'Narang',
  position: 'Vice President',
  photo: 'https://randomuser.me/api/portraits/lego/0.jpg',
  employeeId: 'xxxxxxxx',
  subordinateIds: [2, 3],
  notificationIds: [1, 2, 3]
}, {
  id: '2',
  firstName: 'Sunil Kumar',
  lastName: 'Gupta',
  position: 'GM - Strat Ops',
  photo: 'https://randomuser.me/api/portraits/lego/1.jpg',
  employeeId: 'xxxxxxxx',
  superiorId: '1',
  subordinateIds: ['4', '7'],
  talentManagerId: '8',
  activityIds: [1, 2]
}, {
  id: '3',
  firstName: 'Salman',
  lastName: 'Siddiqui',
  position: 'General Manager',
  photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  talentManagerId: '8',
  employeeId: 'xxxxxxxx',
  superiorId: '1'
}, {
  id: '4',
  firstName: 'Anthony Misael',
  lastName: 'Dy',
  position: 'Manager Projects',
  photo: 'https://randomuser.me/api/portraits/lego/4.jpg',
  employeeId: 'xxxxxxxx',
  superiorId: '2',
  subordinateIds: ['5', '6'],
  talentManagerId: '8'
}, {
  id: '5',
  firstName: 'Oliver',
  lastName: 'Moreno',
  position: 'Senior Associate - Projects',
  photo: 'https://randomuser.me/api/portraits/lego/5.jpg',
  employeeId: 'xxxxxxxx',
  superiorId: '4',
  talentManagerId: '8',
  evaluationId: '1',
  topicIds: [1]
}, {
  id: '6',
  firstName: 'Mary Bernadette',
  lastName: 'De Jesus',
  position: 'Associate - Projects',
  photo: 'https://randomuser.me/api/portraits/lego/6.jpg',
  employeeId: 'xxxxxxxx',
  superiorId: '4',
  evaluationId: '2',
  talentManagerId: '8',
  topicIds: [2]
}, {
  id: '7',
  firstName: 'Norberto',
  lastName: 'Figueroa',
  position: 'Senior Manager - Admin',
  photo: 'https://randomuser.me/api/portraits/lego/7.jpg',
  employeeId: 'xxxxxxxx',
  superiorId: '2',
  talentManagerId: '8',
  evaluationId: '3',
  topicIds: [3]
}, {
  id: 8,
  firstName: 'Kristine',
  lastName: 'Agsunod',
  position: 'Sr. Coordinator, TM',
  photo: 'https://randomuser.me/api/portraits/lego/8.jpg',
  employeeId: 'xxxxxxxx',
  talentIds: [2, 3, 4, 5, 6, 7]
}];

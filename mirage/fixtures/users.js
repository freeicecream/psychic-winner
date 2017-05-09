// export default [{
//   id: 1,
//   firstName: 'Kamal',
//   lastName: 'Narang',
//   position: 'Vice President',
//   photo: 'https://randomuser.me/api/portraits/lego/0.jpg',
//   employeeId: 'xxxxxxxx',
//   subordinateIds: [2, 3],
//   notificationIds: [1, 2, 3]
// }, {
//   id: '2',
//   firstName: 'Sunil Kumar',
//   lastName: 'Gupta',
//   position: 'GM - Strat Ops',
//   photo: 'https://randomuser.me/api/portraits/lego/1.jpg',
//   employeeId: 'xxxxxxxx',
//   superiorId: '1',
//   subordinateIds: ['4', '7'],
//   talentManagerId: '8',
//   activityIds: [1, 2]
// }, {
//   id: '3',
//   firstName: 'Salman',
//   lastName: 'Siddiqui',
//   position: 'General Manager',
//   photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
//   talentManagerId: '8',
//   employeeId: 'xxxxxxxx',
//   superiorId: '1'
// }, {
//   id: '4',
//   firstName: 'Anthony Misael',
//   lastName: 'Dy',
//   position: 'Manager Projects',
//   photo: 'https://randomuser.me/api/portraits/lego/4.jpg',
//   employeeId: 'xxxxxxxx',
//   superiorId: '2',
//   subordinateIds: ['5', '6'],
//   talentManagerId: '8',
//   evaluationId: 4
// }, {
//   id: '5',
//   firstName: 'Oliver',
//   lastName: 'Moreno',
//   position: 'Senior Associate - Projects',
//   photo: 'https://randomuser.me/api/portraits/lego/5.jpg',
//   employeeId: 'xxxxxxxx',
//   superiorId: '4',
//   talentManagerId: '8',
//   evaluationId: '1',
//   topicIds: [1]
// }, {
//   id: '6',
//   firstName: 'Mary Bernadette',
//   lastName: 'De Jesus',
//   position: 'Associate - Projects',
//   photo: 'https://randomuser.me/api/portraits/lego/6.jpg',
//   employeeId: 'xxxxxxxx',
//   superiorId: '4',
//   evaluationId: '2',
//   talentManagerId: '8',
//   topicIds: [2]
// }, {
//   id: '7',
//   firstName: 'Norberto',
//   lastName: 'Figueroa',
//   position: 'Senior Manager - Admin',
//   photo: 'https://randomuser.me/api/portraits/lego/7.jpg',
//   employeeId: 'xxxxxxxx',
//   superiorId: '2',
//   talentManagerId: '8',
//   evaluationId: '3',
//   topicIds: [3]
// }, {
//   id: 8,
//   firstName: 'Kristine',
//   lastName: 'Agsunod',
//   position: 'Sr. Coordinator, TM',
//   photo: 'https://randomuser.me/api/portraits/lego/8.jpg',
//   employeeId: 'xxxxxxxx',
//   talentIds: [2, 3, 4, 5, 6, 7]
// }];

export default [
 {
   id: 1,
   employeeId: 1000000,
   lastName: "Rao",
   firstName: "Vikram",
   email: "test@test.com",
   position: "Director",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   subordinateIds: [2],
   talentManagerId: 46,
   notificationIds: [1, 2, 3]
 },
 {
   id: 2,
   employeeId: 1056306,
   lastName: "Horca",
   firstName: "Anna",
   email: "test@test.com",
   position: "GM",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 1,
   subordinateIds: [3,4],
   talentManagerId: 46,
   activityIds: [1,2]
 },
 {
   id: 3,
   employeeId: 1051771,
   lastName: "Sigua",
   firstName: "Rodel",
   email: "test@test.com",
   position: "SDM",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 2,
   subordinateIds: [5],
   talentManagerId: 46,
 },
 {
   id: 4,
   employeeId: 1063719,
   lastName: "Ordenes",
   firstName: "Raymund",
   email: "test@test.com",
   position: "SDM",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 2,
   subordinateIds: [6,7,8],
   talentManagerId: 46,
 },
 {
   id: 5,
   employeeId: 1051779,
   lastName: "Aguila",
   firstName: "Mark Dennis",
   email: "test@test.com",
   position: "TM",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 3,
   subordinateIds: [9,10],
   talentManagerId: 46,
   evaluationId: '1',
   topicIds: [1]
 },
 {
   id: 6,
   employeeId: 1051898,
   lastName: "Tagra",
   firstName: "Marry Ann",
   email: "test@test.com",
   position: "TM",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 4,
   subordinateIds: [11,12],
   talentManagerId: 46,
   evaluationId: '2',
   topicIds: [2]
 },
 {
   id: 7,
   employeeId: 1051775,
   lastName: "Abes",
   firstName: "Paul Omar",
   email: "test@test.com",
   position: "TM",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 4,
   subordinateIds: [13,14],
   talentManagerId: 46,
   evaluationId: '3',
   topicIds: [3]
 },
 {
   id: 8,
   employeeId: 1051896,
   lastName: "Soriano",
   firstName: "John Raymond",
   email: "test@test.com",
   position: "TM",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 4,
   subordinateIds: [15,16],
   talentManagerId: 46,
 },
 {
   id: 9,
   employeeId: 1051778,
   lastName: "Adarne",
   firstName: "Constance",
   email: "test@test.com",
   position: "TL",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 5,
   subordinateIds: [17,18,19,20],
   talentManagerId: 46,
 },
 {
   id: 10,
   employeeId: 1056307,
   lastName: "Garcia",
   firstName: "Justine",
   email: "test@test.com",
   position: "TL",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 5,
   subordinateIds: [21,22,23,24],
   talentManagerId: 46,
 },
 {
   id: 11,
   employeeId: 1063221,
   lastName: "Obedoza",
   firstName: "Vivien",
   email: "test@test.com",
   position: "TL",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 6,
   subordinateIds: [25,26,27,28],
   talentManagerId: 46,
 },
 {
   id: 12,
   employeeId: 1051857,
   lastName: "Parala-Loreno",
   firstName: "Monaliza",
   email: "test@test.com",
   position: "TL",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 6,
   subordinateIds: [29,30,31],
   talentManagerId: 46,
 },
 {
   id: 13,
   employeeId: 1051793,
   lastName: "Balburias",
   firstName: "Jocelyn",
   email: "test@test.com",
   position: "TL",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 7,
   subordinateIds: [32,33,34],
   talentManagerId: 46,
 },
 {
   id: 14,
   employeeId: 1063498,
   lastName: "Chinor",
   firstName: "Roseky",
   email: "test@test.com",
   position: "TL",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 7,
   subordinateIds: [35,36,37],
   talentManagerId: 46,
 },
 {
   id: 15,
   employeeId: 1051805,
   lastName: "Camalate",
   firstName: "Queenie",
   email: "test@test.com",
   position: "TL",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 8,
   subordinateIds: [38,39,40],
   talentManagerId: 46,
 },
 {
   id: 16,
   employeeId: 1056237,
   lastName: "Gubaton-Karaki",
   firstName: "Franchieta",
   email: "test@test.com",
   position: "TL",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 8,
   subordinateIds: [41,42,43,44,45],
   talentManagerId: 46,
 },
 {
   id: 17,
   employeeId: 1071784,
   lastName: "Alim",
   firstName: "Katherine",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 9,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 18,
   employeeId: 1071785,
   lastName: "Arboleda",
   firstName: "Carlo",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 9,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 19,
   employeeId: 1057072,
   lastName: "Astillero",
   firstName: "Ma. Grace",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 9,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 20,
   employeeId: 1062818,
   lastName: "Bagayo",
   firstName: "Julie",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 9,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 21,
   employeeId: 1071779,
   lastName: "Apolonio",
   firstName: "Rachelle Anne",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 10,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 22,
   employeeId: 1051790,
   lastName: "Ausejo",
   firstName: "Conney",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 10,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 23,
   employeeId: 1051810,
   lastName: "Dames",
   firstName: "Edsel",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 10,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 24,
   employeeId: 1071786,
   lastName: "Escano",
   firstName: "Lara",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 10,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 25,
   employeeId: 1064435,
   lastName: "Afable",
   firstName: "Julio",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 11,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 26,
   employeeId: 1063895,
   lastName: "Dedeles",
   firstName: "Alizza",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 11,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 27,
   employeeId: 1060563,
   lastName: "Formarejo",
   firstName: "Karen",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 11,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 28,
   employeeId: 1055810,
   lastName: "Gavarra",
   firstName: "Annabelle",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 11,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 29,
   employeeId: 1051774,
   lastName: "Abenina",
   firstName: "Stephanie",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 12,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 30,
   employeeId: 1051800,
   lastName: "Belen",
   firstName: "Vincent Edward",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 12,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 31,
   employeeId: 1062823,
   lastName: "Dichoso",
   firstName: "Sherwin",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 12,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 32,
   employeeId: 1062816,
   lastName: "Alviar",
   firstName: "Joyce",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 13,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 33,
   employeeId: 1060555,
   lastName: "Carpio",
   firstName: "Iris",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 13,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 34,
   employeeId: 1060278,
   lastName: "Curaming",
   firstName: "Bienvenido",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 13,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 35,
   employeeId: 1063346,
   lastName: "Bunag",
   firstName: "Jeffrey",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 14,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 36,
   employeeId: 1066376,
   lastName: "Cunanan",
   firstName: "Paul ",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 14,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 37,
   employeeId: 1064443,
   lastName: "Del Rosario",
   firstName: "Ma. Rowena",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 14,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 38,
   employeeId: 1062817,
   lastName: "Aquino",
   firstName: "Celso",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 15,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 39,
   employeeId: 1055808,
   lastName: "Cognito",
   firstName: "Jovi",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 15,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 40,
   employeeId: 1059955,
   lastName: "Del Rosario",
   firstName: "Darwin",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 15,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 41,
   employeeId: 1054976,
   lastName: "Almero",
   firstName: "Ayzkiel",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 16,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 42,
   employeeId: 1051787,
   lastName: "Arguelles",
   firstName: "Roni",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 16,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 43,
   employeeId: 1051798,
   lastName: "Basilio",
   firstName: "Ma. Luningning",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 16,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 44,
   employeeId: 1060553,
   lastName: "Caisip",
   firstName: "Arjay",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 16,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 45,
   employeeId: 1060554,
   lastName: "Cantre",
   firstName: "Darryl",
   email: "test@test.com",
   position: "Agent",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: 16,
   subordinateIds: [],
   talentManagerId: 46,
 },
 {
   id: 46,
   employeeId: 1000001,
   lastName: "Galvan",
   firstName: "Dar Seatiel",
   email: "test@test.com",
   position: "Talent Manager",
   photo: "https://randomuser.me/api/portraits/lego/0.jpg",
   superiorId: null,
   subordinateIds: [],
   talentManagerId: null,
   talentIds: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]
 }
];

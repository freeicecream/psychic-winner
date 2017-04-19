import Ember from 'ember';

export default Ember.Component.extend({
  displaySubtitle: true,
  criteria: Ember.ArrayProxy.create({
    content: [{
      name: 'Attendance / Absenteeism / Schedule Adherence',
      id: 1,
      description: 'This metric is a great predictive factor which can gauge the propensity to attrite. Aims to capture how often does the associate miss the attendance or schedule adherence. Mouse over the ratings for the guidelines',
      displayDescription: false,
      tooltip: {
        good: '0 - Penalty Points. No issues with absenteeism in past 3 months. Adhering to schedules for past 3 months',
        normal: '1-2 Penalty Points, but not from the past 3 months',
        warning: '3-5 Penalty Points, but not from past month',
        danger: '>5 Penalty points, latest accumulated within last month',
        critical: '9-12 Penalty Points accumulated. Frequent NCNS / AWOL / Unplanned leaves / Absenteeism. Very frequent schedule adherence issues' 
      },
      groupValue: null
    }, {
      name: 'Health Issues',
      id: 2,
      description: 'Any health issues which you think is a threat to continuing employment of the associate',
      displayDescription: false,
      tooltip: {
        good: 'Healthy, No Sick Leaves in past 3 months',
        normal: 'Healthy, No Sick leaves for past 2 months',
        warning: 'Just recovered from sickness. Hasn’t had any sick leaves after the reported recovery from sickness',
        danger: 'Intermittent sick leaves - at least twice a month for past 2 months',
        critical: 'Has some serious health issues leading to frequent absenteeism in past one month and can lead to attrition in next 30 days' 
      },
      groupValue: null
    }, {
      name: 'Family Problems',
      id: 3,
      description: 'Any family related issues which can lead the associate to leave the company',
      displayDescription: false,
      tooltip: {
        good: 'No information of any family related issues like health, family care, etc',
        normal: 'No leaves due to family problems for past 3 months',
        warning: 'Reported the family issues have been solved and no related leaves in past 1 month',
        danger: 'Has complained about some family issues which needs their attention off work. Had taken leaves due to it at least twice in the past month',
        critical: 'Absenteeism due to family issues has been very frequent in past 30 days. There are family issues which will lead to attrition in next 30 days' 
      },
      groupValue: null
    }, {
      name: 'Team Level Engagements',
      id: 4,
      description: 'Aims to capture the team level engagements of the associate. Does the associate participate in activities like R&R, team outing, huddles, ideation session, bay decoration, etc? Mouse over the ratings for the guidelines',
      displayDescription: false,
      tooltip: {
        good: 'Very active - Did not miss any team engagements in the past 2 months. Takes active roles / volunteers in team activities',
        normal: 'Engages in most of the activities',
        warning: 'Has shown declining interest in participating in these activities',
        danger: 'Has shown drastic decline in participation in past 30 days from a highly participating member',
        critical: 'No Engagement. Spreading negative rumors about team members. Not comfortable with other team members' 
      },
      groupValue: null
    }, {
      name: 'Company Level Engagements',
      id: 5,
      description: 'This metric aims to capture the company level engagements of the associate. Does the associate participate in activities like recruitment referals, Outreach, townhalls, etc? Mouse over the ratings for the guidelines',
      displayDescription: false,
      tooltip: {
        good: 'Very active - Did not miss any company level engagements in the past 2 months. Has been enthusiastic about any of the engagement activities. Takes active roles / volunteers in company activities',
        normal: 'Engages in most of the activities',
        warning: 'Has shown declining interest in participating in these activities',
        danger: 'Has shown drastic decline in participation in past 30 days from a highly participating member',
        critical: 'No Engagement. Spreading negative rumors about Company' 
      },
      groupValue: null
    }, {
      name: 'Unresolved Payroll / Salary Issues',
      id: 6,
      description: 'Aims to capture any unresolved payroll issues like salary, incentive, special allowances etc. This will also capture if the associate is not happy with the monetory benefits he/she currently enrolled to',
      displayDescription: false,
      tooltip: {
        good: 'No issues with salary. Did not make any remarks on the salary issues. Any salary issues has been resolved and is happy with the outcome',
        normal: 'Has not shared anything with the TL or higher ups, but has discussed financial needs not being met to the peers',
        warning: 'Has been bringing up issues of salary hike and salary range of competition in past 30 days',
        danger: 'Has brought up financial needs not being met in most of the meetings in past 30 days',
        critical: 'Unresolved pay issue for past 60 days. Has been vocal about the salary issues. Threatens to resign if these are not resolved' 
      },
      groupValue: null
    }, {
      name: 'Stack Ranking Position',
      id: 7,
      description: 'What quartile is the associate based on your latest team stack ranking',
      displayDescription: false,
      tooltip: {
        good: '80th Quartile and above',
        normal: '70th Quartile and Above',
        warning: 'Average Performer',
        danger: 'Below average performer',
        critical: 'Bottom Quartile' 
      },
      groupValue: null
    }, {
      name: 'Participation to achieve performance goals',
      id: 8,
      description: 'Aims to capture the enthusiasm and participation of the associate to achieve the performance goals of themselves and the team. If they have been given bridge goals, how much effort is being shown to achieve those?',
      displayDescription: false,
      tooltip: {
        good: 'Actively participates and engages in achieving the goals laid out for themselves or their team. Volunteers to mentor others if associate is high performing',
        normal: 'Active participation and just exceeds the bridge goals',
        warning: 'Active participation but not meeting the bridge goals due to skill issues',
        danger: 'No participation or skill issues which lead into wide gap between the bridge goals and actuals',
        critical: 'Not willing to work with the team or TL to achieve personal bridge goals to achieve target. In denial of any performance issues' 
      },
      groupValue: null
    }, {
      name: 'Career Progression / Growth',
      id: 9,
      description: 'Any concerns from associates with regards to career progression or growth opportunity within team, project or organization',
      displayDescription: false,
      tooltip: {
       good: 'Recently promoted on role or designation and is happy with the role and designation. Is actively participating in CCA and has a clear career path figured out within company',
        normal: 'Knows they are due for a promotion in short time. Actively participates in training within and external to be ready for the role',
        warning: 'No interest in career progression',
        danger: 'Has been in the role for 2 yrs but have not raised a concern yet. But the peers have got a promotion already. Looking for a change in role internally although not actively seeking',
        critical: 'Has been in the role for more than 3 years and was vocal about a role change or threatens attrition if there is no growth in next 30 days. Is looking to resign to join any other company or for higher studies in next 30 days' 
      },
      groupValue: null
    }, {
      name: 'Proximity to Work',
      id: 10,
      description: 'Any possible attrition because of the work location.',
      displayDescription: false,
      tooltip: {
        good: 'Lives near by office. No issues with commuting to work. Has not faced any issues related to schedules due to travel time',
        normal: 'Lives not so far away from work. No issues with commuting. No lates registes',
        warning: 'Lives fairly away from office. Has brought up the issue of proximity at least once in last 30 days',
        danger: 'Lives fairly away and has been late and accumulating penalty points quickly',
        critical: 'Will attrite in 30 days if there is no change in the work location or project change to facilitate that' 
      },
      groupValue: null
    }, {
      name: 'Info Regarding Possible Attrition',
      id: 11,
      description: 'Any info from any channels (social media, peers, friends, etc) which shows any propensity of associate to attrite',
      displayDescription: false,
      tooltip: {
        good: 'Positive engagements related to work on social media and other social interactions. Is excited to show the best of the company',
        normal: 'No signs since past 6 months',
        warning: 'The rumors or evidence are of their dissatisfaction with the current job, company etc. But not yet actively looking for opportunity',
        danger: 'There was a rumor or evidence that the person will attrite soon, but leader knows that is not an option anymore',
        critical: 'There is substantial evidence gathered from reliable sources that the person is actively looking for opportunities elsewhere and may resign within 30 days' 
      },
      groupValue: null
    }]
  }),

  actions: {
    toggleDescription(criterionId) {
      let criterion = this.get('criteria').objectAt(criterionId - 1); 
      Ember.set(criterion, 'displayDescription', !criterion.displayDescription);
    }
  }
});

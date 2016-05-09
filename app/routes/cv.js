import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      title: "Mr",
      firstname: "Damien",
      lastname: "McMahon",
      suffixes: "Bsc",
      statement: "I'm a Frontend Developer with a passion for building delightful User Interfaces that are built mobile first, responsive and work anywhere a browser is installed. I build components and from them compose Apps. I like to put the user first, thinking about making their experience better, even if it means more development work for myself.I'm happy working on the backend too, having recently used Node/Express but I've also worked with Ruby/Rails and PHP. I'm happiest when I can use a keyboard shortcut and love the power of the command line for running build tools, pushing commits to Github, checking logs, configuring Nginx, installing SSL certificates or writing DB queries.I always like to keep one eye on the future and I'm excited about Web Components, Service Workers and the Web being able to compete with Native experiences.",
      work: [
        {
          company: "TAB Corp",
          position: "Senior UX Developer",
          type: "Full time - Permanent",
          location: "Sydney, Australia",
          duration: {
            startDate: "2014-11-17",
            endDate: "2015-09-01"
          },
          description: "I work as a UX Developer for TabCorp in Sydney and my role is to work across the UX and Development Teams. As part of this role I spend time with the UX team helping to build high-fidelity prototypes and offer coding assistance where needed. I work with the Development team as a Frontend Developer assisting with styling and building of components, working to refine them and apply feedback from the UX team.",
          techSkills: [
            "Angular JS & React in the frontend talking to a Node API.",
            "Building Angular & React components.",
            "Grunt underpinning the asset creation.",
            "Github managed with Continuous Integration and Deployment via Travis.",
            "Agile process for Development with fortnightly sprints and showcases."
          ],
          personalSkills: [
            "Work with Product Managers, Designers and Developers to create prototypes for user testing.",
            "Mentor members of the team with weaker CSS skills."
          ]
        },{
          company: "Funding Circle",
          position: "Frontend Developer",
          type: "Full time - Permanent",
          location: "London, UK",
          duration: {
            startDate: "2012-12-03",
            endDate: "2014-10-31"
          },
          description: "I was hired as the first Frontend developer at Funding Circle and have was tasked with building the frontend team along with breaking down a monolithic Rails/PHP hybrid app into smaller SOA apps. Along the way I was been involved in hiring, helping to shape the architecture of the frontend and working with various teams across the business to deliver different projects for the UK and US sites.",
          techSkills: [
            "Rails, PHP and Javascript development.",
            "Implementing TDD AngularJS into API driven smaller apps.",
            "Responsive, Mobile First, HTML5 & CSS3 frontend component creation.",
            "Continuous Integration and Deployment.",
            "Agile process for development with weekly sprints and demos."
          ],
          personalSkills: [
            "Mentor junior developers in frontend technologies.",
            "Lead meetings with other frontend developers across global sites to share knowledge.",
            "Communicate with other business team members about deadlines, expectations and any problems."
          ]
        },{
          company: "Frogtrade",
          position: "Frontend Developer",
          type: "Full time - Permanent",
          location: "Halifax, UK",
          duration: {
            startDate: "2010-06-15",
            endDate: "2012-11-30"
          },
          description: "As part of a team of Developers my role was to work on the frontend of Frog 3 the latest version of the PHP driven app used in Schools across the UK and Europe. This included a Javascript-heavy Calendar application that provided a better experience in viewing and creating appointments. The final 18 months of my time at Frog was working on a project to deliver a new learning platform for the Malaysian Government which is now being used in 10,000 schools by over 6 million Teachers and Students.",
          techSkills: [
            "PHP and Javascript Development.",
            "Large Single Page App built and architected in Javascript.",
            "Assisted in creation, maintenance, documentation and tutorials of widget platform for 3rd party developers.",
            "Worked with mixed methodologies, semi-agile and Waterfall to help deliver projects on a 6 weekly basis."
          ],
          personalSkills: [
            "Helped mentor backend developers migrating into frontend development.",
            "Assisted in offsite training schemes to teach customers how to develop for the widget platform."
          ]
        },{
          company: "Easy Affiliate",
          position: "Frontend Developer",
          type: "Full time - Permanent",
          location: "Huddersfield, UK",
          duration: {
            startDate: "2009-08-10",
            endDate: "2010-06-13"
          },
          description: "I worked in this small affiliate marketing company to help maintain their existing referral platform that awarded points for users completing surveys and providing data. I helped to create a unified system that pulled various data sources together for reporting and helped to redesign ‘iGain' they companies newer platform for advertising-driven rewards platform.",
          techSkills: [
            "PHP, MySQL and JavaScript.",
            "Built a reporting tool called 'The Hive', a frontend to the company's proprietary affiliate marketing system",
            "Automated tracking and retrieval of transaction data from various 3rd party services."
          ],
          personalSkills: []
        },{
          company: "Acorn Stairlifts",
          position: "Developer",
          type: "Full time - Permanent",
          location: "Steeton, UK",
          duration: {
            startDate: "2008-06-01",
            endDate: "2009-08-08"
          },
          description: "My first development job, I worked across the web stack and discovered my preference for building the frontend. Here is where I first got the opportunity to use jQuery and increase my knowledge of JavaScript as well. I worked on reporting and tracking systems as well as several UIs and even a version of a site that was targeted at Blackberry Web Browsers.",
          techSkills: [
            "PHP, MySQL, Javascript, XML, SOAP.",
            "Built reporting tools for management to use for data mining across various data sets.",
            "Integrated UPS tracking information for customer portal.",
            "Worked with IT Team to create a global stock system to enable tracking of products across warehouses in UK and US."
          ],
          personalSkills: []
        }, {
          company: "Nova Corporation",
          position: "English Instructor",
          type: "Full time - Permanent",
          location: "Tokyo, Japan",
          duration: {
            startDate: "2006-09-05",
            endDate: "2007-09-05"
          },
          description: "I took a year out after University to live and work in Japan. Teaching English gave me an opportunity to see another part of the world, meet new and interesting people and push my capabilities in terms of helping people to understand another language. It's a skill I'm proud to say I've been regularly commended on since.",
          techSkills: [],
          personalSkills: [
            "Improved my own communication, working with children from 6 months to 16 and with adults 18 to 80 all of whom had very low to medium levels of English.",
            "Lead group discussions on a variety of topics to groups from 4 to 20.",
            "Undertook additional training to be able to teach a wide range of recognised business and educational qualifications such as TOEIC and Eiken."
          ]
        }
      ],
      education: [{
        institute: "UWIC Business School, Cardiff",
        qualification: "BSc Hons. Business Information Systems",
        grade: "2:1",
        date: "2006-07-01"
      },{
        institute: "South Devon College, Torquay",
        qualification: "A Levels in Computing, History, Sociology",
        grade: "D, C, B",
        date: "2002-07-01"
      },{
        institute: "St Gregory's School, Bath",
        qualification: "10 GCSE's including Maths, Science & English",
        grade: "7 B, 3 A",
        date: "1999-07-1"
      }],
      techSkillSet: [
        'RWD','HTML(5/XHMLT)', 'CSS(2/3)', 'SASS/LESS','Javascript','AngularJS', 'Jasmine', 'Ember',
        'ReactJS', 'Redux', 'ES6/ES2015', 'jQuery','CanJS','JavascriptMVC', 'Grunt', 'Gulp',
        'ExpressJS', 'Node', 'Rails','Ruby','PHP', 'MySQL', 'PostgreSQL','Mongo',
        'Apache', 'Nginx', ''
      ],
      interests: [{
        interest: "Photography",
        description: " I've done several weddings, I'm on Flickr and I love travel photography especially."
      }, {
        interest: "Japan",
        description: "I lived there for a year, have returned and still have love everything about it. When I can I try and improve my japanese"
      }, {
        interest: "Reading",
        description: "My quest for knowledge is a long one, I like to read Murakami books and anything todo with improving the self and the mind."
      }],
      references: [],
      cvLink: "https://docs.google.com/document/d/1pVE3-bOdq4sR9fBng7YeMQdGdOcUoJHGTW-zgt1Wo0s/edit?usp=sharing"
    };
  }
});

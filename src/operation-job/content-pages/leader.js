import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import '../../assets/css/content-page.css';
import NavBar from '../components/navbar';
import liveLifeLeaders from '../../assets/images/live-life-leaders.jpg';
import youthLeader from '../../assets/images/youth-leader.jpg';
import ohJdb from '../../assets/images/oh-jdb.jpg';
import ohTrophy from '../../assets/images/oh-trophy.jpg';
import ohAllHands3 from '../../assets/images/oh-all-hands3.jpg';
import ohAllHands2 from '../../assets/images/oh-all-hands2.jpg';
import ohAllHandsBatman1 from '../../assets/images/oh-all-hands-batman1.jpg';

const domains = {
  EXECUTING: 'Executing',
  INFLUENCING: 'Influencing',
  RELATIONSHIP: 'Relationship-Building',
  STRATEGIC: 'Strategic-Thinking',
};
const strengthsList1To5 = {
  RESPONSIBILITY: {
    name: 'Responsibility',
    domain: domains.EXECUTING,
    order: 1,
    description: 'People exceptionally talented in the Responsibility theme take psychological ownership of what they say they will do. ' +
     'They are committed to stable values such as honesty and loyalty.',
  },
  DISCIPLINE: {
    name: 'Discipline',
    domain: domains.EXECUTING,
    order: 2,
    description: 'People exceptionally talented in the Discipline theme enjoy routine and structure. Their world is best described ' +
      'by the order they create.',
  },
  ACTIVATOR: {
    name: 'Activator',
    domain: domains.INFLUENCING,
    order: 3,
    description: 'People exceptionally talented in the Activator theme can make things happen by turning thoughts into action.',
  },
  RELATOR: {
    name: 'Relator',
    domain: domains.RELATIONSHIP,
    order: 4,
    description: 'People exceptionally talented in the Relator theme enjoy close relationships with others. They find deep ' +
      'satisfaction in working hard with friends to achieve a goal.',
  },
  STRATEGIC: {
    name: 'Strategic',
    domain: domains.STRATEGIC,
    order: 5,
    description: 'People exceptionally talented in the Strategic theme create alternative ways to proceed. Faced with any ' +
      'given scenario, they can quickly spot the relevant patterns and issues.',
  },
};
const strengthsList6To10 = {
  LEARNER: {
    name: 'Learner',
    domain: domains.STRATEGIC,
    order: 6,
    description: 'People exceptionally talented in the Learner theme have a great desire to learn and want to continuously improve. ' +
      'The process of learning, rather than the outcome, excites them.',
  },
  ACHIEVER: {
    name: 'Achiever',
    domain: domains.EXECUTING,
    order: 7,
    description: 'People exceptionally talented in the Achiever theme work hard and possess a great deal of stamina. They take immense ' +
      'satisfaction in being busy and productive.',
  },
  MAXIMIZER: {
    name: 'Maximizer',
    domain: domains.INFLUENCING,
    order: 8,
    description: 'People exceptionally talented in the Maximizer theme focus on strengths as a way to stimulate personal and group ' +
      'excellence. They seek to transform something strong into something superb.',
  },
  FOCUS: {
    name: 'Focus',
    domain: domains.EXECUTING,
    order: 9,
    description: 'People exceptionally talented in the Focus theme can take a direction, follow through, and make the corrections ' +
      'necessary to stay on track. They prioritize, then act.',
  },
  COMMUNICATION: {
    name: 'Communication',
    domain: domains.INFLUENCING,
    order: 10,
    description: 'People exceptionally talented in the Communication theme generally find it easy to put their thoughts into words. ' +
      'They are good conversationalists and presenters.',
  },
};


const Leader = ({ handleClick }) => {
  const strengthsItems1 = _.map(strengthsList1To5, strength => (
    <div className={`uk-panel uk-panel-box uk-margin uk-margin-right oj-strength oj-domain-${strength.domain}`} key={strength.order}>
      <div className="uk-margin-left">
        <div className="uk-panel-title">
          {`${strength.order}. ${strength.name}`}
        </div>
        <p>{strength.description}</p>
      </div>
    </div>
  ));
  const strengthsItems2 = _.map(strengthsList6To10, strength => (
    <div className={`uk-panel uk-panel-box uk-margin uk-margin-right oj-strength oj-domain-${strength.domain}`} key={strength.order}>
      <div className="uk-margin-left">
        <div className="uk-panel-title">
          {`${strength.order}. ${strength.name}`}
        </div>
        <p>{strength.description}</p>
      </div>
    </div>
  ));

  const jdbParagraph = 'Hand-picked by the CEO Ian McCrae to be exposed to greater business initiatives. I had the opportunity ' +
    'to work with a diverse team of like minded leaders to innovate change within Orion Health. I found myself ' +
    'coordinating two of their quarterly R&D All Hands meetings. This involved a huge amount of planning, a Batman costume ' +
    'and epic videos. I received a CEO award for my efforts.';
  const strengthsParagraph = ' is an assessment to identify naturally what you do best. Here are my top 10 Strengths:';
  const scholarshipParagraph = ' UC Emerging Leaders Scholarship';

  return (
    <div className="operation-job-page uk-height-viewport">
      <NavBar handleClick={handleClick} />
      <div className="uk-container uk-container-center oj-container uk-margin-large-bottom">
        <div className="uk-vertical-align uk-text-center">
          <h1 className="oj-title uk-vertical-align-middle uk-margin-top">Leader</h1>
        </div>
        <div className="uk-grid uk-margin-large-top uk-margin-large-bottom" data-uk-grid-margin>
          <div className="uk-width-1-1">
            <h2>Orion Health Junior Development Board</h2>
            <p>{jdbParagraph}</p>
            <div className="uk-grid" data-uk-grid-margin>
              <div className="uk-width-medium-2-10">
                <img src={ohTrophy} alt="Trophy" title="Trophy" />
              </div>
              <div className="uk-width-medium-8-10">
                <img
                  src={ohJdb}
                  width="600px"
                  alt="Orion Health Founding Junior Development Board"
                  title="Orion Health Founding Junior Development Board"
                />
              </div>
            </div>
            <div className="uk-grid uk-margin-bottom">
              <div className="uk-width-medium-4-10 uk-margin-bottom">
                <img
                  src={ohAllHands3}
                  width="600px"
                  alt="Joseph Sutton as MC with Orion Health audience"
                  title="Joseph Sutton as MC with Orion Health audience"
                />
              </div>
              <div className="uk-width-medium-6-10">
                <div className="uk-margin">
                  <img
                    src={ohAllHands2}
                    width="600px"
                    alt="Joseph Sutton as MC of All Hands meeting"
                    title="Joseph Sutton as MC of All Hands meeting"
                  />
                </div>
                <div className="uk-margin">
                  <img src={ohAllHandsBatman1} width="600px" alt="Joseph Sutton as Batman" title="Joseph Sutton as Batman" />
                </div>
              </div>
            </div>
            <h2>Volunteer Involvement</h2>
            <p>
              I have been a Kids Programme Leader (9 years) and Youth Programme Leader (2 years).
              Currently I help lead a group of ~20 young adults. I also have been awarded a
              <a href="http://www.canterbury.ac.nz/ScholarshipSearch/ScholarshipDetails.aspx?ScholarshipID=6935.93">
                {scholarshipParagraph}
              </a> (2012) and a <a href="http://www.dofehillary.org.nz/Site/do_the_award/Gold.aspx">
              Gold Duke of Edinburgh Hillary Award</a> (2014).
            </p>
            <div className="uk-grid uk-margin-bottom">
              <div className="uk-width-medium-1-2 uk-margin-bottom">
                <img src={liveLifeLeaders} width="600px" alt="Young Adult Leaders" title="Young Adult Leaders" />
              </div>
              <div className="uk-width-medium-1-2">
                <img src={youthLeader} width="600px" alt="Youth Group" title="Youth Group" />
              </div>
            </div>
            <h2>Clifton Strengths Finder</h2>
            <p><a href="https://www.gallupstrengthscenter.com/">Clifton Strengths Finder</a>{strengthsParagraph}</p>
            <div className="uk-grid oj-no-margin">
              <div className="uk-width-medium-1-2 oj-no-left-padding">
                <ul className="oj-no-left-padding">
                  {strengthsItems1}
                </ul>
              </div>
              <div className="uk-width-medium-1-2 oj-no-left-padding">
                <ul className="oj-no-left-padding">
                  {strengthsItems2}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Leader.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Leader;

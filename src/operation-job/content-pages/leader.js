import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import '../../assets/css/content-page.css';
import ohJdb from '../../assets/images/oh-jdb.jpg';
import ohTrophy from '../../assets/images/oh-trophy.jpg';
import liveLifeLeaders from '../../assets/images/live-life-leaders.jpg';
import youthLeader from '../../assets/images/youth-leader.jpg';
import NavBar from '../components/navbar';

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


const Leader = ({ name, handleClick }) => {
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
    'to work with a diverse team of like minded leaders to innovate change within Orion Health. The main change I was ' +
    'involved with was turning company meetings into a great experience of which I recieved a CEO award for. ' +
    'See the Speaker page for more information.';
  const strengthsParagraph = ' is an assessment to identify naturally what you do best. Here are my top 10 Strengths:';
  const scholarshipParagraph = ' UC Emerging Leaders Scholarship';

  return (
    <div className="operation-job-page uk-height-viewport">
      <NavBar handleClick={handleClick} />
      <div className="uk-container uk-container-center oj-container uk-margin-large-bottom">
        <div className="uk-vertical-align uk-text-center">
          <h1 className="oj-title uk-vertical-align-middle uk-margin-top">{name}</h1>
        </div>
        <div className="uk-grid uk-margin-large-top uk-margin-large-bottom" data-uk-grid-margin>
          <div className="uk-width-1-1">
            <h2>Wherever I go I find myself leading people</h2>
            <p>
              I have been a Kids Church Leader (9 years) and Youth Leader (2 years) at City East Church.
              Currently I help lead a life group of young adults at Grace Vineyard Church. I also have been awarded a
              <a href="http://www.canterbury.ac.nz/ScholarshipSearch/ScholarshipDetails.aspx?ScholarshipID=6935.93">
                {scholarshipParagraph}
              </a> (2012) and a <a href="http://www.dofehillary.org.nz/Site/do_the_award/Gold.aspx">
              Gold Duke of Edinburugh Hillary Award</a> (2014).
            </p>
            <div className="uk-grid uk-margin-bottom">
              <div className="uk-width-medium-1-2 uk-margin-bottom">
                <img src={liveLifeLeaders} width="600px" alt="Life Group Leaders" title="Life Group Leaders" />
              </div>
              <div className="uk-width-medium-1-2">
                <img src={youthLeader} width="600px" alt="City East Church Youth 2012" title="City East Church Youth 2012" />
              </div>
            </div>
            <h2>Orion Health Junior Development Board</h2>
            <p>{jdbParagraph}</p>
            <div className="uk-grid" data-uk-grid-margin>
              <div className="uk-width-medium-2-10">
                <img src={ohTrophy} alt="Trophy" />
              </div>
              <div className="uk-width-medium-8-10">
                <img src={ohJdb} width="600px" alt="Orion Health Founding Junior Development Board" />
              </div>
            </div>
            <h2>Clifton Strengths Finder</h2>
            <p><a href="https://www.gallupstrengthscenter.com/">Clifton Strengths Finder</a>{strengthsParagraph}</p>
            <div className="uk-grid oj-no-margin">
              <div className="uk-width-medium-1-2 oj-left-padding">
                <ul className="oj-left-padding">
                  {strengthsItems1}
                </ul>
              </div>
              <div className="uk-width-medium-1-2 oj-left-padding">
                <ul className="oj-left-padding">
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
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Leader;
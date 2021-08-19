// import { Component } from 'react';
import { useState } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import s from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good === 0) return 0;
    const positiveFeedback = `${Math.round(
      (good / countTotalFeedback()) * 100,
    )}%`;
    return positiveFeedback;
  };

  const onClickBtn = option => {
    switch (option.toLowerCase()) {
      case 'good':
        return setGood(good => good + 1);
      case 'neutral':
        return setNeutral(neutral => neutral + 1);
      case 'bad':
        return setBad(bad => bad + 1);
      default:
        return;
    }
  };

  return (
    <div className={s.app}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={onClickBtn}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() === 0 ? (
          <Notification message={'No feedback given'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

// Классы

// import { Component } from 'react';
// import Section from '../Section/Section';
// import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
// import Statistics from '../Statistics/Statistics';
// import Notification from '../Notification/Notification';
// import s from './App.module.css';

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onClickBtn = option => {
//     return this.setState(prevState => ({
//       [option.toLowerCase()]: prevState[option.toLowerCase()] + 1,
//       // [option]: prevState[option] + 1,
//     }));
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   }
//   countPositiveFeedbackPercentage() {
//     const { good } = this.state;
//     if (good === 0) return 0;
//     const positiveFeedback = `${Math.round(
//       (good / this.countTotalFeedback()) * 100,
//     )}%`
//     return positiveFeedback;
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const options = ['Good', 'Neutral', 'Bad'];
//     return (
//       <div className={s.app}>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onClickBtn}
//           />
//         </Section>
//         <Section title={'Statistics'}>
//           {total === 0 ? (
//             <Notification message={'No feedback given'} />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positiveFeedback={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;

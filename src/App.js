import { useState } from 'react';
import './App.css';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Section from './Components/Section/Section';
import Statistics from './Components/Statistics/Statistics';
import Notification from './Components/Notification/Notification.jsx';

const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const commonFeedback = ['good', 'neutral', 'bad'];

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / (good + neutral + bad));
  };

  // const onLeaveFeedback = element => {
  //   this.setState(prevState => ({ [element]: prevState[element] + 1 }));
  // };

  const onLeaveFeedback = element => {
    switch (element) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  // this.setState({ [name]: value });
  // switch (name) {
  //   case "title":
  //     setTitle(value);
  //     break;
  //   case "descr":
  //     setDescr(value);
  //     break;
  //   case "priority":
  //     setPriority(value);
  //     break;
  //   default:
  //     return;

  // const onResetStats = () => {
  //   this.setState({
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   });
  // };

  const onResetStats = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={commonFeedback}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
            onResetStats={onResetStats}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
};

export default App;

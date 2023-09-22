import { Component } from "react";
import { FeedbackOptions  } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export class App  extends Component{
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  onLeaveFeedback = (option) => {
this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      }
    }) 
  }
  onTotal = () =>  {
      return( this.state.good + this.state.neutral  + this.state.bad)
  }
  positivePercentage = () => {
    const total = this.onTotal();
    const number = Math.round((this.state.good*100) / total);
    return (
   number
    )
  }

  render() {
    const {good,neutral, bad} = this.state;
   
    return (
    <Section title={'Plese leave your feedback'}>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        { this.onTotal() ?
          <Statistics good={good} neutral={neutral} bad={bad} total={this.onTotal()} positivePercentage={this.positivePercentage()} />
          : <Notification message={"There is no feedback"}/>}
      </Section>
  );
  }

};

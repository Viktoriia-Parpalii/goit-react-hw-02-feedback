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
    let options = [];
    for (const option in this.state) {
      options.push(option);
     }
    const stateEl = this.state;
    const availabilityOfReviws = stateEl.good > 0 || stateEl.neutral > 0 || stateEl.bad > 0;
    return (
    <Section title={'Plese leave your feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback} />
        { availabilityOfReviws ?
          <Statistics good={stateEl.good} neutral={stateEl.neutral} bad={stateEl.bad} total={this.onTotal()} positivePercentage={this.positivePercentage()} />
          : <Notification message={"There is no feedback"}/>}
          
      </Section>
  );
  }

};

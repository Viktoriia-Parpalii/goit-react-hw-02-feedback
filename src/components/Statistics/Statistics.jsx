import css from './Statistics.module.css';

export const Statistics = ({good, neutral, bad, total , positivePercentage}) => {
    return (
        <>
 <ul className={css.list}>
        <li>{`Good: ${good}`}</li>
        <li>{`Neutral: ${neutral}`}</li>
        <li>{`Bad: ${bad}`}</li>
        <li>{`Total: ${total}`}</li>
        <li>{`Positive feedback: ${ positivePercentage > 0 ? positivePercentage : 0 }%`}</li>
 </ul>
        </>
    )
}
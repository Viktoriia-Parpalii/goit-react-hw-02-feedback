import css from './FeedbackOptions.module.css'

export const FeedbackOptions  = ({options, onLeaveFeedback})=> {
        return (
            <>
             <div className={css.wrapper}>
                {options.map((option) => {
                    return (
                        <button key={option} onClick={()=> onLeaveFeedback(option)} className={css.btn} >{option}</button>
                   )
                })}
                
            </div>  
                <h2>Statistics</h2>
            </>
        ) 
}
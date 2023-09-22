import css from './Section.module.css';

export const Section = ({children, title}) => {
    return (
        <div className={css.section}>
            <h1>{ title}</h1>
        {children}
        </div>
    )
}
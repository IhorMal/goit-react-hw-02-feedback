import css from './FeedbackOptions.module.css'
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    function UpperCase(elm) {
        return elm.slice(0, 1).toUpperCase() + elm.slice(1)
    }
    return (
        <ul className={css.list}>
            {options.map((element) => (
                <li className={css.item} key={element}>
                    <button
                        className={`${css.button} ${css[element]}`}
                        type='button'
                        name={element}
                        onClick={onLeaveFeedback}>
                        {UpperCase(element)}</button>
                </li>
            ))}; 
        </ul>
    )
     
};
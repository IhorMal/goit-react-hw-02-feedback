
export const Statistics = (props) => {
    const { good, neutral, bad, total, positivePercentage } = props;
    
    return (
        <>
            <h2>Statistics</h2>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>             
                <li>Target: {total}</li>
                <li>Positive feedback {positivePercentage}%</li>
            </ul>
        </>
    );
           
        
};



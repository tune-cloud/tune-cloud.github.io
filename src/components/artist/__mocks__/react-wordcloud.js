export default function ReactWordcloud(props) {
    return(<ol data-testid='word-cloud'>
        {props.words.map((word)=>{
            <li>{word.text} {word.value}</li>
        })}
    </ol>)
}

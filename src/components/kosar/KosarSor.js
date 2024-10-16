export default function KosarSor(props){    
    
    return(
        <div className="kosarSor">
            <p>{props.elem.kategoria}</p>
            <p>{props.elem.db}</p>
            <p>{props.elem.ar * props.elem.db}</p>
        </div>
    )
}
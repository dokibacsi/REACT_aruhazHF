export default function Termek(props) {
    
    function athelyez(){
        const { szin, ...szuksegesAdatok } = props.elem;
        props.athelyez(szuksegesAdatok);
    }
    
    return (
        <div className="termek">
                <p>Neve: {props.elem.kategoria}</p>
                <p>Szín: {props.elem.szin}</p>
                <p>Ár: {props.elem.ar}</p>
            
            <button onClick = {athelyez}>Kosárba</button>
        </div>
    )
}
import Termek from "./Termek";

export default function Termekek(props){

    function athelyez(termek){
        props.athelyez(termek)
    }

    return(
        <>  
            {
                props.lista.map((elem, index) => {
                    return(<Termek elem = {elem} key = {index} index = {index} athelyez = {athelyez}/>)
                })
            }
        </>
    )
}
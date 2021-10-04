import React,{useState} from "react";

export const useSelect=(stateInicial,opciones)=>{
    const [state, setstate] = useState('');
    const selectNoticias=()=>{
        return(
            <select className="browser-default"
            onChange={e=>setstate(e.target.value)}
            value={state}>
                {opciones.map(opcion=>(
                    <option key={opcion.value}
                    value={opcion.value}>
                        {opcion.label}
                    </option>
                ))}
            </select>
        )

    }
    return [state,selectNoticias];
}
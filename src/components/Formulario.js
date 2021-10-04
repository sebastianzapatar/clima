import React from 'react'
import { useSelect } from './useSelect';

export const Formulario = ({setcategoria}) => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        setcategoria(categoria);
    }
    const opciones=[{value:'general',label:'General'},
    {value:'business',label:'Negocios'},
    {value:'health',label:'Salud'},
    {value:'science',label:'Ciencia'},
    {value:'technology',label:'Tecnologia'},
    ]
    const [categoria,SelectNoticias]=useSelect('general',opciones);
    return (
        <div className="row">
            <div className="col s12 m8 offset-m2">
                <form onSubmit={handleSubmit}>
                    <h2>Encuentra las noticias por categoria</h2>
                    <SelectNoticias />
                    <div className="input-field col s12">
                        <input type="submit"
                        value="buscar"
                        className="btn-large amber darken-2"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

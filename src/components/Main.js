import React,{useState,useEffect} from 'react'
import { Formulario } from './Formulario';
import { Header } from './Header'
import { ListaNoticias } from './ListaNoticias';

export const Main = () => {
    const [categoria, setcategoria] = useState('');
    const [noticias, setnoticias] = useState([]);
    useEffect(() => {
        const consultarApi=async()=>{
            const url=`http://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=4ab1b67d913c4e4db23b801201507a82`;
            const api=await fetch(url);
            const resultado= await api.json();
            setnoticias(resultado.articles);
            
        }
        consultarApi();
        
    }, [categoria])
    return (
        <div>
            <Header titulo='Aplicacion de noticias'/>
            <div className="container white">
                <Formulario setcategoria={setcategoria}/>
                <ListaNoticias noticias={noticias}/>
            </div>
        </div>
    )
}

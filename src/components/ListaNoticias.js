import React from 'react'
import { Noticia } from './Noticia'

export const ListaNoticias = ({noticias}) => {
    return (
        <div className="row">
            {noticias.map(noticia=>(
                <Noticia key={noticia.title}
                noticia={noticia}/>
            ))}
        </div>
    )
}

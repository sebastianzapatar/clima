import React from 'react'

export const Noticia = ({noticia}) => {
    const {title,urlToImage,url,description,source}=noticia;
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage} alt={title}/>
                    <span className="card-title">{source.name}</span>
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url}
                    target="_blank"
                    rel="nooponer noreferrer"
                    className="waves-effect waves-light btn">
                        Ver Noticia completa
                    </a>
                </div>
            </div>
        </div>
    )
}

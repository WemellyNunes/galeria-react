import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import axios from "axios";

const PhotoDetail = () => {
    const url = window.location.href.split("/");
    const idAlbum = url.length - 1;
    const urlParam = url[idAlbum];
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        console.warn("Aqui")
        const buscaPhoto = () => {
            axios.get(`https://jsonplaceholder.typicode.com/photos/${urlParam}`)
              .then(function (response) {
                return response.data;
              }).then(function (json) {
                setPhoto(json);
              })
        }
        
        buscaPhoto();
    }, [photo]);

    return (
        <div className="photoSelected">
            <Link to={`/galeria-react-web2/album/${photo.albumId}`}>
                <button>Voltar</button>
            </Link>
            <h3>{photo.title}</h3>
            <img src={photo.url}/>
        </div>
    )
}

export default PhotoDetail;
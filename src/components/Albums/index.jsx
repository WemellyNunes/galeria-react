import { useEffect, useState } from "react";
import "./styles.css";
import specifyAlbum from "../../api/specifyAlbum";
import axios from "axios";
import { Link } from "react-router-dom";

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        const buscaAlbums = () => {
            axios.get('https://jsonplaceholder.typicode.com/albums/')
            .then(function(response){
                return response.data;
            }).then(function(json){
                setAlbums(json);
            })
        }
        
        buscaAlbums();
    }, [albums]);

    const handleAlbumClick = async (id) => {
        const result = await specifyAlbum(id);
        console.log(result);
    }
        
    return (
        <div className="albums">
            {albums.map((element, index) => (
                <div key={index} className="albumsTitle" onClick={() => handleAlbumClick(element.id)}>
                    <Link to={`/galeria-react-web2/album/${element.id}`}>{element.title}</Link>
                </div>
            ))}
        </div>
    )
}

export default Albums;
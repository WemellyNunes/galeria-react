import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { Link } from "react-router-dom"

const AlbumDetails = () => {
  const url = window.location.href.split("/");
  const idAlbum = url.length - 1;
  const urlParam = url[idAlbum];
  const [photos, setPhotos] = useState([]);
  const [albumName, setAlbumName] = useState("");

  useEffect(() => {
    const buscaPhotos = () => {
      axios.get(`https://jsonplaceholder.typicode.com/albums/${urlParam}/photos`)
        .then(function (response) {
          return response.data;
        }).then(function (json) {
          setPhotos(json);
        })
    }

    const buscaAlbum = () => {
      axios.get(`https://jsonplaceholder.typicode.com/albums/${urlParam}`)
        .then(function (response) {
          return response.data;
        }).then(function (json) {
          setAlbumName(json['title']);
        })
    }
    buscaAlbum();
    buscaPhotos();
  }, [photos, albumName]);

  return (
    <div className="albumPhotos">
      <Link to={`/`}>
        <button>Voltar</button>
      </Link>
      <h2 className="albumTitle">{albumName}</h2>
      {photos.map((element, index) => (
        <div className="photos">
          <Link to={`/galeria-react-web2/photos/${element.id}`}>
            <img src={element.url} />
          </Link>
        </div>
      ))}
    </div>
  )
};

export default AlbumDetails;

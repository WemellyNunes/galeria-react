import axios from "axios";

const specifyAlbum = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
    .then(function(response){
        return response.data
    })
}

export default specifyAlbum;
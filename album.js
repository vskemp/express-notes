function getSongsForAlbum(albumId) {
    //return data.albums.find(album => album.id == albumId).songs;
    const theAlbum = data.albums.find((anAlbum) => {
        // is the album I'm currently visiting
        // the one we wanrt?
        // if (anAlbum.id ==albumId) {
                // ( I need to return true or false)
            //return true;
    //}else{
        // return false;
    //}
        return anAlbum.id == albumId;
    });
    return theAlbum.songs;
}
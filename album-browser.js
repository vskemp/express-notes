app.get("/album/:albumId", (req, res) => {
    // express puts your 
    // res.send(`You want: ${req.params.albumId`})
    try {
        const songs = albums.getSongsForAlbum
        res.json(songs);
    } catch (e) {
        console.log(e);
        console.log("++=+=vksov");
        res.status(404);
        res.send("Sorry, everyone goofed!");

    }
});
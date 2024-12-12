// Create a function called formatAlbums that:

// Takes an array of albums and a lookup object (containing artists with their corresponding ids).
// Doesn't mutate the original input.
// Switches out the artistName for the appropriate id.

function formatAlbums(albums, artistIdMap) {
    return albums.map((album) => {
        return {
            name: album.name, 
            artistId: artistIdMap[album.artist],
            releaseYear: album.releaseYear,
        }
    });
}

module.exports = formatAlbums;
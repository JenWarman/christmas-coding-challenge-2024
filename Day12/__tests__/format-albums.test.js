const { formatAlbums } = require('../format-albums.js');

describe('formatAlbum', () => {
    test('formatAlbums is a funtion', () => {
        expect(typeof formatAlbums).toBe('function');
    });
    test('return new object with artist property replaced with artistId', () => {
        const albums = [
            { name: "Lover", artist: "Taylor Swift", releaseYear: 2019 },
          ];
        const artistIdReference = {
            "Taylor Swift": 9923,
          };
        const newAlbum = formatAlbums(albums, artistIdReference);
        expect(newAlbum).toEqual([
            { name: "Lover", artistId: 9923, releaseYear: 2019},
          ]);
    })
    test('return new object with artist property replaced with artistId when passed more than one object inside array', () => {
        const albums = [
            { name: "Lover", artist: "Taylor Swift", releaseYear: 2019 },
            { name: "High Voltage", artist: "AC/DC", releaseYear: 1975 }
          ];
        const artistIdReference = {
            "Taylor Swift": 9923,
            "AC/DC": 324
          };
        const newAlbum = formatAlbums(albums, artistIdReference);
        expect(newAlbum).toEqual([
            { name: "Lover", artistId: 9923, releaseYear: 2019 },
            { name: "High Voltage", artistId: 324, releaseYear: 1975 }
          ]);
    })
    describe('testing for mutation of originl input', () => {
        test('original array is not mutated', () => {
            const albums = [
                { name: "Lover", artist: "Taylor Swift", releaseYear: 2019 },
                { name: "High Voltage", artist: "AC/DC", releaseYear: 1975 }
              ];
            const artistIdReference = {
                "Taylor Swift": 9923,
                "AC/DC": 324
              };
            const output = formatAlbums(albums, artistIdReference);
            expect(albums).toEqual([
                { name: "Lover", artist: "Taylor Swift", releaseYear: 2019 },
                { name: "High Voltage", artist: "AC/DC", releaseYear: 1975 }
            ]);
        })
    })
})
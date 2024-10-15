document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
        { name: 'Henrique & Juliano', Image: '/img/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Mateus', Image: '/img/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', Image: '/img/artista-ze-neto.jpg' },
        { name: 'Gustavo Lima', Image: '/img/artista-gustavo-limma.jpg' },
        { name: 'Luan Santana', Image: '/img/artista-luan-santana.jpg' },
        { name: 'Matheus & Kauan', Image: '/img/artista-mateus-kauan.jpg' }
    ];

    const albumsData = [
        { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', Image: '/img/album-white-noise.jpg' },
        { name: 'O ceu explica tudo (Ao vivo)', artist: 'Henrique & Juliano', Image: '/img/album-ceu-explica.jpg' },
        { name: 'Nada como o dia apos o outro', artist: 'Racionais', Image: '/img/album-vida-loka.jpg' },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', Image: '/img/album-hit-me.jpg' },
        { name: 'CAJU', artist: 'Liniker', Image: '/img/album-caju.jpg' },
        { name: 'Escandalo Intimo', artist: 'Luisa Sonza', Image: '/img/album-escandalo.jpg' }
    ];

    const artistGrid = document.querySelector('.artistas-grid')
    const albunsGrid = document.querySelector('.albuns-grid')

    artistsData.forEach(artist => {

        const artistcard = document.createElement('div')
        artistcard.classList.add('artist-card')

        artistcard.innerHTML = `
        <img src="${artist.Image}" alt="${artist.name}">
        <div>
            <h3>${artist.name
            }
            </h3>
        <p>artista</p>
        
        </div>
        
        `
        artistGrid.appendChild(artistcard)
    })


    albumsData.forEach(album => {

        const albumscard = document.createElement('div')
        albumscard.classList.add('albums-card')

        albumscard.innerHTML = `
        <img src="${album.Image}" alt="${album.name}">
        <div>
            <h3>${album.name}</h3>
             <p>${album.artist}</p>
        </div>
        
        `
        albunsGrid.appendChild(albumscard)
    })
})




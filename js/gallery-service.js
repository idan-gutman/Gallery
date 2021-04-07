'use strict';

var gProjs = [
    {
        id: _makeId(),
        name: 'Book Shope',
        title: 'My Book Shope',
        desc: 'Bookshop, an ecommerce startup intended to help independent bookstores assert themselves online, has the tech giant in its sights.',
        url: 'proj/bookShope/index.html',
        publishedAt: 'April 2021',
        labels: ['Matrixes', 'keyboard events'],
        imgUrl:'img/portfolio/Book Shope.jpg',
        client: 'Coading Academy',
        category:'Shope',
        folderName:'BookShope'
    },
    {
        id: _makeId(),
        name: 'Guess Me',
        title: 'Guess Me!',
        desc: 'Guess Who is a two player game where players use differential yes or no questions to isolate a hidden character. The first player to guess the other players hidden character wins.',
        url: 'proj/GuessMe/.index.html',
        publishedAt: 'April 2021',
        labels: ['Matrixes', 'keyboard events'],
        imgUrl:'img/portfolio/GuessMe.jpg',
        client: 'Coading Academy',
        category:'Game',
        folderName:'GuessMe'
    },
    {
        id: _makeId(),
        name: 'MineSweeper',
        title: 'Mine Sweeper',
        desc: 'A minesweeper is a small warship designed to remove or detonate naval mines. Using various mechanisms intended to counter the threat posed by naval mines, minesweepers keep waterways clear for safe shipping',
        url: 'proj/MineSweeper/.index.html',
        publishedAt: 'April 2021',
        labels: ['Matrixes', 'keyboard events'],
        imgUrl:'img/portfolio/MineSweeper.jpg',
        client: 'Coading Academy',
        category:'Game',
        folderName:'MineSweeper'
    },
    {
        id: _makeId(),
        name: 'Pacman',
        title: 'Pacman',
        desc: 'Pac-Man is an arcade video game that was made by Namco and designed by Toru Iwatani. It was released in 1980, and became very popular in the history of games.',
        url: 'proj/Pacman/.index.html',
        publishedAt: 'April 2021',
        labels: ['Matrixes', 'keyboard events'],
        imgUrl:'img/portfolio/Pacman.jpg',
        client: 'Coading Academy',
        category:'Game',
        folderName:'Pacman'
    },
    {
       
        id: _makeId(),
        name: 'Touch nums',
        title: 'Touch nums',
        desc: ' "Touch the Numbers" is a simple game for training your reflexes and peripheral vision.Peripheral vision is an essential skill for playing baseball, football, basketball, and various sports.To achieve a high score, try to use your peripheral vision, rather than focusing only on one spot.',
        url: 'proj/Touch nums/.index.html',
        publishedAt: 'April 2021',
        labels: ['Matrixes', 'keyboard events'],
        imgUrl:'img/portfolio/Touch nums.jpg',
        client: 'Coading Academy',
        category:'Game',
        folderName:'TouchNums'
    }
]

function getProjs(){
    return gProjs;
}



function getProjById(ProjId) {
    var Proj = gProjs.find(function (Proj) {
        return ProjId === Proj.id
    })
    return Proj;
}


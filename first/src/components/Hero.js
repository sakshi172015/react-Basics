import React from 'react'

function Hero({heroName}) {
    if(heroName === 'Joker') {
        throw new Error('Not a hero')
    }//if joker is received as a prop the full app crashes but we want if there is some error only that part should not work
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero

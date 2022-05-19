const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <a href="/places">
                        <button className="btn-primary">Places Page</button>
                    </a>

                </div>

            </main>
        </Def>
    )
}

module.exports = home
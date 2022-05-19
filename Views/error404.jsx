const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img height="100px" width="100px" src="/images/soloist.jpg" alt="Sl1" />
                </div>
            </main>
        </Def>
    )
}


module.exports = error404

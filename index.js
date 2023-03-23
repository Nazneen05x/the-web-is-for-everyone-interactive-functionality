//import express en dotenv
import express from 'express'

//maak een nieuwe express app
const server = express()

//public map gebruiken
server.use(express.static('public'))

//stel de views in
server.set('view engine', 'ejs')
server.set('views', './views')

// Stel afhandeling van formulieren in
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

//hier komen de routes







// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})


/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
async function fetchJson(url) {
    return await fetch(url)
      .then((response) => response.json())
      .catch((error) => error)
  }
  
  /**
   * postJson() is a wrapper for the experimental node fetch api. It fetches the url
   * passed as a parameter using the POST method and the value from the body paramater
   * as a payload. It returns the response body parsed through json.
   * @param {*} url the api endpoint to address
   * @param {*} body the payload to send along
   * @returns the json response from the api endpoint
   */
  export async function postJson(url, body) {
    return await fetch(url, {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .catch((error) => error)
  }
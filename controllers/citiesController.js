const ciudades = [
    { name: "Agra", country: "India", src: "../assets/cities/cityAgra.jpg", id:1 },
    { name: "Cusco", country: "Peru", src: "../assets/cities/cityCusco.jpg", id: 2 },
    { name: "London", country: "England", src: "../assets/cities/cityLondon.jpg", id: 3 },
    { name: "Misiones", country: "Argentina", src: "../assets/cities/cityMisiones.jpg", id:4 },
    { name: "Bali", country: "Indonesia", src: "../assets/cities/cityBali.jpg", id: 5 },
    { name: "Dubai", country: "United Arab Emirates", src: "../assets/cities/cityDubai.jpg", id:6 },
    { name: "Orlando", country: "United States", src: "../assets/cities/cityOrlando.jpg", id: 7},
    { name: "Paris", country: "France", src: "../assets/cities/cityParis.jpg", id: 8 },
    { name: "Phi-Phi", country: "Thailand", src: "../assets/cities/cityPhiPhi.jpg", id: 9 },
    { name: "Rio de Janeiro", country: "Brazil", src: "../assets/cities/cityRio.jpg", id: 10 },
    { name: "Sidney", country: "Australia", src: "../assets/cities/citySidney.jpg", id:11 },
    { name: "Tokyo", country: "Japan", src: "../assets/cities/cityTokyo.jpg", id:12 },
]


const citiesController = {returnCities: (req, res) =>{
    res.json({ response: { ciudades } })
},

    returnCity: (req, res) => {
        const city = ciudades.find(ciudad => ciudad.id.toString() === req.params.id)
        res.json({response: {city}})

}}

module.exports = citiesController
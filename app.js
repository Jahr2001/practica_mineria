const express = require('express');
const axios = require('axios').default;
const app = express();

app.use(express.json())
const PORT = 3000

app.get('/', (req, res) => {
    axios({
        method: "GET",
        url: "https://swapi.dev/api/",


    }).then((response) => {
        let data = response.data;
        console.log(data)
        res.send(data);
    }).catch((error) => {
        res.send(error)
    });;
});

app.get('/people', (req, res) => {
    axios({
        method: "GET",
        url: "https://swapi.dev/api/people/"
    }).then((response) => {
        let data = response.data;
        res.send(data);
    }).catch((error) => {
        res.send(error)
    });
});

app.get('/people/:id', async (req, res) => {
    let id = req.params.id;

    await axios({
        method: "GET",
        url: "https://swapi.dev/api/people/" + parseInt(id),
    }).then((response) => {

        let data = response.data;
        console.log(data)
        res.send(data);


    }).catch((error) => {
        res.send(error);
        
    });
});




app.get('/planets', (req, res) => {
    axios({
        method: "GET",
        url: "https://swapi.dev/api/planets/"
    }).then((response) => {
        let data = response.data;
        res.send(data);
    }).catch((error) => {
        res.send(error)
    });
});

app.get('/planets/:id', (req, res) => {
    let id = req.params.id;

    axios({
        method: "GET",
        url: "https://swapi.dev/api/planets/" + parseInt(id),
    }).then((response) => {
        let data = response.data;
        console.log(data)
        res.send(data);
    }).catch((error) => {
        res.send(error)
    });;
});


app.get('/films', (req, res) => {
    axios({
        method: "GET",
        url: "https://swapi.dev/api/films/"
    }).then((response) => {
        let data = response.data;
        res.send(data);
    }).catch((error) => {
        res.send(error)
    });
});

app.get('/films/:id', (req, res) => {
    let id = req.params.id;

    axios({
        method: "GET",
        url: "https://swapi.dev/api/films/" + parseInt(id),
    }).then((response) => {
        let data = response.data;
        console.log(data)
        res.send(data);
    }).catch((error) => {
        res.send(error)
    });;
});

app.get('/species', (req, res) => {
    axios({
        method: "GET",
        url: "https://swapi.dev/api/species/"
    }).then((response) => {
        let data = response.data;
        res.send(data);
    }).catch((error) => {
        res.send(error)
    });
});

app.get('/species/:id', (req, res) => {
    let id = req.params.id;

    axios({
        method: "GET",
        url: "https://swapi.dev/api/species/" + parseInt(id),
    }).then((response) => {
        let data = response.data;
        console.log(data)
        res.send(data);
    }).catch((error) => {
        res.send(error)
    });;
});

app.get('/vehicles', (req, res) => {
    axios({
        method: "GET",
        url: "https://swapi.dev/api/vehicles/"
    }).then((response) => {
        let data = response.data;
        res.send(data);
    }).catch((error) => {
        res.send(error)
    });
});

app.get('/vehicles/:id', (req, res) => {
    let id = req.params.id;

    axios({
        method: "GET",
        url: "https://swapi.dev/api/vehicles/" + parseInt(id),
    }).then((response) => {
        let data = response.data;
        console.log(data)
        res.send(data);
    }).catch((error) => {
        res.send(error)
    });;
});

app.get('/starships', (req, res) => {
    axios({
        method: "GET",
        url: "https://swapi.dev/api/starships/"
    }).then((response) => {
        let data = response.data;
        res.send(data);
    }).catch((error) => {
        res.send(error)
    });
});

// app.get('/starships/:id', (req, res) => {
//     let id = req.params.id;

//     axios({
//         method: "GET",
//         url: "https://swapi.dev/api/starships/" + parseInt(id),
//     }).then((response) => {
//         let data = response.data;
//         console.log(data)
//         res.send(data);
//     }).catch((error) => {
//         res.send(error)
//     });;
// });


app.listen(PORT, () => {
    console.log(`Service on port: ${PORT}`)
});
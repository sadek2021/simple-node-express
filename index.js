const express = require('express');
const cors = require('express');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('wow !Hello I am learning Node with nodemon automatic restart');
});

const users = [
    { id: 0, name: 'Shabana', email: 'shabana@gmail.com', phone: '0178888888' },
    { id: 1, name: 'Shabnoon', email: 'shabnoor@gmail.com', phone: '0178888888' },
    { id: 2, name: 'soniya', email: 'soniya@gmail.com', phone: '0178888888' },
    { id: 3, name: 'popy', email: 'popy@gmail.com', phone: '0178888888' },
    { id: 4, name: 'susmita', email: 'susmita@gmail.com', phone: '0178888888' },
    { id: 5, name: 'coli', email: 'coli@gmail.com', phone: '0178888888' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use query search paramiter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

});

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post')
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli')
})

app.listen(port, () => {
    console.log('Listening to port', port);
})
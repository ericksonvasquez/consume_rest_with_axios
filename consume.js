require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const consumePost = (theurl, user, pass) => {
    const axios = require('axios');
    const url = theurl;
    const data = {
        user:{
          username: user,
          pass: pass
             }
       };
    axios.post(url, data).then(response => {
       
            return res.json(response.data);
        
        
    });
}
consumePost('api_url',process.env.USER,process.env.PASS );
});
app.listen(process.env.PORT);

//jaimo rodriguez
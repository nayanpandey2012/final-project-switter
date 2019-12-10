const express = require('express');
const port = process.env.PORT || 3004;

const app = express();

app.listen(port, () => console.log(`Gateway on ${port}`));
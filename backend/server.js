const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'JTC' });
});

app.listen(PORT, () => {
  console.log(`JTC backend running on http://localhost:${PORT}`);
});

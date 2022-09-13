require("dotenv").config()
const Express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const db = mongoose.connection
const PORT = process.env.PORT;
const CONNECT = process.env.CONNECT
const app=Express()
const userRoutes = require('./controllers/user-controller')
const reviewRoutes = require('./controllers/review-controller')


mongoose.connect(`${CONNECT}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db.on("error", console.error.bind(console, "connection-error"))
  app.use(cors())
  app.use(Express.json())
  app.use('/api/users', userRoutes)
  app.use('/api/reviews', reviewRoutes)
  
  app.listen(PORT, () => {
    try {
      console.log(`Server running on ${PORT}`);
    } catch (err) {
      console.log(`Server error: ${err}`);
    }
  });
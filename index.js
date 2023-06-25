const express = require("express")
const passport =  require("passport")
const app = express()
var cookieParser = require('cookie-parser')
var cors = require("cors")
const { connection } = require("./config/db")
const { userRoute } = require("./routes/user")
const { authenticate } = require("./middleware/authorization")
const { saveRouter } = require("./routes/save")

app.use(cors())
app.use(express.json())
app.use(cookieParser())
var token = ""
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
<<<<<<< HEAD
    clientID: "543549038023-t5qmfotps2mra00lnr05l2pbo5jr57gb.apps.googleusercontent.com",
    clientSecret: "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",
                  
=======
    clientID: "556306505797-d4f2602gptfeb2qfo9m4ml6na2726s80.apps.googleusercontent.com",
    clientSecret: "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",
>>>>>>> 59011b4027ba36388725ada448212026281d5430
    callbackURL: "https://real-rose-peacock-tutu.cyclic.app/auth/google/callback"
                  
  },
  async function(accessToken, refreshToken, profile, cb) {

    token = accessToken
    console.log(refreshToken)
    return cb(null,"user")
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' ,session:false}),(req, res)=> {
    // Successful authentication, redirect home.
    res.redirect('https://syntai.vercel.app/home');
  });



app.use("/user",userRoute)


app.get("/home",(req,res)=>{
    
    res.send(token)
})




app.get("/",(req,res)=>{
    res.send("welcome")
})

app.get("/token",(req,res)=>{
    res.json({token})
})

app.use(authenticate)
app.use("/save",saveRouter)

app.listen(8080,async ()=>{
  try {
    await connection
  } catch (error) {
    console.log(error)
  }
    console.log("server is running")
})
<<<<<<< HEAD





// fetch("https://real-rose-peacock-tutu.cyclic.app/user/login")
=======
>>>>>>> 59011b4027ba36388725ada448212026281d5430

var express = require("express")
var cors = require("cors")
var mysql = require("mysql");
var nodemailer = require("nodemailer")
var jwt = require("jsonwebtoken");

var app = express()
app.use(cors())
app.use(express.json())
const bcrypt = require('bcrypt');
const { sign } = require("jsonwebtoken");
var { expressjwt: jwtVerify } = require("express-jwt");

// app.use(
//   jwtVerify({
//     secret: "etiyu",
//     algorithms: ["HS256"],
//   }).unless({ path: ["/signup", "/login", "/token", "/fpass", "/newpass"] })
// );




app.listen(3000, () => {
  console.log('port connteced')
})

app.use(cors())
//app.use(bodyParser.json());
var con = mysql.createConnection({
  "host": "localhost",
  "user": "psp",
  "password": "Psp9939@",
  "database": "psp"
})

con.connect(function (err) {
  if (err) { console.log('error'); }
  else {
    console.log("connect");
  }
})
app.post("/signup", (req, res) => {
  data = req.body
  let check = 'select * from user_sign where email=?'
  con.query(check, [data.email], (err, emailresult) => {
    if (err) {
      console.log(err);
    }
    else if (emailresult.length > 0) {
      console.log(emailresult);
      if (emailresult[0].verified == 0) {
        console.log("please verify your email");
      }
      res.send("email already exist")
    }
    else {
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(data.password, salt);
      console.log(hash);
      console.log(req);
      console.log(req.body);
      let token_data = {
        "email": data.name

      }
      const token = jwt.sign(token_data, "eeeevvvvvvasas");

      console.log(token);
      let sql = 'insert into user_sign(email,password,token) values (?,?,?)';
      con.query(sql, [data.email, hash, token], (err, result) => {
        if (err) {
          console.log(err);
        }
        mailActive(data.email, token);
        res.send("signed succesfully")
      })
    }
  })
})

function mailActive(mailId, token) {
  console.log(mailId);
  var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8a1949523708f9",
      pass: "21e3ee155df182"
    }
  });


  var mailOptions = {
    from: 'youremail@gmail.com',
    to: mailId,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    html: '<html><body><p><a href="http://localhost:5500/token.html?token=' + token + '">click here</a></p></body></html>'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}
app.post("/token", (req, res) => {
  data = req.body
  const token = data.token;
  console.log(token)
  let sql = 'select id from user_sign where token=?';
  con.query(sql, [token], (err, dataid) => {
    if (err) {
      console.log(err);
    }
    else if (dataid.length == 0) {
      console.log("token mismatch");
    }
    else {
      let sqlup = 'update user_sign set token=null,is_verified=1 where id=?';
      con.query(sqlup, [dataid[0].id], (err, result) => {
        if (err) {
          console.log(err)
        }
        console.log(result);
        res.send({ result });
      })
    }
  }
  )
})

app.post("/login", (req, res) => {
  data = req.body
  console.log(data)
  let sql = 'select * from user_sign where email=?'
  con.query(sql, [data.email], (err, result) => {
    console.log(result)
    if (err) {
      console.log(err)
    }
    else if (result.length == 0) {
      console.log("not a valid mail");
      res.send("not valid email")
    }
    else {
      if (result[0].login_atums == 4) {

        let sqlBlockTimeUp = "UPDATE user_sign SET block_user = 1, blocked_time = unix_timestamp(now()) where id  = ?";
      con.query(sqlBlockTimeUp,[result[0].id],(err,update)=>{
        if(err){
          console.log(err.stack);
          res.json({err});
          return;
        }
        console.log(update);
      })
      }
      bcrypt.compare(data.password, result[0].password, (err, passmatch) => {
        console.log('passwordcompare')
        if (err) {
          console.error(err)
        }
        console.log(passmatch)
        if (passmatch) {
          if (result[0].block_user != 0) {
            let currentTime = parseInt((new Date().getTime() / 1000).toFixed(0));
            let refreshTime = 60;

            console.log("CR Time = ", currentTime - result[0].blocked_time, "Sec = ", refreshTime)

            if (currentTime - result[0].blocked_time > refreshTime) {
              sqlBlockCountUp = "UPDATE user_sign SET login_atums = 0, block_user = 0 where id = ?"
              con.query(sqlBlockCountUp,[result[0].id],(err,uptrst)=>{
                if(err){
                  console.log(err.stack);
                }
                console.log(uptrst);
              })
            }
          }
          if (result[0].is_verified == 1 && result[0].block_user == 0) {
            let token_data = {
              "email": data.email
            }
            let token = jwt.sign(token_data, "etiyu");
            console.log(token);
           var obj = {
              'flag': true,
              'token': token_data
            }
            res.json({ obj });
            return;
      }
          console.log("you have logged many times");
          res.json({ obj });
          return;
        }
        else {  

          let sqlUp = "UPDATE user_sign SET login_atums = ? where id = ?"

          con.query(sqlUp, [result[0].login_atums + 1, result[0].id], (err, upResult) => {

            if (err) {
              console.error("error" + err.stack);
              res.json({ obj });
              return
            }
            console.log(upResult);

          })
          return 
      }
      })
  }
})
})



    app.get("/sql", (req, res) => {

      sql = 'select * from user_message';
      con.query(sql, (err, data) => {
        if (err) {
          console.log(err);

        }
        res.json( data );
      });
    });
    app.post("/insert", (req, res) => {

      console.log(req);
      console.log(req.body);
      data = req.body;
      let sql = 'INSERT INTO user_message(name,email,message) values (?,?,?)';
      con.query(sql, [data.name, data.email, data.message], (err, result) => {
        if (err)
          console.log(err);
        console.log(result);
      })

    })
    app.get("/getid", (req, res) => {
      console.log(req.query);
      let sql = 'select * from user_message where id =?';
      con.query(sql, [req.query.id], (err, data) => {
        if (err) {
          console.log(err);
        }
        res.json({ data });
      })
    })

    app.put("/update", (req, res) => {
      update = req.body;
      console.log(update);
      let sql = 'update user_message set name=?,email=?,message=? where id=?';
      con.query(sql, [update.name, update.email, update.message, update.id], (err, result) => {
        if (err)
          console.log(err);

        console.log(result);
        res.json(result);
      })

    })
    app.delete("/erase", (req, res) => {
      data = req.body;
      console.log(data);
      let sql = 'update user_message set is_delete=1 where id=?'
      con.query(sql, [data.id], (err, result) => {
        console.log(result)
        if (err) {
          res.send(false)
        }
        else {
          res.send(true)
        }
      })
    })
    app.post("/fpass", (req, res) => {

      console.log(req);
      console.log(req.body);
      data = req.body;
      let sql = 'select * from forgot_password where email=?';
      con.query(sql, [data.email], (err, result) => {
        if (err) {
          console.log(err);
          res.send("error")
          return
        }
        console.log(result);
        let token_data = {
          "email": data.email

        }
        const token = jwt.sign(token_data, "dev");

        console.log(token);
        let sql = 'insert into forgot_password(email,token) values (?,?)';
        con.query(sql, [data.email, token], (err, values) => {
          if (err)
            console.log(err);
          console.log(values);
        })
        forgetmailActive(data.email, token);
      })
    })
    function forgetmailActive(mailId, token) {
      console.log(mailId);

      var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "8a1949523708f9",
          pass: "21e3ee155df182"
        }
      });

      var mailOptions = {
        from: 'youremail@gmail.com',
        to: mailId,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!',
        html: '<html><body><p><a href="http://localhost:5500/newpass.html?token=' + token + '">click here</a></p></body></html>'
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }

    app.post("/newpass", (req, res) => {
      data = req.body

      console.log(req);
      console.log(req.body);
      const token = data.token;
      console.log(token)

      let sql = 'select * from forgot_password where token=?';

      con.query(sql, [token], (err, result) => {
        if (err) {
          console.log(err);
        }
        else if (result.length == 0) {
          console.log("token mismatch");
        }
        //console.log(result);
        else {
          let salt = bcrypt.genSaltSync(10);
          let hash = bcrypt.hashSync(data.password, salt);
          console.log(hash);

          let sqlupt = 'update user_sign set password= ? where email= ?'
          con.query(sqlupt, [hash, result[0].email], (err, update) => {
            if (err) {
              console.log(err)
            }
            console.log(update);
            //res.send({ update });
          })
          let sqlup = 'update forgot_password set token=null where id= ?'
          con.query(sqlup, [result[0].id], (err, tnull) => {
            if (err) {
              console.log(err)
            }
            console.log(tnull);
            res.send({ tnull });
          })
        }
      })
    })
// app.post("/signup",(req,res) =>{
//   data=req.body
//   console.log(req)
//   console.log(req.body)
//   const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync(data.password, salt);
// data.password=hash;
// console.log(hash)
// const token_data={
//        'email':data.email
// }
// const token=jwt.sign(token_data,'gfjojeojo')
// console.log(token)
// let sql='insert into user_sign(email,password,token)values(?,?,?)'
// con.query(sql,[data.email,data.password,token],(err,result)=>{
// if(err){
//   console.log(err)
// }
//   else
//   {
// console.log(result)
//   }
// mailActive(data.email, token);
//     res.json({ result })
//   })
// })
// function mailActive(mailId, token) {
//   console.log(mailId);
//   var transporter = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "8a1949523708f9",
//       pass: "21e3ee155df182"
//     }
//   });


//   var mailOptions = {
//     from: 'youremail@gmail.com',
//     to: mailId,
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!',
//     html: '<html><body><p><a href="http://localhost:5500/token.html?token=' + token + '">click here</a></p></body></html>'
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// }
// app.post("/token",(req,res)=>{
//   data=req.body
//   console.log(req)
//   console.log(req.body)
//   const token=data.token
//   console.log(token);
//   let sql='select * from user_sign where token=?'
//   con.query(sql,[data.token],(err,result)=>{
//     console.log(result)
//     if(err){
//       console.log(err)
//     }
//     else{
//       let sqlup='update user_sign set token=null,is_verified=1 where id=?'
//       con.query(sqlup,[result[0].id],(err,result)=>{
//         if(err){
//           console.log(err);
//         }
//         else{
//           console.log(result);
//           res.send(true);
//         }
//      })
//     }
//   })
// })
// app.post("/login",(req,res) =>{
//   data=req.body
//   console.log(data)
//   console.log(req);
//   let sql='select * from user_sign where email=?'
//   con.query(sql,[data.email],(err,result) =>{
//     if(err){
//       console.log(err);
//     }
//     else if(result.length==0){
//     console.log("email mismatch");
//     res.send("not valid mail")
//     }
//     else{
//       bcrypt.compare((result[0].password,data.password),(err,passmatch) =>{
//         console.log("passwordcompare");
//         if(err){
//           console.log(err);
//         }
//         console.log(passmatch);
//        const token_data={
//           'email':data.email
//         }
//        const token=jwt.sign(token_data,'vaaa')
//        console.log(token)
//        res.send(token)
//       }
//   )}
//   })
// })
// app.post("/fpass",(req,res) =>{
//   data=req.body
//   console.log(data);
//   console.log(req);
//   let sql='select * from forgot_password where email=?'
//   con.query(sql,[data.email],(err,result) =>{
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log(result);
//     }
//     token_vijay={
//       'email':data.email
//     }
//     const token=jwt.sign(token_vijay,"iuhfdo")
//     console.log(token);
//     let sqlup='insert into forgot_password (email,token) values(?,?)'
//     con.query(sqlup,[data.email,token],(err,result) =>{
//       if(err){
//         console.log(err);
//       }
//       else{
//         console.log(result);
//       }
//     })
//     forgotmail(data.email,token)
//     res.send({result})
//   })
// })
// function forgotmail(mailId,token){
//   console.log(mailId);
//   var transporter = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "8a1949523708f9",
//       pass: "21e3ee155df182"
//     }
//   });


//   var mailOptions = {
//     from: 'youremail@gmail.com',
//     to: mailId,
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!',
//     html: '<html><body><p><a href="http://localhost:5500/newpass.html?token=' + token + '">click here</a></p></body></html>'
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// }
// app.post("/token",(req,res) =>{
//   data=req.body
//   console.log(data);
//   console.log(req);
//   let sql='select id from forgot_password where token=?'
//   con.query(sql,[token],(err,resultid) =>{
//     if(err){
//       console.log(err);
//     }
//     else{
//       let sqlup='update forgot_password set token=null where id=?'
//       con.query(sqlup,[resultid[0].id],(err,result)=>{
//         if(err){
//           console.log(err);
//         }
//         else{
//           console.log(result);
//         }
//         res.send({result})
//       })
//     }
//   })
// })

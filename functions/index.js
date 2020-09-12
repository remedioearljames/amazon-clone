const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HQFRJLgqMNL89TZkZWIb1lXVGU7Rg4pbF81iI8MyM0yFCGfTVzYH4wFyOGTrHvo7UrXs9lj2nIfJZwLWsox8Qrj00FvuECuOv"
);

//api

//appconfig
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

//apiroute
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BOOm:", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
      clientSecret: paymentIntent.client_secret,
  })
});
//listen
exports.api = functions.https.onRequest(app);

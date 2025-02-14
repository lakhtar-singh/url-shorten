const express   =   require('express');
const  cors     =   require('cors');

const app       =   express();
const PORT      =   5000;

app.use(express.json());

app.use(cors());

// OR specify allowed origins
app.use(
  cors({
    origin: "http://localhost:3000", // Allow frontend domain
    methods: ["GET", "POST"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type"], // Allowed headers
  })
);

//use the routes in app
const webRoutes     =   require('./routes/web');

app.use('/', webRoutes);


// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
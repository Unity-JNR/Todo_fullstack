import express from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser'
import cors from 'cors'

config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
 
}))
app.use(express.json());
app.use(express.static('static'))

app.use(cookieParser());

// app.use('/products', productRoute); 
// app.use('/users', userRoute);
// app.use('/cart',authenticate, cartRoute);
// app.use('/signup', signupRoute);
// app.use('/login',auth, loginRoute);
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});

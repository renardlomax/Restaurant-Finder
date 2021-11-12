## Next-React Frontend for Restaurant Finder

Created a restaurant finder application with full functionality. This was my capstone project where I got to use new technologies and implement them. I created a backend and frontend that was able to interact with one another. I implemented techniques that filtered through restaurant names and dishes. I was able to create a login and logout method to save the state.    

## Gif 
![restaurantgif](https://user-images.githubusercontent.com/76239901/141482807-55ec76ac-a23c-463b-937a-70a20b4bd245.gif)

## How to run
 - Clone repo
 - Create a strapi application
 - Create stripe account. Create a public key and a secret key to have access to Stripe. 
 - SecretKey - path: backend/backend/api/order/controllers
 - PublicKey - path: pages/checkout

## Technology I used
- Next.js
- Apollo
- GraphQL
- Firebase
- MongoDB
- Stripe
- Strapi

## use yarn and then yarn dev to run the code
-index.js (Get data from Strapi using Apollo and GraphQL)
-restaurantList.js is Web Component to render restaurants

First, run the development server:

```bash
Frontend-run npm install -> npm run dev
Backend -run npm install -> npm run build -> then npm run develop
# or
yarn dev
``` 




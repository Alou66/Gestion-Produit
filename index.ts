import ProduitRoute from "./src/route/ProduitRoute"
import UserRoute from "./src/route/UserRoute"

import express from "express";

const app = express();
app.use(express.json());

app.use("/produits",ProduitRoute);
app.use("/users",UserRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});


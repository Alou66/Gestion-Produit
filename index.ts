import ProduitRoute from "./src/route/ProduitRoute"
import express from "express";

const app = express();
app.use(express.json());

app.use("/alou/produits",ProduitRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});


require("dotenv").config({ path: "./.env" }); // Chemin explicite
const { User, Service, Reservation, Review } = require("./models/index");
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

// Initialisation Express
const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Configuration des Associations
const setupAssociations = () => {
  User.hasMany(Reservation, { foreignKey: "clientId" });
  User.hasMany(Reservation, { foreignKey: "coiffeurId" });
  User.hasMany(Review, { foreignKey: "clientId" });

  Service.hasMany(Reservation, { foreignKey: "serviceId" });

  Reservation.belongsTo(User, { as: "Client", foreignKey: "clientId" });
  Reservation.belongsTo(User, { as: "Coiffeur", foreignKey: "coiffeurId" });
  Reservation.belongsTo(Service, { foreignKey: "serviceId" });

  Review.belongsTo(User, { foreignKey: "coiffeurId" });
};

// Fonction d'Initialisation
const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connecté à MySQL");

    setupAssociations();

    // UNIQUEMENT POUR LE DÉVELOPPEMENT
    await sequelize.sync({ force: false });
    console.log("Base synchronisée");

    // Création des données de test
    // await User.create({
    //   email: "coiffeur@salon.com",
    //   password: "coiffeur123",
    //   role: "coiffeur",
    //   nom_complet: "Coiffeur Principal",
    // });

    // await Service.create({
    //   nom: "Coupe Homme",
    //   duree: 30,
    //   prix: 25.0,
    // });

    // console.log("Données de test créées");
  } catch (error) {
    console.error("Erreur d'initialisation:", error);
  }
};

// Routes
app.get("/api/status", (req, res) => {
  res.json({
    status: "OK",
    version: "1.0.0",
    database: sequelize.config.database,
  });
});

// Démarrage
const startServer = async () => {
  await initializeDatabase();

  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
  });
};

startServer();

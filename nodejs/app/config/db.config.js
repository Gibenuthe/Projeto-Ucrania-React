require('dotenv').config();
const {
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_CLUSTER,
  MONGODB_DATABASE
} = process.env
module.exports = { 
  //url: "mongodb+srv://Trab_refugiado:Ucrania123@cluster0.uw1pvuu.mongodb.net/AcolhedoresDB?retryWrites=true&w=majority"
  url: `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.uw1pvuu.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`
  //mongodb+srv://Trab_refugiado:Ucrania123@cluster0.uw1pvuu.mongodb.net/AcolhedoresDB?retryWrites=true&w=majority
};


//module.exports = { 
//  url: `mongodb+srv://${"Trab_refugiado"}:${"Ucrania123"}@${"cluster0"}.uw1pvuu.mongodb.net/${"AcolhedoresDB"}?retryWrites=true&w=majority`
//};

module.exports = { 

    url: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.uw1pvuu.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`
  };
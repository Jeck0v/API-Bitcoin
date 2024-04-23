
const { default: axios } = require("axios");
Devise =process.argv[2].toUpperCase();
async function BTC(Devise){
  console.log("Les devises accessible sont: USD / EUR / GBP")
  try {
      const RESP = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
      const rate = RESP.data.bpi[Devise].rate;
      console.log(`1BTC ~ ${rate} ${Devise}`);
  } 
  catch (error){
    //console.error("ça marche pas");
    console.log(`La devise ${Devise} n'existe pas`);
  }
};

BTC(Devise);

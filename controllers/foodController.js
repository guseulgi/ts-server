const axios = require("axios");

const getAllFoodInfo = async (req, res) => {

  const REACT_APP_API_URL = 'http://211.237.50.150:7080'
  const REACT_APP_API_KEY = 'eb5684d0603863f163940fcf86a3d017401a1b80b6db1bd04a2a38b84e272700'

  const REACT_APP_BASIC_GRID_NUM = 'Grid_20150827000000000226_1'
  const REACT_APP_INGREDIENT_GRID_NUM = 'Grid_20150827000000000227_1'
  const REACT_APP_RECEIPE_GRID_NUM = 'Grid_20150827000000000228_1'

  const basicUrl = `${REACT_APP_API_URL}/openapi/${REACT_APP_API_KEY}/json/${REACT_APP_BASIC_GRID_NUM}/1/85`;
  const ingredientUrl = `${REACT_APP_API_URL}/openapi/${REACT_APP_API_KEY}/json/${REACT_APP_INGREDIENT_GRID_NUM}/1/999`;
  const recipeUrl = `${REACT_APP_API_URL}/openapi/${REACT_APP_API_KEY}/json/${REACT_APP_RECEIPE_GRID_NUM}/1/470`;

  try {
    const getInfo = async () => {
      const result = await axios.get(basicUrl, {
        withCredentials : true,
      });
      console.log(result.data[REACT_APP_BASIC_GRID_NUM].row);
  
      const resultSec = await axios.get(ingredientUrl, {
        withCredentials: true,
      });
      console.log(resultSec.data[REACT_APP_INGREDIENT_GRID_NUM].row);
  
      const resultThir = await axios.get(recipeUrl, {
        withCredentials: true,
      });
      console.log(resultThir.data[REACT_APP_RECEIPE_GRID_NUM].row);
  
      return res.status(200).json({
        basicInfo : result.data[REACT_APP_BASIC_GRID_NUM].row,
        ingredientInfo : resultSec.data[REACT_APP_INGREDIENT_GRID_NUM].row,
        recipeInfo : resultThir.data[REACT_APP_RECEIPE_GRID_NUM].row,
      });

    }
          
    getInfo();
  } catch(err) {
    console.error(err);
    res.status(500).send(err.message);
  }
}

module.exports = {
  getAllFoodInfo,
}
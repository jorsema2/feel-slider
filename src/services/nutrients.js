import folicAcidSymbols from '../assets/folic-acid-symbols.svg'
import folicAcid from '../assets/folic-acid.png'

const nutrient =  {
    name: 'Folic acid (folate)',
    image : folicAcid,
    properties: ['Supports tissue growth of the uterus and placenta', 'Prevents neutral tube birth defects such as spina bifida'],
    symbols: folicAcidSymbols,
};

export const nutrients = Array(15).fill(nutrient);

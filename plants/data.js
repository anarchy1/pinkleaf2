// data.js - The Master Archive
const PLANT_DB = {
    "PV1": "Epipremnum Giganteum aurea var", "PV2": "Epipremnum Giganteum mint var", "PV3": "Ficus lyrata variegated", "PV4": "Epipremum pinnatum Aurea Var",
    "PV5": "Monstera delisiosa green snow", "PV6": "Monstera legacy", "PV7": "Monstera Thai Constellation var", "PV8": "Monstera deliciosa 'Yellow Marilyn'",
    "PV9": "Monstera deliciosa aurea", "PV10": "Monstera Mint var", "PV11": "Monstera deliciosa 'White Monster'", "PV12": "Monstera cream brulee",
    "PV13": "Raphidophora Tetrasperma Var", "PV14": "Alocasia Dragon Scale mint var", "PV15": "Alocasia 'Dragon Scale' white var", "PV16": "Alocasia frydek var",
    "PV17": "Alocasia Green Bambino variegata", "PV18": "Alocasia wentii variegated", "PV19": "Alocasia Polly pink var", "PV20": "Alocasia Bambino Arrow variegata",
    "PV21": "Alocasia Bambino aurea variegata", "PV22": "Alocasia Black Velvet pink Variegata", "PV23": "Alocasia Black Velvet Aurea Variegata",
    "PV24": "Alocasia odora var", "PV25": "Alocasia macrorrhizos variegata", "PV26": "Alocasia longiloba Variegated", "PV27": "Syngonium Podophyllum albo Var",
    "PV28": "Anthurium crassinervium Variegata", "PV29": "Anthurium clarinerviu var", "PV30": "Alocasia zebrina mint var", "PV31": "Alocasia zebrina aurea var",
    "PV32": "Alocasia Nairobi Nights var", "PV33": "Xanthosoma sagittifolium frozen planet var", "PV34": "Alocasia lauterbachiana var", "PV35": "Alocasia Jacklyn aurea var",
    "PV36": "Alocasia Yucatanense variegata", "PV37": "Alocasia Silver Dragon aurea var", "PV38": "Alocasia Silver Dragon albo Var", "PV39": "Alocasia Sinuata aurea var",
    "PV40": "Alocasia ninja albo var", "PV41": "Alocasia odora Okinawa Silver white var", "PV42": "Alocasia odora Orkinawa Silver yellow var", "PV43": "Alocasia Regal Shield albo var",
    "PV44": "Alocasia 'Pink Dragon' Albo/Pink", "PV45": "Alocasia sarian albo var", "PV46": "Elephant ear Var", "PV47": "Philodendron bipinnatifidum var",// Full Data - No features removed
const DB = {
    "PV1": "Epipremnum Giganteum aurea", "PV2": "Monstera Albo Variegata", "PV3": "Philodendron Billietiae",
    "PV4": "Philodendron Atabapoense", "PV5": "Philodendron Jose Buono", "PV6": "Philodendron Spiritus Sancti",
    "PV7": "Monstera Thai Constellation", "PV8": "Monstera Esqueleto", "PV9": "Monstera Adansonii Var",
    "PV10": "Monstera Obliqua Peru", "PV11": "Philodendron Burle Marx Var", "PV12": "Philodendron Paraiso Verde",
    "PV13": "Rhaphidophora Tetrasperma Var", "PV14": "Epipremnum Pinnatum Albo", "PV15": "Epipremnum Pinnatum Marble",
    "PV16": "Alocasia Frydek Var", "PV17": "Alocasia Black Velvet Var", "PV18": "Alocasia Dragon Scale Var",
    "PV19": "Scindapsus Jade Satin Var", "PV20": "Scindapsus Treubii Dark Form", "PV21": "Scindapsus Pictus Exotica",
    "PV22": "Syngonium Albo Variegata", "PV23": "Syngonium Milk Confetti", "PV24": "Alocasia Silver Dragon",
    "PV25": "Alocasia Cuprea", "PV26": "Alocasia Maharani", "PV27": "Alocasia Melo",
    "PV28": "Alocasia Reginae", "PV29": "Alocasia Azlanii", "PV30": "Alocasia Zebrina Mint",
    "PV31": "Alocasia Stingray Var", "PV32": "Alocasia Macrorrhiza Var", "PV33": "Alocasia Gageana Var",
    "PV34": "Alocasia Portora Var", "PV35": "Alocasia Wentii Var", "PV36": "Alocasia Yucatanensis Variegated",
    "PV37": "Alocasia Lauterbachiana Var", "PV38": "Alocasia Serendipity Var", "PV39": "Alocasia Sarian Var",
    "PV40": "Alocasia Longiloba Var", "PV41": "Alocasia Odora Variegata", "PV42": "Philodendron Gloriosum Var",
    "PV43": "Philodendron Mamei Silver", "PV44": "Philodendron Plowmanii", "PV45": "Philodendron Pastazanum",
    "PV46": "Philodendron McDowell", "PV47": "Philodendron Luxurians", "PV48": "Philodendron Verrucosum",
    "PV49": "Philodendron Melanochrysum", "PV50": "Philodendron Gigas", "PV51": "Philodendron Florida Beauty",
    "PV52": "Philodendron Strawberry Shake", "PV53": "Philodendron White Princess", "PV54": "Philodendron White Knight",
    "PV55": "Philodendron White Wizard", "PV56": "Philodendron Pink Princess", "PV57": "Philodendron Pink Congo",
    "PV58": "Philodendron Ring of Fire", "PV59": "Philodendron Tortum", "PV60": "Philodendron Elegans",
    "PV61": "Philodendron Mayoi", "PV62": "Philodendron Radiatum", "PV63": "Philodendron Gloriosum",
    "PV64": "Philodendron Serpens", "PV65": "Philodendron Squamiferum", "PV66": "Philodendron Pedatum",
    "PV67": "Philodendron Glad Hands", "PV68": "Homalomena Maggy Var", "PV69": "Homalomena Rubescens Var",
    "PV70": "Aglaonema Pictum Tricolor", "PV71": "Aglaonema Anyamanee", "PV72": "Dieffenbachia Reflector",
    "PV73": "Anthurium Warocqueanum", "PV74": "Anthurium Veitchii", "PV75": "Alocasia Scalprum",
    "PV76": "Anthurium Crystallinum", "PV77": "Anthurium Clarinervium", "PV78": "Anthurium Forgetii",
    "PV79": "Anthurium Regale", "PV80": "Alocasia Scalprum White", "PV81": "Alocasia Azlanii",
    "PV82": "Labisia Turtle Back", "PV83": "Sonerila Sp.", "PV84": "Begonia Darthvaderiana",
    "PV85": "Begonia Chlorosticta", "PV86": "Begonia Melanobullata", "PV87": "Piper Sylvaticum",
    "PV88": "Cissus Discolor", "PV89": "Philodendron Billietiae Var"
};

const profoundDB = {
    "PV36": {
        origin: "Mexico / Yucatan",
        bio: { he: "יוקטננסיס 'גלקסי' - וורגציה כסופה על עלים כהים.", en: "Yucatanensis 'Galaxy' - Silver variegation on dark leaves." },
        care: { he: "לחות גבוהה ותערובת מנוקזת.", en: "High humidity and chunky mix." }
    },
    "PV51": {
        origin: "Brazil",
        bio: { he: "פלורידה ביוטי - גיוון וורגטי צהוב ויציב.", en: "Florida Beauty - Stable yellow variegation." },
        care: { he: "אור חזק לא ישיר.", en: "Bright indirect light." }
    }
};

let currentLanguage="en";

const translations={

hi:{
purpose:"उपयोग",
dosage:"खुराक",
side_effects:"दुष्प्रभाव",
precautions:"सावधानियाँ",
avoid:"किसे नहीं लेना चाहिए"
},

mr:{
purpose:"उपयोग",
dosage:"डोस",
side_effects:"दुष्परिणाम",
precautions:"सावधगिरी",
avoid:"कोणाला टाळावे"
}

};

function changeLanguage(){

currentLanguage=document.getElementById("language").value;

}
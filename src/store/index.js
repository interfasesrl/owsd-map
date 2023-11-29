import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    "africa": {
      "members": {
        "Angola": 0,
        "Benin": 92,
        "Botswana": 108,
        "Burkina Faso": 0,
        "Burundi": 35,
        "Capo Verde": 0,
        "Cameroon": 269,
        "Central African Republic": 0,
        "Chad": 0,
        "Comoros": 0,
        "Republic of the Congo": 45,
        "Ivory Coast": 43,
        "Democratic Republic of the Congo": 31,
        "Equatorial Guinea": 0,
        "Eritrea": 0,
        "eSwatini": 0,
        "Ethiopia": 78,
        "Gabon": 0,
        "The Gambia": 0,
        "Ghana": 330,
        "Guinea": 0,
        "Guinea-Bissau": 0,
        "Kenya": 418,
        "Lesotho": 26,
        "Liberia": 0,
        "Madagascar": 30,
        "Malawi": 64,
        "Mali": 0,
        "Mauritania": 0,
        "Mauritius": 50,
        "Mozambique": 79,
        "Namibia": 35,
        "Niger": 25,
        "Nigeria": 1987,
        "Rwanda": 131,
        "São Tomé and Príncipe": 0,
        "Senegal": 47,
        "Seychelles": 0,
        "Sierra Leone": 0,
        "Somalia": 0,
        "South Africa": 495,
        "Tanzania": 173,
        "Togo": 0,
        "Uganda": 98,
        "Western Sahara": 0,
        "Zambia": 74,
        "Zimbabwe": 331
      },
      "ongoing_phd_fellows": {
        "Angola": 0,
        "Benin": 7,
        "Botswana": 0,
        "Burkina Faso": 1,
        "Burundi": 2,
        "Capo Verde": 0,
        "Cameroon": 18,
        "Central African Republic": 0,
        "Chad": 0,
        "Comoros": 0,
        "Republic of the Congo": 1,
        "Ivory Coast": 0,
        "Democratic Republic of the Congo": 1,
        "Equatorial Guinea": 0,
        "Eritrea": 0,
        "eSwatini": 2,
        "Ethiopia": 7,
        "Gabon": 0,
        "The Gambia": 0,
        "Ghana": 3,
        "Guinea": 0,
        "Guinea-Bissau": 0,
        "Kenya": 6,
        "Lesotho": 2,
        "Liberia": 0,
        "Madagascar": 2,
        "Malawi": 0,
        "Mali": 0,
        "Mauritania": 1,
        "Mauritius": 0,
        "Mozambique": 6,
        "Namibia": 0,
        "Niger": 0,
        "Nigeria": 0,
        "Rwanda": 6,
        "São Tomé and Príncipe": 0,
        "Senegal": 3,
        "Seychelles": 0,
        "Sierra Leone": 0,
        "Somalia": 0,
        "South Africa": 0,
        "Tanzania": 5,
        "Togo": 0,
        "Uganda": 7,
        "Western Sahara": 0,
        "Zambia": 2,
        "Zimbabwe": 10
      },
      "alumni": {
        "Angola": 1,
        "Benin": 12,
        "Botswana": 3,
        "Burkina Faso": 2,
        "Burundi": 0,
        "Capo Verde": 0,
        "Cameroon": 40,
        "Central African Republic": 0,
        "Chad": 0,
        "Comoros": 0,
        "Republic of the Congo": 3,
        "Ivory Coast": 0,
        "Democratic Republic of the Congo": 7,
        "Equatorial Guinea": 0,
        "Eritrea": 0,
        "eSwatini": 2,
        "Ethiopia": 19,
        "Gabon": 2,
        "The Gambia": 1,
        "Ghana": 18,
        "Guinea": 0,
        "Guinea-Bissau": 0,
        "Kenya": 33,
        "Lesotho": 4,
        "Liberia": 0,
        "Madagascar": 5,
        "Malawi": 6,
        "Mali": 0,
        "Mauritania": 3,
        "Mauritius": 1,
        "Mozambique": 4,
        "Namibia": 3,
        "Niger": 0,
        "Nigeria": 75,
        "Rwanda": 9,
        "São Tomé and Príncipe": 0,
        "Senegal": 3,
        "Seychelles": 0,
        "Sierra Leone": 1,
        "Somalia": 0,
        "South Africa": 2,
        "Tanzania": 12,
        "Togo": 3,
        "Uganda": 16,
        "Western Sahara": 0,
        "Zambia": 6,
        "Zimbabwe": 23
      },
      "institutes": [
        {
          "name": "Rhodes University",
          "city": "Grahamstown",
          "country": "South Africa",
          "latitude": -33.3042,
          "longitude": 26.5328
        },
        {
          "name": "University of Nairobi",
          "city": "Nairobi",
          "country": "Kenya",
          "latitude": -1.286389,
          "longitude": 36.817223
        },
        {
          "name": "University of Pretoria",
          "city": "Pretoria",
          "country": "South Africa",
          "latitude": -25.7449,
          "longitude": 28.1878
        },
        {
          "name": "University of Port Elizabeth",
          "city": "Port Elizabeth",
          "country": "South Africa",
          "latitude": -33.917,
          "longitude": 25.5701
        },
        {
          "name": "University of Johannesburg",
          "city": "Johannesburg",
          "country": "South Africa",
          "latitude": -26.1833674,
          "longitude": 25.4884087
        },
        {
          "name": "University of Botswana",
          "city": "Gaborone",
          "country": "Botswana",
          "latitude": -24.653257,
          "longitude": 25.906792
        },
        {
          "name": "University of Cape Town",
          "city": "Cape Town",
          "country": "South Africa",
          "latitude": -33.9249,
          "longitude": 18.4241
        },
        {
          "name": "University of the Free State",
          "city": "Bloemfontein",
          "country": "South Africa",
          "latitude": -29.0852,
          "longitude": 26.1596
        },
        {
          "name": "Universit\u00e9 Cheikh Anta Diop de Dakar",
          "city": "Dakar",
          "country": "Senegal",
          "latitude": 14.6937,
          "longitude": -17.4441
        },
        {
          "name": "University of Cape Town",
          "city": "Cape Town",
          "country": "South Africa",
          "latitude": -33.9249,
          "longitude": 18.4241
        },
        {
          "name": "University of the Free State",
          "city": "Bloemfontein",
          "country": "South Africa",
          "latitude": -29.087217,
          "longitude": 26.154898
        },
        {
          "name": "Université d’Abomey Calavi (UAC)",
          "city": "Abomey-Calavi",
          "country": "Benin",
          "latitude": 6.441,
          "longitude": 2.352
        },
        {
          "name": "Université Nationale du Benin",
          "city": "Porto-Novo",
          "country": "Benin",
          "latitude": 6.44105,
          "longitude": 2.35234
        },
        {
          "name": "University of Johannesburg",
          "city": "Johannesburg",
          "country": "South Africa",
          "latitude": -26.1833,
          "longitude": 27.9927
        },
        {
          "name": "University of Natal",
          "city": "Durban",
          "country": "South Africa",
          "latitude": 29.868038,
          "longitude": 30.980501
        },
        {
          "name": "Medical University of South Africa (MEDUNSA)",
          "city": "Ga-Rankuwa",
          "country": "South Africa",
          "latitude": -25.62,
          "longitude": 27.98
        },
        {
          "name": "International Centre for Research in Agroforestry (ICRAF)",
          "city": "Nairobi",
          "country": "Kenya",
          "latitude": -1.286389,
          "longitude": 36.817223
        },
        {
          "name": "University of Ibadan",
          "city": "Ibadan",
          "country": "Nigeria",
          "latitude": 7.3912,
          "longitude": 3.9167
        },
        {
          "name": "Malaria Research & Training Center",
          "city": "Bamako",
          "country": "Mali",
          "latitude": 12.6392,
          "longitude": -8.0029
        },
        {
          "name": "University of Stellenbosch",
          "city": "Stellenbosch",
          "country": "South Africa",
          "latitude": -33.9321,
          "longitude": 18.8602
        },
        {
          "name": "University of KwaZulu-Natal",
          "city": "Durban",
          "country": "South Africa",
          "latitude": -29.8579,
          "longitude": 31.0292
        },
        {
          "name": "Kenya Medical Research Institute (KEMRI)",
          "city": "Nairobi",
          "country": "Kenya",
          "latitude": -1.286389,
          "longitude": 36.817223
        },
        {
          "name": "University of Cape Town (UCT)",
          "city": "Cape Town",
          "country": "South Africa",
          "latitude": -33.9249,
          "longitude": 18.4241
        },
        {
          "name": "International Institute of Tropical Agriculture (IITA)",
          "city": "Ibadan",
          "country": "Nigeria",
          "latitude": 7.3912,
          "longitude": 3.9167
        },
        {
          "name": "International Livestock Research Institute (ILRI)",
          "city": "Nairobi",
          "country": "Kenya",
          "latitude": -1.286389,
          "longitude": 36.817223
        },
        {
          "name": "University of the Western Cape",
          "city": "Cape Town",
          "country": "South Africa",
          "latitude": -33.9249,
          "longitude": 18.4241
        },
        {
          "name": "Université de Lomé",
          "city": "Lomé",
          "country": "Togo",
          "latitude": 6.1725,
          "longitude": 1.2314
        },
        {
          "name": "Addis Ababa University",
          "city": "Addis Ababa",
          "country": "Ethiopia",
          "latitude": 9.005401,
          "longitude": 38.763611
        },
        {
          "name": "Université Cheikh Anta Diop de Dakar",
          "city": "Dakar",
          "country": "Senegal",
          "latitude": 14.6937,
          "longitude": -17.4441
        },
        {
          "name": "DST/NRF Centre of Excellence in Epidemiological Modelling and Analysis",
          "city": "Stellenbosch",
          "country": "South Africa",
          "latitude": -33.9321,
          "longitude": 18.8602
        },
        {
          "name": "Centre Africain de Recherches sur Bananiers et Plantains (CARBAP)",
          "city": "Douala",
          "country": "Cameroon",
          "latitude": 4.051056,
          "longitude": 9.767869
        },
        {
          "name": "University of Zululand",
          "city": "Empangeni",
          "country": "South Africa",
          "latitude": -28.768229,
          "longitude": 32.053578
        },
        {
          "name": "Nelson Mandela Metropolitan University",
          "city": "Port Elizabeth",
          "country": "South Africa",
          "latitude": -33.917,
          "longitude": 25.5701
        },
        {
          "name": "University of Nigeria Nsukka",
          "city": "Nsukka",
          "country": "Nigeria",
          "latitude": 6.8614,
          "longitude": 7.4081
        },
        {
          "name": "University of South Africa (UNISA)",
          "city": "Pretoria",
          "country": "South Africa",
          "latitude": -25.7449,
          "longitude": 28.1878
        },
        {
          "name": "Makerere University",
          "city": "Kampala",
          "country": "Uganda",
          "latitude": 0.3365,
          "longitude": 32.5825
        },
        {
          "name": "Cape Penisula University of Technology",
          "city": "Cape Town",
          "country": "South Africa",
          "latitude": -33.9249,
          "longitude": 18.4241
        },
        {
          "name": "i-Themba Labs",
          "city": "Somerset West",
          "country": "South Africa",
          "latitude": -34.0762,
          "longitude": 18.8433
        },
        {
          "name": "International Centre for Genetic Engineering and Biotechnology (ICGEB)",
          "city": "Cape Town",
          "country": "South Africa",
          "latitude": -33.9249,
          "longitude": 18.4241
        },
        {
          "name": "University of Ouagadougou",
          "city": "Ouagadougou",
          "country": "Burkina Faso",
          "latitude": 12.3714,
          "longitude": -1.5197
        },
        {
          "name": "International Center for Tropical Agriculture (TSBF-CIAT)",
          "city": "Nairobi",
          "country": "Kenya",
          "latitude": -1.286389,
          "longitude": 36.817223
        },
        {
          "name": "Stellenbosch University",
          "city": "Stellenbosch",
          "country": "South Africa",
          "latitude": -33.9321,
          "longitude": 18.8602
        },
        {
          "name": "University of Kwazulu-Natal",
          "city": "Durban",
          "country": "South Africa",
          "latitude": -29.8587,
          "longitude": 31.0218
        },
        {
          "name": "University of Dar es Salaam",
          "city": "Dar es Salaam",
          "country": "Tanzania",
          "latitude": -6.7924,
          "longitude": 39.2083
        },
        {
          "name": "National Institute for Communicable Diseases (NICD)",
          "city": "Johannesburg",
          "country": "South Africa",
          "latitude": -26.2041,
          "longitude": 28.0473
        }

      ]
    },
    "sudamerica": {
      "members": {
        "Angola": 0,
        "Benin": 92,
        "Botswana": 108,
        "Burkina Faso": 0,
        "Burundi": 35,
        "Capo Verde": 0,
        "Cameroon": 269,
        "Central African Republic": 0,
        "Chad": 0,
        "Comoros": 0,
        "Republic of the Congo": 45,
        "Ivory Coast": 43,
        "Democratic Republic of the Congo": 31,
        "Equatorial Guinea": 0,
        "Eritrea": 0,
        "eSwatini": 0,
        "Ethiopia": 78,
        "Gabon": 0,
        "The Gambia": 0,
        "Ghana": 330,
        "Guinea": 0,
        "Guinea-Bissau": 0,
        "Kenya": 418,
        "Lesotho": 26,
        "Liberia": 0,
        "Madagascar": 30,
        "Malawi": 64,
        "Mali": 0,
        "Mauritania": 0,
        "Mauritius": 50,
        "Mozambique": 79,
        "Namibia": 35,
        "Niger": 25,
        "Nigeria": 1987,
        "Rwanda": 131,
        "São Tomé and Príncipe": 0,
        "Senegal": 47,
        "Seychelles": 0,
        "Sierra Leone": 0,
        "Somalia": 0,
        "South Africa": 495,
        "Tanzania": 173,
        "Togo": 0,
        "Uganda": 98,
        "Western Sahara": 0,
        "Zambia": 74,
        "Zimbabwe": 331
      },
      "ongoing_phd_fellows": {
        "Angola": 0,
        "Benin": 7,
        "Botswana": 0,
        "Burkina Faso": 1,
        "Burundi": 2,
        "Capo Verde": 0,
        "Cameroon": 18,
        "Central African Republic": 0,
        "Chad": 0,
        "Comoros": 0,
        "Republic of the Congo": 1,
        "Ivory Coast": 0,
        "Democratic Republic of the Congo": 1,
        "Equatorial Guinea": 0,
        "Eritrea": 0,
        "eSwatini": 2,
        "Ethiopia": 7,
        "Gabon": 0,
        "The Gambia": 0,
        "Ghana": 3,
        "Guinea": 0,
        "Guinea-Bissau": 0,
        "Kenya": 6,
        "Lesotho": 2,
        "Liberia": 0,
        "Madagascar": 2,
        "Malawi": 0,
        "Mali": 0,
        "Mauritania": 1,
        "Mauritius": 0,
        "Mozambique": 6,
        "Namibia": 0,
        "Niger": 0,
        "Nigeria": 0,
        "Rwanda": 6,
        "São Tomé and Príncipe": 0,
        "Senegal": 3,
        "Seychelles": 0,
        "Sierra Leone": 0,
        "Somalia": 0,
        "South Africa": 0,
        "Tanzania": 5,
        "Togo": 0,
        "Uganda": 7,
        "Western Sahara": 0,
        "Zambia": 2,
        "Zimbabwe": 10
      },
      "alumni": {
        "Angola": 1,
        "Benin": 12,
        "Botswana": 3,
        "Burkina Faso": 2,
        "Burundi": 0,
        "Capo Verde": 0,
        "Cameroon": 40,
        "Central African Republic": 0,
        "Chad": 0,
        "Comoros": 0,
        "Republic of the Congo": 3,
        "Ivory Coast": 0,
        "Democratic Republic of the Congo": 7,
        "Equatorial Guinea": 0,
        "Eritrea": 0,
        "eSwatini": 2,
        "Ethiopia": 19,
        "Gabon": 2,
        "The Gambia": 1,
        "Ghana": 18,
        "Guinea": 0,
        "Guinea-Bissau": 0,
        "Kenya": 33,
        "Lesotho": 4,
        "Liberia": 0,
        "Madagascar": 5,
        "Malawi": 6,
        "Mali": 0,
        "Mauritania": 3,
        "Mauritius": 1,
        "Mozambique": 4,
        "Namibia": 3,
        "Niger": 0,
        "Nigeria": 75,
        "Rwanda": 9,
        "São Tomé and Príncipe": 0,
        "Senegal": 3,
        "Seychelles": 0,
        "Sierra Leone": 1,
        "Somalia": 0,
        "South Africa": 2,
        "Tanzania": 12,
        "Togo": 3,
        "Uganda": 16,
        "Western Sahara": 0,
        "Zambia": 6,
        "Zimbabwe": 23
      }
    }
  },
  getters: {
    getAfrica: state => {
      return state.africa.members
    },
    getPhdAfrica: state => {
      return state.africa.ongoing_phd_fellows
    },
    getAlumniAfrica: state => {
      return state.africa.alumni
    },
    getSudAmerica: state => {
      return state.sudamerica.members
    },
    getPhdSudAmerica: state => {
      return state.sudamerica.ongoing_phd_fellows
    },
    getAlumniSudAmerica: state => {
      return state.africa.alumni
    },
    getInstitutes: state => {
      return state.africa.institutes
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

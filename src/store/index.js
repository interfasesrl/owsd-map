import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    "africa": {
      "members": {
        "Djibouti": 0,
        "Somaliland": 0,
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
        "Djibouti": 0,
        "Somaliland": 0,
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
        "Djibouti": 0,
        "Somaliland": 0,
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
      "chapters": {
        "Djibouti": 0,
        "Somaliland": 0,
        "Angola": 0,
        "Benin": 1,
        "Botswana": 1,
        "Burkina Faso": 0,
        "Burundi": 0,
        "Capo Verde": 0,
        "Cameroon": 1,
        "Central African Republic": 0,
        "Chad": 0,
        "Comoros": 0,
        "Republic of the Congo": 1,
        "Ivory Coast": 0,
        "Democratic Republic of the Congo": 0,
        "Equatorial Guinea": 0,
        "Eritrea": 0,
        "eSwatini": 0,
        "Ethiopia": 0,
        "Gabon": 0,
        "The Gambia": 0,
        "Ghana": 1,
        "Guinea": 0,
        "Guinea-Bissau": 0,
        "Kenya": 1,
        "Lesotho": 0,
        "Liberia": 0,
        "Madagascar": 0,
        "Malawi": 1,
        "Mali": 0,
        "Mauritania": 0,
        "Mauritius": 1,
        "Mozambique": 1,
        "Namibia": 1,
        "Niger": 1,
        "Nigeria": 1,
        "Rwanda": 1,
        "São Tomé and Príncipe": 0,
        "Senegal": 1,
        "Seychelles": 0,
        "Sierra Leone": 0,
        "Somalia": 0,
        "South Africa": 1,
        "Tanzania": 1,
        "Togo": 0,
        "Uganda": 1,
        "Western Sahara": 0,
        "Zambia": 1,
        "Zimbabwe": 1
      },
      "institutes":  [
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Bobo-Dioulasso",
            "country": "Burkina Faso",
            "name": "University of Nazi Boni"
          },
          "geometry": {
            "coordinates": [
              -4.2996,
              11.1695
            ],
            "type": "Point"
          },
          "id": "01f0b7c7d1a7fa20ebb398889612cd6d"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Lom'e9",
            "country": "Togo",
            "name": "Universit'e9 Dan Dicko Dankoulodo de Maradi"
          },
          "geometry": {
            "coordinates": [
              1.2125,
              6.1375
            ],
            "type": "Point"
          },
          "id": "02b07e846a99165d70df71b849a1f944"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Accra",
            "country": "Ghana",
            "name": "University of Ghana, Noguchi Memorial Institute for Medical Research"
          },
          "geometry": {
            "coordinates": [
              -0.187,
              5.6037
            ],
            "type": "Point"
          },
          "id": "04567c36877c3ca059658d07f5009cec"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Ouagadougou",
            "country": "Burkina Faso",
            "name": "University of Ouagadougou"
          },
          "geometry": {
            "coordinates": [
              -1.5197,
              12.3714
            ],
            "type": "Point"
          },
          "id": "070883fbd3c0372daddd9a3c4f4cf7dc"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Nairobi",
            "country": "Kenya",
            "name": "International Livestock Research Institute"
          },
          "geometry": {
            "coordinates": [
              36.817223,
              -1.286389
            ],
            "type": "Point"
          },
          "id": "0a857f248a2d5056f81f134bd03df03e"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Kigali",
            "country": "Rwanda",
            "name": "ICTP - East African Institute for Fundamental Research (EAIFR)"
          },
          "geometry": {
            "coordinates": [
              30.0589,
              -1.9501
            ],
            "type": "Point"
          },
          "id": "0d12f0a12a2e60ffa139ea8f6cd03be0"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Durban",
            "country": "South Africa",
            "name": "University of Kwazulu-Natal"
          },
          "geometry": {
            "coordinates": [
              31.0218,
              -29.8587
            ],
            "type": "Point"
          },
          "id": "151c557da4eb8172c44f155f29f4a7b1"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Pretoria",
            "country": "South Africa",
            "name": "University of South Africa (UNISA)"
          },
          "geometry": {
            "coordinates": [
              28.1881,
              -25.7461
            ],
            "type": "Point"
          },
          "id": "16793f44fc7035c6b5270a4d49055f9f"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Durban",
            "country": "South Africa",
            "name": "Centre for the AIDs Programme and Research (CAPRISA)"
          },
          "geometry": {
            "coordinates": [
              31.0218,
              -29.8587
            ],
            "type": "Point"
          },
          "id": "1bea4b15aad2c966a3df30fdfec12b30"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Pretoria",
            "country": "South Africa",
            "name": "Council for Scientific and Industrial Research (CSIR)"
          },
          "geometry": {
            "coordinates": [
              28.1881,
              -25.7461
            ],
            "type": "Point"
          },
          "id": "1dbe3589c641004290e8c4b75b428453"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Grahamstown",
            "country": "South Africa",
            "name": "Rhodes University"
          },
          "geometry": {
            "coordinates": [
              26.5257,
              -33.3106
            ],
            "type": "Point"
          },
          "id": "22b456d2427784f61596f8ad5715d915"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Pretoria",
            "country": "South Africa",
            "name": "Tshwane University of Technology (TUT)"
          },
          "geometry": {
            "coordinates": [
              28.1881,
              -25.7461
            ],
            "type": "Point"
          },
          "id": "2df22e693e8077239a7dcbfd4da50b56"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Stellenbosch",
            "country": "South Africa",
            "name": "Stellenbosch University"
          },
          "geometry": {
            "coordinates": [
              18.8602,
              -33.9321
            ],
            "type": "Point"
          },
          "id": "2f8a4bdef712b39fc875b710ec9b9212"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Nairobi",
            "country": "Kenya",
            "name": "International Center for Tropical Agriculture (TSBF-CIAT)"
          },
          "geometry": {
            "coordinates": [
              36.817223,
              -1.286389
            ],
            "type": "Point"
          },
          "id": "32da4e9833e53f695183eaca63b82aaa"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Dar es Salaam",
            "country": "Tanzania",
            "name": "University of Dar es Salaam"
          },
          "geometry": {
            "coordinates": [
              39.2083,
              -6.7924
            ],
            "type": "Point"
          },
          "id": "33b68dbb09bcd0adc10e2eadf6f7f909"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Nakuru",
            "country": "Kenya",
            "name": "Egerton University"
          },
          "geometry": {
            "coordinates": [
              36.08,
              -0.3031
            ],
            "type": "Point"
          },
          "id": "3457c1c44ca71154d10f11451477276b"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Ouagadougou",
            "country": "Burkina Faso",
            "name": "Institut de Recherche en Science de la Sant'e9 (IRSS)"
          },
          "geometry": {
            "coordinates": [
              -1.5197,
              12.3714
            ],
            "type": "Point"
          },
          "id": "3862edf2c11e39d4b041dc1412295e47"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Arusha",
            "country": "Tanzania",
            "name": "The Nelson Mandela African Institution of Science and Technology (NM-AIST)"
          },
          "geometry": {
            "coordinates": [
              36.6822,
              -3.3869
            ],
            "type": "Point"
          },
          "id": "39483e9eb132b4cc466064480dc8c610"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Cape Town",
            "country": "South Africa",
            "name": "Cape Peninsula University of Technology"
          },
          "geometry": {
            "coordinates": [
              18.4233,
              -33.918861
            ],
            "type": "Point"
          },
          "id": "3bf9820281c711a19c6bdc0d72df6946"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Durban",
            "country": "South Africa",
            "name": "University of KwaZulu Natal"
          },
          "geometry": {
            "coordinates": [
              31.0218,
              -29.8587
            ],
            "type": "Point"
          },
          "id": "3d531f0d1ad135bc947cbc6470773edf"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Cape Town",
            "country": "South Africa",
            "name": "International Centre for Genetic Engineering and Biotechnology (ICGEB)"
          },
          "geometry": {
            "coordinates": [
              18.4233,
              -33.918861
            ],
            "type": "Point"
          },
          "id": "3dc3f5cef88b8b979fa7ca8d10896db5"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Bobo-Dioulasso",
            "country": "Burkina Faso",
            "name": "Universite Politechnique de Bobo-Dioulasso"
          },
          "geometry": {
            "coordinates": [
              -4.2996,
              11.1695
            ],
            "type": "Point"
          },
          "id": "3e219772e0ed37d241d2fa949a443b13"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Stellenbosch",
            "country": "South Africa",
            "name": "DST/NRF Centre of Excellence in Epidemiological Modelling and Analysis"
          },
          "geometry": {
            "coordinates": [
              18.8602,
              -33.9321
            ],
            "type": "Point"
          },
          "id": "416058712cec3f4e73655c8606bb71b8"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Johannesburg",
            "country": "South Africa",
            "name": "University of Johannesburg"
          },
          "geometry": {
            "coordinates": [
              28.0473,
              -26.2041
            ],
            "type": "Point"
          },
          "id": "4b656d0dcc68b3562f95a92c4f565946"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Buea",
            "country": "Cameroon",
            "name": "University of Buea"
          },
          "geometry": {
            "coordinates": [
              9.2416,
              4.155
            ],
            "type": "Point"
          },
          "id": "4ce3e01ff3449790d2ffc8623a3ec870"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Ibadan",
            "country": "Nigeria",
            "name": "International Institute of Tropical Agriculture (IITA)"
          },
          "geometry": {
            "coordinates": [
              3.947,
              7.3775
            ],
            "type": "Point"
          },
          "id": "4e480916c1070474c0b4aba794d6c1e5"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Mek'ele",
            "country": "Ethiopia",
            "name": "Mekelle University"
          },
          "geometry": {
            "coordinates": [
              39.475,
              13.4967
            ],
            "type": "Point"
          },
          "id": "502453327b1c10e451b9da66194ab07c"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Accra",
            "country": "Ghana",
            "name": "Noguchi Memorial Institute for Medical Research (NMIMR)"
          },
          "geometry": {
            "coordinates": [
              -0.187,
              5.6037
            ],
            "type": "Point"
          },
          "id": "5c47ed1b4249f7e42900785f70131d92"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Cape Coast",
            "country": "Ghana",
            "name": "University of Cape Coast"
          },
          "geometry": {
            "coordinates": [
              -1.2466,
              5.1053
            ],
            "type": "Point"
          },
          "id": "5ec15f9ae5bd38488fae771b9cda7372"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Palapye",
            "country": "Botswana",
            "name": "Botswana International University of Science and Technology (BIUST)"
          },
          "geometry": {
            "coordinates": [
              27.1302,
              -22.5566
            ],
            "type": "Point"
          },
          "id": "620193e95848cb0a00741debd43d778e"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Addis Ababa",
            "country": "Ethiopia",
            "name": "Armauer Hansen Research Institute (AHRI)"
          },
          "geometry": {
            "coordinates": [
              40.4897,
              9.145
            ],
            "type": "Point"
          },
          "id": "6ca8321812414522e862d74a9d06b549"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Gaborone",
            "country": "Botswana",
            "name": "Botswana-University of Pennsylvania Partnership"
          },
          "geometry": {
            "coordinates": [
              25.9231,
              -24.6282
            ],
            "type": "Point"
          },
          "id": "6d26aa21a9d95088d4f939635478ba2a"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Nsukka",
            "country": "Nigeria",
            "name": "University of Nigeria Nsukka"
          },
          "geometry": {
            "coordinates": [
              7.385,
              6.8561
            ],
            "type": "Point"
          },
          "id": "6e6eee59c59ff9ed1834500f4aa1da35"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Nairobi",
            "country": "Kenya",
            "name": "International Centre for Research in Agroforestry (ICRAF)"
          },
          "geometry": {
            "coordinates": [
              36.817223,
              -1.286389
            ],
            "type": "Point"
          },
          "id": "71dd69ce2a46fd3211270f4f66fdf405"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Empangeni",
            "country": "South Africa",
            "name": "University of Zululand"
          },
          "geometry": {
            "coordinates": [
              31.8954,
              -28.7542
            ],
            "type": "Point"
          },
          "id": "74bcb60a2cac9518cb01165d55a6f804"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Nairobi",
            "country": "Kenya",
            "name": "Kenya Medical Research Institute (KEMRI)"
          },
          "geometry": {
            "coordinates": [
              36.817223,
              -1.286389
            ],
            "type": "Point"
          },
          "id": "78d932f3ed9babd2f6591b6653aae4d5"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Harare",
            "country": "Zimbabwe",
            "name": "University of Zimbabwe"
          },
          "geometry": {
            "coordinates": [
              31.0335,
              -17.8252
            ],
            "type": "Point"
          },
          "id": "7e9a92248d0ae4767623ef3569f3dc74"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Kaimosi",
            "country": "Kenya",
            "name": "Kaimosi Friends University College"
          },
          "geometry": {
            "coordinates": [
              34.7487,
              0.0871
            ],
            "type": "Point"
          },
          "id": "7f8f2ed7bf41cb06bdb25ac84c51929f"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Accra",
            "country": "Ghana",
            "name": "University of Ghana"
          },
          "geometry": {
            "coordinates": [
              -0.187,
              5.6037
            ],
            "type": "Point"
          },
          "id": "7fe8017afe35921a65beec6a43ec2a63"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Dschang",
            "country": "Cameroon",
            "name": "University of Dschang, Cameroon"
          },
          "geometry": {
            "coordinates": [
              10.0667,
              5.4432
            ],
            "type": "Point"
          },
          "id": "807154dca0887f4ec0650bb9cac319e1"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Ibadan",
            "country": "Nigeria",
            "name": "University of Ibadan"
          },
          "geometry": {
            "coordinates": [
              3.947,
              7.3775
            ],
            "type": "Point"
          },
          "id": "98f78eb18013bb2b0e1c365272bc2d70"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Ouagadougou",
            "country": "Burkina Faso",
            "name": "University Ouaga I Pr. Joseph Ki-Zerbo, Burkina Faso"
          },
          "geometry": {
            "coordinates": [
              -1.5197,
              12.3714
            ],
            "type": "Point"
          },
          "id": "9b9f1c2678b24d2a2a01fbba6d54efb1"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Pretoria",
            "country": "South Africa",
            "name": "University of Pretoria (UP)"
          },
          "geometry": {
            "coordinates": [
              28.1881,
              -25.7461
            ],
            "type": "Point"
          },
          "id": "a3ddc6b98c61ffb113cdc6e2fad9db47"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Dakar",
            "country": "Senegal",
            "name": "Universit'e9 Cheikh Anta Diop de Dakar"
          },
          "geometry": {
            "coordinates": [
              -17.4467,
              14.6928
            ],
            "type": "Point"
          },
          "id": "a51d2ccda9ba36856a243fb4829c2db8"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Pretoria",
            "country": "South Africa",
            "name": "Council for Scientific and Industrial Research (CSIR), South Africa"
          },
          "geometry": {
            "coordinates": [
              28.1881,
              -25.7461
            ],
            "type": "Point"
          },
          "id": "a7a16d210af523cec31e9c3977de9ecb"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Kampala",
            "country": "Uganda",
            "name": "Makerere University"
          },
          "geometry": {
            "coordinates": [
              32.5811,
              0.3136
            ],
            "type": "Point"
          },
          "id": "b3baa9a2d691d60483a7c890f1a6e04f"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Nairobi",
            "country": "Kenya",
            "name": "Catholic University of Eastern Africa (CUEA)"
          },
          "geometry": {
            "coordinates": [
              36.817223,
              -1.286389
            ],
            "type": "Point"
          },
          "id": "bb337bd388308c888c65fd37d48f1264"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Durban",
            "country": "South Africa",
            "name": "University of Natal"
          },
          "geometry": {
            "coordinates": [
              31.0218,
              -29.8587
            ],
            "type": "Point"
          },
          "id": "bea9e606f221143a221d9e68b3fdd0d6"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Ouagadougou",
            "country": "Burkina Faso",
            "name": "University Joseph Ki-Zerbo"
          },
          "geometry": {
            "coordinates": [
              -1.5197,
              12.3714
            ],
            "type": "Point"
          },
          "id": "bf71aa152faae992e7e04f7459de6166"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Morogoro",
            "country": "Tanzania",
            "name": "Sokoine University of Agriculture"
          },
          "geometry": {
            "coordinates": [
              37.661,
              -6.821
            ],
            "type": "Point"
          },
          "id": "c2e7cc548a1b1b04b08e6aa3afd96a5c"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Nairobi",
            "country": "Kenya",
            "name": "International Livestock Research Institute (ILRI)"
          },
          "geometry": {
            "coordinates": [
              36.817223,
              -1.286389
            ],
            "type": "Point"
          },
          "id": "c5a545939c06d4bde415c06686a90efe"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Bamako",
            "country": "Mali",
            "name": "Malaria Research & Training Center"
          },
          "geometry": {
            "coordinates": [
              -8.0029,
              12.6392
            ],
            "type": "Point"
          },
          "id": "c985dc2ba0e1bf7aed7cb76e7bf209f3"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Polokwane",
            "country": "South Africa",
            "name": "University of Limpopo"
          },
          "geometry": {
            "coordinates": [
              29.4597,
              -23.8963
            ],
            "type": "Point"
          },
          "id": "cabe6f590dd58bca5f3cafb9a2b30797"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Banjul",
            "country": "Gambia",
            "name": "Medical Research Council Unit The Gambia"
          },
          "geometry": {
            "coordinates": [
              13.4549,
              -16.579
            ],
            "type": "Point"
          },
          "id": "cc61e2aa5eccefcf1acdc9efa210d714"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Abomey-Calavi",
            "country": "Benin",
            "name": "Universit'e9 d'92Abomey Calavi (UAC), Benin"
          },
          "geometry": {
            "coordinates": [
              2.3552,
              6.4449
            ],
            "type": "Point"
          },
          "id": "ce26c41532b0c79f3653e04680f8db74"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Bloemfontein",
            "country": "South Africa",
            "name": "University of the Free State"
          },
          "geometry": {
            "coordinates": [
              26.1596,
              -29.0852
            ],
            "type": "Point"
          },
          "id": "ceb100c24afa80208440d1d4505c4ac9"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Pretoria",
            "country": "South Africa",
            "name": "University of Pretoria (UP)"
          },
          "geometry": {
            "coordinates": [
              28.1881,
              -25.7461
            ],
            "type": "Point"
          },
          "id": "cfdd0dd6adef889c6ebda6c36355afa2"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Stellenbosch",
            "country": "South Africa",
            "name": "University of Stellenbosch"
          },
          "geometry": {
            "coordinates": [
              18.8602,
              -33.9321
            ],
            "type": "Point"
          },
          "id": "d021e2498f7c0420b4875be1e4a41eb5"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Dakar",
            "country": "Senegal",
            "name": "Centre d'Etude Regional pour l'Amelioration de l'Adaptation a la Secheresse (CERAAS)"
          },
          "geometry": {
            "coordinates": [
              -17.4467,
              14.6928
            ],
            "type": "Point"
          },
          "id": "d2b3c14f43b878ce8c4644923b1b2b5f"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Johannesburg",
            "country": "South Africa",
            "name": "National Institute for Communicable Diseases (NICD)"
          },
          "geometry": {
            "coordinates": [
              28.0473,
              -26.2041
            ],
            "type": "Point"
          },
          "id": "d7233f7b67bb38a46b3aa405b19f502a"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Ga-Rankuwa",
            "country": "South Africa",
            "name": "Medical University of South Africa (MEDUNSA)"
          },
          "geometry": {
            "coordinates": [
              28.08,
              -25.6184
            ],
            "type": "Point"
          },
          "id": "d7d49e22f5a6f66e208354a6efaf783f"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Abidjan",
            "country": "C'f4te d'Ivoire",
            "name": "Malaria Research and Control Center, NIPH"
          },
          "geometry": {
            "coordinates": [
              -4.0088,
              5.359
            ],
            "type": "Point"
          },
          "id": "dd889f0217ae7fa5d1a6f21ad1888946"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Johannesburg",
            "country": "South Africa",
            "name": "University of the Witwatersrand (WITS)"
          },
          "geometry": {
            "coordinates": [
              28.0473,
              -26.2041
            ],
            "type": "Point"
          },
          "id": "de84e73ac10332407b629e2a226017a2"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Cape Town",
            "country": "South Africa",
            "name": "i-Themba Labs"
          },
          "geometry": {
            "coordinates": [
              18.4233,
              -33.918861
            ],
            "type": "Point"
          },
          "id": "e0a3c7c6de5dd3fd18f9827c7d69e617"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Addis Ababa",
            "country": "Ethiopia",
            "name": "Addis Ababa University"
          },
          "geometry": {
            "coordinates": [
              40.4897,
              9.145
            ],
            "type": "Point"
          },
          "id": "e12f4f36143d1a6153de8468e9a6a57c"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Cotonou",
            "country": "Benin",
            "name": "Universit'e9 Nationale du Benin"
          },
          "geometry": {
            "coordinates": [
              2.4339,
              6.3528
            ],
            "type": "Point"
          },
          "id": "e6080900a226732b665428ec7ebc1185"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Cotonou",
            "country": "Benin",
            "name": "International Chair in Mathematical Physics and Applications (ICMPA), University of Abomey-Calavi"
          },
          "geometry": {
            "coordinates": [
              2.4339,
              6.3528
            ],
            "type": "Point"
          },
          "id": "e74d854fe6099abf339ebe8c9b3ca1af"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Njombe",
            "country": "Cameroon",
            "name": "Centre Africain de Recherches sur Bananiers et Plantains (CARBAP)"
          },
          "geometry": {
            "coordinates": [
              10.7996,
              5.6292
            ],
            "type": "Point"
          },
          "id": "eb1d334e3a4e51e4d24ed4c0022ef172"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Cape Town",
            "country": "South Africa",
            "name": "University of the Western Cape"
          },
          "geometry": {
            "coordinates": [
              18.6333,
              -33.9594
            ],
            "type": "Point"
          },
          "id": "ec9e55b32d9337571b382340083626b0"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Cape Town",
            "country": "South Africa",
            "name": "University of Cape Town (UTC)"
          },
          "geometry": {
            "coordinates": [
              18.4233,
              -33.918861
            ],
            "type": "Point"
          },
          "id": "eef9cfefd2317f8b36533b63c2c49705"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Johannesburg",
            "country": "South Africa",
            "name": "University of Johannesburg (UJ)"
          },
          "geometry": {
            "coordinates": [
              28.0473,
              -26.2041
            ],
            "type": "Point"
          },
          "id": "f415050d11a8c563f224a572fb9ae0d3"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Alice",
            "country": "South Africa",
            "name": "University of Fort Hare"
          },
          "geometry": {
            "coordinates": [
              26.8424,
              -32.7872
            ],
            "type": "Point"
          },
          "id": "fa2c9543b68c34d03fc9a4110c249409"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Port Elizabeth",
            "country": "South Africa",
            "name": "Nelson Mandela Metropolitan University"
          },
          "geometry": {
            "coordinates": [
              25.6022,
              -33.9608
            ],
            "type": "Point"
          },
          "id": "ffab3a8101223da421368a5e2b22e370"
        }
      ]
    },
    "sudamerica": {
      "members": {},
      "ongoing_phd_fellows": {},
      "alumni": {},
      "chapters": {
        "Antigua and Barbuda": 0,
        "Argentina": 0,
        "Bahamas": 0,
        "Barbados": 0,
        "Belize": 0,
        "Bolivia": 1,
        "Brazil": 1,
        "Chile": 1,
        "Colombia": 1,
        "Costa Rica": 0,
        "Cuba": 0,
        "Dominica": 0,
        "Dominican Republic": 1,
        "Ecuador": 1,
        "El Salvador": 1,
        "Grenada": 0,
        "Guatemala": 1,
        "Guyana": 0,
        "Haiti": 1,
        "Honduras": 1,
        "Jamaica": 0,
        "Mexico": 1,
        "Nicaragua": 1,
        "Panama": 0,
        "Paraguay": 1,
        "Peru": 1,
        "Saint Kitts and Nevis": 0,
        "Saint Lucia": 0,
        "Saint Vincent and the Grenadines": 0,
        "Suriname": 0,
        "Trinidad and Tobago": 0,
        "Uruguay": 1,
        "Venezuela": 1
      },
      "institutes": [
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Rio de Janeiro",
            "country": "Brazil",
            "name": "Pontifical Catholic University of Rio de Janeiro (PUC-Rio)"
          },
          "geometry": {
            "coordinates": [
              -43.1729,
              -22.9068
            ],
            "type": "Point"
          },
          "id": "0145ed14da191b2bd40c3e4f728ff669"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Mexico City",
            "country": "Mexico",
            "name": "National Autonomous University of Mexico"
          },
          "geometry": {
            "coordinates": [
              -99.1332,
              19.4326
            ],
            "type": "Point"
          },
          "id": "05fefa32a7912411f7d58168f7e271e3"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Kingston",
            "country": "Jamaica",
            "name": "University of the West Indies"
          },
          "geometry": {
            "coordinates": [
              -76.792,
              17.9714
            ],
            "type": "Point"
          },
          "id": "0d58b034201596d1fdfd6774a92a683c"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "São Paulo",
            "country": "Brazil",
            "name": "University of São Paulo"
          },
          "geometry": {
            "coordinates": [
              -46.6333,
              -23.5505
            ],
            "type": "Point"
          },
          "id": "0ec52a18e2ace8107bb7f69a3a38e0eb"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "São Paulo",
            "country": "Brazil",
            "name": "University of São Paulo"
          },
          "geometry": {
            "coordinates": [
              -46.6333,
              -23.5505
            ],
            "type": "Point"
          },
          "id": "1afbe0d03ce386b61720fbfd68d66b69"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Porto Alegre",
            "country": "Brazil",
            "name": "Federal University of Rio Grande do Sul"
          },
          "geometry": {
            "coordinates": [
              -51.2287,
              -30.0277
            ],
            "type": "Point"
          },
          "id": "2463b5c406f962c0572d947c7db79c81"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Brasília",
            "country": "Brazil",
            "name": "Empresa Brasileira de Pesquisa Agropecuária (EMBRAPA)"
          },
          "geometry": {
            "coordinates": [
              -47.9292,
              -15.7801
            ],
            "type": "Point"
          },
          "id": "488dbce1793b3fff08a595dbc20f9707"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Rio de Janeiro",
            "country": "Brazil",
            "name": "Fundação Oswaldo Cruz (FIOCRUZ)"
          },
          "geometry": {
            "coordinates": [
              -43.1729,
              -22.9068
            ],
            "type": "Point"
          },
          "id": "5ff5be168a8fc839ddb05d32c125e961"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Valdivia",
            "country": "Chile",
            "name": "Austral University of Chile (UACh)"
          },
          "geometry": {
            "coordinates": [
              -73.2459,
              -39.8142
            ],
            "type": "Point"
          },
          "id": "60312f724702b643d6eb2064db66a6c0"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "La Plata",
            "country": "Argentina",
            "name": "La Plata National University"
          },
          "geometry": {
            "coordinates": [
              -57.9538,
              -34.9202
            ],
            "type": "Point"
          },
          "id": "61c01e9850100a5ca2b02642af1f064e"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Mexico City",
            "country": "Mexico",
            "name": "Centro de Investigación y de Estudios Avanzados (CINVESTAV)"
          },
          "geometry": {
            "coordinates": [
              -99.1332,
              19.4326
            ],
            "type": "Point"
          },
          "id": "765b61d8a72651abae0aec63248c2ce6"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Florianópolis",
            "country": "Brazil",
            "name": "Federal University of Santa Catarina (UFSC)"
          },
          "geometry": {
            "coordinates": [
              -48.548,
              -27.5954
            ],
            "type": "Point"
          },
          "id": "910665f49d31e00a17d1a63cd77c8337"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Mexico City",
            "country": "Mexico",
            "name": "Universidad Nacional Autónoma de México (UNAM)"
          },
          "geometry": {
            "coordinates": [
              -99.1332,
              19.4326
            ],
            "type": "Point"
          },
          "id": "9742b554cda6ad48068df2e39d17176d"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Córdoba",
            "country": "Argentina",
            "name": "National University of Córdoba - CONICET"
          },
          "geometry": {
            "coordinates": [
              -64.1888,
              -31.4201
            ],
            "type": "Point"
          },
          "id": "9dc0f778867729a9f2960a7c7500f678"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Recife",
            "country": "Brazil",
            "name": "Federal Rural University of Pernambuco (UFRPE)"
          },
          "geometry": {
            "coordinates": [
              -34.877,
              -8.047599
            ],
            "type": "Point"
          },
          "id": "a4d003ddec4efe2d41d58d848f789a0d"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Rio de Janeiro",
            "country": "Brazil",
            "name": "Universidade Federal de Rio de Janeiro"
          },
          "geometry": {
            "coordinates": [
              -43.1729,
              -22.9068
            ],
            "type": "Point"
          },
          "id": "b050fe95502799ab641b97a54bb5516b"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Kingston",
            "country": "Jamaica",
            "name": "University of West Indies"
          },
          "geometry": {
            "coordinates": [
              -76.792,
              17.9714
            ],
            "type": "Point"
          },
          "id": "b3e3c20ba17f78b67d3f0b35e780cc42"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Rio de Janeiro",
            "country": "Brazil",
            "name": "Pontifical Catholic University of Rio de Janeiro"
          },
          "geometry": {
            "coordinates": [
              -43.1729,
              -22.9068
            ],
            "type": "Point"
          },
          "id": "dccf89f4ad01c904b1289cbc57b65dae"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Córdoba",
            "country": "Argentina",
            "name": "Córdoba National University"
          },
          "geometry": {
            "coordinates": [
              -64.1888,
              -31.4201
            ],
            "type": "Point"
          },
          "id": "e0d9ebc493146cd0d8b718876c36690f"
        },
        {
          "type": "Feature",
          "properties": {
            "category": "Host Institute",
            "city": "Campinas",
            "country": "Brazil",
            "name": "State University of Campinas (UNICAMP)"
          },
          "geometry": {
            "coordinates": [
              -47.0634,
              -22.9071
            ],
            "type": "Point"
          },
          "id": "f995230d8bc6311ab8b30124ee8557b3"
        }
      ]
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
      return state.sudamerica.alumni
    },
    getInstitutesAfrica: state => {
      return state.africa.institutes
    },
    getInstitutesSudAmerica: state => {
      return state.sudamerica.institutes
    },
    getChaptersAfrica: state => {
      return state.africa.chapters
    },
    getChaptersSudAmerica: state => {
      return state.sudamerica.chapters
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

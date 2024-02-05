// let container = document.getElementById('container');
// container.style.display = 'flex'
// container.style.flexWrap = 'wrap'
// container.style.justifyContent = 'center'
// container.style.alignItems = 'center'

// for (let i = 1; i <= 100; i++) {
//     let gettingDiv = document.createElement('div');
//     gettingDiv.textContent = i;
//     gettingDiv.classList.add('number');
//     gettingDiv.style.width = '0px'
//     gettingDiv.style.height = '36px'
//     gettingDiv.style.display = 'flex'
//     gettingDiv.style.justifyContent = 'center'
//     gettingDiv.style.alignItems = 'center'
//     gettingDiv.style.fontSize = '28px'
//     gettingDiv.style.margin = '2px'
//     gettingDiv.style.padding = '40px 120px'

//     if (i % 2 === 0) {
//         gettingDiv.classList.add('even')
//         gettingDiv.style.backgroundColor = 'green'
//     } else {
//         gettingDiv.classList.add('odd');
//         gettingDiv.style.backgroundColor = "yellow"
//     }

//     container.appendChild(gettingDiv);
// }

// const food = document.querySelector("#food-cards") // эЛЕМЕНТ  АЛЫП ТАСТАП 
//     food.innerHTML = ` <h2>Menu</h2>  
//      <ul class = "food-list">
// <li>burger</li>
// <li>Pasta</li>
// <li>Sushi</li>
// <li>Pizza</li>
// </ul>`

// const countries = [
//     'Afghanistan',
//     'Albania',
//     'Algeria',
//     'Andorra',
//     'Angola',
//     'Antigua and Barbuda',
//     'Argentina',
//     'Armenia',
//     'Australia',
//     'Austria',
//     'Azerbaijan',
//     'Bahamas',
//     'Bahrain',
//     'Bangladesh',
//     'Barbados',
//     'Belarus',
//     'Belgium',
//     'Belize',
//     'Benin',
//     'Bhutan',
//     'Bolivia',
//     'Bosnia and Herzegovina',
//     'Botswana',
//     'Brazil',
//     'Brunei',
//     'Bulgaria',
//     'Burkina Faso',
//     'Burundi',
//     'Cambodia',
//     'Cameroon',
//     'Canada',
//     'Cape Verde',
//     'Central African Republic',
//     'Chad',
//     'Chile',
//     'China',
//     'Colombi',
//     'Comoros',
//     'Congo (Brazzaville)',
//     'Congo',
//     'Costa Rica',
//     "Cote d'Ivoire",
//     'Croatia',
//     'Cuba',
//     'Cyprus',
//     'Czech Republic',
//     'Denmark',
//     'Djibouti',
//     'Dominica',
//     'Dominican Republic',
//     'East Timor (Timor Timur)',
//     'Ecuador',
//     'Egypt',
//     'El Salvador',
//     'Equatorial Guinea',
//     'Eritrea',
//     'Estonia',
//     'Ethiopia',
//     'Fiji',
//     'Finland',
//     'France',
//     'Gabon',
//     'Gambia, The',
//     'Georgia',
//     'Germany',
//     'Ghana',
//     'Greece',
//     'Grenada',
//     'Guatemala',
//     'Guinea',
//     'Guinea-Bissau',
//     'Guyana',
//     'Haiti',
//     'Honduras',
//     'Hungary',
//     'Iceland',
//     'India',
//     'Indonesia',
//     'Iran',
//     'Iraq',
//     'Ireland',
//     'Israel',
//     'Italy',
//     'Jamaica',
//     'Japan',
//     'Jordan',
//     'Kazakhstan',
//     'Kenya',
//     'Kiribati',
//     'Korea, North',
//     'Korea, South',
//     'Kuwait',
//     'Kyrgyzstan',
//     'Laos',
//     'Latvia',
//     'Lebanon',
//     'Lesotho',
//     'Liberia',
//     'Libya',
//     'Liechtenstein',
//     'Lithuania',
//     'Luxembourg',
//     'Macedonia',
//     'Madagascar',
//     'Malawi',
//     'Malaysia',
//     'Maldives',
//     'Mali',
//     'Malta',
//     'Marshall Islands',
//     'Mauritania',
//     'Mauritius',
//     'Mexico',
//     'Micronesia',
//     'Moldova',
//     'Monaco',
//     'Mongolia',
//     'Morocco',
//     'Mozambique',
//     'Myanmar',
//     'Namibia',
//     'Nauru',
//     'Nepal',
//     'Netherlands',
//     'New Zealand',
//     'Nicaragua',
//     'Niger',
//     'Nigeria',
//     'Norway',
//     'Oman',
//     'Pakistan',
//     'Palau',
//     'Panama',
//     'Papua New Guinea',
//     'Paraguay',
//     'Peru',
//     'Philippines',
//     'Poland',
//     'Portugal',
//     'Qatar',
//     'Romania',
//     'Russia',
//     'Rwanda',
//     'Saint Kitts and Nevis',
//     'Saint Lucia',
//     'Saint Vincent',
//     'Samoa',
//     'San Marino',
//     'Sao Tome and Principe',
//     'Saudi Arabia',
//     'Senegal',
//     'Serbia and Montenegro',
//     'Seychelles',
//     'Sierra Leone',
//     'Singapore',
//     'Slovakia',
//     'Slovenia',
//     'Solomon Islands',
//     'Somalia',
//     'South Africa',
//     'Spain',
//     'Sri Lanka',
//     'Sudan',
//     'Suriname',
//     'Swaziland',
//     'Sweden',
//     'Switzerland',
//     'Syria',
//     'Taiwan',
//     'Tajikistan',
//     'Tanzania',
//     'Thailand',
//     'Togo',
//     'Tonga',
//     'Trinidad and Tobago',
//     'Tunisia',
//     'Turkey',
//     'Turkmenistan',
//     'Tuvalu',
//     'Uganda',
//     'Ukraine',
//     'United Arab Emirates',
//     'United Kingdom',
//     'United States',
//     'Uruguay',
//     'Uzbekistan',
//     'Vanuatu',
//     'Vatican City',
//     'Venezuela',
//     'Vietnam',
//     'Yemen',
//     'Zambia',
//     'Zimbabwe'
// ]

// let div = document.createElement('div')
// div.style.width = '45%'
// div.style.display = 'flex'
// div.style.flexDirection = 'row'
// div.style.flexWrap = 'wrap'
// div.style.margin = 'auto'
// document.body.appendChild(div)


// for(let i of countries){
//     let div_contry = document.createElement('div')
//     div_contry.textContent = i.toLocaleUpperCase()
//     div_contry.style.width = '120px'
//     div_contry.style.height = '130px'
//     div_contry.style.boxShadow = '0px 0px 2px 0px gray'
//     div_contry.style.margin = '5px'
//     div_contry.style.display = 'flex'
//     div_contry.style.justifyContent = 'center'
//     div_contry.style.alignItems = 'center'
//     div_contry.style.textAlign = 'center'
//     div_contry.style.fontSize = '12px'
//     div_contry.style.fontWeight = '900'
//     div.appendChild(div_contry)
// }


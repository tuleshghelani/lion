import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countries = [
    { name: 'USA', dialCode: '+1' },
    { name: 'Canada', dialCode: '+1' },
    { name: 'Egypt', dialCode: '+20' },
    { name: 'South Sudan', dialCode: '+211' },
    { name: 'Morocco', dialCode: '+212' },
    { name: 'Algeria', dialCode: '+213' },
    { name: 'Tunisia', dialCode: '+216' },
    { name: 'Libya', dialCode: '+218' },
    { name: 'Gambia', dialCode: '+220' },
    { name: 'Senegal', dialCode: '+221' },
    { name: 'Mauritania', dialCode: '+222' },
    { name: 'Mali', dialCode: '+223' },
    { name: 'Guinea', dialCode: '+224' },
    { name: 'Côte d\'Ivoire', dialCode: '+225' },
    { name: 'Burkina Faso', dialCode: '+226' },
    { name: 'Niger', dialCode: '+227' },
    { name: 'Togo', dialCode: '+228' },
    { name: 'Benin', dialCode: '+229' },
    { name: 'Mauritius', dialCode: '+230' },
    { name: 'Liberia', dialCode: '+231' },
    { name: 'Sierra Leone', dialCode: '+232' },
    { name: 'Ghana', dialCode: '+233' },
    { name: 'Nigeria', dialCode: '+234' },
    { name: 'Chad', dialCode: '+235' },
    { name: 'Central African Republic', dialCode: '+236' },
    { name: 'Cameroon', dialCode: '+237' },
    { name: 'Cape Verde', dialCode: '+238' },
    { name: 'São Tomé and Príncipe', dialCode: '+239' },
    { name: 'Equatorial Guinea', dialCode: '+240' },
    { name: 'Gabon', dialCode: '+241' },
    { name: 'Republic of the Congo', dialCode: '+242' },
    { name: 'Democratic Republic of the Congo', dialCode: '+243' },
    { name: 'Angola', dialCode: '+244' },
    { name: 'Guinea-Bissau', dialCode: '+245' },
    { name: 'Diego Garcia', dialCode: '+246' },
    { name: 'Seychelles', dialCode: '+248' },
    { name: 'Sudan', dialCode: '+249' },
    { name: 'Rwanda', dialCode: '+250' },
    { name: 'Ethiopia', dialCode: '+251' },
    { name: 'Somalia', dialCode: '+252' },
    { name: 'Djibouti', dialCode: '+253' },
    { name: 'Kenya', dialCode: '+254' },
    { name: 'Tanzania', dialCode: '+255' },
    { name: 'Uganda', dialCode: '+256' },
    { name: 'Burundi', dialCode: '+257' },
    { name: 'Mozambique', dialCode: '+258' },
    { name: 'Zambia', dialCode: '+260' },
    { name: 'Madagascar', dialCode: '+261' },
    { name: 'Réunion', dialCode: '+262' },
    { name: 'Zimbabwe', dialCode: '+263' },
    { name: 'Namibia', dialCode: '+264' },
    { name: 'Malawi', dialCode: '+265' },
    { name: 'Lesotho', dialCode: '+266' },
    { name: 'Botswana', dialCode: '+267' },
    { name: 'Eswatini', dialCode: '+268' },
    { name: 'Comoros', dialCode: '+269' },
    { name: 'South Africa', dialCode: '+27' },
    { name: 'Saint Helena', dialCode: '+290' },
    { name: 'Eritrea', dialCode: '+291' },
    { name: 'Aruba', dialCode: '+297' },
    { name: 'Faroe Islands', dialCode: '+298' },
    { name: 'Greenland', dialCode: '+299' },
    { name: 'Greece', dialCode: '+30' },
    { name: 'Netherlands', dialCode: '+31' },
    { name: 'Belgium', dialCode: '+32' },
    { name: 'France', dialCode: '+33' },
    { name: 'Spain', dialCode: '+34' },
    { name: 'Gibraltar', dialCode: '+350' },
    { name: 'Portugal', dialCode: '+351' },
    { name: 'Luxembourg', dialCode: '+352' },
    { name: 'Ireland', dialCode: '+353' },
    { name: 'Iceland', dialCode: '+354' },
    { name: 'Albania', dialCode: '+355' },
    { name: 'Malta', dialCode: '+356' },
    { name: 'Cyprus', dialCode: '+357' },
    { name: 'Finland', dialCode: '+358' },
    { name: 'Bulgaria', dialCode: '+359' },
    { name: 'Hungary', dialCode: '+36' },
    { name: 'Lithuania', dialCode: '+370' },
    { name: 'Latvia', dialCode: '+371' },
    { name: 'Estonia', dialCode: '+372' },
    { name: 'Moldova', dialCode: '+373' },
    { name: 'Armenia', dialCode: '+374' },
    { name: 'Belarus', dialCode: '+375' },
    { name: 'Andorra', dialCode: '+376' },
    { name: 'Monaco', dialCode: '+377' },
    { name: 'San Marino', dialCode: '+378' },
    { name: 'Vatican City', dialCode: '+379' },
    { name: 'Ukraine', dialCode: '+380' },
    { name: 'Serbia', dialCode: '+381' },
    { name: 'Montenegro', dialCode: '+382' },
    { name: 'Kosovo', dialCode: '+383' },
    { name: 'Croatia', dialCode: '+385' },
    { name: 'Slovenia', dialCode: '+386' },
    { name: 'Bosnia and Herzegovina', dialCode: '+387' },
    { name: 'North Macedonia', dialCode: '+389' },
    { name: 'Italy', dialCode: '+39' },
    { name: 'Romania', dialCode: '+40' },
    { name: 'Switzerland', dialCode: '+41' },
    { name: 'Czech Republic', dialCode: '+420' },
    { name: 'Slovakia', dialCode: '+421' },
    { name: 'Liechtenstein', dialCode: '+423' },
    { name: 'Austria', dialCode: '+43' },
    { name: 'United Kingdom', dialCode: '+44' },
    { name: 'Denmark', dialCode: '+45' },
    { name: 'Sweden', dialCode: '+46' },
    { name: 'Norway', dialCode: '+47' },
    { name: 'Poland', dialCode: '+48' },
    { name: 'Germany', dialCode: '+49' },
    { name: 'Falkland Islands', dialCode: '+500' },
    { name: 'Belize', dialCode: '+501' },
    { name: 'Guatemala', dialCode: '+502' },
    { name: 'El Salvador', dialCode: '+503' },
    { name: 'Honduras', dialCode: '+504' },
    { name: 'Nicaragua', dialCode: '+505' },
    { name: 'Costa Rica', dialCode: '+506' },
    { name: 'Panama', dialCode: '+507' },
    { name: 'Saint Pierre and Miquelon', dialCode: '+508' },
    { name: 'Haiti', dialCode: '+509' },
    { name: 'Peru', dialCode: '+51' },
    { name: 'Mexico', dialCode: '+52' },
    { name: 'Cuba', dialCode: '+53' },
    { name: 'Argentina', dialCode: '+54' },
    { name: 'Brazil', dialCode: '+55' },
    { name: 'Chile', dialCode: '+56' },
    { name: 'Colombia', dialCode: '+57' },
    { name: 'Venezuela', dialCode: '+58' },
    { name: 'Guadeloupe', dialCode: '+590' },
    { name: 'Bolivia', dialCode: '+591' },
    { name: 'Guyana', dialCode: '+592' },
    { name: 'Ecuador', dialCode: '+593' },
    { name: 'French Guiana', dialCode: '+594' },
    { name: 'Paraguay', dialCode: '+595' },
    { name: 'Martinique', dialCode: '+596' },
    { name: 'Suriname', dialCode: '+597' },
    { name: 'Uruguay', dialCode: '+598' },
    { name: 'Netherlands Antilles', dialCode: '+599' },
    { name: 'Malaysia', dialCode: '+60' },
    { name: 'Australia', dialCode: '+61' },
    { name: 'Indonesia', dialCode: '+62' },
    { name: 'Philippines', dialCode: '+63' },
    { name: 'New Zealand', dialCode: '+64' },
    { name: 'Singapore', dialCode: '+65' },
    { name: 'Thailand', dialCode: '+66' },
    { name: 'East Timor', dialCode: '+670' },
    { name: 'Australian External Territories', dialCode: '+672' },
    { name: 'Brunei', dialCode: '+673' },
    { name: 'Nauru', dialCode: '+674' },
    { name: 'Papua New Guinea', dialCode: '+675' },
    { name: 'Tonga', dialCode: '+676' },
    { name: 'Solomon Islands', dialCode: '+677' },
    { name: 'Vanuatu', dialCode: '+678' },
    { name: 'Fiji', dialCode: '+679' },
    { name: 'Palau', dialCode: '+680' },
    { name: 'Wallis and Futuna', dialCode: '+681' },
    { name: 'Cook Islands', dialCode: '+682' },
    { name: 'Niue', dialCode: '+683' },
    { name: 'Samoa', dialCode: '+685' },
    { name: 'Kiribati', dialCode: '+686' },
    { name: 'New Caledonia', dialCode: '+687' },
    { name: 'Tuvalu', dialCode: '+688' },
    { name: 'French Polynesia', dialCode: '+689' },
    { name: 'Tokelau', dialCode: '+690' },
    { name: 'Micronesia', dialCode: '+691' },
    { name: 'Marshall Islands', dialCode: '+692' },
    { name: 'Russia', dialCode: '+7' },
    { name: 'Japan', dialCode: '+81' },
    { name: 'South Korea', dialCode: '+82' },
    { name: 'Vietnam', dialCode: '+84' },
    { name: 'North Korea', dialCode: '+850' },
    { name: 'Hong Kong', dialCode: '+852' },
    { name: 'Macau', dialCode: '+853' },
    { name: 'Cambodia', dialCode: '+855' },
    { name: 'Laos', dialCode: '+856' },
    { name: 'China', dialCode: '+86' },
    { name: 'Inmarsat', dialCode: '+870' },
    { name: 'Bangladesh', dialCode: '+880' },
    { name: 'Taiwan', dialCode: '+886' },
    { name: 'Turkey', dialCode: '+90' },
    { name: 'India', dialCode: '+91' },
    { name: 'Pakistan', dialCode: '+92' },
    { name: 'Afghanistan', dialCode: '+93' },
    { name: 'Sri Lanka', dialCode: '+94' },
    { name: 'Myanmar', dialCode: '+95' },
    { name: 'Maldives', dialCode: '+960' },
    { name: 'Lebanon', dialCode: '+961' },
    { name: 'Jordan', dialCode: '+962' },
    { name: 'Syria', dialCode: '+963' },
    { name: 'Iraq', dialCode: '+964' },
    { name: 'Kuwait', dialCode: '+965' },
    { name: 'Saudi Arabia', dialCode: '+966' },
    { name: 'Yemen', dialCode: '+967' },
    { name: 'Oman', dialCode: '+968' },
    { name: 'Palestine', dialCode: '+970' },
    { name: 'United Arab Emirates', dialCode: '+971' },
    { name: 'Israel', dialCode: '+972' },
    { name: 'Bahrain', dialCode: '+973' },
    { name: 'Qatar', dialCode: '+974' },
    { name: 'Bhutan', dialCode: '+975' },
    { name: 'Mongolia', dialCode: '+976' },
    { name: 'Nepal', dialCode: '+977' },
    { name: 'Iran', dialCode: '+98' },
    { name: 'Tajikistan', dialCode: '+992' },
    { name: 'Turkmenistan', dialCode: '+993' },
    { name: 'Azerbaijan', dialCode: '+994' },
    { name: 'Georgia', dialCode: '+995' },
    { name: 'Kyrgyzstan', dialCode: '+996' },
    { name: 'Uzbekistan', dialCode: '+998' },

  ];

  getCountries() {
    return this.countries;
  }
} 
var countrySelect2 = d3.select("#temperatureCountry");
countries2 = ['Afghanistan', 'Albania', 'Australia', 'Austria','The Bahamas', 'Bahrain', 'Bangladesh','Belgium', 'Brazil','British Virgin Islands','Cambodia','Canada', 'Japan','China', 'Colombia', 'Egypt', 'Germany','India','Italy',  'Nepal','Netherlands','New Zealand','North Korea','Pakistan', 'Puerto Rico','Russia', 'Saudi Arabia','South Korea',
'Singapore','South Africa','Switzerland', 'United Arab Emirates','United Kingdom', 'United States of America','Vietnam']

function fillCountryDropDown2(countries2) {
    countries2.forEach((country) => {
        //add option slot
        var option = countrySelect2.append("option");
        //add subject ID value to slop
        option.text(country);
    })
    
}

function init(){
    fillCountryDropDown2(countries2)
}

init();

var countrySelect = d3.select("#populationCountry");
countries = ['World', 'Afghanistan', 'Albania', 'Australia', 'Austria','Bahamas', 'Bahrain', 'Bangladesh','Belgium', 'Brazil','British Virgin Islands','Cambodia','Canada', 'Japan','China', 'Colombia', 'Egypt', 'Germany','India','Italy',  'Nepal','Netherlands','New Zealand','North Korea','Pakistan', 'Puerto Rico','Russia', 'Saudi Arabia','South Korea',
'Singapore','South Africa','Switzerland', 'United Arab Emirates','United Kingdom', 'United States','Vietnam']

function init(){
    fillCountryDropDown(countries)
}


function fillCountryDropDown(countries) {
    countries.forEach((country) => {
        //add option slot
        var option = countrySelect.append("option");
        //add subject ID value to slop
        option.text(country);
    })
    
}

init();
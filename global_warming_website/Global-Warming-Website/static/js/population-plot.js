var pop = "/static/data/populationPlot.json";
var temp = "/static/data/tempPlot.json"
var pop_year = [];
var population = [];
var temp_year = [];
var temp_mean = [];

d3.json(pop).then((data)=>{
  for (var i = 0; i < data.data[0]; i++) {
    pop_year.push[data.data[0][i]];
    population.push[data.data[1][i]];
}
});

d3.json(temp).then((data)=>{
  for (var i = 0; i < data.data[0]; i++) {
    temp_year.push[data.data[0][i]];
    temp_mean.push[data.data[1][i]];
}
});


trace1 = {
    name: 'Temperature Change', 
    type: 'scatter', 
    mode: 'lines',
    x: temp_year,
    y: temp_mean,
    line: {
      color: "#17BECF"
    }
  },

trace2 = {
     
    line: {color: 'rgb(153, 0, 255)'}, 
    name: 'Population', 
    type: 'scatter', 
    x: pop_year,
    y: population,
    showlegend: True
},

trace3 = {
     
    line: {color: 'rgb(230, 145, 56)'}, 
    name: 'CO2 emissions', 
    type: 'scatter', 
    x: ['1958-03-01', '1958-04-01', '1958-05-01', '1958-06-01', '1958-07-01', '1958-08-01', '1958-09-01', '1958-10-01', '1958-11-01', '1958-12-01', '1959-01-01', '1959-02-01', '1959-03-01', '1959-04-01', '1959-05-01', '1959-06-01', '1959-07-01', '1959-08-01', '1959-09-01', '1959-10-01', '1959-11-01', '1959-12-01', '1960-01-01', '1960-02-01', '1960-03-01', '1960-04-01', '1960-05-01', '1960-06-01', '1960-07-01', '1960-08-01', '1960-09-01', '1960-10-01', '1960-11-01', '1960-12-01', '1961-01-01', '1961-02-01', '1961-03-01', '1961-04-01', '1961-05-01', '1961-06-01', '1961-07-01', '1961-08-01', '1961-09-01', '1961-10-01', '1961-11-01', '1961-12-01', '1962-01-01', '1962-02-01', '1962-03-01', '1962-04-01', '1962-05-01', '1962-06-01', '1962-07-01', '1962-08-01', '1962-09-01', '1962-10-01', '1962-11-01', '1962-12-01', '1963-01-01', '1963-02-01', '1963-03-01', '1963-04-01', '1963-05-01', '1963-06-01', '1963-07-01', '1963-08-01', '1963-09-01', '1963-10-01', '1963-11-01', '1963-12-01', '1964-01-01', '1964-02-01', '1964-03-01', '1964-04-01', '1964-05-01', '1964-06-01', '1964-07-01', '1964-08-01', '1964-09-01', '1964-10-01', '1964-11-01', '1964-12-01', '1965-01-01', '1965-02-01', '1965-03-01', '1965-04-01', '1965-05-01', '1965-06-01', '1965-07-01', '1965-08-01', '1965-09-01', '1965-10-01', '1965-11-01', '1965-12-01', '1966-01-01', '1966-02-01', '1966-03-01', '1966-04-01', '1966-05-01', '1966-06-01', '1966-07-01', '1966-08-01', '1966-09-01', '1966-10-01', '1966-11-01', '1966-12-01', '1967-01-01', '1967-02-01', '1967-03-01', '1967-04-01', '1967-05-01', '1967-06-01', '1967-07-01', '1967-08-01', '1967-09-01', '1967-10-01', '1967-11-01', '1967-12-01', '1968-01-01', '1968-02-01', '1968-03-01', '1968-04-01', '1968-05-01', '1968-06-01', '1968-07-01', '1968-08-01', '1968-09-01', '1968-10-01', '1968-11-01', '1968-12-01', '1969-01-01', '1969-02-01', '1969-03-01', '1969-04-01', '1969-05-01', '1969-06-01', '1969-07-01', '1969-08-01', '1969-09-01', '1969-10-01', '1969-11-01', '1969-12-01', '1970-01-01', '1970-02-01', '1970-03-01', '1970-04-01', '1970-05-01', '1970-06-01', '1970-07-01', '1970-08-01', '1970-09-01', '1970-10-01', '1970-11-01', '1970-12-01', '1971-01-01', '1971-02-01', '1971-03-01', '1971-04-01', '1971-05-01', '1971-06-01', '1971-07-01', '1971-08-01', '1971-09-01', '1971-10-01', '1971-11-01', '1971-12-01', '1972-01-01', '1972-02-01', '1972-03-01', '1972-04-01', '1972-05-01', '1972-06-01', '1972-07-01', '1972-08-01', '1972-09-01', '1972-10-01', '1972-11-01', '1972-12-01', '1973-01-01', '1973-02-01', '1973-03-01', '1973-04-01', '1973-05-01', '1973-06-01', '1973-07-01', '1973-08-01', '1973-09-01', '1973-10-01', '1973-11-01', '1973-12-01', '1974-01-01', '1974-02-01', '1974-03-01', '1974-04-01', '1974-05-01', '1974-06-01', '1974-07-01', '1974-08-01', '1974-09-01', '1974-10-01', '1974-11-01', '1974-12-01', '1975-01-01', '1975-02-01', '1975-03-01', '1975-04-01', '1975-05-01', '1975-06-01', '1975-07-01', '1975-08-01', '1975-09-01', '1975-10-01', '1975-11-01', '1975-12-01', '1976-01-01', '1976-02-01', '1976-03-01', '1976-04-01', '1976-05-01', '1976-06-01', '1976-07-01', '1976-08-01', '1976-09-01', '1976-10-01', '1976-11-01', '1976-12-01', '1977-01-01', '1977-02-01', '1977-03-01', '1977-04-01', '1977-05-01', '1977-06-01', '1977-07-01', '1977-08-01', '1977-09-01', '1977-10-01', '1977-11-01', '1977-12-01', '1978-01-01', '1978-02-01', '1978-03-01', '1978-04-01', '1978-05-01', '1978-06-01', '1978-07-01', '1978-08-01', '1978-09-01', '1978-10-01', '1978-11-01', '1978-12-01', '1979-01-01', '1979-02-01', '1979-03-01', '1979-04-01', '1979-05-01', '1979-06-01', '1979-07-01', '1979-08-01', '1979-09-01', '1979-10-01', '1979-11-01', '1979-12-01', '1980-01-01', '1980-02-01', '1980-03-01', '1980-04-01', '1980-05-01', '1980-06-01', '1980-07-01', '1980-08-01', '1980-09-01', '1980-10-01', '1980-11-01', '1980-12-01', '1981-01-01', '1981-02-01', '1981-03-01', '1981-04-01', '1981-05-01', '1981-06-01', '1981-07-01', '1981-08-01', '1981-09-01', '1981-10-01', '1981-11-01', '1981-12-01', '1982-01-01', '1982-02-01', '1982-03-01', '1982-04-01', '1982-05-01', '1982-06-01', '1982-07-01', '1982-08-01', '1982-09-01', '1982-10-01', '1982-11-01', '1982-12-01', '1983-01-01', '1983-02-01', '1983-03-01', '1983-04-01', '1983-05-01', '1983-06-01', '1983-07-01', '1983-08-01', '1983-09-01', '1983-10-01', '1983-11-01', '1983-12-01', '1984-01-01', '1984-02-01', '1984-03-01', '1984-04-01', '1984-05-01', '1984-06-01', '1984-07-01', '1984-08-01', '1984-09-01', '1984-10-01', '1984-11-01', '1984-12-01', '1985-01-01', '1985-02-01', '1985-03-01', '1985-04-01', '1985-05-01', '1985-06-01', '1985-07-01', '1985-08-01', '1985-09-01', '1985-10-01', '1985-11-01', '1985-12-01', '1986-01-01', '1986-02-01', '1986-03-01', '1986-04-01', '1986-05-01', '1986-06-01', '1986-07-01', '1986-08-01', '1986-09-01', '1986-10-01', '1986-11-01', '1986-12-01', '1987-01-01', '1987-02-01', '1987-03-01', '1987-04-01', '1987-05-01', '1987-06-01', '1987-07-01', '1987-08-01', '1987-09-01', '1987-10-01', '1987-11-01', '1987-12-01', '1988-01-01', '1988-02-01', '1988-03-01', '1988-04-01', '1988-05-01', '1988-06-01', '1988-07-01', '1988-08-01', '1988-09-01', '1988-10-01', '1988-11-01', '1988-12-01', '1989-01-01', '1989-02-01', '1989-03-01', '1989-04-01', '1989-05-01', '1989-06-01', '1989-07-01', '1989-08-01', '1989-09-01', '1989-10-01', '1989-11-01', '1989-12-01', '1990-01-01', '1990-02-01', '1990-03-01', '1990-04-01', '1990-05-01', '1990-06-01', '1990-07-01', '1990-08-01', '1990-09-01', '1990-10-01', '1990-11-01', '1990-12-01', '1991-01-01', '1991-02-01', '1991-03-01', '1991-04-01', '1991-05-01', '1991-06-01', '1991-07-01', '1991-08-01', '1991-09-01', '1991-10-01', '1991-11-01', '1991-12-01', '1992-01-01', '1992-02-01', '1992-03-01', '1992-04-01', '1992-05-01', '1992-06-01', '1992-07-01', '1992-08-01', '1992-09-01', '1992-10-01', '1992-11-01', '1992-12-01', '1993-01-01', '1993-02-01', '1993-03-01', '1993-04-01', '1993-05-01', '1993-06-01', '1993-07-01', '1993-08-01', '1993-09-01', '1993-10-01', '1993-11-01', '1993-12-01', '1994-01-01', '1994-02-01', '1994-03-01', '1994-04-01', '1994-05-01', '1994-06-01', '1994-07-01', '1994-08-01', '1994-09-01', '1994-10-01', '1994-11-01', '1994-12-01', '1995-01-01', '1995-02-01', '1995-03-01', '1995-04-01', '1995-05-01', '1995-06-01', '1995-07-01', '1995-08-01', '1995-09-01', '1995-10-01', '1995-11-01', '1995-12-01', '1996-01-01', '1996-02-01', '1996-03-01', '1996-04-01', '1996-05-01', '1996-06-01', '1996-07-01', '1996-08-01', '1996-09-01', '1996-10-01', '1996-11-01', '1996-12-01', '1997-01-01', '1997-02-01', '1997-03-01', '1997-04-01', '1997-05-01', '1997-06-01', '1997-07-01', '1997-08-01', '1997-09-01', '1997-10-01', '1997-11-01', '1997-12-01', '1998-01-01', '1998-02-01', '1998-03-01', '1998-04-01', '1998-05-01', '1998-06-01', '1998-07-01', '1998-08-01', '1998-09-01', '1998-10-01', '1998-11-01', '1998-12-01', '1999-01-01', '1999-02-01', '1999-03-01', '1999-04-01', '1999-05-01', '1999-06-01', '1999-07-01', '1999-08-01', '1999-09-01', '1999-10-01', '1999-11-01', '1999-12-01', '2000-01-01', '2000-02-01', '2000-03-01', '2000-04-01', '2000-05-01', '2000-06-01', '2000-07-01', '2000-08-01', '2000-09-01', '2000-10-01', '2000-11-01', '2000-12-01', '2001-01-01', '2001-02-01', '2001-03-01', '2001-04-01', '2001-05-01', '2001-06-01', '2001-07-01', '2001-08-01', '2001-09-01', '2001-10-01', '2001-11-01', '2001-12-01', '2002-01-01', '2002-02-01', '2002-03-01', '2002-04-01', '2002-05-01', '2002-06-01', '2002-07-01', '2002-08-01', '2002-09-01', '2002-10-01', '2002-11-01', '2002-12-01', '2003-01-01', '2003-02-01', '2003-03-01', '2003-04-01', '2003-05-01', '2003-06-01', '2003-07-01', '2003-08-01', '2003-09-01', '2003-10-01', '2003-11-01', '2003-12-01', '2004-01-01', '2004-02-01', '2004-03-01', '2004-04-01', '2004-05-01', '2004-06-01', '2004-07-01', '2004-08-01', '2004-09-01', '2004-10-01', '2004-11-01', '2004-12-01', '2005-01-01', '2005-02-01', '2005-03-01', '2005-04-01', '2005-05-01', '2005-06-01', '2005-07-01', '2005-08-01', '2005-09-01', '2005-10-01', '2005-11-01', '2005-12-01', '2006-01-01', '2006-02-01', '2006-03-01', '2006-04-01', '2006-05-01', '2006-06-01', '2006-07-01', '2006-08-01', '2006-09-01', '2006-10-01', '2006-11-01', '2006-12-01', '2007-01-01', '2007-02-01', '2007-03-01', '2007-04-01', '2007-05-01', '2007-06-01', '2007-07-01', '2007-08-01', '2007-09-01', '2007-10-01', '2007-11-01', '2007-12-01', '2008-01-01', '2008-02-01', '2008-03-01', '2008-04-01', '2008-05-01', '2008-06-01', '2008-07-01', '2008-08-01', '2008-09-01', '2008-10-01', '2008-11-01', '2008-12-01', '2009-01-01', '2009-02-01', '2009-03-01', '2009-04-01', '2009-05-01', '2009-06-01', '2009-07-01', '2009-08-01', '2009-09-01', '2009-10-01', '2009-11-01', '2009-12-01', '2010-01-01', '2010-02-01', '2010-03-01', '2010-04-01', '2010-05-01', '2010-06-01', '2010-07-01', '2010-08-01', '2010-09-01', '2010-10-01', '2010-11-01', '2010-12-01', '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01', '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01', '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01', '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01', '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01', '2013-07-01', '2013-08-01', '2013-09-01', '2013-10-01', '2013-11-01', '2013-12-01', '2014-01-01', '2014-02-01', '2014-03-01', '2014-04-01', '2014-05-01', '2014-06-01', '2014-07-01', '2014-08-01', '2014-09-01', '2014-10-01', '2014-11-01', '2014-12-01', '2015-01-01', '2015-02-01', '2015-03-01'], 
    y: ['315.71', '317.45', '317.50', '317.10', '315.86', '314.93', '313.20', '312.66', '313.33', '314.67', '315.62', '316.38', '316.71', '317.72', '318.29', '318.15', '316.54', '314.80', '313.84', '313.26', '314.80', '315.58', '316.43', '316.97', '317.58', '319.02', '320.03', '319.59', '318.18', '315.91', '314.16', '313.83', '315.00', '316.19', '316.93', '317.70', '318.54', '319.48', '320.58', '319.77', '318.57', '316.79', '314.80', '315.38', '316.10', '317.01', '317.94', '318.56', '319.68', '320.63', '321.01', '320.55', '319.58', '317.40', '316.26', '315.42', '316.69', '317.69', '318.74', '319.08', '319.86', '321.39', '322.25', '321.47', '319.74', '317.77', '316.21', '315.99', '317.12', '318.31', '319.57', '320.07', '320.73', '321.77', '322.25', '321.89', '320.44', '318.70', '316.70', '316.79', '317.79', '318.71', '319.44', '320.44', '320.89', '322.13', '322.16', '321.87', '321.39', '318.81', '317.81', '317.30', '318.87', '319.42', '320.62', '321.59', '322.39', '323.87', '324.01', '323.75', '322.39', '320.37', '318.64', '318.10', '319.79', '321.08', '322.07', '322.50', '323.04', '324.42', '325.00', '324.09', '322.55', '320.92', '319.31', '319.31', '320.72', '321.96', '322.57', '323.15', '323.89', '325.02', '325.57', '325.36', '324.14', '322.03', '320.41', '320.25', '321.31', '322.84', '324.00', '324.42', '325.64', '326.66', '327.34', '326.76', '325.88', '323.67', '322.38', '321.78', '322.85', '324.11', '325.03', '325.99', '326.87', '328.13', '328.07', '327.66', '326.35', '324.69', '323.10', '323.16', '323.98', '325.13', '326.17', '326.68', '327.18', '327.78', '328.92', '328.57', '327.34', '325.46', '323.36', '323.57', '324.80', '326.01', '326.77', '327.63', '327.75', '329.72', '330.07', '329.09', '328.05', '326.32', '324.93', '325.06', '326.50', '327.55', '328.54', '329.56', '330.30', '331.50', '332.48', '332.07', '330.87', '329.31', '327.51', '327.18', '328.16', '328.64', '329.35', '330.71', '331.48', '332.65', '333.19', '332.12', '330.99', '329.17', '327.41', '327.21', '328.34', '329.50', '330.68', '331.41', '331.85', '333.29', '333.91', '333.40', '331.74', '329.88', '328.57', '328.36', '329.33', '330.59', '331.66', '332.75', '333.46', '334.78', '334.78', '334.06', '332.95', '330.64', '328.96', '328.77', '330.18', '331.65', '332.69', '333.23', '334.97', '336.03', '336.82', '336.10', '334.79', '332.53', '331.19', '331.21', '332.35', '333.47', '335.10', '335.26', '336.61', '337.77', '338.01', '337.98', '336.48', '334.37', '332.33', '332.41', '333.76', '334.83', '336.21', '336.65', '338.13', '338.94', '339.00', '339.20', '337.60', '335.56', '333.93', '334.12', '335.26', '336.78', '337.80', '338.28', '340.04', '340.86', '341.47', '341.26', '339.34', '337.45', '336.10', '336.05', '337.21', '338.29', '339.36', '340.51', '341.57', '342.56', '343.01', '342.49', '340.68', '338.49', '336.92', '337.12', '338.59', '339.90', '340.92', '341.69', '342.85', '343.92', '344.67', '343.78', '342.23', '340.11', '338.32', '338.39', '339.48', '340.88', '341.64', '342.87', '343.59', '345.25', '345.96', '345.52', '344.15', '342.25', '340.17', '340.30', '341.53', '343.07', '344.05', '344.77', '345.46', '346.77', '347.55', '346.98', '345.55', '343.20', '341.35', '341.68', '343.06', '344.54', '345.25', '346.06', '347.66', '348.20', '348.92', '348.40', '346.66', '344.85', '343.20', '343.08', '344.40', '345.82', '346.54', '347.13', '348.05', '349.77', '350.53', '349.90', '348.11', '346.09', '345.01', '344.47', '345.86', '347.15', '348.38', '348.70', '349.72', '351.32', '352.14', '351.61', '349.91', '347.84', '346.52', '346.65', '347.96', '349.18', '350.38', '351.68', '352.24', '353.66', '354.18', '353.68', '352.58', '350.66', '349.03', '349.08', '350.15', '351.44', '352.89', '353.24', '353.80', '355.59', '355.89', '355.30', '353.98', '351.53', '350.02', '350.29', '351.44', '352.84', '353.79', '354.88', '355.65', '356.27', '357.29', '356.32', '354.88', '352.89', '351.28', '351.59', '353.05', '354.27', '354.87', '355.68', '357.06', '358.51', '359.09', '358.10', '356.12', '353.89', '352.30', '352.32', '353.79', '355.07', '356.17', '356.93', '357.82', '359.00', '359.55', '359.32', '356.85', '354.91', '352.93', '353.31', '354.27', '355.53', '356.86', '357.27', '358.36', '359.27', '360.19', '359.52', '357.42', '355.46', '354.10', '354.12', '355.40', '356.84', '358.22', '358.98', '359.91', '361.32', '361.68', '360.80', '359.39', '357.42', '355.63', '356.09', '357.56', '358.87', '359.87', '360.79', '361.77', '363.23', '363.77', '363.22', '361.70', '359.11', '358.11', '357.97', '359.40', '360.61', '362.04', '363.17', '364.17', '364.51', '365.16', '364.93', '363.53', '361.38', '359.60', '359.54', '360.84', '362.18', '363.04', '364.09', '364.47', '366.25', '366.69', '365.59', '364.34', '362.20', '360.31', '360.71', '362.44', '364.33', '365.18', '365.98', '367.13', '368.61', '369.49', '368.95', '367.74', '365.79', '364.01', '364.35', '365.52', '367.08', '368.12', '368.98', '369.60', '370.96', '370.77', '370.33', '369.28', '366.86', '364.94', '365.35', '366.68', '368.04', '369.25', '369.50', '370.56', '371.82', '371.51', '371.71', '369.85', '368.20', '366.91', '366.99', '368.33', '369.67', '370.52', '371.49', '372.53', '373.37', '373.82', '373.18', '371.57', '369.63', '368.16', '368.42', '369.69', '371.18', '372.45', '373.14', '373.93', '375.00', '375.65', '375.50', '374.00', '371.83', '370.66', '370.51', '372.20', '373.71', '374.87', '375.62', '376.48', '377.74', '378.50', '378.18', '376.72', '374.31', '373.20', '373.10', '374.64', '375.93', '377.00', '377.87', '378.73', '380.41', '380.63', '379.56', '377.61', '376.15', '374.11', '374.44', '375.93', '377.45', '378.47', '379.76', '381.14', '382.20', '382.47', '382.20', '380.78', '378.73', '376.66', '376.98', '378.29', '379.92', '381.35', '382.16', '382.66', '384.73', '384.98', '384.09', '382.38', '380.45', '378.92', '379.16', '380.18', '381.79', '382.93', '383.81', '384.56', '386.40', '386.58', '386.05', '384.49', '382.00', '380.90', '381.14', '382.42', '383.89', '385.44', '385.73', '385.97', '387.16', '388.50', '387.88', '386.43', '384.15', '383.09', '382.99', '384.13', '385.56', '386.94', '387.42', '388.77', '389.44', '390.19', '389.45', '387.78', '385.92', '384.79', '384.39', '386.00', '387.31', '388.50', '389.94', '391.09', '392.53', '393.04', '392.15', '390.22', '388.26', '386.83', '387.20', '388.65', '389.73', '391.25', '391.82', '392.49', '393.34', '394.21', '393.72', '392.42', '390.19', '389.04', '388.96', '390.24', '391.83', '393.12', '393.60', '394.45', '396.18', '396.78', '395.83', '394.30', '392.41', '391.06', '391.01', '392.81', '394.28', '395.54', '396.80', '397.31', '398.35', '399.76', '398.58', '397.20', '395.15', '393.51', '393.66', '395.11', '396.81', '397.80', '397.91', '399.58', '401.29', '401.77', '401.15', '399.00', '397.01', '395.26', '395.93', '397.13', '398.78', '399.96', '400.26', '401.52'],
    showlegend: True
  };



co2_year =['1958-03-01', '1958-04-01', '1958-05-01', '1958-06-01', '1958-07-01', '1958-08-01', '1958-09-01', '1958-10-01', '1958-11-01', '1958-12-01', '1959-01-01', '1959-02-01', '1959-03-01', '1959-04-01', '1959-05-01', '1959-06-01', '1959-07-01', '1959-08-01', '1959-09-01', '1959-10-01', '1959-11-01', '1959-12-01', '1960-01-01', '1960-02-01', '1960-03-01', '1960-04-01', '1960-05-01', '1960-06-01', '1960-07-01', '1960-08-01', '1960-09-01', '1960-10-01', '1960-11-01', '1960-12-01', '1961-01-01', '1961-02-01', '1961-03-01', '1961-04-01', '1961-05-01', '1961-06-01', '1961-07-01', '1961-08-01', '1961-09-01', '1961-10-01', '1961-11-01', '1961-12-01', '1962-01-01', '1962-02-01', '1962-03-01', '1962-04-01', '1962-05-01', '1962-06-01', '1962-07-01', '1962-08-01', '1962-09-01', '1962-10-01', '1962-11-01', '1962-12-01', '1963-01-01', '1963-02-01', '1963-03-01', '1963-04-01', '1963-05-01', '1963-06-01', '1963-07-01', '1963-08-01', '1963-09-01', '1963-10-01', '1963-11-01', '1963-12-01', '1964-01-01', '1964-02-01', '1964-03-01', '1964-04-01', '1964-05-01', '1964-06-01', '1964-07-01', '1964-08-01', '1964-09-01', '1964-10-01', '1964-11-01', '1964-12-01', '1965-01-01', '1965-02-01', '1965-03-01', '1965-04-01', '1965-05-01', '1965-06-01', '1965-07-01', '1965-08-01', '1965-09-01', '1965-10-01', '1965-11-01', '1965-12-01', '1966-01-01', '1966-02-01', '1966-03-01', '1966-04-01', '1966-05-01', '1966-06-01', '1966-07-01', '1966-08-01', '1966-09-01', '1966-10-01', '1966-11-01', '1966-12-01', '1967-01-01', '1967-02-01', '1967-03-01', '1967-04-01', '1967-05-01', '1967-06-01', '1967-07-01', '1967-08-01', '1967-09-01', '1967-10-01', '1967-11-01', '1967-12-01', '1968-01-01', '1968-02-01', '1968-03-01', '1968-04-01', '1968-05-01', '1968-06-01', '1968-07-01', '1968-08-01', '1968-09-01', '1968-10-01', '1968-11-01', '1968-12-01', '1969-01-01', '1969-02-01', '1969-03-01', '1969-04-01', '1969-05-01', '1969-06-01', '1969-07-01', '1969-08-01', '1969-09-01', '1969-10-01', '1969-11-01', '1969-12-01', '1970-01-01', '1970-02-01', '1970-03-01', '1970-04-01', '1970-05-01', '1970-06-01', '1970-07-01', '1970-08-01', '1970-09-01', '1970-10-01', '1970-11-01', '1970-12-01', '1971-01-01', '1971-02-01', '1971-03-01', '1971-04-01', '1971-05-01', '1971-06-01', '1971-07-01', '1971-08-01', '1971-09-01', '1971-10-01', '1971-11-01', '1971-12-01', '1972-01-01', '1972-02-01', '1972-03-01', '1972-04-01', '1972-05-01', '1972-06-01', '1972-07-01', '1972-08-01', '1972-09-01', '1972-10-01', '1972-11-01', '1972-12-01', '1973-01-01', '1973-02-01', '1973-03-01', '1973-04-01', '1973-05-01', '1973-06-01', '1973-07-01', '1973-08-01', '1973-09-01', '1973-10-01', '1973-11-01', '1973-12-01', '1974-01-01', '1974-02-01', '1974-03-01', '1974-04-01', '1974-05-01', '1974-06-01', '1974-07-01', '1974-08-01', '1974-09-01', '1974-10-01', '1974-11-01', '1974-12-01', '1975-01-01', '1975-02-01', '1975-03-01', '1975-04-01', '1975-05-01', '1975-06-01', '1975-07-01', '1975-08-01', '1975-09-01', '1975-10-01', '1975-11-01', '1975-12-01', '1976-01-01', '1976-02-01', '1976-03-01', '1976-04-01', '1976-05-01', '1976-06-01', '1976-07-01', '1976-08-01', '1976-09-01', '1976-10-01', '1976-11-01', '1976-12-01', '1977-01-01', '1977-02-01', '1977-03-01', '1977-04-01', '1977-05-01', '1977-06-01', '1977-07-01', '1977-08-01', '1977-09-01', '1977-10-01', '1977-11-01', '1977-12-01', '1978-01-01', '1978-02-01', '1978-03-01', '1978-04-01', '1978-05-01', '1978-06-01', '1978-07-01', '1978-08-01', '1978-09-01', '1978-10-01', '1978-11-01', '1978-12-01', '1979-01-01', '1979-02-01', '1979-03-01', '1979-04-01', '1979-05-01', '1979-06-01', '1979-07-01', '1979-08-01', '1979-09-01', '1979-10-01', '1979-11-01', '1979-12-01', '1980-01-01', '1980-02-01', '1980-03-01', '1980-04-01', '1980-05-01', '1980-06-01', '1980-07-01', '1980-08-01', '1980-09-01', '1980-10-01', '1980-11-01', '1980-12-01', '1981-01-01', '1981-02-01', '1981-03-01', '1981-04-01', '1981-05-01', '1981-06-01', '1981-07-01', '1981-08-01', '1981-09-01', '1981-10-01', '1981-11-01', '1981-12-01', '1982-01-01', '1982-02-01', '1982-03-01', '1982-04-01', '1982-05-01', '1982-06-01', '1982-07-01', '1982-08-01', '1982-09-01', '1982-10-01', '1982-11-01', '1982-12-01', '1983-01-01', '1983-02-01', '1983-03-01', '1983-04-01', '1983-05-01', '1983-06-01', '1983-07-01', '1983-08-01', '1983-09-01', '1983-10-01', '1983-11-01', '1983-12-01', '1984-01-01', '1984-02-01', '1984-03-01', '1984-04-01', '1984-05-01', '1984-06-01', '1984-07-01', '1984-08-01', '1984-09-01', '1984-10-01', '1984-11-01', '1984-12-01', '1985-01-01', '1985-02-01', '1985-03-01', '1985-04-01', '1985-05-01', '1985-06-01', '1985-07-01', '1985-08-01', '1985-09-01', '1985-10-01', '1985-11-01', '1985-12-01', '1986-01-01', '1986-02-01', '1986-03-01', '1986-04-01', '1986-05-01', '1986-06-01', '1986-07-01', '1986-08-01', '1986-09-01', '1986-10-01', '1986-11-01', '1986-12-01', '1987-01-01', '1987-02-01', '1987-03-01', '1987-04-01', '1987-05-01', '1987-06-01', '1987-07-01', '1987-08-01', '1987-09-01', '1987-10-01', '1987-11-01', '1987-12-01', '1988-01-01', '1988-02-01', '1988-03-01', '1988-04-01', '1988-05-01', '1988-06-01', '1988-07-01', '1988-08-01', '1988-09-01', '1988-10-01', '1988-11-01', '1988-12-01', '1989-01-01', '1989-02-01', '1989-03-01', '1989-04-01', '1989-05-01', '1989-06-01', '1989-07-01', '1989-08-01', '1989-09-01', '1989-10-01', '1989-11-01', '1989-12-01', '1990-01-01', '1990-02-01', '1990-03-01', '1990-04-01', '1990-05-01', '1990-06-01', '1990-07-01', '1990-08-01', '1990-09-01', '1990-10-01', '1990-11-01', '1990-12-01', '1991-01-01', '1991-02-01', '1991-03-01', '1991-04-01', '1991-05-01', '1991-06-01', '1991-07-01', '1991-08-01', '1991-09-01', '1991-10-01', '1991-11-01', '1991-12-01', '1992-01-01', '1992-02-01', '1992-03-01', '1992-04-01', '1992-05-01', '1992-06-01', '1992-07-01', '1992-08-01', '1992-09-01', '1992-10-01', '1992-11-01', '1992-12-01', '1993-01-01', '1993-02-01', '1993-03-01', '1993-04-01', '1993-05-01', '1993-06-01', '1993-07-01', '1993-08-01', '1993-09-01', '1993-10-01', '1993-11-01', '1993-12-01', '1994-01-01', '1994-02-01', '1994-03-01', '1994-04-01', '1994-05-01', '1994-06-01', '1994-07-01', '1994-08-01', '1994-09-01', '1994-10-01', '1994-11-01', '1994-12-01', '1995-01-01', '1995-02-01', '1995-03-01', '1995-04-01', '1995-05-01', '1995-06-01', '1995-07-01', '1995-08-01', '1995-09-01', '1995-10-01', '1995-11-01', '1995-12-01', '1996-01-01', '1996-02-01', '1996-03-01', '1996-04-01', '1996-05-01', '1996-06-01', '1996-07-01', '1996-08-01', '1996-09-01', '1996-10-01', '1996-11-01', '1996-12-01', '1997-01-01', '1997-02-01', '1997-03-01', '1997-04-01', '1997-05-01', '1997-06-01', '1997-07-01', '1997-08-01', '1997-09-01', '1997-10-01', '1997-11-01', '1997-12-01', '1998-01-01', '1998-02-01', '1998-03-01', '1998-04-01', '1998-05-01', '1998-06-01', '1998-07-01', '1998-08-01', '1998-09-01', '1998-10-01', '1998-11-01', '1998-12-01', '1999-01-01', '1999-02-01', '1999-03-01', '1999-04-01', '1999-05-01', '1999-06-01', '1999-07-01', '1999-08-01', '1999-09-01', '1999-10-01', '1999-11-01', '1999-12-01', '2000-01-01', '2000-02-01', '2000-03-01', '2000-04-01', '2000-05-01', '2000-06-01', '2000-07-01', '2000-08-01', '2000-09-01', '2000-10-01', '2000-11-01', '2000-12-01', '2001-01-01', '2001-02-01', '2001-03-01', '2001-04-01', '2001-05-01', '2001-06-01', '2001-07-01', '2001-08-01', '2001-09-01', '2001-10-01', '2001-11-01', '2001-12-01', '2002-01-01', '2002-02-01', '2002-03-01', '2002-04-01', '2002-05-01', '2002-06-01', '2002-07-01', '2002-08-01', '2002-09-01', '2002-10-01', '2002-11-01', '2002-12-01', '2003-01-01', '2003-02-01', '2003-03-01', '2003-04-01', '2003-05-01', '2003-06-01', '2003-07-01', '2003-08-01', '2003-09-01', '2003-10-01', '2003-11-01', '2003-12-01', '2004-01-01', '2004-02-01', '2004-03-01', '2004-04-01', '2004-05-01', '2004-06-01', '2004-07-01', '2004-08-01', '2004-09-01', '2004-10-01', '2004-11-01', '2004-12-01', '2005-01-01', '2005-02-01', '2005-03-01', '2005-04-01', '2005-05-01', '2005-06-01', '2005-07-01', '2005-08-01', '2005-09-01', '2005-10-01', '2005-11-01', '2005-12-01', '2006-01-01', '2006-02-01', '2006-03-01', '2006-04-01', '2006-05-01', '2006-06-01', '2006-07-01', '2006-08-01', '2006-09-01', '2006-10-01', '2006-11-01', '2006-12-01', '2007-01-01', '2007-02-01', '2007-03-01', '2007-04-01', '2007-05-01', '2007-06-01', '2007-07-01', '2007-08-01', '2007-09-01', '2007-10-01', '2007-11-01', '2007-12-01', '2008-01-01', '2008-02-01', '2008-03-01', '2008-04-01', '2008-05-01', '2008-06-01', '2008-07-01', '2008-08-01', '2008-09-01', '2008-10-01', '2008-11-01', '2008-12-01', '2009-01-01', '2009-02-01', '2009-03-01', '2009-04-01', '2009-05-01', '2009-06-01', '2009-07-01', '2009-08-01', '2009-09-01', '2009-10-01', '2009-11-01', '2009-12-01', '2010-01-01', '2010-02-01', '2010-03-01', '2010-04-01', '2010-05-01', '2010-06-01', '2010-07-01', '2010-08-01', '2010-09-01', '2010-10-01', '2010-11-01', '2010-12-01', '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01', '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01', '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01', '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01', '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01', '2013-07-01', '2013-08-01', '2013-09-01', '2013-10-01', '2013-11-01', '2013-12-01', '2014-01-01', '2014-02-01', '2014-03-01', '2014-04-01', '2014-05-01', '2014-06-01', '2014-07-01', '2014-08-01', '2014-09-01', '2014-10-01', '2014-11-01', '2014-12-01', '2015-01-01', '2015-02-01', '2015-03-01'];
co2_y = ['315.71', '317.45', '317.50', '317.10', '315.86', '314.93', '313.20', '312.66', '313.33', '314.67', '315.62', '316.38', '316.71', '317.72', '318.29', '318.15', '316.54', '314.80', '313.84', '313.26', '314.80', '315.58', '316.43', '316.97', '317.58', '319.02', '320.03', '319.59', '318.18', '315.91', '314.16', '313.83', '315.00', '316.19', '316.93', '317.70', '318.54', '319.48', '320.58', '319.77', '318.57', '316.79', '314.80', '315.38', '316.10', '317.01', '317.94', '318.56', '319.68', '320.63', '321.01', '320.55', '319.58', '317.40', '316.26', '315.42', '316.69', '317.69', '318.74', '319.08', '319.86', '321.39', '322.25', '321.47', '319.74', '317.77', '316.21', '315.99', '317.12', '318.31', '319.57', '320.07', '320.73', '321.77', '322.25', '321.89', '320.44', '318.70', '316.70', '316.79', '317.79', '318.71', '319.44', '320.44', '320.89', '322.13', '322.16', '321.87', '321.39', '318.81', '317.81', '317.30', '318.87', '319.42', '320.62', '321.59', '322.39', '323.87', '324.01', '323.75', '322.39', '320.37', '318.64', '318.10', '319.79', '321.08', '322.07', '322.50', '323.04', '324.42', '325.00', '324.09', '322.55', '320.92', '319.31', '319.31', '320.72', '321.96', '322.57', '323.15', '323.89', '325.02', '325.57', '325.36', '324.14', '322.03', '320.41', '320.25', '321.31', '322.84', '324.00', '324.42', '325.64', '326.66', '327.34', '326.76', '325.88', '323.67', '322.38', '321.78', '322.85', '324.11', '325.03', '325.99', '326.87', '328.13', '328.07', '327.66', '326.35', '324.69', '323.10', '323.16', '323.98', '325.13', '326.17', '326.68', '327.18', '327.78', '328.92', '328.57', '327.34', '325.46', '323.36', '323.57', '324.80', '326.01', '326.77', '327.63', '327.75', '329.72', '330.07', '329.09', '328.05', '326.32', '324.93', '325.06', '326.50', '327.55', '328.54', '329.56', '330.30', '331.50', '332.48', '332.07', '330.87', '329.31', '327.51', '327.18', '328.16', '328.64', '329.35', '330.71', '331.48', '332.65', '333.19', '332.12', '330.99', '329.17', '327.41', '327.21', '328.34', '329.50', '330.68', '331.41', '331.85', '333.29', '333.91', '333.40', '331.74', '329.88', '328.57', '328.36', '329.33', '330.59', '331.66', '332.75', '333.46', '334.78', '334.78', '334.06', '332.95', '330.64', '328.96', '328.77', '330.18', '331.65', '332.69', '333.23', '334.97', '336.03', '336.82', '336.10', '334.79', '332.53', '331.19', '331.21', '332.35', '333.47', '335.10', '335.26', '336.61', '337.77', '338.01', '337.98', '336.48', '334.37', '332.33', '332.41', '333.76', '334.83', '336.21', '336.65', '338.13', '338.94', '339.00', '339.20', '337.60', '335.56', '333.93', '334.12', '335.26', '336.78', '337.80', '338.28', '340.04', '340.86', '341.47', '341.26', '339.34', '337.45', '336.10', '336.05', '337.21', '338.29', '339.36', '340.51', '341.57', '342.56', '343.01', '342.49', '340.68', '338.49', '336.92', '337.12', '338.59', '339.90', '340.92', '341.69', '342.85', '343.92', '344.67', '343.78', '342.23', '340.11', '338.32', '338.39', '339.48', '340.88', '341.64', '342.87', '343.59', '345.25', '345.96', '345.52', '344.15', '342.25', '340.17', '340.30', '341.53', '343.07', '344.05', '344.77', '345.46', '346.77', '347.55', '346.98', '345.55', '343.20', '341.35', '341.68', '343.06', '344.54', '345.25', '346.06', '347.66', '348.20', '348.92', '348.40', '346.66', '344.85', '343.20', '343.08', '344.40', '345.82', '346.54', '347.13', '348.05', '349.77', '350.53', '349.90', '348.11', '346.09', '345.01', '344.47', '345.86', '347.15', '348.38', '348.70', '349.72', '351.32', '352.14', '351.61', '349.91', '347.84', '346.52', '346.65', '347.96', '349.18', '350.38', '351.68', '352.24', '353.66', '354.18', '353.68', '352.58', '350.66', '349.03', '349.08', '350.15', '351.44', '352.89', '353.24', '353.80', '355.59', '355.89', '355.30', '353.98', '351.53', '350.02', '350.29', '351.44', '352.84', '353.79', '354.88', '355.65', '356.27', '357.29', '356.32', '354.88', '352.89', '351.28', '351.59', '353.05', '354.27', '354.87', '355.68', '357.06', '358.51', '359.09', '358.10', '356.12', '353.89', '352.30', '352.32', '353.79', '355.07', '356.17', '356.93', '357.82', '359.00', '359.55', '359.32', '356.85', '354.91', '352.93', '353.31', '354.27', '355.53', '356.86', '357.27', '358.36', '359.27', '360.19', '359.52', '357.42', '355.46', '354.10', '354.12', '355.40', '356.84', '358.22', '358.98', '359.91', '361.32', '361.68', '360.80', '359.39', '357.42', '355.63', '356.09', '357.56', '358.87', '359.87', '360.79', '361.77', '363.23', '363.77', '363.22', '361.70', '359.11', '358.11', '357.97', '359.40', '360.61', '362.04', '363.17', '364.17', '364.51', '365.16', '364.93', '363.53', '361.38', '359.60', '359.54', '360.84', '362.18', '363.04', '364.09', '364.47', '366.25', '366.69', '365.59', '364.34', '362.20', '360.31', '360.71', '362.44', '364.33', '365.18', '365.98', '367.13', '368.61', '369.49', '368.95', '367.74', '365.79', '364.01', '364.35', '365.52', '367.08', '368.12', '368.98', '369.60', '370.96', '370.77', '370.33', '369.28', '366.86', '364.94', '365.35', '366.68', '368.04', '369.25', '369.50', '370.56', '371.82', '371.51', '371.71', '369.85', '368.20', '366.91', '366.99', '368.33', '369.67', '370.52', '371.49', '372.53', '373.37', '373.82', '373.18', '371.57', '369.63', '368.16', '368.42', '369.69', '371.18', '372.45', '373.14', '373.93', '375.00', '375.65', '375.50', '374.00', '371.83', '370.66', '370.51', '372.20', '373.71', '374.87', '375.62', '376.48', '377.74', '378.50', '378.18', '376.72', '374.31', '373.20', '373.10', '374.64', '375.93', '377.00', '377.87', '378.73', '380.41', '380.63', '379.56', '377.61', '376.15', '374.11', '374.44', '375.93', '377.45', '378.47', '379.76', '381.14', '382.20', '382.47', '382.20', '380.78', '378.73', '376.66', '376.98', '378.29', '379.92', '381.35', '382.16', '382.66', '384.73', '384.98', '384.09', '382.38', '380.45', '378.92', '379.16', '380.18', '381.79', '382.93', '383.81', '384.56', '386.40', '386.58', '386.05', '384.49', '382.00', '380.90', '381.14', '382.42', '383.89', '385.44', '385.73', '385.97', '387.16', '388.50', '387.88', '386.43', '384.15', '383.09', '382.99', '384.13', '385.56', '386.94', '387.42', '388.77', '389.44', '390.19', '389.45', '387.78', '385.92', '384.79', '384.39', '386.00', '387.31', '388.50', '389.94', '391.09', '392.53', '393.04', '392.15', '390.22', '388.26', '386.83', '387.20', '388.65', '389.73', '391.25', '391.82', '392.49', '393.34', '394.21', '393.72', '392.42', '390.19', '389.04', '388.96', '390.24', '391.83', '393.12', '393.60', '394.45', '396.18', '396.78', '395.83', '394.30', '392.41', '391.06', '391.01', '392.81', '394.28', '395.54', '396.80', '397.31', '398.35', '399.76', '398.58', '397.20', '395.15', '393.51', '393.66', '395.11', '396.81', '397.80', '397.91', '399.58', '401.29', '401.77', '401.15', '399.00', '397.01', '395.26', '395.93', '397.13', '398.78', '399.96', '400.26', '401.52']
 
data = [trace1, trace2, trace3];

layout = {
  title: 'Temperature, Population, & Co2<sub>2</sub><br><br><br><br>Surface Temperature', 
  width: 800, 
  xaxis: {
    type: 'date', 
    ticks: 'inside',
    title: Years,
    domain: [0, 1], 
    mirror: true, 
    showgrid: false, 
    showline: true, 
    zeroline: true, 
    autorange: true
  },
  yaxis: {
    type: 'linear', 
    range: [40,50], 
    ticks: 'inside', 
    title: 'Population Growth', 
    domain: [0, 0.3], 
    mirror: true, 
    showgrid: false, 
    showline: true, 
    zeroline: false, 
    autorange: true
  }, 
  height: 800, 
  legend: {
    x: 0.028125, 
    y: 0.20967741935483872, 
    bgcolor: 'rgba(255, 255, 255, 0)'
  }, 
  xaxis2: {
    type: 'date', 
    range: [1955, 2020], 
    ticks: 'inside', 
    title: 'Year', 
    anchor: 'y2', 
    domain: [0, 1], 
    mirror: true, 
    showgrid: false, 
    showline: true, 
    zeroline: true, 
    autorange: true, 
    showticklabels: true
  }, 
  xaxis3: {
    type: 'date', 
    range: [-287694000000, 1295067600000], 
    ticks: 'inside', 
    title: 'CO2  (ppm)', 
    anchor: 'y3', 
    domain: [0, 1], 
    mirror: true, 
    showgrid: false, 
    showline: true, 
    zeroline: false, 
    autorange: true, 
    showticklabels: true
  }, 
  yaxis2: {
    side: 'left', 
    type: 'linear', 
    range: [-16, 16], 
    ticks: 'inside', 
    title: 'Rate', 
    anchor: 'x2', 
    domain: [2782099,9408142], 
    mirror: true, 
    showgrid: false, 
    showline: true, 
    zeroline: false, 
    autorange: false
  }, 
  yaxis3: {
    side: 'left', 
    type: 'linear', 
    range: [314, 410], 
    ticks: 'inside', 
    title: 'C', 
    anchor: 'x3', 
    domain: [0.7, 1], 
    mirror: true, 
    showgrid: false, 
    showline: true, 
    zeroline: false, 
    autorange: true
  }, 
  autosize: false, 
  titlefont: {size: 14}, 
  showlegend: true, 
  hidesources: true
};

Plotly.newPlot('plotly-div', data, layout);


import React from "react";

class App extends React.Component {
  state = {
    countries: [
      {
        name: "country1",
        cities: [
          {
            name: "city1-1",
            gender: [
              {
                name: "male",
                ageold: 1234,
                ageyoung: 23232,
                agechild: 78788
              },
              {
                name: "female",
                ageold: 1234,
                ageyoung: 23232,
                agechild: 78788
              }
            ]
          },
          {
            name: "city1-2",
            gender: [
              {
                name: "male",
                ageold: 1234,
                ageyoung: 23232,
                agechild: 78788
              },
              {
                name: "female",
                ageold: 1234,
                ageyoung: 23232,
                agechild: 78788
              }
            ]
          },
          {
            name: "city1-3",
            gender: [
              {
                name: "male",
                ageold: 1234,
                ageyoung: 23232,
                agechild: 78788
              },
              {
                name: "female",
                ageold: 1234,
                ageyoung: 23232,
                agechild: 78788
              }
            ]
          }
        ]
      },
      {
        name: "country2",
        cities: [
          {
            name: "city2-1",
            gender: [
              {
                name: "male",
                ageold: 1234,
                ageyoung: 23232,
                agechild: 78788
              },
              {
                name: "female",
                ageold: 1234,
                ageyoung: 23232,
                agechild: 78788
              }
            ]
          },
          {
            name: "city2-2",
            gender: [
              {
                name: "male",
                ageold: 1234,
                ageyoung: 23232,
                agechild: 78788
              },
              {
                name: "female",
                ageold: 1234,
                ageyoung: 23232,
                agechild: 78788
              }
            ]
          },
          {
            name: "city3-3",
            gender: [
              {
                name: "male",
                ageold: 1234,
                ageyoung: 23232,
                agechild: 78788
              },
              {
                name: "female",
                ageold: 1234,
                ageyoung: 23232,
                agechild: 78788
              }
            ]
          }
        ]
      }
    ],
    selectedcountry: "country1",
    selectedCity: "city1-1",
    selectedgender: "male"
  };

  handleChange = e => {
    let country = this.state.countries.filter(country => {
      return country.name === e.target.value;
    });
    let selectedCity = country[0].cities[0].name;
    this.setState({ selectedcountry: e.target.value, selectedCity }, () =>
      console.log(this.state.selectedCity)
    );
  };

  handleChange2 = e => {
    this.setState({ selectedCity: e.target.value });
  };

  handleChange3 = e => {
    this.setState({ selectedgender: e.target.value });
  };

  render = () => {
    let country = this.state.countries.filter(country => {
      return country.name === this.state.selectedcountry;
    });

    if (this.state.selectedCity !== "All") {
      var city = country[0].cities.filter(cityname => {
        return cityname.name === this.state.selectedCity;
      });
    } else {
      city = country[0].cities;
    }
    if (this.state.selectedgender !== "All") {
      var value = city[0].gender.filter(gendername => {
        return gendername.name === this.state.selectedgender;
      });
    } else {
      value = city[0].gender;
    }
    return (
      <div>
        gender
        <select
          value={this.state.selectedgender}
          onChange={this.handleChange3.bind(this)}
        >
          <option>All</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        cities
        <select
          value={this.state.selectedCity}
          onChange={this.handleChange2.bind(this)}
        >
          <option>All</option>
          {country[0].cities.map((sal, i) => {
            return <option>{sal.name}</option>;
          })}
        </select>
        countries
        <select
          value={this.state.selectedcountry}
          onChange={e => {
            this.handleChange(e);
          }}
        >
          {this.state.countries.map((country, i) => {
            return <option>{country.name}</option>;
          })}
        </select>
        {/* {this.state.selectedgender === "All" ||
        this.state.selectedCity === "All" ? (
          <div> Add garna baki xa</div>
        ) : (
          // <div>{value[0].age}</div>
          <div>

          </div>
        )} */}
        <div>
          <tr>
            <th>country </th>
            <th>city </th>
            <th>gender</th>
          </tr>
        </div>
        {/* {this.state.countries.map((country, i) => {
          return country.name;
        })}
        <br />
        {country[0].cities.map((sal, i) => {
          return sal.name;
        })}
        {country[0].cities.map((sal, i) => {
          return sal.name;
        })}
        <br />
        {this.state.selectedgender} */}
      </div>
    );
  };
}

export default App;

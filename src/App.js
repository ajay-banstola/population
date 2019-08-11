import React from "react";

class App extends React.Component {
  state = {
    companies: [
      {
        name: "company1",
        jobs: [
          {
            name: "job1-1",
            level: [
              {
                name: "junior",
                salary: 1234
              },
              {
                name: "senior",
                salary: 2345
              },
              {
                name: "mid",
                salary: 34566
              }
            ]
          },
          {
            name: "job1-2",
            level: [
              {
                name: "junior",
                salary: 9876
              },
              {
                name: "senior",
                salary: 98777
              },
              {
                name: "mid",
                salary: 34566
              }
            ]
          },
          {
            name: "job1-3",
            level: [
              {
                name: "junior",
                salary: 9446
              },
              {
                name: "senior",
                salary: 98947
              },
              {
                name: "mid",
                salary: 134566
              }
            ]
          }
        ]
      },
      {
        name: "company2",
        jobs: [
          {
            name: "job2-1",
            level: [
              {
                name: "junior",
                salary: 343431234
              },
              {
                name: "senior",
                salary: 552345
              },
              {
                name: "mid",
                salary: 4434566
              }
            ]
          },
          {
            name: "job2-2",
            level: [
              {
                name: "junior",
                salary: 99876
              },
              {
                name: "senior",
                salary: 5698777
              },
              {
                name: "mid",
                salary: 4434566
              }
            ]
          },
          {
            name: "job3-3",
            level: [
              {
                name: "junior",
                salary: 933446
              },
              {
                name: "senior",
                salary: 9338947
              },
              {
                name: "mid",
                salary: 13334566
              }
            ]
          }
        ]
      }
    ],
    selectedCompany: "company1",
    selectedJob: "job1-1",
    selectedLevel: "mid"
  };

  handleChange = e => {
    let company = this.state.companies.filter(company => {
      return company.name === e.target.value;
    });
    let selectedJob = company[0].jobs[0].name;
    this.setState({ selectedCompany: e.target.value, selectedJob }, () =>
      console.log(this.state.selectedJob)
    );
  };

  handleChange2 = e => {
    this.setState({ selectedJob: e.target.value });
  };

  handleChange3 = e => {
    this.setState({ selectedLevel: e.target.value });
  };

  render = () => {
    let company = this.state.companies.filter(company => {
      return company.name === this.state.selectedCompany;
    });

    if (this.state.selectedJob !== "All") {
      var job = company[0].jobs.filter(jobname => {
        return jobname.name === this.state.selectedJob;
      });
    } else {
      job = company[0].jobs;
    }
    if (this.state.selectedLevel !== "All") {
      var value = job[0].level.filter(levelname => {
        return levelname.name === this.state.selectedLevel;
      });
    } else {
      value = job[0].level;
    }
    return (
      <div>
        level
        <select
          value={this.state.selectedLevel}
          onChange={this.handleChange3.bind(this)}
        >
          <option>All</option>
          <option>junior</option>
          <option>mid</option>
          <option>senior</option>
        </select>
        jobs
        <select
          value={this.state.selectedJob}
          onChange={this.handleChange2.bind(this)}
        >
          <option>All</option>
          {company[0].jobs.map((sal, i) => {
            return <option>{sal.name}</option>;
          })}
        </select>
        companies
        <select
          value={this.state.selectedCompany}
          onChange={e => {
            this.handleChange(e);
          }}
        >
          {this.state.companies.map((company, i) => {
            return <option>{company.name}</option>;
          })}
        </select>
        {value[0].salary}
      </div>
    );
  };
}

export default App;

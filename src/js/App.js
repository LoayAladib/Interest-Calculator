import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import logo from './logo.svg';
import './App.css';
import InterestModal from './components/Modal';
import InterestForm from './components/Form';
import InterestHeader from './components/Header';
import InterestCalculator from './utils/interestCalculator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      principalValue: 10000,
      interestValue: 0.06,
      yearsValue: 5,
      showSimpleResultModal: false,
      compoundPrincipalValue: 10000,
      compoundInterestValue: 0.06,
      compoundYearsValue: 5,
      showCompoundResultModal: false,
      simpleResults: [],
      totalSimpleInterest: 0,
      totalSimpleResult: 0,
      compoundResults: [],
      totalCompoundInterest: 0,
      totalCompoundResult: 0,
    };

    this.handleSimpleModalShow = this.handleSimpleModalShow.bind(this);
    this.handleSimpleModalClose = this.handleSimpleModalClose.bind(this);

    this.handleCompoundModalShow = this.handleCompoundModalShow.bind(this);
    this.handleCompoundModalClose = this.handleCompoundModalClose.bind(this);
  }

  // Simple Opertaions
  handleSimpleModalClose() {
    this.setState({ showSimpleResultModal: false });
  }
  handleSimpleModalShow() {
    this.setState({ showSimpleResultModal: true });
  }
  handlePrincipalChange(value) {
    this.setState({ principalValue: value });
  }
  handleInterestChange(value) {
    this.setState({ interestValue: value });
  }
  handleYearsChange(value) {
    this.setState({ yearsValue: value });
  }
  calculateSimpleInterest() {
    var results = InterestCalculator.calculateSimpleInterest(this.state.interestValue, this.state.principalValue, this.state.yearsValue);
    this.setState({ simpleResults: results.simpleResults, totalSimpleInterest: results.totalInterest, totalSimpleResult: results.finalResult }, () => { this.handleSimpleModalShow() });
  }

  // Compound Operations
  handleCompoundModalClose() {
    this.setState({ showCompoundResultModal: false });
  }
  handleCompoundModalShow() {
    this.setState({ showCompoundResultModal: true });
  }
  handleCompoundPrincipalChange(value) {
    this.setState({ principalValue: value });
  }
  handleCompoundInterestChange(value) {
    this.setState({ interestValue: value });
  }
  handleCompoundYearsChange(value) {
    this.setState({ yearsValue: value });
  }
  calculateCompoundInterest() {
    var results = InterestCalculator.calculateCompoundInterest(this.state.compoundInterestValue, this.state.compoundPrincipalValue, this.state.compoundYearsValue);
    this.setState({ compoundResults: results.compoundResults, totalCompoundInterest: results.totalInterest, totalCompoundResult: results.finalResult },
      () => { this.handleCompoundModalShow() });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>

          <InterestHeader title={"Simple Interest"} />
          <InterestForm
            input1Value={this.state.principalValue}
            input1ValueHandler={this.handlePrincipalChange.bind(this)}
            input2Value={this.state.interestValue}
            input2ValueHandler={this.handleInterestChange.bind(this)}
            input3Value={this.state.yearsValue}
            input3ValueHandler={this.handleYearsChange.bind(this)}
            handleClick={this.calculateSimpleInterest.bind(this)}
          />
          <InterestModal
            visible={this.state.showSimpleResultModal}
            header={"Simple Interest Results"}
            data={this.state.simpleResults}
            headData1={"Year"}
            headData2={"Result"}
            headData3={"Interest"}
            tailData1={"total"}
            tailData2={this.state.totalSimpleResult}
            tailData3={this.state.totalSimpleInterest}
            handleClose={this.handleSimpleModalClose}
          />
        </div>      

        <div>
          <InterestHeader title={"Compound Interest"} />
          <InterestForm
            input1Value={this.state.compoundPrincipalValue}
            input1ValueHandler={this.handleCompoundPrincipalChange.bind(this)}
            input2Value={this.state.compoundInterestValue}
            input2ValueHandler={this.handleCompoundInterestChange.bind(this)}
            input3Value={this.state.yearsValue}
            input3ValueHandler={this.handleCompoundYearsChange.bind(this)}
            handleClick={this.calculateCompoundInterest.bind(this)}
          />
          <InterestModal
            visible={this.state.showCompoundResultModal}
            header={"Compound Interest Results"}
            data={this.state.compoundResults}
            headData1={"Year"}
            headData2={"Result"}
            headData3={"Interest"}
            tailData1={"total"}
            tailData2={this.state.totalCompoundResult}
            tailData3={this.state.totalCompoundInterest}
            handleClose={this.handleCompoundModalClose}
          />
        </div>

      </div>
    );
  }
}

export default App;

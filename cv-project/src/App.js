import './App.css';
import { Component } from 'react';
import './style.css';
import InputComponents from './Components/InputComponents';
import OutputCV from './Components/OutputCV';
import WorkHistory from './Components/InputWorkHistory';
import OutputWorkHistory from './Components/OutputCVwork';
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';

class App extends Component {
  constructor() {
    super();

    this.state = {
      general: {
        firstname: 'Su Min',
        lastname: 'Bae',
        title: 'Ultimate Visual',
        phonenumber: '09997896054',
        useremail: 'baesumin@stayc.com',
        address: 'Pohang, North Gyeongsang',
        linkedin: 'linkedin.com/baesumin',
        skill1: 'Currently leader for STAYC',
        skill2: 'Sub-vocal and Rapper',
        skill3: 'Trainee for 5 years and 6 months',
      },
      content: {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      workHistoryTemplate: {
        title: 'STAYC Leader',
        company: 'High Up Entertainment',
        address: 'Seoul',
        task1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        task2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        task3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      workHistoryList: [],
      workHistoryListInput: [],
    };

    this.handleChangeForGeneral = this.handleChangeForGeneral.bind(this);
    this.handleChangeForContent = this.handleChangeForContent.bind(this);
    this.handleChangeForWorkHistoryTemplate = this.handleChangeForWorkHistoryTemplate.bind(this);
  }

  handleChangeForGeneral = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      general: {
        ...prevState.general,
        [name]: value
      }
    }))
  }

  handleChangeForContent = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      content: {
        ...prevState.content,
        [name]: value
      }
    }))
  }

  handleChangeForWorkHistoryTemplate = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      workHistoryTemplate: {
        ...prevState.content,
        [name]: value
      }
    }))
  }

  addWorkHistory = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      workHistoryListInput: this.state.workHistoryListInput.concat(this.state.workHistoryTemplate),
      workHistoryList: this.state.workHistoryList.concat(this.state.workHistoryTemplate),
      workHistoryTemplate: {
        ...prevState.content,
      }
    }))
    console.log(this.state.workHistoryList)
  }

  onSubmitWorkHistory = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      workHistoryList: this.state.workHistoryList.concat(this.state.workHistoryTemplate),
      workHistoryTemplate: {
        ...prevState.content,
      }
    }))
  }

  render() {
    const { general, content } = this.state;

    return (
      <div className = "content-grid">
        <div className = "input-field">
          <InputComponents 
            general = {general} 
            handleChangeForGeneral = {this.handleChangeForGeneral} 
            handleChangeForContent = {this.handleChangeForContent} 
            contento = {content}
          />
          <WorkHistory
            workHistoryListInput = {this.state.workHistoryListInput}
            handleChangeForWorkHistoryTemplate = {this.handleChangeForWorkHistoryTemplate}
          />
          <button className='add-work-history' onClick={this.addWorkHistory}>Add Work History</button>
        </div>
        <div className = "output-field">
          <OutputCV general = {general} content = {content} workHistoryList = {this.state.workHistoryList}/>
        </div>
      </div>
    )
  }

}

export default App;

import './App.css';
import { Component } from 'react';
import './style.css';
import InputComponents from './Components/InputComponents';
import OutputCV from './Components/OutputCV';
import WorkHistory from './Components/InputWorkHistory';
import uniqid from 'uniqid';
import Education from './Components/InputEducation';
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
        task3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        id: uniqid(),
      },
      workHistoryList: [],
      workHistoryListInput: [],
      educationTemplate: {
        title: 'MS in Computer Science, Major in Bug-Making',
        school: 'International State College of The Philippines',
        tasks: 'Deep Reinforcement Learning, Cloud Computing, Lorem Ipsum Algorithm',
        id: uniqid()
      },
      educationList: [],
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

  // this.setState({
  //   tasks: this.state.tasks.filter(task => {
  //     return task.id !== taskID;
  //   })
  // })

  handleChangeForWorkHistoryTemplate = (e) => {
    const { name, value } = e.target;

    console.log(e.target.getAttribute('data-key'));
    const key = e.target.getAttribute('data-key');
    const newItems = [...this.state.workHistoryList];
    // added logic to bind input form to corresponding output in CV
    newItems.forEach(item => {
      console.log(`This is item.id`);
      console.log(item.id);
      if (item.id === key) {
        item[name] = value;
      }
    })
    
    this.setState({ workHistoryList: newItems });

    this.setState(prevState => ({
      workHistoryTemplate: {
        ...prevState.workHistoryTemplate,
      },
    }))
  }

  handleChangeForEducationTemplate = (e) => {
    const { name, value } = e.target;

    console.log(e.target.getAttribute('data-key'));
    const key = e.target.getAttribute('data-key');
    const newItems = [...this.state.educationList];
    // added logic to bind input form to corresponding output in CV
    newItems.forEach(item => {
      console.log(`This is item.id`);
      console.log(item.id);
      if (item.id === key) {
        item[name] = value;
      }
    })
    
    this.setState({ educationList: newItems });

    this.setState(prevState => ({
      educationTemplate: {
        ...prevState.educationTemplate,
      },
    }))
  }

  addWorkHistory = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      workHistoryListInput: this.state.workHistoryListInput.concat(this.state.workHistoryTemplate),
      workHistoryList: this.state.workHistoryList.concat(this.state.workHistoryTemplate),
      workHistoryTemplate: {
        ...prevState.workHistoryTemplate,
        id: uniqid()
      }
    }))
    console.log(this.state.workHistoryList)
  }

  removeWorkHistory = (e) => {
    e.preventDefault();
    const newList = [...this.state.workHistoryList];
    const newListInput = [...this.state.workHistoryListInput];
    newList.pop();
    newListInput.pop();
    this.setState({ workHistoryList: newList});
    this.setState({ workHistoryListInput: newListInput});
  }

  addEducation = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      educationList: this.state.educationList.concat(this.state.educationTemplate),
      educationTemplate: {
        ...prevState.educationTemplate,
        id: uniqid()
      }
    }))
  }

  removeEducation = (e) => {
    e.preventDefault();
    const newList = [...this.state.educationList];
    newList.pop();
    this.setState({ educationList: newList});
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
      <div className="overall-container">
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
            <button className='remove-work-history' onClick={this.removeWorkHistory}>Remove Work History</button>
            <Education
              educationList = {this.state.educationList}
              handleChangeForEducationTemplate = {this.handleChangeForEducationTemplate}
            />
            <button className='add-education' onClick={this.addEducation}>Add Education</button>
            <button className='remove-education' onClick={this.removeEducation}>Remove Education</button>
        
          </div>
          <div className = "output-field">
            <OutputCV general = {general} content = {content} workHistoryList = {this.state.workHistoryList} educationList = {this.state.educationList}/>
          </div>
        </div>
        <div className='footer'>
          <p>Copyright	&copy; 2022 Muney</p>
        </div>
      </div>
    )
  }

}

export default App;

import logo from './logo.svg';
import './App.css';
import Control from './components/Control';
import ListStudents from './components/ListStudents';
import Form from './components/Form';
import { Component } from 'react';

class App extends Component {
  // Khởi tạo danh sách sinh viên
  constructor(props) {
    super();
    this.state = {
      students: [
        {
          studentId: "SV001",
          studentName: "Nguyễn Văn A",
          studentAge: "12",
          studentGender: true,
          studentBirthday: "23/4/1998",
          studentBirthPlace: "HN",
          studentAddress: "HN"
        },
        {
          studentId: "SV002",
          studentName: "Nguyễn Văn B",
          studentAge: "10",
          studentGender: true,
          studentBirthday: "10/2/1998",
          studentBirthPlace: "HN",
          studentAddress: "HN"
        },
        {
          studentId: "SV003",
          studentName: "Nguyễn Thị C",
          studentAge: "20",
          studentGender: false,
          studentBirthday: "5/3/2000",
          studentBirthPlace: "HN",
          studentAddress: "HN"
        },
      ],
      searchData: '',
      submitData: '',
      isToggle: false,
      actionName:'',
      selectStudent: {}
    }
  }
  // B1: Tạo function để nhận dữ liệu truyền từ control đến app
  handSearch = (searchData) => {
    console.log(searchData);
    this.setState({
      searchData: searchData,
    })
  }

  handleAddStudent = (toggle, actionName) => {
    this.setState({
      isToggle: toggle,
      actionName: actionName
    })
  }

  handleUpdateStudent = (selectStudent, toggle, actionName) => {
    this.setState({
      selectStudent: selectStudent,
      isToggle: toggle,
      actionName: actionName
    })
  }

  handleSubmit = (stInfo) => {
    console.log(stInfo);
  }

  handleCreateStudent = (studentNew) => {
    console.log(studentNew);
    this.setState({
      students: [...this.state.students, studentNew]
    })
  }

  handleSubmitUpdate = (stUpdate, toggle) => {
    console.log(stUpdate);
    // cập nhật vào state 
    let students = []
    for (let i = 0; i < this.state.students.length; i++) {
      if (this.state.students[i].studentId == stUpdate.studentId) {
        students.push(stUpdate)
      } else {
        students.push(this.state.students[i])
      }
    }
    this.setState({
      isToggle: toggle,
      students: students
    })
  }

  render() {
    // render có điều kiện
    let elementForm =  "";
    if (this.state.isToggle) {
      elementForm = <Form handleSubmitUpdate={this.handleSubmitUpdate} selectStudent={this.state.selectStudent} listStudents={this.state.students} handleCreateStudent={this.handleCreateStudent} actionName={this.state.actionName} handleSubmit={this.handleSubmit} />
    } 
    // Lọc dữ liệu theo search data
    let students = [];
    if (this.state.searchData == '') {
      students = [...this.state.students];
    } else {
      this.state.students.forEach(st => {
        if (st.studentName.toLocaleLowerCase().includes(this.state.searchData.toLocaleLowerCase())) {
          students.push(st)
          console.log("abc");
        }
      })
    }
    return (
      <div className="App">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* START CONTROL */}
              {/* B2: Truyền props map với hàm nhận dữ liệu */}
              <Control handleAddStudent={this.handleAddStudent} handleSearchProps={this.handSearch} />
              {/* END CONTROL */}
              {/* START LIST STUDENT */}
              <ListStudents handleUpdateStudent={this.handleUpdateStudent} students={students} />
              {/* END LIST STUDENT */}
            </div>
          </div>
          <div className="col-5 grid-margin">
            {/* START FORM SINH VIEN */}
            {elementForm}
            {/* END FORM SINH VIÊN */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

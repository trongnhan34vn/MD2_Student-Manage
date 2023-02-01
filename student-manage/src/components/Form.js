import React, { Component } from 'react'

let validateId = false;
let validateName = false;
let validateAge = false;
let validateBirthday = false;
let validateAddress = false;

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentId: "",
            studentName: "",
            studentAge: "",
            studentGender: false,
            studentBirtday: "",
            studentBirthPlace: "HN",
            studentAddress: "",
            checkValidate: false,
        }
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        console.log(name, typeof value);
        let checkValidate = this.state.checkValidate;
        let listStudents = this.props.listStudents
        // Check Validate
        if (name == "studentId" && value == "") {
            validateId = false;
            // checkValidate = true
            document.getElementById("validateStudentId").innerHTML = "Please enter the student id!";
            // return
        } else if (name == "studentId" && value !== "") {
            let checkExist = false;
            for (let i = 0; i < listStudents.length; i++) {
                if (value == listStudents[i].studentId) {
                    checkExist = true;
                    break;
                }
            }
            if (checkExist) {
                validateId = false;
                // checkValidate = false
                document.getElementById("validateStudentId").innerHTML = "This Student Id is already existed!";
                // return;
            } else {
                validateId = true;
                // checkValidate = true
                document.getElementById("validateStudentId").innerHTML = "";
            }
        }
        if (name == "studentName" && value == "") {
            validateName = false;
            // checkValidate = false;
            document.getElementById("validateStudentName").innerHTML = "Please enter the student name!";
            // return
        } else if (name == "studentName" && value !== "") {
            validateName = true;
            // checkValidate = true;
            document.getElementById("validateStudentName").innerHTML = ""
        }
        if (name == "studentAge" && value == "") {
            validateAge = false;
            // checkValidate = false;
            document.getElementById("validateStudentAge").innerHTML = "Please enter the student age!";
            // return
        } else if (name == "studentAge" && value !== "") {
            validateAge = true;
            // checkValidate = true
            document.getElementById("validateStudentAge").innerHTML = ""
        }
        if (name == "studentBirthday" && value == "") {
            validateBirthday = false;
            // checkValidate = false
            document.getElementById("validateStudentBirthday").innerHTML = "Please enter the student birthday!";
            // return
        } else if (name == "studentBirthday" && value !== "") {
            validateBirthday = true;
            // checkValidate = true
            document.getElementById("validateStudentBirthday").innerHTML = ""
        }
        if (name == "studentAddress" && value == "") {
            validateAddress = false;
            // checkValidate = false
            document.getElementById("validateStudentAddress").innerHTML = "Please enter the student address!";
            // return
        } else if (name == "studentAddress" && value !== "") {
            validateAddress = true;
            // checkValidate = true
            document.getElementById("validateStudentAddress").innerHTML = ""
        }

        if (validateId && validateName && validateAddress && validateBirthday && validateAge) {
            checkValidate = true
        }

        this.setState({
            [name]: value,
            checkValidate: checkValidate
        })
    }
    handleAddStudent = (e) => {
        e.preventDefault();
        // tạo ra 1 đối tượng truyền về app
        if (this.state.checkValidate) {
            let studentNew = {
                studentId: this.state.studentId,
                studentName: this.state.studentName,
                studentAge: this.state.studentAge,
                studentGender: this.state.studentGender,
                studentBirthday: this.state.studentBirthday,
                studentBirthPlace: this.state.studentBirthPlace,
                studentAddress: this.state.studentAddress
            }
            this.props.handleCreateStudent(studentNew)
        }
    }
    componentWillMount = () => {
        let { selectStudent } = this.props;
        this.setState({
            studentId: selectStudent.studentId,
            studentName: selectStudent.studentName,
            studentAge: selectStudent.studentAge,
            studentGender: selectStudent.studentGender,
            studentBirtday: selectStudent.studentBirtday,
            studentBirthPlace: selectStudent.studentBirthPlace,
            studentAddress: selectStudent.studentAddress
        })
    }

    componentWillReceiveProps = (nextProps) => {
        let { selectStudent } = nextProps;
        console.log(selectStudent);
        this.setState({
            studentId: selectStudent.studentId,
            studentName: selectStudent.studentName,
            studentAge: selectStudent.studentAge,
            studentGender: selectStudent.studentGender,
            studentBirtday: selectStudent.studentBirtday,
            studentBirthPlace: selectStudent.studentBirthPlace,
            studentAddress: selectStudent.studentAddress
        })
    }

    handleSubmitUpdate = (event) => {
        event.preventDefault();
        // Lấy thông tin sinh viên cần cập nhật
        let studentUpdate = {
            studentId: this.state.studentId,
            studentName: this.state.studentName,
            studentAge: this.state.studentAge,
            studentGender: this.state.studentGender,
            studentBirthday: this.state.studentBirthday,
            studentBirthPlace: this.state.studentBirthPlace,
            studentAddress: this.state.studentAddress
        }
        this.props.handleSubmitUpdate(studentUpdate, false)
        console.log(this.state.studentGender);
    }

    render() {
        // render có điều kiện. nếu thực hiện thêm sv thì btn sẽ là create, nếu là sửa thì sẽ là update,...
        let { actionName } = this.props;
        let elementBtnSubmit = "";
        if (actionName == "ADD") {
            elementBtnSubmit = <button onClick={this.handleAddStudent} type="submit" className="btn btn-primary me-2">
                Create
            </button>
        } else if (actionName == "UPDATE") {
            elementBtnSubmit = <button onClick={this.handleSubmitUpdate} type="submit" className="btn btn-primary me-2">
                Update
            </button>
        }
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Thông tin sinh viên</h3>
                        <form className="form-sample">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                                <div className="col-sm-9">
                                    <input value={this.state.studentId} onChange={this.handleChange} name="studentId" id="studentId" type="text" className="form-control" />
                                    <p id="validateStudentId"></p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                                <div className="col-sm-9">
                                    <input value={this.state.studentName} onChange={this.handleChange} name="studentName" id="studentName" type="text" className="form-control" />
                                    <p id="validateStudentName"></p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tuổi</label>
                                <div className="col-sm-9">
                                    <input value={this.state.studentAge} onChange={this.handleChange} name="studentAge" id="studentAge" type="text" className="form-control" />
                                    <p id="validateStudentAge"></p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Giới tính</label>
                                <div className="col-sm-9">
                                    <select value={this.state.studentGender} onChange={this.handleChange} name="studentGender" id="studentGender" className="form-control">
                                        <option value={true}>Nam</option>
                                        <option value={false}>Nữ</option>
                                    </select>
                                    <p id="validateStudentGender"></p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                                <div className="col-sm-9">
                                    <input value={this.state.studentBirtday} onChange={this.handleChange} name="studentBirthday" id="studentBirth" className="form-control" placeholder="dd/mm/yyyy" />
                                    <p id="validateStudentBirthday"></p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                                <div className="col-sm-9">
                                    <select value={this.state.studentBirthPlace} onChange={this.handleChange} name="studentBirthPlace" id="studentBirthPlace" className="form-control">
                                        <option value={"HN"}>Hà Nội</option>
                                        <option value={"HCM"}>TP. Hồ Chí Minh</option>
                                        <option value={"ĐN"}>Đà Nẵng</option>
                                        <option value={"QN"}>Quảng Ninh</option>
                                    </select>
                                    <p id="validateStudentBirthPlace"></p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                                <div className="col-sm-9">
                                    <textarea value={this.state.studentAddress} onChange={this.handleChange} name="studentAddress" id="studentAddress" className="form-control" />
                                    <p id="validateStudentAddress"></p>
                                </div>
                            </div>
                            {elementBtnSubmit}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

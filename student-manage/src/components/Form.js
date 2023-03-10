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
        // t???o ra 1 ?????i t?????ng truy???n v??? app
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
        // L???y th??ng tin sinh vi??n c???n c???p nh???t
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
        // render c?? ??i???u ki???n. n???u th???c hi???n th??m sv th?? btn s??? l?? create, n???u l?? s???a th?? s??? l?? update,...
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
                        <h3 className="card-title">Th??ng tin sinh vi??n</h3>
                        <form className="form-sample">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">M?? sinh vi??n</label>
                                <div className="col-sm-9">
                                    <input value={this.state.studentId} onChange={this.handleChange} name="studentId" id="studentId" type="text" className="form-control" />
                                    <p id="validateStudentId"></p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">T??n sinh vi??n</label>
                                <div className="col-sm-9">
                                    <input value={this.state.studentName} onChange={this.handleChange} name="studentName" id="studentName" type="text" className="form-control" />
                                    <p id="validateStudentName"></p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tu???i</label>
                                <div className="col-sm-9">
                                    <input value={this.state.studentAge} onChange={this.handleChange} name="studentAge" id="studentAge" type="text" className="form-control" />
                                    <p id="validateStudentAge"></p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Gi???i t??nh</label>
                                <div className="col-sm-9">
                                    <select value={this.state.studentGender} onChange={this.handleChange} name="studentGender" id="studentGender" className="form-control">
                                        <option value={true}>Nam</option>
                                        <option value={false}>N???</option>
                                    </select>
                                    <p id="validateStudentGender"></p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Ng??y sinh</label>
                                <div className="col-sm-9">
                                    <input value={this.state.studentBirtday} onChange={this.handleChange} name="studentBirthday" id="studentBirth" className="form-control" placeholder="dd/mm/yyyy" />
                                    <p id="validateStudentBirthday"></p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">N??i sinh</label>
                                <div className="col-sm-9">
                                    <select value={this.state.studentBirthPlace} onChange={this.handleChange} name="studentBirthPlace" id="studentBirthPlace" className="form-control">
                                        <option value={"HN"}>H?? N???i</option>
                                        <option value={"HCM"}>TP. H??? Ch?? Minh</option>
                                        <option value={"??N"}>???? N???ng</option>
                                        <option value={"QN"}>Qu???ng Ninh</option>
                                    </select>
                                    <p id="validateStudentBirthPlace"></p>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">?????a ch???</label>
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

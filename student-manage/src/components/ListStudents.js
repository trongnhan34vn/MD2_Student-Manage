import React, { Component } from 'react'
import Student from './Student'

export default class ListStudents extends Component {
    handleUpdateStudent = (selectStudent, toggle, actionName) => {
       this.props.handleUpdateStudent(selectStudent, toggle, actionName)
    }
    render() {
        let { students } = this.props;
        let elementListStudents = students.map((student, index) => {
            return <Student handleUpdateStudent={this.handleUpdateStudent} key={student.studentId} stInfo={student} stt={index + 1} />
        })
        return (
            <div>
                <div className="card-body">
                    <h3 className="card-title">Danh sách sinh viên</h3>
                    <div className="table-responsive pt-3">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Mã sinh viên</th>
                                    <th>Tên sinh viên</th>
                                    <th>Tuổi</th>
                                    <th>Giới tính</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {elementListStudents}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Student extends Component {
    handleUpdateStudent = (stUpdate) => {
        this.props.handleUpdateStudent(stUpdate, true, "UPDATE")
    }
    render() {
        let {stInfo, stt} = this.props;
        return (
            <tr>
                <td>{stt}</td>
                <td>{stInfo.studentId}</td>
                <td>{stInfo.studentName}</td>
                <td>{stInfo.studentAge}</td>
                <td>{(stInfo.studentGender)?"Nam":"Nữ"}</td>
                <td>
                    <div className="template-demo">
                        <button
                            type="button"
                            className="btn btn-danger btn-icon-text"
                        >
                            Xem
                        </button>
                        <button
                            onClick={() => this.handleUpdateStudent(stInfo)}
                            type="button"
                            className="btn btn-warning btn-icon-text"
                        >
                            Sửa
                        </button>
                        <button
                            type="button"
                            className="btn btn-success btn-icon-text"
                        >
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>
        )
    }
}

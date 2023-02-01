import React, { Component } from 'react'

export default class Control extends Component {
    constructor (props) {
        super();
        this.state = {
            searchData: ''
        }
    }
    handleSearch = (e) => {
        e.preventDefault();
        // Lấy dữ liệu nhập vào ô search
        // Truyền props từ App xuống control
        this.props.handleSearchProps(this.state.searchData);
    }
    handleChange = (e) => {
        this.setState({searchData: e.target.value});
    }

    handleAddStudent = () => {
        this.props.handleAddStudent(true, "ADD")
    }
    render() {
        return (
            <div>
                <div className="card-header">
                    <div className="row">
                        <div className="col-3">
                            <button onClick={this.handleAddStudent} type="button" className="btn btn-primary btn-icon-text">
                                Thêm mới sinh viên
                            </button>
                        </div>
                        <div className="col-6">
                            <form className="search-form" action="#">
                                <i className="icon-search" />
                                <input
                                    type="search"
                                    className="form-control"
                                    placeholder="Search Here"
                                    title="Search here"
                                    onChange={this.handleChange}
                                    name="search"
                                    id='search'
                                />
                                <button className="btn btn-primary btn-icon-text" onClick={this.handleSearch}>
                                    Tìm kiếm
                                </button>
                            </form>
                        </div>
                        <div className="col-3 d-flex align-items-center">
                            <select className="form-control">
                                <option value="">Sắp xếp</option>
                                <option value="">ABC def</option>
                                <option value="">ABC def</option>
                                <option value="">ABC def</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

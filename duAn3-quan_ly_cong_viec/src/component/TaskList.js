import React, { Component } from 'react';
import TaskItem from './taskItem';

class TaskList extends Component {

    constructor(props){
        super(props);
        this.state = {
            filterName : '',
            filterStatus : -1 //all: -1, active: 1, deactive: 0
        };
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName, 
            name === 'filterStatus' ? value : this.state.filterStatus
        );
        this.setState({
            [name] : value
        });
    }
    render(){
        var tasks = this.props.tasks;
        var {filterName, filterStatus } = this.state;
        return(
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Trạng Thái</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input type="text"
                                            className="form-control"
                                            name="filterName"
                                            onChange={ this.onChange }
                                            value={ filterName } />
                        </td>
                        <td>
                            <select className="form-control"
                                            name="filterStatus"
                                            onChange={ this.onChange }
                                            value={ filterStatus }>
                                <option value={-1}>Tất Cả</option>
                                <option value={0}>Ẩn</option>
                                <option value={1}>Kích Hoạt</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    { tasks.map((task, index) => <TaskItem 
                                                       key={index}
                                                       task={task}
                                                       index={index + 1}
                                                       onUpdateStatus={ this.props.onUpdateStatus }
                                                       onDeleteTask={ this.props.onDeleteTask }
                                                       onSelectedItem = { this.props.onSelectedItem }
                                                    />)
                    }
                    
                </tbody>
            </table>
        )
    }
}
export default TaskList;
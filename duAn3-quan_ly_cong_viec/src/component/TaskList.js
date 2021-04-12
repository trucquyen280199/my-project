import React, { useState } from 'react';
import TaskItem from './taskItem';

function TaskList(props) {
    const [states, setSates] = useState({
        filterName : '',
        filterStatus : -1
    })
    const tasks = useState(props.tasks);

    const onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        props.onFilter(name === 'filterName' ? value : states.filterName, name === 'filterStatus' ? value : states.filterStatus);
        setSates({
            [name] : value
        });
    }
    
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
                                        onChange={ onChange }
                                        value={ states.filerName } />
                    </td>
                    <td>
                        <select className="form-control"
                                        name="filterStatus"
                                        onChange={ onChange }
                                        value={ states.filerName }>
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
                                                   onUpdateStatus={ props.onUpdateStatus }
                                                   onDeleteTask={ props.onDeleteTask }
                                                   onSelectedItem = { props.onSelectedItem }
                                                />)
                }
                
            </tbody>
        </table>
    )
}
export default TaskList;
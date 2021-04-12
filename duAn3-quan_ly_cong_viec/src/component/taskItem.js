import React from 'react';

function TaskItem(props) {

    function showStatusElement(){
        return (
            <span
                className={ props.task.status ? 'label label-danger' : 'label label-info' } 
                onClick={ onUpdateStatus }
            >{ props.task.status === true ? 'Kích Hoạt' : 'Ẩn' }</span>
        );
    }

    const onUpdateStatus = () => {
        props.onUpdateStatus(props.task.id);
    }

    const onDeleteItem = () => {
        props.onDeleteTask(props.task.id);
    }

    const onSelectedItem = () => {
        props.onSelectedItem(props.task);
    }

    return (
        <tr>
            <td>{props.index}</td>
            <td>{props.task.name }</td>
            <td className="text-center">
                { showStatusElement() }
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning" onClick={ onSelectedItem} >
                    Sửa
                </button>
                &nbsp;
                <button type="button" className="btn btn-danger" onClick={onDeleteItem}>
                    Xóa
                </button>
            </td>
        </tr>
    );
}

export default TaskItem;
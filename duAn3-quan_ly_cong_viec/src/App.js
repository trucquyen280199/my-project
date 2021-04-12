import React, { Component, useState } from 'react';
import './App.css';
import TaskForm from './component/taskForm';
import TaskControl from './component/Control';
import TaskList from './component/TaskList';

function App(props) {
    let [taskList, setTaskList] = useState([]);
    let [states, setStates] = useState({
        isDisplayForm : false,
        keyword : '',
        filterName : '',
        filterStatus : '-1',
        itemEditing : null,
        sortBy : 'name',
        sortValue : 1
    })

    const findIndex = (id) =>{
        var tasks = taskList;
        var result = -1;
        tasks.forEach((task, index) => {
            if(task.id === id){
                result = index;
            }
        });
        return result;
    }

    function componentDidMount() {
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            setTaskList(tasks)
        }
    }

    function hideAddItem(){
        setStates({
            isDisplayForm: false
        });
    }

    const showAddItem = () =>{
        setStates({
            isDisplayForm: true
        });
    }

    function s4() {
        return  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    function createID() {
        return s4() + s4();
    }

    const onSubmit = (data) => {
        var tasks = taskList;
        data.id = createID();
        tasks.push(data);
        setTaskList(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    const onUpdateStatus = (id) => { 
        var tasks = taskList;
        var index = findIndex(id);
        tasks[index].status = !tasks[index].status;
        setTaskList(tasks);
        // props.onUpdateStatus(props.task.id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    const onDeleteTask = (id) => {
        var tasks = taskList;
        var index = findIndex(id);
        tasks.splice(index, 1);
        setTaskList(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        onExitForm();
    }

    const onSearch = (keyword) => {
        setStates({
            keyword : keyword
        });
    }

    const onFilter = (filterName, filterStatus) => {
        setStates({
            filterName : filterName,
            filterStatus : filterStatus
        });
    }

    const onSelectedItem = (item) => {
        setStates({
            itemEditing : item,
            isDisplayForm : true
        })
    }

    const onSort = (sortBy, sortValue) => {
        setStates({
            sortBy : sortBy,
            sortValue : sortValue
        })
    }

    const onToggleForm = () => {
        if(states.itemEditing !== null){
            setStates({
                itemEditing : null
            });
        }else{
            setStates({
                isDisplayForm : !states.isDisplayForm
            });
        }
    }

    const onExitForm = () =>{
        setStates({
            isDisplayForm : false,
            itemEditing : null
        });
    }
    
    const onSave = (data) => {
        var tasks = taskList;
        data.status = data.status === 'true' ? true : false;
        if(data.id === ''){
            data.id = createID();
            tasks.push(data);
        }else{
            var index = findIndex(data.id);
            tasks[index] = data;
        }
        setTaskList(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    return (
        <div className="App">
            <div className="container"> 
                <div className="text-center"> 
                    <h1>Quản Lý Công Việc</h1> 
                </div> 
                <div className="row border py-3"> 
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"> 
                        { states.isDisplayForm ? <TaskForm onSave={onSave}
                                hideAddItem={ hideAddItem } 
                                onSubmit={ onSubmit } 
                                onExitForm={onExitForm}
                                
                                /> : ''} 
                    </div> 
                    <div className={ states.isDisplayForm ? "col-8 text-left": "col-12 text-left" }> 
                        <button type="button" className="btn btn-primary" onClick={ onToggleForm } > 
                            + Thêm Công Việc 
                        </button> 
                        <TaskControl
                            onSearch={onSearch}
                            onSort={onSort}
                            sortBy={states.sortBy}
                            sortValue={states.sortValue}
                        />
                        <TaskList tasks={taskList}
                            onUpdateStatus={ onUpdateStatus }
                            onDeleteTask={ onDeleteTask }
                            filterName={states.filterName}
                            filterStatus={states.filterStatus}
                            onFilter={onFilter}
                            onSelectedItem={onSelectedItem} /> 
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
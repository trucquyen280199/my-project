import React, { Component, useState } from 'react';
import './App.css';
import TaskForm from './component/taskForm';
import TaskControl from './component/Control';
import TaskList from './component/TaskList';

class App extends Component {
 
    constructor(props){
        super(props);
        this.state={
            tasks: [],
            isDisplayForm : false,
            itemEditing : null,
            filter: {
                name: '',
                status:  -1
            },
            keyword : '',
            sortBy: 'name',
            sortValue: 1,
        };
    }

    componentDidMount() {
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks : tasks
            });
        }
    }

    hideAddItem(){
        this.setState({
            isDisplayForm: false
        });
    }

    showAddItem = () =>{
        this.setState({
            isDisplayForm: true
        });
    }

    s4() {
        return  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    findIndex = (id) =>{
        var { tasks } = this.state;
        var result = -1;
        tasks.forEach((task, index) => {
            if(task.id === id){
                result = index;
            }
        });
        return result;
    }

    createID() {
        return this.s4() + this.s4();
    }

    onSubmit = (data) => {
        var tasks = this.state.tasks;
        data.id = this.createID();
        tasks.push(data);
        this.setState({tasks: tasks})
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onUpdateStatus = (id) => { 
        var tasks = this.state.tasks;
        var index = this.findIndex(id);
        tasks[index].status = !tasks[index].status;
        this.setState({
            tasks : tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    onDeleteTask = (id) => {
        var tasks = this.state.tasks;
        var index = this.findIndex(id);
        tasks.splice(index, 1);
        this.setState({tasks: tasks})
        localStorage.setItem('tasks', JSON.stringify(tasks));
        this.onExitForm();
    }

    onSearch = (keyword) => {
        this.setState({
            keyword : keyword
        });
    }

    onFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus, 10);
        this.setState({
            filter: {
                name: filterName.toLowerCase(),
                status: filterStatus
            }
        });
    }

    onSelectedItem = (item) => {
        this.setState({
            itemEditing : item,
            isDisplayForm : true
        })
    }

    onSort = (sortBy, sortValue) => {
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        })
    }

    onToggleForm = () => {
        if(this.state.itemEditing !== null){
            this.setState({
                itemEditing : null
            });
        }else{
            this.setState({
                isDisplayForm : !this.state.isDisplayForm
            });
        }
    }

    onExitForm = () =>{
        this.setState({
            isDisplayForm : false,
            itemEditing : null
        });
    }
    
    onSave = (data) => {
        var tasks = this.state.tasks;
        data.status = data.status === 'true' ? true : false;
        if(data.id === ''){
            data.id = this.createID();
            tasks.push(data);
        }else{
            var index = this.findIndex(data.id);
            tasks[index] = data;
        }
        this.setState({tasks: tasks})
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    render(){
        var {
            tasks,
            isDisplayForm,
            keyword, 
            filter,
            itemEditing,
            sortBy,
            sortValue,

        } = this.state;

        if(filter){
            if(filter.name){
                tasks = tasks.filter((task)=>{
                    return task.name.toLowerCase().indexOf(filter.name) !== -1;
                });
            }
            // if(filter.status){
                tasks = tasks.filter((task)=>{
                    if(filter.status === -1){
                        return task;
                    } else{
                        return task.status === (filter.status === 1 ? true : false)
                    }
                });
            // }
        }

        if(keyword){
            tasks = tasks.filter((task)=>{
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            })
        }

        if(sortBy === 'name'){
            tasks.sort((a, b)=>{
                if(a.name > b.name){
                    return sortValue;
                } else if(a.name < b.name){
                    return -sortValue;
                } else{
                    return 0;
                }
            })
        } else {
            tasks.sort((a, b)=>{
                if(a.status > b.status){
                    return -sortValue;
                } else if(a.status < b.status){
                    return sortValue;
                } else{
                    return 0;
                }
            })
        }

        var elmForm = isDisplayForm === true ? <TaskForm
                                                    onSave={ this.onSave }
                                                    onExitForm={ this.onExitForm }
                                                    itemEditing={ itemEditing }
                                                    /> : '';
        return (
            <div className="App">
                <div className="container"> 
                    <div className="text-center"> 
                        <h1>Quản Lý Công Việc</h1> 
                    </div> 
                    <div className="row border py-3"> 
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"> 
                            { elmForm } 
                        </div> 
                        <div className={ this.state.isDisplayForm ? "col-8 text-left": "col-12 text-left" }> 
                            <button type="button" className="btn btn-primary" onClick={ this.onToggleForm } > 
                                + Thêm Công Việc 
                            </button> 
                            <TaskControl
                                onSearch={ this.onSearch }
                                onSort={ this.onSort }
                                sortBy={ sortBy }
                                sortValue={ sortValue }
                            />
                            <TaskList tasks={ tasks }
                                onUpdateStatus={ this.onUpdateStatus }
                                onDeleteTask={ this.onDeleteTask }
                                // filterName={ filterName }
                                // filterStatus={ filterStatus }
                                onFilter={ this.onFilter }
                                onSelectedItem={ this.onSelectedItem } /> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}
export default App;
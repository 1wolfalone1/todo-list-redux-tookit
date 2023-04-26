import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction } from '../../redux/action';
import { v4 } from 'uuid';
import { useEffect, useState } from 'react';
import { searchTextSelector, todoListSelector } from '../../redux/selectors';

export default function TodoList() {
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');
  const dispatch = useDispatch();
  const todoList = useSelector(todoListSelector);
  const searchText = useSelector(searchTextSelector)

  const [todoListFilter, setTodoListFilter] = useState([]);
  
  useEffect(() => {
    setTodoListFilter(todoList.filter((todo) => {
      return todo.name.includes(searchText);
    }))
  }, [searchText, todoList])
  const handleAddButtonClick = () => {
    dispatch(addTodoAction({
      id: v4(),
      name: todoName,
      priority: priority,
      completed: false,
    }))

    setTodoName('');
    setPriority('Medium');
  }
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  }
  
  const handlePriorityChange = (value) => {
    console.log(value);
    setPriority(value);
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoListFilter.map(todo => <Todo name={todo.name} priority={todo.priority}/>)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange}/>
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}

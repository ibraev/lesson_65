import React, {Component} from 'react';
import {Button, Col, Container, Form, FormGroup, Input, Label} from "reactstrap";
import './NewPages.css'
import axios from '../../axios'

class NewPages extends Component {

    state = {
        title: '',
        content: '',
        page: 'about'
    };

    componentDidMount() {
        axios.get('pages/' + this.state.page + '.json').then(response => {
            this.setState({
                title: response.data.title,
                content: response.data.content
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.page !== prevState.page) {
            axios.get('pages/' + this.state.page + '.json').then(response => {
                this.setState({
                    title: response.data.title,
                    content: response.data.content
                })
            })
        }
    }

    valueChanged = (event) => {
        const page = event.target.name;
        this.setState({[page]: event.target.value});
    };

    inputChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    submitHandler = event => {
        event.preventDefault(event);

        let change = {
            title: this.state.title,
            content: this.state.content
        };

        axios.put('pages/' + this.state.page + '.json', change).then(() => {
        })
    };

    render() {
        return (
            <Container className='container'>
                <h1>Edit Page</h1>
                <Form onSubmit={this.submitHandler}>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Select</Label>
                        <Col sm={10}>
                            <Input type="select"
                                   name="page"
                                   id="page"
                                   onChange={this.valueChanged}
                            >
                                <option value='about'>
                                    about
                                </option>
                                <option value='home'>
                                    home
                                </option>
                                <option value='contacts'>
                                    contacts
                                </option>
                                <option value='divisions'>
                                    contacts
                                </option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="text" sm={2}>Title</Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                name="name"
                                id="title"
                                onChange={this.inputChangeHandler}
                                value={this.state.title}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="text" sm={2}>Content</Label>
                        <Col sm={10}>
                            <Input
                                type="textarea"
                                name='content'
                                value={this.state.content}
                                onChange={this.inputChangeHandler}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={10}>
                            <Button className=' btn btn-primary' type='submit'>Save</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}

export default NewPages;
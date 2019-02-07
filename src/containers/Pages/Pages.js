import React, {Component} from 'react';
import axios from '../../axios'

class Pages extends Component {
    state = {
        pages: null
    };

    componentDidMount() {
        axios.get('pages/' + this.props.match.params.name + '.json').then(response => {
            this.setState({pages: response.data})
            console.log(this.state.pages)
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.name !== prevProps.match.params.name) {
            axios.get('pages/' + this.props.match.params.name + '.json').then(response => {
                this.setState({pages: response.data})
                ;
            })
        }
    }
    render() {
        if (!this.state.pages) {
            return (
                <div>Loading...</div>
            )
        }
        return (
            <div className='container'>
                <h1>{this.state.pages.title}</h1>
                <h3>{this.state.pages.content}</h3>
            </div>
        );
    }
}

export default Pages;
import React from 'react';
import PropTypes from 'prop-types';
import config from './config';

export default class Translate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            submittedValue: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        fetch(`${config.translationEndpoint}/translate`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            mode: 'cors',
            body: JSON.stringify({
                from: this.props.from,
                to: this.props.to,
                text: this.state.value
            })
          })
            .then(res => res.json())
            .then(
            (data) => {
                console.log(data.result);
                this.setState({submittedValue: data.result});
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                isLoaded: true,
                error
                });
            }
        )

        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <div>Translating from {this.props.from} to {this.props.to}</div>
                <form onSubmit={this.handleSubmit}>
                    
                    <label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <textarea value={this.state.submittedValue} name="asd" id="" cols="30" rows="10">
                    
                </textarea>
            </div>
        );
    }
}


Translate.propTypes = {
    from: PropTypes.string,
    to: PropTypes.string
  };
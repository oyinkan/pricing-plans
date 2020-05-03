import React, { Component } from 'react';
import axios from 'axios';

export default class Pricing extends Component {
    constructor(props){
        super(props);
        this.state = {
            subscribe: false,
            pricingLists: []
        }
    }

    componentDidMount() {
        axios.get(`http://www.mocky.io/v2/5eaef3c433000041329f428f`)
        .then(res => {
            const pricingLists = res.data;
            this.setState({ pricingLists });
        })
    }

    chooseItem = () => {
        this.setState( state => ({ subscribe: !state.subscribe }));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    { this.state.pricingLists.map((list) => 
                        <div className="col-md-4" key={list.id}>
                            <div className="card mb-4 box-shadow">
                                <div className="card-header">
                                    <h4 className="my-0 font-weight-normal">{list.name}</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">${list.price}
                                        <small className="text-muted">/ mo</small>
                                    </h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>{list.users}</li>
                                        <li>{list.storage}</li>
                                        <li>{list.support}</li>
                                        <li>{list.help}</li>
                                    </ul>
                                    <button 
                                        type="button" 
                                        className="btn btn-lg btn-block btn-outline-primary"
                                        id={list.id}
                                        onClick={this.chooseItem}
                                    >
                                        {this.state.subscribe ? 'Subscribed' : 'Choose'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
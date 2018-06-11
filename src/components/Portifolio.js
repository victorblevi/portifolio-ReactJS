import React, { Component } from 'react';
import { Layout } from 'react-mdl';


export default class Portifolio extends Component {
    render() {
        return (
            <section className="background2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            One of three columns
                             </div>
                        <p> One of three columns</p>
                        <div className="col-sm">
                            <p> One of three columns</p>
                        </div>
                        <div className="col-sm">
                            One of three columns
                            <p> One of three columns</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
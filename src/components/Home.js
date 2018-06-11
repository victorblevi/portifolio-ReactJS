import React, { Component } from 'react';
import { } from 'react-mdl';
import Typist from 'react-typist';



export default class Home extends Component {
    render() {
        return (

            <section className="background">

                <div className="container">
                    <div className="column full adjust-center">
                        
                        <Typist avgTypingSpeed={400} startDelay={1000} onTypingDone={this.onHeaderTyped}>
                            <div className="text-landing">
                                <span className="color-aquagreen">&lt;h1&gt;</span>
                                <span className="color-white">Victor Levi </span>
                                <span className="color-aquagreen">&lt;h1&gt;</span>
                            </div>
                            <br />
                            <br />
                            <div className="text-lading-2">
                                <Typist.Delay ms={1000} />
                                <span className="color-aquagreen">&lt;p&gt;</span>
                                <span className="color-white">Web Devolo</span>
                                <Typist.Backspace count={3} delay={800} />
                                <span className="color-white">eloper</span>
                                <span className="color-aquagreen">&lt;/p&gt;</span>
                            </div>
                        </Typist>
                    </div>
                </div>
            </section>
        );
    }

}
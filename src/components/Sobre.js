import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';


export default class Sobre extends Component {
    render() {
        return (

            <section className="background2 ">
                <div className="container">
                    <div className="column full" id="sobre">
                        <h1><span className="color-aquagreen2">Sobre</span></h1>
                        <p>&lt;<span className="color-aquagreen2">p</span>&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia fringilla dui, ut lacinia eros pharetra nec. Mauris aliquet, massa vel tincidunt molestie, nibh ipsum rhoncus tellus, id cursus nulla massa sit amet est. Donec dictum in metus sit amet pretium. Cras condimentum et metus sit amet cursus. Nunc vitae sollicitudin tortor. Duis commodo egestas tempus. Etiam dignissim posuere turpis nec
                            sollicitudin. &lt;/<span className="color-aquagreen2">p</span>&gt;</p>
                    </div>
                </div>
            </section>
        )
    }
}
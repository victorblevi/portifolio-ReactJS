import React, { Component } from 'react'
import Home from './Home';
import Contato from './Contato';
import Sobre from './Sobre';
import Portifolio from './Portifolio';
import Curriculo from './Curriculo';
import { Layout, Drawer, Navigation, Content } from 'react-mdl';
import { NavLink, HashRouter, Route, Switch } from 'react-router-dom';

export default class PortifolioMain extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <div style={{ height: '100vh', position: 'relative' }}>
            <Layout fixedDrawer>
              <Drawer className="menu">
                <div id="info" align="center">
                  <p className="color-aquagreen animated rubberBand"> Victor Levi </p>
                  <picture>
                    <div className="picture"></div>
                  </picture>
                </div>
                <div id="nav-links">
                  <div className="menu-with-button">
                    <NavLink to="/"><p className="menu-buttons color-aquagreen">Home</p></NavLink>
                    <NavLink to="/sobre"><p className="menu-buttons color-aquagreen">Sobre</p></NavLink>
                    <NavLink to="/portifolio" ><p className="menu-buttons color-aquagreen">Portifólio</p></NavLink>
                    <NavLink to="/curriculo" ><p className="menu-buttons color-aquagreen">Currículo</p></NavLink>
                    <NavLink to="/contato" ><p className="menu-buttons color-aquagreen">Contato</p></NavLink>
                  </div>
                </div>
              </Drawer>
              <Content />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/portifolio" component={Portifolio} />
                <Route path="/curriculo" component={Curriculo} />
                <Route path="/contato" component={Contato} />
              </Switch>
            </Layout>
          </div>
        </div>
      </HashRouter>
    )
  }
}
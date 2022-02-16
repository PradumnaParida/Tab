import React, { Component } from "react";
import Tab from "./components/Tab";
import TabNav from "./components/TabNav";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "FAVORITES",
    };
  }
  setSelected = (tab) => {
    this.setState({ selected: tab });
  };
  render() {
    return (
      <div className="App  mt-5">
        <TabNav
          tabs={["FAVORITES", "RECENTS"]}
          selected={this.state.selected}
          setSelected={this.setSelected}
        >
          <Tab isSelected={this.state.selected === "FAVORITES"}>
            <p>
              <img alt="" src="images/love.png" />
            </p>
            <h1>Favorite Your Recipe</h1>
            <p>
              Click the heart on the Recipe <br /> screen and it will
              automatically <br /> appear in your Favorites.
            </p>
          </Tab>
          <Tab isSelected={this.state.selected === "RECENTS"}>
            <p>
              <img alt="" src="images/clock.png" />
            </p>
            <h1>Start Logging Meals</h1>
            <p>
              The meal recommendations you've <br /> logged most recently will
              apper <br /> here.
            </p>
          </Tab>
        </TabNav>
      </div>
    );
  }
}

export default App;

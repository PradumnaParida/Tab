import React, { Component } from "react";

class TabNav extends Component {
  render() {
    return (
      <div style={{ width: "30%" }}>
        <ul className="nav nav-tabs">
          {this.props.tabs.map((tab) => {
            const active = tab === this.props.selected ? "active" : "";

            return (
              <li
                style={{
                  fontSize: "2vw",
                  padding: "0.1vw",
                  marginInline: "2.3vw",
                }}
                key={tab}
              >
                <a
                  href="#"
                  className={active}
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  onClick={() => this.props.setSelected(tab)}
                >
                  {tab}
                </a>
              </li>
            );
          })}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default TabNav;

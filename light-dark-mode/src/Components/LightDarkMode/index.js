import React, { Component } from "react";
import styles from "./index.module.css";

class LightDarkMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLightMode: false,
    };
  }

  handleChangeMode = () => {
    this.setState((prevState) => ({ isLightMode: !prevState.isLightMode }));
  };

  render() {
    const { isLightMode } = this.state;
    return (
      <div className={styles.mainContainer}>
        {!isLightMode && (
          <div className={styles.darkModeCon}>
            <h1>Click To Change Mode</h1>
            <button onClick={this.handleChangeMode}>Light Mode</button>
          </div>
        )}
        {isLightMode && (
          <div className={styles.lightModeCon}>
            <h1>Click To Change Mode</h1>
            <button onClick={this.handleChangeMode}>Dark Mode</button>
          </div>
        )}
      </div>
    );
  }
}

export default LightDarkMode;

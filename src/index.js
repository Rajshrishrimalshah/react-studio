import React, { Component } from "react";
import ReactDOM from "react-dom";
import Source from "./Source";
import Target from "./Target";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import "./index.css";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      droppedItem: [],
      preview: false,
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(item) {
    this.setState({
      droppedItem: [...this.state.droppedItem, item],
    });
  }

  render() {
    console.log("droppedItem *********", this.state);

    const { preview, droppedItem } = this.state;

    return (
      <>
        <div className="App">
          <div className="source">
            <Source name="Button" id="Button" />
            <Source name="TextField" id="TextField" />
          </div>
          <div className="destination">
            <Target droppedItem={this.state.droppedItem} onDrop={this.onDrop} />
          </div>
        </div>
        <div>
          <button
            onClick={() =>
              this.setState({
                preview: !preview,
              })
            }
          >
            preview
          </button>

          {preview && droppedItem}
        </div>
      </>
    );
  }
}
const ContainerWrapper = DragDropContext(HTML5Backend)(Container);
const rootElement = document.getElementById("root");
ReactDOM.render(<ContainerWrapper />, rootElement);

import React from "react";

/// ---------- Functional component -----------

// const FunctionButton = () => {
// children ?
//   return <button>My Functional button</button>;
// };
// export default FunctionButton;

/// -------- Class component ------------------

class ClassButton extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return <button>My Class button: {this.props.name}</button>;
  }
}
export default ClassButton;

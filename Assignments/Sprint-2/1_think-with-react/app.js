//get the react-container div//
// const container = document.getElementById('react-container');

// ReactDOM.render("Hello! Welcome to React", container);

//React.CreateElement(Components,Properties,Children)//

// // Functional component
// const Container = () => {
//     return React.createElement('div', null, `Hey ProGrads! Welcome to React Learning`,
//         React.createElement(`div`, null, `Let's rock and roll`)
//     );
// }
// // Render the Container
// const container = document.getElementById('react-container');
// ReactDOM.render(React.createElement(Container), container);

// //Class Component//
// class ReactContainer extends React.Component {
//     // constructor - to initialize the state

//     // render method to render the react dom
//     render() {
//         return React.createElement(`div`, null, `Hey ProGrads`,
//             React.createElement(`div`, null, `Let's rock and roll`)
//         );
//     }

// }
// const container = document.getElementById('react-container');
// ReactDOM.render(React.createElement(ReactContainer), container);

class ReactContainer extends React.Component {
  render() {
    return (
      <div>
        Hey ProGrads!
        <div> Let's Rock and Roll</div>
      </div>
    );
  }
}

const container = document.getElementById("react-container");
//directly pass the component to render//
ReactDOM.render(<ReactContainer />, container);

const Notification = (props) => {
  //  Write your code here.
  const { className, img, text } = props;

  return <div className={`card ${className}`}>{className}</div>;
};

const element = (
  //  Write your code here.
  <div className="Notification-container">
    <h1 className="heading">Notifications</h1>
    <div className="card-container">
      <div className="card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          className="img"
        />
        <p className="text">Information message</p>
      </div>
      <div className="card1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          className="img"
        />
        <p className="text">Success message</p>
      </div>
      <div className="card2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          className="img"
        />
        <p className="text">Warning message</p>
      </div>
      <div className="card3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          className="img"
        />
        <p className="text">Error message</p>
      </div>
    </div>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));

import React from 'react';
import '../styles/App.css';

const ChangeServings = ({addServings, removeServings}) => (
    <div>
      <button
          className="glyphicon glyphicon-minus-sign btn btn-danger rnd-btn"
          style={{margin: "0 5px 40px"}}
          title="Add servings"
          onClick={() => removeServings()}
      />
      <button
          className="glyphicon glyphicon-plus-sign btn btn-primary rnd-btn"
          style={{margin: "0 5px 40px"}}
          title="Remove servings"
          onClick={() => addServings()}
      />
    </div>
);

export default ChangeServings;

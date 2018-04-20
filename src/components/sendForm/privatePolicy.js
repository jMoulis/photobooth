import React from 'react';

const PrivatePolicy = ({ onClick }) => (
  <div className="policy-menu">
    <span onClick={onClick} onKeyPress={onClick}>
      <img src="/img/close.png" alt="close" />
    </span>
    <h2>Privacy Policy</h2>
    <p>
      aperta pericula proiectare Cum haec taliaque sollicitas eius aures everberarent
      expositas semper eius modi rumoribus et patentes, varia animo tum miscente
      consilia, tandem id ut optimum factu elegit
    </p>
    <p>
      aperta pericula proiectare Cum haec taliaque sollicitas eius aures everberarent
      expositas semper eius modi rumoribus et patentes, varia animo tum miscente consilia,
      tandem id ut optimum factu elegit:
    </p>
  </div>
);

export default PrivatePolicy;
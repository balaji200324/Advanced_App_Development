import React from 'react';

const Payment = ({ payment }) => {
  return (
    <div>
      <p>
        {payment.date} - {payment.description} - ${payment.amount}
      </p>
    </div>
  );
};

export default Payment;
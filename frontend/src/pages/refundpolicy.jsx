import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="refund-policy mt-8">
      <h2 className="text-xl font-bold mb-4">Refund Policy</h2>
      <p className="text-gray-600 mb-4">
        We understand that sometimes circumstances may change, and you may need to request a refund for your British English Certification course. We offer a transparent refund policy to ensure a fair and hassle-free experience.
      </p>

      <h3 className="text-lg font-medium mb-2">Eligibility for Refunds</h3>
      <ul className="list-disc pl-4 mb-4">
        <li className="text-gray-600">
          *Full Refunds:* You are eligible for a full refund within [Number] days of your course purchase. To request a full refund, please contact our support team at [Your Email Address] within this timeframe.
        </li>
        <li className="text-gray-600">
          *Partial Refunds:* We may offer partial refunds on a case-by-case basis for extenuating circumstances that prevent you from completing the course. Please contact our support team to discuss your situation.
        </li>
      </ul>

      <h3 className="text-lg font-medium mb-2">Exceptions to Refunds</h3>
      <ul className="list-disc pl-4 mb-4">
        <li className="text-gray-600">
          Courses that have been accessed for more than [Number]% of the content are not eligible for a refund.
        </li>
        <li className="text-gray-600">
          Refund requests submitted after the [Number]-day full refund guarantee period will not be granted.
        </li>
      </ul>

      <p className="text-gray-600 mb-4">
        *Important Note:* Refunds will be processed to the original payment method used for the purchase. Please allow [Number] business days for the refund to reflect in your account.
      </p>

      <p className="text-gray-600">
        We encourage you to carefully review the course content and syllabus before enrolling. If you have any questions or concerns, please don't hesitate to contact our support team at [Your Email Address].
      </p>
    </div>
  );
};

export default RefundPolicy;
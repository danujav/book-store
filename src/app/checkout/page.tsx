"use client";

import BillingForm from "./BillingForm";
import OrderSummary from "./OrderSummary";

export default function Checkout() {
  return (
    <div className="m-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <BillingForm />
        </div>
        <div className="flex-1">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

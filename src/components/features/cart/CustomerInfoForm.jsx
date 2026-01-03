import { useState } from "react";
import { Phone, User } from "lucide-react";

/**
 * Customer Info Form Component
 * Collects customer name and mobile number before checkout
 */
export default function CustomerInfoForm({ onSubmit, onCancel }) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(mobile.replace(/\D/g, ""))) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({
        name: name.trim(),
        mobile: mobile.replace(/\D/g, ""), // Remove non-digits
      });
    }
  };

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Only digits
    if (value.length <= 10) {
      setMobile(value);
      if (errors.mobile) {
        setErrors({ ...errors, mobile: "" });
      }
    }
  };

  return (
    <div className="flex-shrink-0 bg-white border-t border-gray-100 p-6 space-y-4">
      <div>
        <h3 className="text-lg font-black text-gray-900 mb-2">Customer Information</h3>
        <p className="text-sm text-gray-600">Please provide your details to proceed with the order</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <User className="w-4 h-4 inline mr-1" />
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) {
                setErrors({ ...errors, name: "" });
              }
            }}
            placeholder="Enter your full name"
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-[#88f59b]/50 ${
              errors.name
                ? "border-red-300 bg-red-50"
                : "border-gray-200 bg-gray-50 focus:border-[#88f59b]"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <Phone className="w-4 h-4 inline mr-1" />
            Mobile Number
          </label>
          <input
            type="tel"
            value={mobile}
            onChange={handleMobileChange}
            placeholder="Enter 10-digit mobile number"
            maxLength={10}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-[#88f59b]/50 ${
              errors.mobile
                ? "border-red-300 bg-red-50"
                : "border-gray-200 bg-gray-50 focus:border-[#88f59b]"
            }`}
          />
          {errors.mobile && (
            <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
          )}
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-[#88f59b] to-[#5fd672] text-slate-900 font-bold hover:scale-105 transition-transform shadow-md"
          >
            Continue to Order
          </button>
        </div>
      </form>
    </div>
  );
}







import { useState } from "react";

export default function ChangePasswordForm() {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.oldPassword) {
      newErrors.oldPassword = "Current password is required";
    }

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your new password";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Password changed successfully", formData);
      // Reset form
      setFormData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      alert("Password changed successfully!");
    } catch (error) {
      console.error("Error changing password:", error);
      setErrors({
        submit: "Failed to change password. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 max-w-3xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-semibold mb-6">Change password</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              name="oldPassword"
              placeholder="Old password"
              value={formData.oldPassword}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.oldPassword ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.oldPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.oldPassword}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="newPassword"
              placeholder="New password"
              value={formData.newPassword}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.newPassword ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {errors.submit && (
            <p className="text-red-500 text-sm">{errors.submit}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 uppercase text-sm font-medium"
          >
            {isSubmitting ? "Changing Password..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
}

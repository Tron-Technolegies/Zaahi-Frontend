import React from "react";
import { useChangePassword } from "../hooks/user/useCurrentUser";

export default function ChangePassword() {
  const { isPending, mutateAsync } = useChangePassword();
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-xl my-5">Change Password</h3>
      <form
        className="flex flex-col gap-3"
        onSubmit={async (e) => {
          e.preventDefault();
          const formdata = new FormData(e.target);
          const data = Object.fromEntries(formdata);
          await mutateAsync(data);
          e.target.reset();
        }}
      >
        <label className="text-xs font-medium">Current Password</label>
        <input
          type="password"
          placeholder="Enter Current Password"
          name="currentPassword"
          required
          className="p-2 border border-[#E8E8E8] outline-none"
        />
        <label className="text-xs font-medium">New Password</label>
        <input
          type="password"
          placeholder="Enter New Password"
          name="newPassword"
          required
          className="p-2 border border-[#E8E8E8] outline-none"
        />
        <label className="text-xs font-medium">Confirm New Password</label>
        <input
          type="password"
          placeholder="Confirm new Password"
          name="confirm"
          required
          className="p-2 border border-[#E8E8E8] outline-none"
        />
        <button
          disabled={isPending}
          className="p-2 bg-[#D47784] text-white mt-2 w-fit px-4"
        >
          {isPending ? "Updating..." : "Change Password"}
        </button>
      </form>
    </div>
  );
}

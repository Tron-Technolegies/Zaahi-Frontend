import { useSignUp } from "../hooks/auth/useSignin";

const SignUp = () => {
  const { isPending, mutateAsync } = useSignUp();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl w-96 p-8">
        <div className="flex justify-center mb-6">
          <img src="/Logo/Logo.png" alt="logo" className="h-16" />
        </div>

        <h2 className="text-2xl font-semibold text-center text-[#D47784] mb-6">Sign Up</h2>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formdata = new FormData(e.target);
            const data = Object.fromEntries(formdata);
            await mutateAsync(data);
          }}
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full border border-[#D47784] rounded-md p-3 mb-4 focus:outline-none focus:ring-1 focus:ring-[#D47784]"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-[#D47784] rounded-md p-3 mb-4 focus:outline-none focus:ring-1 focus:ring-[#D47784]"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-[#D47784] rounded-md p-3 mb-4 focus:outline-none focus:ring-1 focus:ring-[#D47784]"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full border border-[#D47784] rounded-md p-3 mb-5 focus:outline-none focus:ring-1 focus:ring-[#D47784]"
            required
          />

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-[#D47784] text-white py-3 rounded-md hover:opacity-90 transition"
          >
            {isPending ? "Signing Up..." : "Sign Up"}
          </button>

          <div className="flex justify-between mt-4 text-sm">
            <a href="/signin" className="text-[#D47784] hover:underline">
              Already have an account?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

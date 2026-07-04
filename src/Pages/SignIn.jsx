import { useSignin } from "../hooks/auth/useSignin";
import { Link } from "react-router-dom";
import SEO from "../Components/SEO";

const SignIn = () => {
  const { isPending, mutateAsync } = useSignin();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SEO 
        title="Sign In"
        description="Sign in to your Zaahi Designs account to manage your profile, view orders, and track your wishlist."
        canonical="https://zaahidesigns.com/signin"
      />
      <div className="bg-white shadow-xl rounded-xl w-96 p-8">
        <div className="flex justify-center mb-6">
          <img src="/Logo/Logo.png" alt="logo" className="h-16" />
        </div>

        <h1 className="text-2xl font-semibold text-center text-[#D47784] mb-6">
          Sign In
        </h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formdata = new FormData(e.target);
            const data = Object.fromEntries(formdata);
            await mutateAsync(data);
          }}
        >
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
            className="w-full border border-[#D47784] rounded-md p-3 mb-5 focus:outline-none focus:ring-1 focus:ring-[#D47784]"
            required
          />

          <button
            className="w-full bg-[#D47784] text-white py-3 rounded-md hover:opacity-90 transition"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Logging In..." : "Login"}
          </button>

          <div className="flex justify-between mt-4 text-sm">
            <Link to="/signup" className="text-[#D47784] hover:underline">
              Sign Up
            </Link>

            <a href="#" className="text-[#D47784] hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

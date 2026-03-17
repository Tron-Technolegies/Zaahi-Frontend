import Loading from "../Components/Loading";
import { useCurrentUser, useUpdateUser } from "../hooks/user/useCurrentUser";

const MyProfile = () => {
  const { isError, isLoading, data, error } = useCurrentUser();
  const { isPending, mutateAsync } = useUpdateUser();

  async function handleSubmit(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata);
    await mutateAsync(data);
  }
  return isLoading ? (
    <Loading />
  ) : isError ? (
    <p>{error.message}</p>
  ) : (
    <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
      <h3 className="text-xl my-5">Update Profile</h3>
      <label className="text-xs">Username</label>
      <input
        type="text"
        placeholder="Enter Username"
        className="p-2 border border-[#E8E8E8] outline-none w-full"
        name="username"
        defaultValue={data.username}
        required
      />
      <label className="text-xs">Email</label>
      <input
        type="email"
        placeholder="Enter Email"
        className="p-2 border border-[#E8E8E8] outline-none w-full"
        name="email"
        defaultValue={data.email}
        required
      />
      <label className="text-xs">Phone</label>
      <input
        type="text"
        placeholder="+91 123456987"
        name="phoneNumber"
        defaultValue={data.phoneNumber}
        required
        className="p-2 border border-[#E8E8E8] outline-none w-full"
      />
      <button
        type="submit"
        disabled={isPending}
        className="p-2 bg-[#D47784] text-white self-start mt-5 px-4"
      >
        {isPending ? "Updating.." : "Update"}
      </button>
    </form>
  );
};

export default MyProfile;

import Link from "next/link";

const UserActionButton = () => {
  return (
    <div>
      <Link href="/api/auth/signin" className="">
        Sign In
      </Link>
    </div>
  );
};

export default UserActionButton;

"use client";

import { getSession } from "@/actions";
import Link from "next/link";
import { useEffect, useState } from "react";
import LogoutForm from "./logoutForm";

const DropDownProfile = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
    };

    fetchSession();
  }, []);

  return (
    <ul className="flex flex-col gap-2 p-4">
      <Link
        href="/profile"
        className="text-black hover:bg-gray-100 p-2 rounded-md cursor-pointer"
      >
        Profile
      </Link>
      <li className="text-black hover:bg-gray-100 p-2 rounded-md cursor-pointer">
        <LogoutForm />
      </li>
    </ul>
  );
};

export default DropDownProfile;

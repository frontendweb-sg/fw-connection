import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useRedirect() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    const role = session?.user.role;

    if (role === "admin") {
      router.replace("/admin");
    }

    if (role === "user") {
      router.replace("/user");
    }
  }, [session, router]);
}

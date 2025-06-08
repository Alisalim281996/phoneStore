import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import { Links } from "@/utils/links";
const Logo = () => {
  return (
    <Button asChild className="rounded-md">
      <Link href={Links.HOME.href}>MPS </Link>
    </Button>
  );
};

export default Logo;

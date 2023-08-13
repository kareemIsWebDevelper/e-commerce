import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import cart from "@/assets/images/cart.svg";
import Link from "next/link";

export const NavBarCart = () => {
  return (
    <>
      <Link
        href={"/cart"}
        className="flex place-items-center no-underline text-black"
      >
        <IconButton edge="end" sx={{ color: "black" }}>
          <Typography
            variant="body2"
            className="absolute -left-2 -top-1 text-white bg-red-500 w-5 h-5 rounded-full text-xs grid place-items-center"
          >
            {"2"}
          </Typography>
          <Image src={cart} alt="cart" className="w-6 h-6" />
        </IconButton>
        <Typography variant="h6" className="hidden md:flex md:ml-2">
          Cart
        </Typography>
      </Link>
    </>
  );
};

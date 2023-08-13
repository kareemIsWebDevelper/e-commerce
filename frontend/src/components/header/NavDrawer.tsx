import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import Link from "next/link";
import { NavLinks } from "./NavLinks";

export const NavDrawer = () => {
  const { navLinks, isAdmin } = NavLinks();

  return (
    <List>
      {navLinks.map((link) =>
        (!isAdmin && link.path === "/admin") || isAdmin === null ? null : (
          <Link
            key={link.id}
            href={link.path}
            className="no-underline text-black"
          >
            <ListItemButton>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItemButton>
          </Link>
        ),
      )}
    </List>
  );
};

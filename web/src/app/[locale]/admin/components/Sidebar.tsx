"use client";

import { useTranslations } from "next-intl";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconPeople from "@mui/icons-material/People";
import IconPoll from "@mui/icons-material/Poll";
import IconBusiness from "@mui/icons-material/Business";
import { Link } from "@/lib/modules/navigation";

export function Sidebar() {
  const t = useTranslations();

  return (
    <Drawer variant="persistent" open>
      <List>
        <ListItemButton LinkComponent={Link} href="/admin/members">
          <ListItemIcon>
            <IconPeople />
          </ListItemIcon>
          <ListItemText primary={t("admin.dropdown.items.panelmembers")} />
        </ListItemButton>
        <ListItemButton LinkComponent={Link} href="/admin/panels">
          <ListItemIcon>
            <IconPoll />
          </ListItemIcon>
          <ListItemText primary={t("admin.dropdown.items.panels")} />
        </ListItemButton>
        <ListItemButton LinkComponent={Link} href="/admin/organisations">
          <ListItemIcon>
            <IconBusiness />
          </ListItemIcon>
          <ListItemText primary={t("admin.dropdown.items.organisations")} />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * Ticket  : EEMS-34
 * File    : NavigationItem.tsx
 * Description:
 * Reusable sidebar navigation item.
 * -----------------------------------------------------------------------------
 */

import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import type { NavigationItem as NavigationItemType } from "../types/navigation.types";

interface NavigationItemProps {
  item: NavigationItemType;
  collapsed: boolean;
  onClick?: () => void;
}

const NavigationItem = ({
  item,
  collapsed,
  onClick,
}: NavigationItemProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = location.pathname === item.path;

  const Icon = item.icon;

  const handleClick = () => {
    navigate(item.path);

    if (onClick) {
      onClick();
    }
  };

  return (
    <ListItemButton
      selected={isActive}
      onClick={handleClick}
      sx={{
        borderRadius: 2,
        mx: 1,
        mb: 0.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 40,
          color: isActive
            ? "primary.main"
            : "text.secondary",
        }}
      >
        <Icon />
      </ListItemIcon>

      {!collapsed && (
        <ListItemText
          primary={item.label}
          slotProps={{
            primary: {
              sx: {
                fontSize: 14,
                fontWeight: isActive ? 600 : 500,
              },
            },
          }}
        />
      )}
    </ListItemButton>
  );
};

export default NavigationItem;
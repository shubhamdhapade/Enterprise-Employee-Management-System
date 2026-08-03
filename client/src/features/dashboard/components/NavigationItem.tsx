/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard Navigation
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
  Tooltip,
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
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === item.path;

  const handleClick = () => {
    if (item.disabled) {
      return;
    }

    navigate(item.path);

    onClick?.();
  };

  const button = (
    <ListItemButton
      selected={isActive}
      onClick={handleClick}
      disabled={item.disabled}
      sx={{
        borderRadius: 2,
        mb: 0.5,
        mx: 1,

        "&.Mui-selected": {
          backgroundColor: "primary.main",
          color: "primary.contrastText",

          "& .MuiListItemIcon-root": {
            color: "inherit",
          },
        },

        "&:hover": {
          borderRadius: 2,
        },
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: collapsed ? 0 : 40,
          justifyContent: "center",
          color: isActive ? "inherit" : "text.primary",
        }}
      >
        {item.icon}
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

  if (collapsed) {
    return (
      <Tooltip
        title={item.label}
        placement="right"
      >
        {button}
      </Tooltip>
    );
  }

  return button;
};

export default NavigationItem;
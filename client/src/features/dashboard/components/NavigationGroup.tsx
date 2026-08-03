/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard Navigation
 * Ticket  : EEMS-34
 * File    : NavigationGroup.tsx
 * Description:
 * Reusable navigation group supporting nested menu items.
 * -----------------------------------------------------------------------------
 */

import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import NavigationItem from "./NavigationItem";

import type { NavigationItem as NavigationItemType } from "../types/navigation.types";

interface NavigationGroupProps {
  item: NavigationItemType;
  collapsed: boolean;
  expanded: boolean;
  onToggle: (id: string) => void;
  onItemClick?: () => void;
}

const NavigationGroup = ({
  item,
  collapsed,
  expanded,
  onToggle,
  onItemClick,
}: NavigationGroupProps) => {
  const groupButton = (
    <ListItemButton
      onClick={() => onToggle(item.id)}
      sx={{
        borderRadius: 2,
        mb: 0.5,
        mx: 1,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: collapsed ? 0 : 40,
          justifyContent: "center",
        }}
      >
        {item.icon}
      </ListItemIcon>

      {!collapsed && (
        <>
          <ListItemText
            primary={item.label}
            slotProps={{
              primary: {
                sx: {
                  fontSize: 14,
                  fontWeight: 500,
                },
              },
            }}
          />

          {expanded ? (
            <ExpandLessIcon />
          ) : (
            <ExpandMoreIcon />
          )}
        </>
      )}
    </ListItemButton>
  );

  return (
    <>
      {collapsed ? (
        <Tooltip
          title={item.label}
          placement="right"
        >
          {groupButton}
        </Tooltip>
      ) : (
        groupButton
      )}

      {!collapsed && (
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
        >
          <List
            component="div"
            disablePadding
          >
            {item.children?.map((child) => (
              <NavigationItem
                key={child.id}
                item={child}
                collapsed={false}
                onClick={onItemClick}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default NavigationGroup;
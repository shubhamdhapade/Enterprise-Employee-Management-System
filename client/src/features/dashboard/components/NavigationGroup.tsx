/**
 * -----------------------------------------------------------------------------
 * Feature : Dashboard
 * Ticket  : EEMS-34
 * File    : NavigationGroup.tsx
 * Description:
 * Reusable expandable navigation group.
 * -----------------------------------------------------------------------------
 */

import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import NavigationItem from "./NavigationItem";

import type { NavigationItem as NavigationItemType } from "../types/navigation.types";

interface NavigationGroupProps {
  item: NavigationItemType;
  collapsed: boolean;
  expanded: boolean;
  onToggle: () => void;
  onItemClick?: () => void;
}

const NavigationGroup = ({
  item,
  collapsed,
  expanded,
  onToggle,
  onItemClick,
}: NavigationGroupProps) => {
  const Icon = item.icon;

  return (
    <>
      <ListItemButton
        onClick={onToggle}
        sx={{
          borderRadius: 2,
          mx: 1,
          mb: 0.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 40,
            color: "text.secondary",
          }}
        >
          <Icon />
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
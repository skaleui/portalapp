import { 
  Columns,
  Cart,
  CartPlus,
  CheckCircle,
  People,
  Building,
  House,
  Person,
  Coin,
} from "@styled-icons/bootstrap";

export type MenuOption = {
  name: string,
  icon: React.ComponentType,
  url: string,
  subItems?: MenuOption[],
}

const MENU_OPTIONS: MenuOption[] = [
  {
    name: "Dashboard",
    icon: Columns,
    url: "/",
  },
  {
    name: "Orders",
    icon: Cart,
    url: "/orders",
    subItems: [
      {
        name: "New",
        icon: CartPlus,
        url: "/new-orders"
      },
      {
        name: "Completed",
        icon: CheckCircle,
        url: "/completed-orders"

      },
    ],
  },
  {
    name: "Customers",
    icon: People,
    url: "/customers",
    subItems: [
      {
        name: "Corporate",
        icon: Building,
        url: "/corporate",
      },
      {
        name: "SMB",
        icon: House,
        url: "/smb",
        subItems: [
          {
            name: "Retail",
            icon: Person,
            url: "/retail"
          },
        ],
      },
    ],
  },
  {
    name: "Inventory",
    icon: Coin,
    url: "/inventory",
  }
];

export type MenuItem = {
  name: string,
  icon: React.ComponentType,
  url: string,
  id: string,
  depth: number,
  subItems?: MenuItem[],
}

function makeMenuLevel(options: MenuOption[], depth=0): MenuItem[] {
  return options.map( (option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
    depth,
    subItems: 
      option.subItems && option.subItems.length > 0
      ? makeMenuLevel(option.subItems, depth + 1)
      : undefined,
  }));
}

export const MENU_ITEMS: MenuItem[] = makeMenuLevel(MENU_OPTIONS);

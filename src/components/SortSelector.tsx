import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useAnimeQueryStore from "../store";

const SortSelector = () => {
  const sortOrders = [
    { value: "score", label: "Score" },
    { value: "scored_by", label: "Most scored" },
    { value: "favorites", label: "Favorites" },
  ];

  const setSortOrder = useAnimeQueryStore((s) => s.setSortOrder);
  const sortOrder = useAnimeQueryStore((s) => s.animeQuery.sortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Score"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => setSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

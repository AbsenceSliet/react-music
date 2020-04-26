import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { get } from "lodash";
import CustomIcon from "@/components/CustomIcon";
import SearchInput from "@/components/SearchInput";
import { setSearchActive, setSearchValue } from "@/store/modules/search/action";
import "./index.scss";
export default () => {
  const searchRouteMatch = useRouteMatch("/search");
  const homeRouteMatch = useRouteMatch("/");
  const isSearchView = get(searchRouteMatch, "isExact");
  const isHomeView = get(homeRouteMatch, "isExact");
  const active = useSelector((state) => state.search.active);
  const value = useSelector((state) => state.search.value);
  const dispatch = useDispatch();
  const focusHandle = () => {
    if (active === false) {
      dispatch(setSearchActive(true));
    }
  };
  const chaneHandle = (value) => {
    dispatch(setSearchValue(value));
  };
  return (
    <div className="Header">
      {isHomeView && <CustomIcon type="maikefeng" />}
      <SearchInput
        placeholder="搜索"
        value={value}
        className={active ? "" : "center"}
        searchFocus={focusHandle}
        searchchange={chaneHandle}
      />
      {isHomeView && active && <span>取消</span>}
    </div>
  );
};
import React, { useEffect, useState } from "react";
import {
  TabContent,
  TabContentData,
  TabHeader,
  TabItem,
  TabWrapper,
} from "./Tab.styles";
import { startCase } from "lodash";
import { useNavigate } from "react-router";
import Card from "../../Components/Card/Card";

const Tab = () => {
  const [tabItem, setTabItem] = useState("card");
  const [activeTab, setActiveTab] = useState("card");
  const navigate = useNavigate();
  const tabList = ["card", "about", "contact", "portfolio"];

  const handleTabValue = (e, index, item) => {
    setTabItem(e.target.getAttribute("value"));
    setActiveTab(item);
    navigate(`/tab/${item}`);
  };

  // console.log(activeTab);

  useEffect(() => {}, []);

  return (
    <TabWrapper>
      <TabHeader>
        {tabList.map((item, index) => (
          <TabItem
            className={activeTab === item ? "active mb-5" : "mb-10"}
            key={index}
            value={item}
            onClick={(e) => handleTabValue(e, index, item)}
          >
            {startCase(item)}
          </TabItem>
        ))}
      </TabHeader>
      <TabContent>
        <TabContentData>
          {tabItem === "card" && <Card />}
          {tabItem === "about" && <>Tab 22 Content</>}
          {tabItem === "contact" && <>Tab 33 Content</>}
          {tabItem === "portfolio" && <>Tab 44 Content</>}
        </TabContentData>
      </TabContent>
    </TabWrapper>
  );
};

export default Tab;

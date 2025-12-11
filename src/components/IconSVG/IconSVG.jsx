import React from "react";
import ArrowUp from "../../assets/SVG/arrow-up.svg?react";
import BrokenLink from "../../assets/SVG/broken-link.svg?react";
import BusinessAndFinance from "../../assets/SVG/business-and-finance.svg?react";
import CallCenter from "../../assets/SVG/call-center.svg?react";
import Chart from "../../assets/SVG/chart.svg?react";
import Clock from "../../assets/SVG/clock.svg?react";
import Coins from "../../assets/SVG/coins.svg?react";
import Diagram from "../../assets/SVG/diagram.svg?react";
import Door from "../../assets/SVG/door.svg?react";
import FastDelivery from "../../assets/SVG/fast-delivery.svg?react";
import Favorite from "../../assets/SVG/favorite.svg?react";
import GiftCard from "../../assets/SVG/gift-card.svg?react";
import Handshake from "../../assets/SVG/handshake.svg?react";
import Heart from "../../assets/SVG/heart.svg?react";
import HouseDoor from "../../assets/SVG/house-door.svg?react";
import Insurance from "../../assets/SVG/insurance.svg?react";
import Leaves from "../../assets/SVG/leaves.svg?react";
import Lecture from "../../assets/SVG/lecture.svg?react";
import Like from "../../assets/SVG/like.svg?react";
import LogisticsManagement from "../../assets/SVG/logistics-management.svg?react";
import Maple from "../../assets/SVG/maple.svg?react";
import Megaphone from "../../assets/SVG/megaphone.svg?react";
import Microphone from "../../assets/SVG/microphone.svg?react";
import Money from "../../assets/SVG/money.svg?react";
import Note from "../../assets/SVG/note.svg?react";
import Partnership from "../../assets/SVG/partnership.svg?react";
import Payment from "../../assets/SVG/payment.svg?react";
import PerspectiveIcon from "../../assets/SVG/perspective-icon.svg?react";
import PlantLeaf from "../../assets/SVG/plant-leaf.svg?react";
import Profits from "../../assets/SVG/profits.svg?react";
import ProjectManagement from "../../assets/SVG/project-management.svg?react";
import PublicSpeaking from "../../assets/SVG/public-speaking.svg?react";
import Quote from "../../assets/SVG/quote.svg?react";
import Reminder from "../../assets/SVG/reminder.svg?react";
import Remove from "../../assets/SVG/remove.svg?react";
import Retail from "../../assets/SVG/retail.svg?react";
import RightArrow from "../../assets/SVG/right-arrow.svg?react";
import Rise from "../../assets/SVG/rise.svg?react";
import RocketLaunch from "../../assets/SVG/rocket-launch.svg?react";
import Shield from "../../assets/SVG/shield.svg?react";
import SnowedMountains from "../../assets/SVG/snowed-mountains.svg?react";
import Snowflake from "../../assets/SVG/snowflake.svg?react";
import Success from "../../assets/SVG/success.svg?react";
import Thunder from "../../assets/SVG/thunder.svg?react";
import Trend from "../../assets/SVG/trend.svg?react";
import UpArrow from "../../assets/SVG/up-arrow.svg?react";
import UpRight from "../../assets/SVG/up-right.svg?react";
import User from "../../assets/SVG/user.svg?react";
import Voice from "../../assets/SVG/voice.svg?react";
import Warehouse from "../../assets/SVG/warehouse.svg?react";
import WaterDrops from "../../assets/SVG/water-drops.svg?react";
import styles from "./IconSVG.module.css";

const iconMap = {
  "arrow-up": ArrowUp,
  "broken-link": BrokenLink,
  "business-and-finance": BusinessAndFinance,
  "call-center": CallCenter,
  "chart": Chart,
  "clock": Clock,
  "coins": Coins,
  "diagram": Diagram,
  "door": Door,
  "fast-delivery": FastDelivery,
  "favorite": Favorite,
  "gift-card": GiftCard,
  "handshake": Handshake,
  "heart": Heart,
  "house-door": HouseDoor,
  "insurance": Insurance,
  "leaves": Leaves,
  "lecture": Lecture,
  "like": Like,
  "logistics-management": LogisticsManagement,
  "maple": Maple,
  "megaphone": Megaphone,
  "microphone": Microphone,
  "money": Money,
  "note": Note,
  "partnership": Partnership,
  "payment": Payment,
  "perspective-icon": PerspectiveIcon,
  "plant-leaf": PlantLeaf,
  "profits": Profits,
  "project-management": ProjectManagement,
  "public-speaking": PublicSpeaking,
  "quote": Quote,
  "reminder": Reminder,
  "remove": Remove,
  "retail": Retail,
  "right-arrow": RightArrow,
  "rise": Rise,
  "rocket-launch": RocketLaunch,
  "shield": Shield,
  "snowed-mountains": SnowedMountains,
  "snowflake": Snowflake,
  "success": Success,
  "thunder": Thunder,
  "trend": Trend,
  "up-arrow": UpArrow,
  "up-right": UpRight,
  "user": User,
  "voice": Voice,
  "warehouse": Warehouse,
  "water-drops": WaterDrops,
};

function IconSVG({ 
  iconName = "snowed-mountains",
  color = "var(--purple)", 
  width = "80px", 
  height = "80px",
  className = "",
  style = {},
  ...restProps 
}) {
  const dynamicVars = {
    "--icon-color": color,
    "--icon-width": width,
    "--icon-height": height
  };

  const IconComponent = iconMap[iconName];

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found. Available icons:`, Object.keys(iconMap));
    return null;
  }

  return (
    <div 
      className={`${styles["icon-wrapper"]} ${className}`}
      style={{ ...dynamicVars, ...style }}
      {...restProps}
    >
      <IconComponent className={styles["icon"]} />
    </div>
  );
}

export default IconSVG;
import React from "react";
import ReuseablePriorityPage from "../resuablePriorityPage";
import { Priority } from "@/state/api";

type Props = {};

const Urgent = (props: Props) => {
  return <ReuseablePriorityPage priority={Priority.Urgent} />;
};

export default Urgent;

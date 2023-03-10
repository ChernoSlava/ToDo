import React from "react";
import { Loader } from "@components";
import { useSelector } from "react-redux";
import { getLoaderContainerProps } from "@store";

export const LoaderContainer = () => {
  const { isShow } = useSelector(getLoaderContainerProps)
  return isShow && <Loader />
}
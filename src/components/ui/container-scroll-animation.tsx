"use client";
import React from "react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center justify-center relative p-2 md:p-8 lg:p-12 w-full">
      <div className="w-full relative">
        <Header titleComponent={titleComponent} />
        <Card>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  titleComponent,
}: {
  titleComponent: React.ReactNode;
  translate?: any;
}) => {
  return <div className="w-full">{titleComponent}</div>;
};

export const Card = ({
  children,
}: {
  children: React.ReactNode;
  rotate?: any;
  scale?: any;
  translate?: any;
}) => {
  return (
    <div
      style={{
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-7xl lg:max-w-[1360px] mx-auto w-full rounded-none shadow-2xl"
    >
      {children}
    </div>
  );
};

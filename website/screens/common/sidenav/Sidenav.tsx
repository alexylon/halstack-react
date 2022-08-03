import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { DxcFlex, DxcTextInput } from "@dxc-technology/halstack-react";
import { SidenavLink, SidenavSectionTitle } from "./SidenavComponents";
import { LinksSections, LinkDetails } from "../pagesList";
import SidenavLogo from "./SidenavLogo";
import styled from "styled-components";

function SidenavContent() {
  const [filter, setFilter] = useState("");
  const { asPath: currentPath } = useRouter();

  const onFilterInputChange = ({ value }: { value: string }) => {
    setFilter(value);
  };

  return (
    <SidenavContainer>
      <SidenavLogo />
      <DxcTextInput
        placeholder="Search docs"
        value={filter}
        onChange={onFilterInputChange}
        size="fillParent"
        clearable
        margin={{
          top: "small",
          bottom: "small",
          right: "xsmall",
          left: "xsmall",
        }}
      />
      <DxcFlex direction="column" gap="1.5rem">
        {LinksSections.map(({ label, links }, index) => (
          <>
            <LinksList
              key={label}
              title={label}
              links={links}
              filter={filter}
              currentPath={currentPath}
              lastElement={LinksSections.length - 1 === index}
            />
          </>
        ))}
      </DxcFlex>
    </SidenavContainer>
  );
}

type LinksListProps = {
  title: string;
  links: LinkDetails[];
  filter: string;
  currentPath: string;
  lastElement: boolean;
};
function LinksList({
  currentPath,
  title,
  links,
  filter,
  lastElement,
}: LinksListProps) {
  const filteredLinks = links.filter((link) =>
    link.label.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredLinks.length > 0) {
    return (
      <>
        <DxcFlex direction="column" gap="1.5rem">
          <DxcFlex direction="column">
            <SidenavSectionTitle>{title}</SidenavSectionTitle>
            {filteredLinks.map(({ label, path }) => (
              <Link key={`${label}-${path}`} href={path} passHref>
                <SidenavLink
                  selected={
                    currentPath.slice(0, -1) === path ||
                    currentPath.slice(0, -1) === path + "/specifications" ||
                    currentPath.slice(0, -1) === path + "/usage"
                  }
                >
                  {label}
                </SidenavLink>
              </Link>
            ))}
          </DxcFlex>
          {!lastElement && <Separator></Separator>}
        </DxcFlex>
      </>
    );
  }
  return null;
}

const Separator = styled.hr`
  margin: 0px 16px;
  border: 0px;
  border-top: 1px solid #cccccc;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const SidenavContainer = styled.div`
  padding: 2rem 0;
`;

export default SidenavContent;

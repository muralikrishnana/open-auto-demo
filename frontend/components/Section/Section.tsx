import { CSSProperties, FC } from "react";
import classes from "./Section.module.scss";

interface ISectionProps {
  leftSection: React.ReactNode;
  rightSection: React.ReactNode;

  flexDirection?: CSSProperties["flexDirection"];

  leftSectionFlexGrow?: number;
  rightSectionFlexGrow?: number;
}

const Section: FC<ISectionProps> = ({ leftSection, rightSection, leftSectionFlexGrow, rightSectionFlexGrow, flexDirection }) => {
  return (
    <div className={classes.root} style={flexDirection ? { flexDirection } : {}}>
      <div
        className={classes.section}
        style={{
          flex: leftSectionFlexGrow || 1,
        }}
      >
        {leftSection}
      </div>
      <div
        className={classes.section}
        style={{
          flex: rightSectionFlexGrow || 1,
        }}
      >
        {rightSection}
      </div>
    </div>
  );
};

export default Section;

import { RareBadge } from "@/src/ui/components";
import { BagSvg } from "@/src/ui/icons";

import styles from "./RarityStatistics.module.css";

interface RarityStatisticsProps {
  types: RareStatistics;
}

export const RarityStatistics = ({ types }: RarityStatisticsProps) => {
  return (
    <ul className={styles.list}>
      {types.map((type) => (
        <li key={type.rare}>
          <RareBadge
            type={type.rare}
            variant="default"
            text={type.quantity.toString()}
            icon={<BagSvg className={styles.icon} />}
          />
        </li>
      ))}
    </ul>
  );
};

import { RareBadge } from "@/src/ui/components";
import { BagSvg } from "@/src/ui/icons";

import styles from "./RarityStatistics.module.css";
const Data = ["ordinary", "rare", "average", "epic", "legendary", "common"];
export const RarityStatistics = () => {
  return (
    <ul className={styles.list}>
      {Data.map((type) => (
        <li key={type}>
          <RareBadge
            type={type}
            variant="default"
            text="3"
            icon={<BagSvg className={styles.icon} />}
          />
        </li>
      ))}
    </ul>
  );
};

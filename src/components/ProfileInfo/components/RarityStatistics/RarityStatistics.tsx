import { RareBadge } from "@/src/ui/components";
import { BagSvg } from "@/src/ui/icons";

import styles from "./RarityStatistics.module.css";
const Data = [1, 2, 3, 4, 5, 6];
export const RarityStatistics = () => {
  return (
    <ul className={styles.list}>
      {Data.map((id) => (
        <li key={id}>
          <RareBadge
            type="epic"
            variant="default"
            text="3"
            icon={<BagSvg className={styles.icon} />}
          />
        </li>
      ))}
    </ul>
  );
};

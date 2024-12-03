import clsx from "clsx";

import { ItemCard } from "@/src/components/ItemCard/ItemCard";
import { Modal, Typography } from "@/src/ui/components";
import { EnergySvg } from "@/src/ui/icons";
import { STATICS } from "@/src/utils/constants";

import styles from "./AdwardModal.module.css";

type ItemTypes = Partial<ThingTypes>;

interface AdwardModalProps {
  onClose: () => void;
  energe: number;
  item: ItemTypes | null | undefined;
}

export const AdwardModal = ({ onClose, energe, item }: AdwardModalProps) => {
  return (
    <Modal onClick={onClose} title={item ? "Ваша награда" : null}>
      <div className={styles.inner}>
        {Boolean(item) ? (
          <div className={styles.adwar_inner}>
            <ItemCard
              isInfo={false}
              quantity={1}
              image={item?.image ?? STATICS.ADWARD_IMAGE}
              type={item?.type ?? null}
            />
            <div className={styles.content}>
              <Typography variant="title20_bold" tag="h2">
                {item?.title}
              </Typography>
              <p className={styles.desc}>
                {item?.desc?.length ? item.desc : "Описание отсуствует"}
              </p>
            </div>
          </div>
        ) : (
          <div className={styles.empty_conent}>
            <span className={styles.emty_title}>Вам ничего не выпало</span>
            <img
              className={styles.empty_image}
              src={STATICS.ADWARD_BAG}
              alt="adward bag"
            />
          </div>
        )}
      </div>
      <div>
        <div className={styles.row}>
          <Typography tag="h2" variant="text16_regular">
            Вы потеряли:
          </Typography>
          <span className={clsx(styles.row, styles.energy_text)}>
            -{energe}
          </span>
          <span>
            <EnergySvg />
          </span>
        </div>
      </div>
    </Modal>
  );
};

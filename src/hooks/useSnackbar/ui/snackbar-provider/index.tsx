import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import { SnackbarQueue } from "components/ui/snackbar";

export interface ISnackbarProviderProps extends PropsWithChildren {}

export const SnackbarProvider: FC<ISnackbarProviderProps> = ({ children }) => {
  return (
      <div id="snackbar-provider" className={styles.snackbar_provider}>
		{children}
        <div id="snackbar-provider-queue">
          <SnackbarQueue/>
        </div>
      </div>
  );
};

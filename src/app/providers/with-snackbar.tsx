import { SnackbarProvider } from "hooks/useSnackbar";

export const withSnackbar = (component: () => React.ReactNode) => () => {
    return <SnackbarProvider>{component()}</SnackbarProvider>;
  };
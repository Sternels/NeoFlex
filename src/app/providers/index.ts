import compose from "compose-function";
import { withRouter } from "./with-router";
import { WithRedux } from "./with-redux";
import { withSnackbar } from "./with-snackbar";

export const withProviders = compose(WithRedux, withRouter, withSnackbar);
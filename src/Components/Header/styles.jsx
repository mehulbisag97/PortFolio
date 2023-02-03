import { makeStyles } from "@mui/styles";
import Image from "../../assets/images/brandBanner.jpg";
import {Theme} from "../Theme";

export  const useStyles = makeStyles(() => ({
  header: {
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    background: `linear-gradient(to bottom right,#04303140, #00606473),url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  toolbar: {
    backgroundColor:Theme.colors.base1,
    color:Theme.colors.base2,
  }
}));

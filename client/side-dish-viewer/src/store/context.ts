import { createContext } from "react";
import { ApplicationStore } from "./application-store";

export const ApplicationContext = createContext<ApplicationStore>({} as ApplicationStore);

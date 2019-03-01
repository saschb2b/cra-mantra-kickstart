import { createModule } from "@wertarbyte/module-loader";
import routes from "./routes";

export default createModule("dashboard", { routes });

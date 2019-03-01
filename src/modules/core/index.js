import { createModule } from "@wertarbyte/module-loader";
import routes from "./routes";

export default createModule("core", { routes });

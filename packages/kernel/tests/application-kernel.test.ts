import { ApplicationKernel } from "../dist/application/ApplicationKernel.js";
import { ExamplePlugin } from "../../example-plugin/dist/index.js";

const kernel = new ApplicationKernel();

await kernel.boot();

await kernel.load(new ExamplePlugin());

await kernel.start();

await kernel.shutdown();

console.log("✓ ApplicationKernel integration passed");

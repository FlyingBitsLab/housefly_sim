import { Battery } from "types";
import { Validators } from "./validators";

export namespace BatteryValidator {
  export const validate = (
    config: Battery.IConfig
  ): Validators.IValidationResults => {
    const { cells_series_count } = config;
    const result: Validators.IValidationResults = { warning: [], errors: [] };

    if (!cells_series_count) {
      result.errors.push({
        code: "ERROR_BATTERY_VOLTAGE_OUT_OF_RANGE",
        explain: `The minimum voltage of ${Battery.LIPO_VOLTAGE_PER_CELL_V}V is required`,
        sources: ["BATTERY"],
        solutions: ["Check the number of series cells"],
      });
    } else if (cells_series_count === 1) {
      result.warning.push({
        code: "WARNING_BATTERY_VOLTAGE_OUT_OF_RANGE",
        explain: `The minimum provided voltage should be greater than ${Battery.LIPO_VOLTAGE_PER_CELL_V}V`,
        solutions: ["Add more series cells"],
        sources: ["BATTERY"],
      });
    }
    return result;
  };
}
